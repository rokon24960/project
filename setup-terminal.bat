@echo off
echo Setting up terminal for qodo gen...

REM Set execution policy for PowerShell
powershell -Command "Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser -Force"

REM Enable Windows Developer Mode (optional)
reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\AppModelUnlock" /t REG_DWORD /f /v "AllowDevelopmentWithoutDevLicense" /d "1"

REM Set environment variables
setx NODE_OPTIONS "--max-old-space-size=4096"
setx FORCE_COLOR "1"

echo Terminal configuration complete!
echo Please restart your IDE/editor.
pause