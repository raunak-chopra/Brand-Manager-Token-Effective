#!/usr/bin/env node

const TOKEN = process.env.LINKEDIN_ACCESS_TOKEN
const BASE_URL = 'https://api.linkedin.com/v2'

if (!TOKEN) {
  console.error(JSON.stringify({ error: 'LINKEDIN_ACCESS_TOKEN environment variable required' }))
  process.exit(1)
}

async function api(method, path, body) {
  const headers = {
    'Authorization': `Bearer ${TOKEN}`,
    'X-RestLi-Protocol-Version': '2.0.0',
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
  'campaigns:create', 'campaigns:update',
])

function requireConfirm() {
  const key = `${cmd}:${sub}`
  if (MUTATING_COMMANDS.has(key) && !args['dry-run'] && !args.confirm) {
    return { error: `Refusing to run mutating command ${key} without --confirm. Use --dry-run to preview.` }
  }
}

const SENSITIVE_KEYS = new Set(['id', 'name', 'account', 'campaignGroup', 'campaigns', 'creative', 'audienceCriteria', 'targeting'])
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
  const confirmationError = requireConfirm()
  if (confirmationError) {
    console.log(JSON.stringify(confirmationError, null, 2))
    process.exit(1)
  }

  switch (cmd) {
    case 'accounts':
      switch (sub) {
        case 'list':
          result = await api('GET', '/adAccountsV2?q=search')
          break
        default:
          result = { error: 'Unknown accounts subcommand. Use: list' }
      }
      break

    case 'campaigns':
      switch (sub) {
        case 'list': {
          if (!args['account-id']) { result = { error: '--account-id required' }; break }
          result = await api('GET', `/adCampaignsV2?q=search&search.account.values[0]=urn:li:sponsoredAccount:${args['account-id']}`)
          break
        }
        case 'create': {
          if (!args['account-id'] || !args.name) { result = { error: '--account-id and --name required' }; break }
          if (!args['campaign-group-id']) { result = { error: '--campaign-group-id required' }; break }
          const body = {
            account: `urn:li:sponsoredAccount:${args['account-id']}`,
            campaignGroup: `urn:li:sponsoredCampaignGroup:${args['campaign-group-id']}`,
            name: args.name,
            type: args.type || 'SPONSORED_UPDATES',
            costType: args['cost-type'] || 'CPC',
            unitCost: {
              amount: parseFloat(args['unit-cost'] || '5.00'),
              currencyCode: 'USD',
            },
            dailyBudget: {
              amount: parseFloat(args['daily-budget'] || '100.00'),
              currencyCode: 'USD',
            },
            status: 'PAUSED',
          }
          result = await api('POST', '/adCampaignsV2', body)
          break
        }
        case 'update': {
          if (!args.id || !args.status) { result = { error: '--id and --status required' }; break }
          result = await api('POST', `/adCampaignsV2/${args.id}`, {
            patch: {
              $set: {
                status: args.status,
              },
            },
          })
          break
        }
        case 'analytics': {
          if (!args.id) { result = { error: '--id required' }; break }
          if (!args['start-year'] || !args['start-month'] || !args['start-day'] || !args['end-year'] || !args['end-month'] || !args['end-day']) {
            result = { error: '--start-year, --start-month, --start-day, --end-year, --end-month, --end-day required' }
            break
          }
          const params = new URLSearchParams({
            q: 'analytics',
            pivot: 'CAMPAIGN',
            'dateRange.start.year': args['start-year'],
            'dateRange.start.month': args['start-month'],
            'dateRange.start.day': args['start-day'],
            'dateRange.end.year': args['end-year'],
            'dateRange.end.month': args['end-month'],
            'dateRange.end.day': args['end-day'],
            campaigns: `urn:li:sponsoredCampaign:${args.id}`,
            fields: 'impressions,clicks,costInLocalCurrency,conversions',
          })
          result = await api('GET', `/adAnalyticsV2?${params}`)
          break
        }
        default:
          result = { error: 'Unknown campaigns subcommand. Use: list, create, update, analytics' }
      }
      break

    case 'creatives':
      switch (sub) {
        case 'list': {
          if (!args['campaign-id']) { result = { error: '--campaign-id required' }; break }
          result = await api('GET', `/adCreativesV2?q=search&search.campaign.values[0]=urn:li:sponsoredCampaign:${args['campaign-id']}`)
          break
        }
        default:
          result = { error: 'Unknown creatives subcommand. Use: list' }
      }
      break

    case 'audiences':
      switch (sub) {
        case 'count': {
          if (!args.targeting) { result = { error: '--targeting required (JSON string)' }; break }
          let targeting
          try {
            targeting = JSON.parse(args.targeting)
          } catch {
            result = { error: 'Invalid JSON for --targeting' }
            break
          }
          result = await api('POST', '/audienceCountsV2', { audienceCriteria: targeting })
          break
        }
        default:
          result = { error: 'Unknown audiences subcommand. Use: count' }
      }
      break

    default:
      result = {
        error: 'Unknown command',
        usage: {
          accounts: 'accounts [list]',
          campaigns: 'campaigns [list|create|update|analytics] [--account-id <id>] [--name <name>] [--type SPONSORED_UPDATES] [--cost-type CPC] [--unit-cost 5.00] [--daily-budget 100.00] [--id <id>] [--status ACTIVE|PAUSED]',
          creatives: 'creatives [list] --campaign-id <id>',
          audiences: 'audiences [count] --targeting <json>',
        },
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
