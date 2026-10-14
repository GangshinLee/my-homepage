$gitExe = "C:\Users\user\AppData\Local\Programs\Git\cmd\git.exe"
if (-not (Test-Path $gitExe)) {
    $gitFromPath = (Get-Command git -ErrorAction SilentlyContinue).Source
    if ($gitFromPath) {
        $gitExe = $gitFromPath
    } else {
        Write-Error "Git executable not found."
        exit 1
    }
}

Write-Host "Using Git at: $gitExe"

# Change directory to repo root
Set-Location "c:\Users\user\Desktop\my_homapage"

# Initialize git repository if not already
if (-not (Test-Path ".git")) {
    & $gitExe init
}

# Configure Git user if not configured
$currentName = & $gitExe config user.name
if (-not $currentName) {
    & $gitExe config user.name "GangshinLee"
}
$currentEmail = & $gitExe config user.email
if (-not $currentEmail) {
    & $gitExe config user.email "gangshinlee@users.noreply.github.com"
}

# Set remote origin
$remoteUrl = "https://github.com/GangshinLee/my-homepage.git"
$existingRemote = & $gitExe remote get-url origin 2>$null
if ($existingRemote) {
    & $gitExe remote set-url origin $remoteUrl
} else {
    & $gitExe remote add origin $remoteUrl
}

# Switch to main branch
& $gitExe branch -M main

# Remove setup scripts from git staging before commit
if (Test-Path "setup_git.ps1") { Remove-Item "setup_git.ps1" -Force -ErrorAction SilentlyContinue }
if (Test-Path "push_to_github.ps1") {
    # We will exclude push_to_github from git tracking if needed or let it be
}

# Add all files
& $gitExe add -A

# Commit
& $gitExe commit -m "Initial commit: Responsive dark-mode portfolio landing page"

# Push to origin main
Write-Host "Pushing to $remoteUrl..."
& $gitExe push -u origin main
