# Dynamic root detection - Works on ANY drive, folder, or laptop!
$scriptDir = $PSScriptRoot
if ([string]::IsNullOrWhiteSpace($scriptDir) -and $MyInvocation.MyCommand.Definition) {
    $scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
}
if ([string]::IsNullOrWhiteSpace($scriptDir)) {
    $scriptDir = (Get-Location).Path
}

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:8080/")
$listener.Prefixes.Add("http://127.0.0.1:8080/")

# Try to bind to all interfaces or local IP if permissible
try {
    $listener.Start()
} catch {
    Write-Warning "Could not start on default prefixes: $_"
    # Fallback to single prefix
    $listener = New-Object System.Net.HttpListener
    $listener.Prefixes.Add("http://localhost:8080/")
    $listener.Start()
}

$types = @{
    ".html" = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".gif"  = "image/gif"
    ".webp" = "image/webp"
    ".svg"  = "image/svg+xml"
    ".ico"  = "image/x-icon"
}

# Find local network IP address for testing on phones / other laptops
$localIps = @()
try {
    $localIps = [System.Net.Dns]::GetHostAddresses([System.Net.Dns]::GetHostName()) | 
        Where-Object { $_.AddressFamily -eq 'InterNetwork' -and $_.IPAddressToString -ne '127.0.0.1' } | 
        ForEach-Object { $_.IPAddressToString }
} catch {}

Write-Host "==========================================================" -ForegroundColor Green
Write-Host "🚀 GRAPHIC DESIGN PORTFOLIO 2026 - MULTI-DEVICE SERVER" -ForegroundColor Green
Write-Host "Root Directory: $scriptDir" -ForegroundColor Cyan
Write-Host "Local Laptop URL:    http://localhost:8080/" -ForegroundColor Yellow
if ($localIps.Count -gt 0) {
    foreach ($ip in $localIps) {
        Write-Host "Mobile/Other Laptop: http://${ip}:8080/" -ForegroundColor Cyan
    }
}
Write-Host "Press Ctrl + C in this window to stop the server." -ForegroundColor Gray
Write-Host "==========================================================" -ForegroundColor Green

while ($listener.IsListening) {
    try {
        $ctx = $listener.GetContext()
        $req = $ctx.Request
        $res = $ctx.Response

        # Add CORS and no-referrer headers for smooth cross-origin assets
        $res.AddHeader("Access-Control-Allow-Origin", "*")
        $res.AddHeader("Cache-Control", "no-cache, no-store, must-revalidate")

        $path = $req.Url.LocalPath
        if ($path -eq "/" -or [string]::IsNullOrWhiteSpace($path)) { $path = "/index.html" }
        
        $relPath = $path.TrimStart('/').Replace('/', '\')
        $file = Join-Path $scriptDir $relPath

        if (Test-Path $file -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($file).ToLower()
            if ($types.ContainsKey($ext)) { $res.ContentType = $types[$ext] }
            $bytes = [System.IO.File]::ReadAllBytes($file)
            $res.ContentLength64 = $bytes.Length
            $res.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $res.StatusCode = 404
            $errBytes = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $path in $scriptDir")
            $res.OutputStream.Write($errBytes, 0, $errBytes.Length)
        }
        $res.Close()
    } catch {
        Write-Warning "Request error: $_"
    }
}
