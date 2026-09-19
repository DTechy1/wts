# create_cpanel_bundle.ps1
# Packages the 100% frontend SPA build for cPanel public_html deployment.

$baseDir = "c:\xampp\htdocs\wts"
$buildDir = "$baseDir\cpanel_build"
$distDir = "$baseDir\dist"

Write-Host "[*] Starting packaging for cPanel (Pure Frontend SPA)..." -ForegroundColor Cyan

# 1. Build Vite production assets
Write-Host "[*] Running Vite build..." -ForegroundColor Yellow
npm run build

# 2. Prepare cPanel build directory
if (Test-Path $buildDir) {
    Remove-Item -Path $buildDir -Recurse -Force -ErrorAction SilentlyContinue
}
New-Item -Path $buildDir -ItemType Directory -Force | Out-Null

# 3. Create public_html.zip from dist/
$frontZip = "$buildDir\public_html.zip"
Write-Host "[*] Compressing dist files into $frontZip..." -ForegroundColor Yellow
Compress-Archive -Path "$distDir\*" -DestinationPath $frontZip -Force

Write-Host "[*] Packaging completed successfully!" -ForegroundColor Green
Write-Host "Output file ready for cPanel: $frontZip" -ForegroundColor Green
Write-Host "Simply extract the contents of public_html.zip into your cPanel public_html folder." -ForegroundColor Gray
