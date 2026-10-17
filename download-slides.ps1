# ==============================================================================
# Helper Script: Download all 66 Behance Slides to local images/slides/ folder
# Run in PowerShell: powershell -ExecutionPolicy Bypass -File download-slides.ps1
# ==============================================================================

$targetDir = Join-Path $PSScriptRoot "images\slides"
if (-not (Test-Path $targetDir)) {
    New-Item -ItemType Directory -Path $targetDir -Force | Out-Null
    Write-Host "Created folder: $targetDir" -ForegroundColor Green
}

$dataFile = Join-Path $PSScriptRoot "js\portfolio-data.js"
if (-not (Test-Path $dataFile)) {
    Write-Error "Could not find js\portfolio-data.js"
    exit 1
}

$content = Get-Content $dataFile -Raw
$pattern = 'id:\s*(\d+).*?image:\s*"([^"]+)"'
$matches = [regex]::Matches($content, $pattern, [System.Text.RegularExpressions.RegexOptions]::Singleline)

Write-Host "Found $($matches.Count) slides to download..." -ForegroundColor Cyan

$wc = New-Object System.Net.WebClient
$wc.Headers.Add("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64)")

$downloadedCount = 0
foreach ($m in $matches) {
    $slideId = $m.Groups[1].Value
    $url = $m.Groups[2].Value

    # Skip non-http or data URLs
    if (-not $url.StartsWith("http")) { continue }

    $ext = [System.IO.Path]::GetExtension($url)
    if ([string]::IsNullOrWhiteSpace($ext) -or $ext.Length -gt 5) {
        if ($url -match '\.gif') { $ext = ".gif" }
        elseif ($url -match '\.png') { $ext = ".png" }
        elseif ($url -match '\.jpeg|\.jpg') { $ext = ".jpg" }
        elseif ($url -match '\.webp') { $ext = ".webp" }
        else { $ext = ".jpg" }
    }

    $fileName = ("slide-{0:D2}{1}" -f [int]$slideId, $ext)
    $destination = Join-Path $targetDir $fileName

    if (Test-Path $destination) {
        Write-Host "Slide $slideId already exists: $fileName" -ForegroundColor DarkGray
        continue
    }

    try {
        Write-Host "Downloading Slide $slideId from $url ..." -NoNewline
        $wc.DownloadFile($url, $destination)
        Write-Host " OK!" -ForegroundColor Green
        $downloadedCount++
    } catch {
        Write-Host " FAILED: $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host "=========================================================="
Write-Host "Download complete! Total new slides downloaded: $downloadedCount" -ForegroundColor Green
Write-Host "All images are saved in: $targetDir" -ForegroundColor Cyan
Write-Host "=========================================================="
