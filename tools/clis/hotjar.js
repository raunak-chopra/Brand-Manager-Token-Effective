#!/usr/bin/env node

const CLIENT_ID = process.env.HOTJAR_CLIENT_ID
const CLIENT_SECRET = process.env.HOTJAR_CLIENT_SECRET
const OAUTH_URL = 'https://api.hotjar.io'
const BASE_URL = 'https://api.hotjar.io/v2'

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error(JSON.stringify({ error: 'HOTJAR_CLIENT_ID and HOTJAR_CLIENT_SECRET environment variables required' }))
  process.exit(1)
}

let cachedToken = null

async function getToken() {
  if (cachedToken) return cachedToken
  const res = await fetch(`${OAUTH_URL}/oauth/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=client_credentials&client_id=${encodeURIComponent(CLIENT_ID)}&client_secret=${encodeURIComponent(CLIENT_SECRET)}`,
  })
  const data = await res.json()
  if (!data.access_token) {
    throw new Error(data.error_description || data.error || 'Failed to obtain access token')
  }
  cachedToken = data.access_token
  return cachedToken
}

async function api(method, path) {
  if (args['dry-run']) {
    return { _dry_run: true, method, url: `${BASE_URL}${path}`, headers: { Authorization: '***', 'Content-Type': 'application/json', Accept: 'application/json' } }
  }
  const token = await getToken()
  const res = await fetch(`${BASE_URL}${path}`, {
    method,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
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

const SENSITIVE_KEYS = new Set(['email', 'phone', 'name', 'response', 'answers', 'text', 'recording_url', 'playback_url'])
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
  const siteId = args['site-id']
  const limit = args.limit || '100'
  const cursor = args.cursor

  switch (cmd) {
    case 'sites':
      switch (sub) {
        case 'list':
          result = await api('GET', '/sites')
          break
        default:
          result = { error: 'Unknown sites subcommand. Use: list' }
      }
      break

    case 'surveys':
      if (!siteId) { result = { error: '--site-id required' }; break }
      switch (sub) {
        case 'list':
          result = await api('GET', `/sites/${siteId}/surveys`)
          break
        case 'responses': {
          const surveyId = args['survey-id']
          if (!surveyId) { result = { error: '--survey-id required' }; break }
          const params = new URLSearchParams({ limit })
          if (cursor) params.set('cursor', cursor)
          result = await api('GET', `/sites/${siteId}/surveys/${surveyId}/responses?${params.toString()}`)
          break
        }
        default:
          result = { error: 'Unknown surveys subcommand. Use: list, responses' }
      }
      break

    case 'heatmaps':
      if (!siteId) { result = { error: '--site-id required' }; break }
      switch (sub) {
        case 'list':
          result = await api('GET', `/sites/${siteId}/heatmaps`)
          break
        default:
          result = { error: 'Unknown heatmaps subcommand. Use: list' }
      }
      break

    case 'recordings':
      if (!siteId) { result = { error: '--site-id required' }; break }
      switch (sub) {
        case 'list': {
          const params = new URLSearchParams({ limit })
          if (cursor) params.set('cursor', cursor)
          if (args['date-from']) params.set('date_from', args['date-from'])
          if (args['date-to']) params.set('date_to', args['date-to'])
          result = await api('GET', `/sites/${siteId}/recordings?${params.toString()}`)
          break
        }
        default:
          result = { error: 'Unknown recordings subcommand. Use: list' }
      }
      break

    case 'forms':
      if (!siteId) { result = { error: '--site-id required' }; break }
      switch (sub) {
        case 'list':
          result = await api('GET', `/sites/${siteId}/forms`)
          break
        default:
          result = { error: 'Unknown forms subcommand. Use: list' }
      }
      break

    default:
      result = {
        error: 'Unknown command',
        usage: {
          sites: 'sites list',
          surveys: 'surveys list --site-id <id> | surveys responses --site-id <id> --survey-id <id> [--limit <n>] [--cursor <cursor>]',
          heatmaps: 'heatmaps list --site-id <id>',
          recordings: 'recordings list --site-id <id> [--limit <n>] [--cursor <cursor>] [--date-from <date>] [--date-to <date>]',
          forms: 'forms list --site-id <id>',
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
