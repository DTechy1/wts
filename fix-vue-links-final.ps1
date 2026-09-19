# fix-vue-links-final.ps1
# Fixes all remaining hardcoded /wts/ link: and href: JS data properties in Vue files.

$resourceDir = "c:\xampp\htdocs\wts\resources\js"
$files = Get-ChildItem -Path $resourceDir -Recurse -Filter "*.vue"
$totalReplaced = 0
$B = "window.APP_BASE_PATH||''"

foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    $original = $content

    # Fix JS data object: link: '/wts/PATH' -> link: (window.APP_BASE_PATH||'') + '/PATH'
    $content = [regex]::Replace($content, "link: '/wts/([^']+)'", "link: (window.APP_BASE_PATH||'') + '/$1'")

    # Fix JS data object: href: '/wts/PATH' -> href: (window.APP_BASE_PATH||'') + '/PATH'
    $content = [regex]::Replace($content, "href: '/wts/([^']+)'", "href: (window.APP_BASE_PATH||'') + '/$1'")

    # Fix remaining static HTML: href="/wts/PATH" -> :href="(window.APP_BASE_PATH||'') + '/PATH'"
    $content = [regex]::Replace($content, 'href="/wts/([^"]+)"', ':href="(window.APP_BASE_PATH||'''') + ''/$1''"')

    # Fix breadcrumb data: { name: '...', href: '/wts/...' }
    $content = [regex]::Replace($content, "{ name: '([^']+)', href: '/wts/([^']+)' }", "{ name: '`$1', href: (window.APP_BASE_PATH||'') + '/$2' }")

    if ($content -ne $original) {
        [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
        $totalReplaced++
        Write-Host ("Fixed: " + $file.Name) -ForegroundColor Green
    }
}

Write-Host ("")
Write-Host ("Total files fixed: " + $totalReplaced) -ForegroundColor Cyan
