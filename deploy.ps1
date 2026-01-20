# Deployment script for Windows - Mohammed Aman Baig Portfolio
# Run: .\deploy.ps1

Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "  🚀 PORTFOLIO DEPLOYMENT SCRIPT" -ForegroundColor Green
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Build
Write-Host "📦 Building for production..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Build successful" -ForegroundColor Green
Write-Host ""

# Step 2: Check dist folder
Write-Host "📁 Verifying build output..." -ForegroundColor Yellow
if (-Not (Test-Path "dist")) {
    Write-Host "❌ dist/ folder not found" -ForegroundColor Red
    exit 1
}
$distSize = (Get-ChildItem dist -Recurse | Measure-Object -Property Length -Sum).Sum / 1MB
Write-Host "✅ Build output: $([Math]::Round($distSize, 2)) MB" -ForegroundColor Green
Write-Host ""

# Step 3: Check git
Write-Host "📝 Checking git status..." -ForegroundColor Yellow
if (-Not (Test-Path ".git")) {
    Write-Host "❌ Git not initialized" -ForegroundColor Red
    Write-Host "   Run: git init" -ForegroundColor Yellow
    exit 1
}
Write-Host "✅ Git initialized" -ForegroundColor Green
Write-Host ""

# Step 4: Git operations
Write-Host "💾 Staging changes..." -ForegroundColor Yellow
git add .
Write-Host "✅ Changes staged" -ForegroundColor Green

Write-Host "💬 Committing changes..." -ForegroundColor Yellow
$commitDate = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
git commit -m "Deploy portfolio - $commitDate" -q 2>$null
Write-Host "✅ Changes committed" -ForegroundColor Green
Write-Host ""

# Step 5: Show status
Write-Host "🔍 Git status:" -ForegroundColor Yellow
git status --short

Write-Host ""
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "✅ Build complete and ready!" -ForegroundColor Green
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "📤 NEXT STEP: Push to GitHub" -ForegroundColor Cyan
Write-Host ""
Write-Host "git push origin main" -ForegroundColor White
Write-Host ""

Write-Host "🎯 THEN DEPLOY TO:" -ForegroundColor Cyan
Write-Host ""
Write-Host "✨ OPTION 1: VERCEL (Recommended)" -ForegroundColor Green
Write-Host "   1. Go to https://vercel.com" -ForegroundColor White
Write-Host "   2. Click 'New Project'" -ForegroundColor White
Write-Host "   3. Select your GitHub repo" -ForegroundColor White
Write-Host "   4. Click 'Deploy'" -ForegroundColor White
Write-Host "   ⏱️  Time: 2 minutes" -ForegroundColor Gray
Write-Host ""

Write-Host "✨ OPTION 2: NETLIFY" -ForegroundColor Green
Write-Host "   1. Go to https://app.netlify.com" -ForegroundColor White
Write-Host "   2. Drag dist/ folder or connect GitHub" -ForegroundColor White
Write-Host "   3. Done!" -ForegroundColor White
Write-Host "   ⏱️  Time: 5 minutes" -ForegroundColor Gray
Write-Host ""

Write-Host "✨ OPTION 3: GITHUB PAGES" -ForegroundColor Green
Write-Host "   npm install -g gh-pages" -ForegroundColor White
Write-Host "   npx gh-pages -d dist" -ForegroundColor White
Write-Host "   ⏱️  Time: 3 minutes" -ForegroundColor Gray
Write-Host ""

Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "📚 Full guide: See DEPLOYMENT_COMPLETE.md" -ForegroundColor Cyan
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "🎉 Your portfolio is ready to launch!" -ForegroundColor Green
