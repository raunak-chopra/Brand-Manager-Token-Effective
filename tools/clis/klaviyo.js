#!/usr/bin/env node

const API_KEY = process.env.KLAVIYO_API_KEY
const BASE_URL = 'https://a.klaviyo.com/api'
const REVISION = '2024-10-15'

if (!API_KEY) {
  console.error(JSON.stringify({ error: 'KLAVIYO_API_KEY environment variable required' }))
  process.exit(1)
}

async function api(method, path, body) {
  const headers = {
    'Authorization': `Klaviyo-API-Key ${API_KEY}`,
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'revision': REVISION,
  }
  if (args['dry-run']) {
    return { _dry_run: true, method, url: `${BASE_URL}${path}`, headers: { ...headers, Authorization: '***' }, body: body || undefined }
  }
  const res = await fetch(`${BASE_URL}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  })
  const text = await res.text()
  try {
    return JSON.parse(text)
  } catch {
    return { status: res.status, body: sanitizeText(text) }
  }
}

function parseArgs(args) {
  const result = { _: [] }
  for (let i = 0; i < args.length; i++) {
    const arg = args[i]
    if (arg.startsWith('--')) {
      const key = arg.slice(2)
      const next = args[i + 1]
      if (next && !next.startsWith('--')) {
        result[key] = next
        i++
      } else {
        result[key] = true
      }
    } else {
      result._.push(arg)
    }
  }
  return result
}

const args = parseArgs(process.argv.slice(2))
const [cmd, sub, ...rest] = args._

const MUTATING_COMMANDS = new Set([
  'profiles:create', 'profiles:update',
  'lists:create', 'lists:delete', 'lists:add-profiles', 'lists:remove-profiles',
  'events:create',
  'flows:update',
])

const SENSITIVE_KEYS = new Set(['email', 'phone_number', 'first_name', 'last_name', 'profile', 'attributes'])
const SENSITIVE_KEY_NAMES = new Set([...SENSITIVE_KEYS].map(key => key.toLowerCase()))
const RAW_OUTPUT_ALLOWED = process.env.ALLOW_RAW_OUTPUT === 'true'

function sanitizeText(value) {
  let output = String(value)
  for (const secret of Object.values(process.env)) {
    if (typeof secret === 'string' && secret.length >= 8) {
      output = output.split(secret).join('[redacted]')
    }
  }
  return output
    .replace(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi, '[redacted-email]')
    .replace(/\b(?:\+?\d[\d\s().-]{7,}\d)\b/g, '[redacted-phone]')
    .replace(/\b(access_token|api_key|apikey|client_secret|refresh_token|authorization|bearer|token|secret)=([^&\s]+)/gi, '$1=[redacted]')
    .replace(/\b(Bearer)\s+[A-Za-z0-9._~+/=-]+/gi, '$1 [redacted]')
    .replace(/(["']?(?:access_token|api_key|apikey|client_secret|refresh_token|authorization|token|secret)["']?\s*[:=]\s*["']?)[^"',\s&<>]+/gi, '$1[redacted]')
}

function sanitizeUrl(value) {
  try {
    const url = new URL(String(value))
    for (const [key, child] of url.searchParams.entries()) {
      const normalizedKey = key.toLowerCase()
      if (SENSITIVE_KEY_NAMES.has(normalizedKey) || /email|phone|token|secret|key|auth|contact|customer|profile|subscriber/.test(normalizedKey) || sanitizeText(child) !== child) {
        url.searchParams.set(key, '[redacted]')
      }
    }
    return url.toString()
  } catch {
    return sanitizeText(value)
  }
}

function requireConfirm() {
  const key = `${cmd}:${sub}`
  if (MUTATING_COMMANDS.has(key) && !args['dry-run'] && !args.confirm) {
    return { error: `Refusing to run mutating command ${key} without --confirm. Use --dry-run to preview.` }
  }
}

function redact(value) {
  if (Array.isArray(value)) return value.map(redact)
  if (typeof value === 'string') return sanitizeText(value)
  if (!value || typeof value !== 'object') return value
  const result = {}
  for (const [key, child] of Object.entries(value)) {
    const normalizedKey = key.toLowerCase()
    result[key] = SENSITIVE_KEY_NAMES.has(normalizedKey) || /token|secret|key|authorization|password/.test(normalizedKey)
      ? '[redacted]'
      : normalizedKey === 'url'
        ? sanitizeUrl(child)
        : redact(child)
  }
  return result
}

async function main() {
  let result
  if (args.raw && !RAW_OUTPUT_ALLOWED) {
    console.error(JSON.stringify({ error: '--raw requires ALLOW_RAW_OUTPUT=true' }))
    process.exit(1)
  }
  const confirmationError = requireConfirm()
  if (confirmationError) {
    console.log(JSON.stringify(confirmationError, null, 2))
    process.exit(1)
  }

  switch (cmd) {
    case 'profiles':
      switch (sub) {
        case 'list': {
          const params = new URLSearchParams()
          if (args.filter) params.set('filter', args.filter)
          if (args.sort) params.set('sort', args.sort)
          if (args['page-size']) params.set('page[size]', args['page-size'])
          if (args['page-cursor']) params.set('page[cursor]', args['page-cursor'])
          const qs = params.toString()
          result = await api('GET', `/profiles/${qs ? '?' + qs : ''}`)
          break
        }
        case 'get': {
          const id = args.id
          if (!id) { result = { error: '--id required' }; break }
          result = await api('GET', `/profiles/${id}/`)
          break
        }
        case 'create': {
          const email = args.email
          if (!email) { result = { error: '--email required' }; break }
          const attributes = { email }
          if (args['first-name']) attributes.first_name = args['first-name']
          if (args['last-name']) attributes.last_name = args['last-name']
          if (args.phone) attributes.phone_number = args.phone
          result = await api('POST', '/profiles/', {
            data: { type: 'profile', attributes }
          })
          break
        }
        case 'update': {
          const id = args.id
          if (!id) { result = { error: '--id required' }; break }
          const attributes = {}
          if (args.email) attributes.email = args.email
          if (args['first-name']) attributes.first_name = args['first-name']
          if (args['last-name']) attributes.last_name = args['last-name']
          if (args.phone) attributes.phone_number = args.phone
          result = await api('PATCH', `/profiles/${id}/`, {
            data: { type: 'profile', id, attributes }
          })
          break
        }
        default:
          result = { error: 'Unknown profiles subcommand. Use: list, get, create, update' }
      }
      break

    case 'lists':
      switch (sub) {
        case 'list': {
          const params = new URLSearchParams()
          if (args['page-size']) params.set('page[size]', args['page-size'])
          const qs = params.toString()
          result = await api('GET', `/lists/${qs ? '?' + qs : ''}`)
          break
        }
        case 'get': {
          const id = args.id
          if (!id) { result = { error: '--id required' }; break }
          result = await api('GET', `/lists/${id}/`)
          break
        }
        case 'create': {
          const name = args.name
          if (!name) { result = { error: '--name required' }; break }
          result = await api('POST', '/lists/', {
            data: { type: 'list', attributes: { name } }
          })
          break
        }
        case 'delete': {
          const id = args.id
          if (!id) { result = { error: '--id required' }; break }
          result = await api('DELETE', `/lists/${id}/`)
          break
        }
        case 'add-profiles': {
          const id = args.id
          if (!id) { result = { error: '--id required (list ID)' }; break }
          const profileIds = args.profiles?.split(',')
          if (!profileIds) { result = { error: '--profiles required (comma-separated profile IDs)' }; break }
          result = await api('POST', `/lists/${id}/relationships/profiles/`, {
            data: profileIds.map(pid => ({ type: 'profile', id: pid }))
          })
          break
        }
        case 'remove-profiles': {
          const id = args.id
          if (!id) { result = { error: '--id required (list ID)' }; break }
          const profileIds = args.profiles?.split(',')
          if (!profileIds) { result = { error: '--profiles required (comma-separated profile IDs)' }; break }
          result = await api('DELETE', `/lists/${id}/relationships/profiles/`, {
            data: profileIds.map(pid => ({ type: 'profile', id: pid }))
          })
          break
        }
        default:
          result = { error: 'Unknown lists subcommand. Use: list, get, create, delete, add-profiles, remove-profiles' }
      }
      break

    case 'events':
      switch (sub) {
        case 'list': {
          const params = new URLSearchParams()
          if (args.filter) params.set('filter', args.filter)
          if (args['page-size']) params.set('page[size]', args['page-size'])
          const qs = params.toString()
          result = await api('GET', `/events/${qs ? '?' + qs : ''}`)
          break
        }
        case 'get': {
          const id = args.id
          if (!id) { result = { error: '--id required' }; break }
          result = await api('GET', `/events/${id}/`)
          break
        }
        case 'create': {
          const metric = args.metric
          const email = args.email
          if (!metric) { result = { error: '--metric required (metric name)' }; break }
          if (!email) { result = { error: '--email required' }; break }
          const properties = {}
          if (args.value) properties.value = Number(args.value)
          if (args.property) {
            const pairs = args.property.split(',')
            for (const pair of pairs) {
              const [k, v] = pair.split(':')
              if (k && v) properties[k] = v
            }
          }
          result = await api('POST', '/events/', {
            data: {
              type: 'event',
              attributes: {
                metric: { data: { type: 'metric', attributes: { name: metric } } },
                profile: { data: { type: 'profile', attributes: { email } } },
                properties,
                time: new Date().toISOString(),
              }
            }
          })
          break
        }
        default:
          result = { error: 'Unknown events subcommand. Use: list, get, create' }
      }
      break

    case 'campaigns':
      switch (sub) {
        case 'list': {
          const params = new URLSearchParams()
          if (args.filter) params.set('filter', args.filter)
          if (args['page-size']) params.set('page[size]', args['page-size'])
          const qs = params.toString()
          result = await api('GET', `/campaigns/${qs ? '?' + qs : ''}`)
          break
        }
        case 'get': {
          const id = args.id
          if (!id) { result = { error: '--id required' }; break }
          result = await api('GET', `/campaigns/${id}/`)
          break
        }
        default:
          result = { error: 'Unknown campaigns subcommand. Use: list, get' }
      }
      break

    case 'flows':
      switch (sub) {
        case 'list': {
          const params = new URLSearchParams()
          if (args.filter) params.set('filter', args.filter)
          if (args['page-size']) params.set('page[size]', args['page-size'])
          const qs = params.toString()
          result = await api('GET', `/flows/${qs ? '?' + qs : ''}`)
          break
        }
        case 'get': {
          const id = args.id
          if (!id) { result = { error: '--id required' }; break }
          result = await api('GET', `/flows/${id}/`)
          break
        }
        case 'update': {
          const id = args.id
          if (!id) { result = { error: '--id required' }; break }
          const attributes = {}
          if (args.status) attributes.status = args.status
          result = await api('PATCH', `/flows/${id}/`, {
            data: { type: 'flow', id, attributes }
          })
          break
        }
        default:
          result = { error: 'Unknown flows subcommand. Use: list, get, update' }
      }
      break

    case 'metrics':
      switch (sub) {
        case 'list': {
          const params = new URLSearchParams()
          if (args['page-size']) params.set('page[size]', args['page-size'])
          const qs = params.toString()
          result = await api('GET', `/metrics/${qs ? '?' + qs : ''}`)
          break
        }
        case 'get': {
          const id = args.id
          if (!id) { result = { error: '--id required' }; break }
          result = await api('GET', `/metrics/${id}/`)
          break
        }
        default:
          result = { error: 'Unknown metrics subcommand. Use: list, get' }
      }
      break

    case 'segments':
      switch (sub) {
        case 'list': {
          const params = new URLSearchParams()
          if (args['page-size']) params.set('page[size]', args['page-size'])
          const qs = params.toString()
          result = await api('GET', `/segments/${qs ? '?' + qs : ''}`)
          break
        }
        case 'get': {
          const id = args.id
          if (!id) { result = { error: '--id required' }; break }
          result = await api('GET', `/segments/${id}/`)
          break
        }
        default:
          result = { error: 'Unknown segments subcommand. Use: list, get' }
      }
      break

    case 'templates':
      switch (sub) {
        case 'list': {
          const params = new URLSearchParams()
          if (args.filter) params.set('filter', args.filter)
          if (args['page-size']) params.set('page[size]', args['page-size'])
          const qs = params.toString()
          result = await api('GET', `/templates/${qs ? '?' + qs : ''}`)
          break
        }
        case 'get': {
          const id = args.id
          if (!id) { result = { error: '--id required' }; break }
          result = await api('GET', `/templates/${id}/`)
          break
        }
        default:
          result = { error: 'Unknown templates subcommand. Use: list, get' }
      }
      break

    default:
      result = {
        error: 'Unknown command',
        usage: {
          profiles: 'profiles [list | get --id <id> | create --email <email> | update --id <id>]',
          lists: 'lists [list | get --id <id> | create --name <name> | delete --id <id> | add-profiles --id <list-id> --profiles <id1,id2> | remove-profiles --id <list-id> --profiles <id1,id2>]',
          events: 'events [list | get --id <id> | create --metric <name> --email <email>]',
          campaigns: 'campaigns [list | get --id <id>]',
          flows: 'flows [list | get --id <id> | update --id <id> --status <status>]',
          metrics: 'metrics [list | get --id <id>]',
          segments: 'segments [list | get --id <id>]',
          templates: 'templates [list | get --id <id>]',
          options: '--filter <filter> --page-size <n> --page-cursor <cursor>',
        }
      }
  }

  if (args.raw && !RAW_OUTPUT_ALLOWED) {
    console.error(JSON.stringify({ error: '--raw requires ALLOW_RAW_OUTPUT=true' }))
    process.exit(1)
  }
  console.log(JSON.stringify(args.raw ? result : redact(result), null, 2))
}

main().catch(err => {
  console.error(JSON.stringify(redact({ error: err.message })))
  process.exit(1)
})
