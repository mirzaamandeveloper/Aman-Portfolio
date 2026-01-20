#!/bin/bash
# Quick deployment script for Mohammed Aman Baig Portfolio

echo "========================================="
echo "🚀 PORTFOLIO DEPLOYMENT SCRIPT"
echo "========================================="
echo ""

# Step 1: Build
echo "📦 Building for production..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi
echo "✅ Build successful"
echo ""

# Step 2: Check git
echo "📝 Checking git status..."
if [ ! -d ".git" ]; then
    echo "❌ Git not initialized"
    echo "Initialize with: git init"
    exit 1
fi
echo "✅ Git initialized"
echo ""

# Step 3: Commit
echo "💾 Committing changes..."
git add .
git commit -m "Deploy portfolio $(date +%Y-%m-%d)" || true
echo "✅ Changes committed"
echo ""

# Step 4: Push
echo "🌐 Pushing to GitHub..."
git push origin main || echo "ℹ️  Push skipped (already up to date or no remote)"
echo ""

# Step 5: Options
echo "========================================="
echo "✅ Build complete and ready for deployment!"
echo ""
echo "Choose your deployment option:"
echo ""
echo "🎯 OPTION 1: VERCEL (Recommended)"
echo "   1. Go to https://vercel.com"
echo "   2. Click 'New Project'"
echo "   3. Select your GitHub repo"
echo "   4. Click 'Deploy'"
echo ""
echo "🎯 OPTION 2: NETLIFY"
echo "   1. Go to https://app.netlify.com"
echo "   2. Drag dist/ folder or connect GitHub"
echo "   3. Done!"
echo ""
echo "🎯 OPTION 3: GITHUB PAGES"
echo "   npm install -g gh-pages"
echo "   npx gh-pages -d dist"
echo ""
echo "========================================="
echo ""
echo "📚 Full guide: See DEPLOYMENT_COMPLETE.md"
echo ""
