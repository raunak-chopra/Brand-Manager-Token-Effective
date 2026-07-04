<#
.SYNOPSIS
    Token Tracker CLI for Brand Manager Bot (PowerShell Native)
    Estimates and logs token usage for tasks.
.DESCRIPTION
    Estimates tokens using standard LLM ratio heuristics (approx. 4 characters/token or 1.3 words/token) 
    and updates the central markdown ledger.
.EXAMPLE
    .\tools\clis\token-tracker.ps1 -Task "Create Brief" -Brand "Acme" -InputText "..." -OutputText "..."
.EXAMPLE
    .\tools\clis\token-tracker.ps1 -Task "Direct Entry" -InputTokens 450 -OutputTokens 850
#>

param (
    [string]$Task = "General Task",
    [string]$Brand = "Shared/Global",
    [int]$InputTokens = $null,
    [int]$OutputTokens = $null,
    [string]$InputText = $null,
    [string]$OutputText = $null,
    [string]$InputFile = $null,
    [string]$OutputFile = $null,
    [string]$LedgerPath = $null
)

# Heuristic token estimator (max of charCount/4 and wordCount*1.3)
function Estimate-Tokens {
    param([string]$text)
    if ([string]::IsNullOrEmpty($text)) { return 0 }
    
    $charCount = $text.Length
    $words = $text.Split([char[]]@(' ', "`t", "`n", "`r"), [System.StringSplitOptions]::RemoveEmptyEntries)
    $wordCount = $words.Length
    
    $charEst = [Math]::Ceiling($charCount / 4)
    $wordEst = [Math]::Ceiling($wordCount * 1.3)
    
    if ($charEst -gt $wordEst) { return $charEst } else { return $wordEst }
}

# Resolve input tokens
if ($null -eq $InputTokens) {
    if ($InputFile) {
        if (Test-Path $InputFile) {
            $content = Get-Content -Raw -Path $InputFile -ErrorAction SilentlyContinue
            $InputTokens = Estimate-Tokens $content
        } else {
            Write-Warning "Input file not found: $InputFile"
            $InputTokens = 0
        }
    } elseif ($InputText) {
        $InputTokens = Estimate-Tokens $InputText
    } else {
        $InputTokens = 0
    }
}

# Resolve output tokens
if ($null -eq $OutputTokens) {
    if ($OutputFile) {
        if (Test-Path $OutputFile) {
            $content = Get-Content -Raw -Path $OutputFile -ErrorAction SilentlyContinue
            $OutputTokens = Estimate-Tokens $content
        } else {
            Write-Warning "Output file not found: $OutputFile"
            $OutputTokens = 0
        }
    } elseif ($OutputText) {
        $OutputTokens = Estimate-Tokens $OutputText
    } else {
        $OutputTokens = 0
    }
}

$totalTokens = $InputTokens + $OutputTokens

# Resolve workspace root
if ($PSScriptRoot) {
    $scriptDir = $PSScriptRoot
} elseif ($MyInvocation.MyCommand.Path) {
    $scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
} else {
    $scriptDir = "."
}
$workspaceRoot = [System.IO.Path]::GetFullPath((Join-Path $scriptDir "..\.."))

# Resolve ledger path
if ($null -eq $LedgerPath -or $LedgerPath -eq "") {
    $LedgerPath = Join-Path $workspaceRoot "logs/context-usage/token-ledger.md"
}

# Ensure we have an absolute path
$LedgerPath = [System.IO.Path]::GetFullPath($LedgerPath)

# Path traversal check
if (-not $LedgerPath.StartsWith($workspaceRoot)) {
    Write-Error "Error: Path traversal detected. Ledger path must reside inside the workspace."
    exit 1
}

# Create directory if missing
$ledgerDir = Split-Path $LedgerPath
if (-not (Test-Path $ledgerDir)) {
    New-Item -ItemType Directory -Path $ledgerDir -Force | Out-Null
}

# Concurrency lock acquisition
$lockFilePath = Join-Path $ledgerDir "token-tracker.lock"
$lockAcquired = $false
for ($attempt = 1; $attempt -le 15; $attempt++) {
    try {
        $file = [System.IO.File]::Open($lockFilePath, [System.IO.FileMode]::CreateNew, [System.IO.FileAccess]::Write, [System.IO.FileShare]::None)
        $file.Close()
        $lockAcquired = $true
        break
    } catch {
        Start-Sleep -Milliseconds 100
    }
}

if (-not $lockAcquired) {
    Write-Error "Error: Could not acquire write lock on ledger. Please retry."
    exit 1
}

try {
    $initialTemplate = @"
# Token Ledger

Cumulative metrics of workspace interactions and token usages.

## Cumulative Summary

| Metric | Count |
| --- | --- |
| Cumulative Input Tokens | 0 |
| Cumulative Output Tokens | 0 |
| Cumulative Total Tokens | 0 |
| Total Tasks / Runs | 0 |
| Last Updated | N/A |

## Usage History

| Date | Brand | Task Name / Request | Input Est | Output Est | Total Est |
| --- | --- | --- | --- | --- | --- |
"@

    if (-not (Test-Path $LedgerPath)) {
        Set-Content -Path $LedgerPath -Value $initialTemplate -Encoding utf8
    }

    $ledgerContent = Get-Content -Raw -Path $LedgerPath -Encoding utf8

    # Parse existing cumulative metrics safely
    $inputMatch = [regex]::Match($ledgerContent, "\|\s*Cumulative Input Tokens\s*\|\s*(\d+)\s*\|")
    $outputMatch = [regex]::Match($ledgerContent, "\|\s*Cumulative Output Tokens\s*\|\s*(\d+)\s*\|")
    $totalMatch = [regex]::Match($ledgerContent, "\|\s*Cumulative Total Tokens\s*\|\s*(\d+)\s*\|")
    $runsMatch = [regex]::Match($ledgerContent, "\|\s*Total Tasks / Runs\s*\|\s*(\d+)\s*\|")

    $oldInput = if ($inputMatch.Success) { [int]$inputMatch.Groups[1].Value } else { 0 }
    $oldOutput = if ($outputMatch.Success) { [int]$outputMatch.Groups[1].Value } else { 0 }
    $oldTotal = if ($totalMatch.Success) { [int]$totalMatch.Groups[1].Value } else { 0 }
    $oldRuns = if ($runsMatch.Success) { [int]$runsMatch.Groups[1].Value } else { 0 }

    $newCumulativeInput = $oldInput + $InputTokens
    $newCumulativeOutput = $oldOutput + $OutputTokens
    $newCumulativeTotal = $oldTotal + $totalTokens
    $newTotalTasks = $oldRuns + 1

    $now = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $dateStr = Get-Date -Format "yyyy-MM-dd"

    # Update cumulative tables in markdown content
    $updatedContent = $ledgerContent
    $updatedContent = [regex]::Replace($updatedContent, "\|\s*Cumulative Input Tokens\s*\|\s*(?:\d+|N/A)\s*\|", "| Cumulative Input Tokens | $newCumulativeInput |")
    $updatedContent = [regex]::Replace($updatedContent, "\|\s*Cumulative Output Tokens\s*\|\s*(?:\d+|N/A)\s*\|", "| Cumulative Output Tokens | $newCumulativeOutput |")
    $updatedContent = [regex]::Replace($updatedContent, "\|\s*Cumulative Total Tokens\s*\|\s*(?:\d+|N/A)\s*\|", "| Cumulative Total Tokens | $newCumulativeTotal |")
    $updatedContent = [regex]::Replace($updatedContent, "\|\s*Total Tasks / Runs\s*\|\s*(?:\d+|N\/A)\s*\|", "| Total Tasks / Runs | $newTotalTasks |")
    $updatedContent = [regex]::Replace($updatedContent, "\|\s*Last Updated\s*\|\s*(?:[^\s|]+(?:\s+[^\s|]+)*|N\/A)\s*\|", "| Last Updated | $now |")

    # Append new log row
    $newRow = "| $dateStr | $Brand | $Task | $InputTokens | $OutputTokens | $totalTokens |"
    $updatedContent = $updatedContent.Trim() + "`r`n" + $newRow + "`r`n"

    Set-Content -Path $LedgerPath -Value $updatedContent -Encoding utf8

    # Sync to token-data.json for Dashboard visualization
    $jsonPath = Join-Path $ledgerDir "token-data.json"
    $jsonData = @{
        cumulative = @{
            inputTokens = 0
            outputTokens = 0
            totalTokens = 0
            totalTasks = 0
            lastUpdated = ""
        }
        history = @()
    }

    if (Test-Path $jsonPath) {
        try {
            $jsonContent = Get-Content -Raw -Path $jsonPath -Encoding utf8 -ErrorAction Stop
            $jsonData = ConvertFrom-Json $jsonContent
        } catch {
            Write-Warning "Could not parse token-data.json: $_"
        }
    }

    # Update JSON cumulative values
    $jsonData.cumulative.inputTokens = $newCumulativeInput
    $jsonData.cumulative.outputTokens = $newCumulativeOutput
    $jsonData.cumulative.totalTokens = $newCumulativeTotal
    $jsonData.cumulative.totalTasks = $newTotalTasks
    $jsonData.cumulative.lastUpdated = $now

    # Add entry to history
    $newEntry = [PSCustomObject]@{
        date = $dateStr
        brand = $Brand
        task = $Task
        inputTokens = $InputTokens
        outputTokens = $OutputTokens
        totalTokens = $totalTokens
    }

    if ($jsonData.history -is [Array]) {
        $jsonData.history += $newEntry
    } else {
        $jsonData.history = @($newEntry)
    }

    $updatedJsonContent = ConvertTo-Json $jsonData -Depth 5
    Set-Content -Path $jsonPath -Value $updatedJsonContent -Encoding utf8

    Write-Host ""
    Write-Host "Token tracker logging complete (PowerShell)!" -ForegroundColor Green
    Write-Host "- Task: $Task (Brand: $Brand)"
    Write-Host "- Last Run Tokens: Input: $InputTokens | Output: $OutputTokens | Total: $totalTokens"
    Write-Host "- Workspace Cumulative Totals:"
    Write-Host "  * Input: $newCumulativeInput"
    Write-Host "  * Output: $newCumulativeOutput"
    Write-Host "  * Total: $newCumulativeTotal across $newTotalTasks tasks"
    Write-Host "- Updated: $LedgerPath"
    Write-Host "- Updated: $jsonPath"
    Write-Host ""

} finally {
    # Release Lock
    if (Test-Path $lockFilePath) {
        Remove-Item -Path $lockFilePath -Force -ErrorAction SilentlyContinue
    }
}
