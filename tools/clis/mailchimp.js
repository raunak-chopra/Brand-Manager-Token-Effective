#!/usr/bin/env node

const API_KEY = process.env.MAILCHIMP_API_KEY

if (!API_KEY) {
  console.error(JSON.stringify({ error: 'MAILCHIMP_API_KEY environment variable required' }))
  process.exit(1)
}

const dc = API_KEY.split('-').pop()
const BASE_URL = `https://${dc}.api.mailchimp.com/3.0`

async function api(method, path, body) {
  const auth = 'Basic ' + Buffer.from(`anystring:${API_KEY}`).toString('base64')
  const headers = {
    'Authorization': auth,
    'Content-Type': 'application/json',
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
  'members:add', 'members:update',
  'campaigns:create', 'campaigns:send',
])

const SENSITIVE_KEYS = new Set(['email_address', 'email', 'unique_email_id', 'web_id', 'merge_fields', 'subscriber_hash'])
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
    case 'lists':
      switch (sub) {
        case 'list': {
          const params = new URLSearchParams()
          if (args.count) params.set('count', args.count)
          if (args.offset) params.set('offset', args.offset)
          result = await api('GET', `/lists?${params}`)
          break
        }
        case 'get':
          if (!rest[0]) { result = { error: 'List ID required' }; break }
          result = await api('GET', `/lists/${rest[0]}`)
          break
        default:
          result = { error: 'Unknown lists subcommand. Use: list, get' }
      }
      break

    case 'members':
      switch (sub) {
        case 'list': {
          if (!args['list-id']) {
            result = { error: '--list-id is required for members list' }
            break
          }
          const params = new URLSearchParams()
          if (args.count) params.set('count', args.count)
          if (args.offset) params.set('offset', args.offset)
          if (args.status) params.set('status', args.status)
          result = await api('GET', `/lists/${args['list-id']}/members?${params}`)
          break
        }
        case 'add': {
          if (!rest[0]) { result = { error: 'List ID required' }; break }
          if (!args.email) { result = { error: '--email required' }; break }
          if (!args['list-id']) {
            result = { error: '--list-id is required for members add' }
            break
          }
          const body = {
            email_address: args.email,
            status: args.status || 'subscribed',
          }
          if (args['first-name'] || args['last-name']) {
            body.merge_fields = {}
            if (args['first-name']) body.merge_fields.FNAME = args['first-name']
            if (args['last-name']) body.merge_fields.LNAME = args['last-name']
          }
          if (args.tags) body.tags = args.tags.split(',')
          result = await api('POST', `/lists/${args['list-id']}/members`, body)
          break
        }
        case 'update': {
          if (!args['list-id']) {
            result = { error: '--list-id is required for members update' }
            break
          }
          const subscriberHash = rest[0]
          const body = {}
          if (args.status) body.status = args.status
          if (args['first-name'] || args['last-name']) {
            body.merge_fields = {}
            if (args['first-name']) body.merge_fields.FNAME = args['first-name']
            if (args['last-name']) body.merge_fields.LNAME = args['last-name']
          }
          if (args.tags) body.tags = args.tags.split(',')
          result = await api('PATCH', `/lists/${args['list-id']}/members/${subscriberHash}`, body)
          break
        }
        default:
          result = { error: 'Unknown members subcommand. Use: list, add, update' }
      }
      break

    case 'campaigns':
      switch (sub) {
        case 'list': {
          const params = new URLSearchParams()
          if (args.count) params.set('count', args.count)
          if (args.offset) params.set('offset', args.offset)
          if (args.status) params.set('status', args.status)
          if (args.type) params.set('type', args.type)
          result = await api('GET', `/campaigns?${params}`)
          break
        }
        case 'get':
          if (!rest[0]) { result = { error: 'Campaign ID required' }; break }
          result = await api('GET', `/campaigns/${rest[0]}`)
          break
        case 'create': {
          if (!args['list-id']) { result = { error: '--list-id required' }; break }
          const body = {
            type: args.type || 'regular',
            recipients: {
              list_id: args['list-id'],
            },
            settings: {},
          }
          if (args.subject) body.settings.subject_line = args.subject
          if (args['from-name']) body.settings.from_name = args['from-name']
          if (args['reply-to']) body.settings.reply_to = args['reply-to']
          if (args.title) body.settings.title = args.title
          result = await api('POST', '/campaigns', body)
          break
        }
        case 'send':
          if (!rest[0]) { result = { error: 'Campaign ID required' }; break }
          result = await api('POST', `/campaigns/${rest[0]}/actions/send`)
          break
        default:
          result = { error: 'Unknown campaigns subcommand. Use: list, get, create, send' }
      }
      break

    case 'reports':
      switch (sub) {
        case 'get':
          if (!rest[0]) { result = { error: 'Campaign ID required' }; break }
          result = await api('GET', `/reports/${rest[0]}`)
          break
        default:
          result = { error: 'Unknown reports subcommand. Use: get' }
      }
      break

    case 'automations':
      switch (sub) {
        case 'list': {
          const params = new URLSearchParams()
          if (args.count) params.set('count', args.count)
          if (args.offset) params.set('offset', args.offset)
          result = await api('GET', `/automations?${params}`)
          break
        }
        default:
          result = { error: 'Unknown automations subcommand. Use: list' }
      }
      break

    default:
      result = {
        error: 'Unknown command',
        usage: {
          lists: 'lists [list|get] [id] [--count <n>] [--offset <n>]',
          members: 'members [list|add|update] [subscriber_hash] --list-id <id> [--email <email>] [--status <status>] [--first-name <name>] [--last-name <name>] [--tags <t1,t2>]',
          campaigns: 'campaigns [list|get|create|send] [id] [--list-id <id>] [--subject <subject>] [--from-name <name>] [--reply-to <email>]',
          reports: 'reports get <campaign_id>',
          automations: 'automations list [--count <n>] [--offset <n>]',
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
