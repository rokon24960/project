# PowerShell script to configure terminal for qodo gen
Write-Host "Configuring terminal for qodo gen..." -ForegroundColor Green

# Set execution policy
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser -Force

# Create PowerShell profile if it doesn't exist
if (!(Test-Path $PROFILE)) {
    New-Item -ItemType File -Path $PROFILE -Force
}

# Add configuration to PowerShell profile
$profileContent = @"
# qodo gen terminal configuration
`$env:FORCE_COLOR = "1"
`$env:NODE_OPTIONS = "--max-old-space-size=4096"
`$env:TERM = "xterm-256color"

# Set console encoding
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
[Console]::InputEncoding = [System.Text.Encoding]::UTF8

Write-Host "qodo gen terminal ready!" -ForegroundColor Cyan
"@

Add-Content -Path $PROFILE -Value $profileContent

Write-Host "PowerShell profile updated!" -ForegroundColor Green
Write-Host "Please restart your terminal/IDE." -ForegroundColor Yellow