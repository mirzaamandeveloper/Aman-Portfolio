# ⚡ DEPLOY TO VERCEL IN 5 MINUTES

## Step 1: Initialize Git (if needed)

```bash
git init
git add .
git commit -m "Initial commit - Portfolio with 3D"
```

## Step 2: Create GitHub Repository

1. Go to **https://github.com/new**
2. **Repository name**: `mohammed-aman-baig-portfolio`
3. **Description**: "3D Portfolio - Full-Stack + AI Engineer"
4. Click **"Create repository"**

## Step 3: Push to GitHub

Copy the commands GitHub shows and run:

```bash
git remote add origin https://github.com/YOUR_USERNAME/mohammed-aman-baig-portfolio.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

## Step 4: Deploy to Vercel

1. Go to **https://vercel.com/sign-up**
2. Click **"Continue with GitHub"**
3. Authorize Vercel
4. Click **"New Project"**
5. Select your `mohammed-aman-baig-portfolio` repository
6. Vercel auto-detects React + Vite ✅
7. Click **"Deploy"**

⏳ **Wait 2-3 minutes...**

## Step 5: Get Your Live URL

After deployment, you'll see:
```
✓ Production URL: https://YOUR_PROJECT.vercel.app
```

**Your portfolio is LIVE! 🎉**

---

## ADD CUSTOM DOMAIN (Optional)

### Get a Domain
- Namecheap: $0.88/year
- Google Domains: $12/year
- Vercel Domains: $12/year

### Add to Vercel

1. In Vercel dashboard → **Settings** → **Domains**
2. Click **"Add Domain"**
3. Enter your domain (e.g., `mohammedbaig.dev`)
4. Click **"Add"**
5. Update nameservers to Vercel's (they provide them)

⏳ **Wait 24-48 hours for DNS propagation**

---

## FINAL CHECKLIST

- [ ] Repository created on GitHub
- [ ] Code pushed to GitHub
- [ ] Vercel connected to GitHub
- [ ] Deployment successful
- [ ] Live URL working
- [ ] All links working
- [ ] 3D animations displaying
- [ ] Mobile responsive
- [ ] Custom domain added (optional)
- [ ] DNS propagated (24-48h)

---

## AFTER DEPLOYMENT

### Test Your Live Site
- Visit your Vercel URL
- Test all links and buttons
- Check /thinking route
- Test on mobile

### Share Your Portfolio
- Send to recruiters
- Add to LinkedIn
- Share on Twitter/X
- Update GitHub README

### Keep It Updated
- Push updates to GitHub
- Vercel auto-deploys
- No manual steps needed

---

## TROUBLESHOOTING

### "Build failed"
- Check Vercel logs
- Run `npm run build` locally
- Verify package.json is correct

### "Cannot access site"
- Wait 2-3 minutes for deployment
- Clear browser cache
- Try incognito mode

### "DNS not working"
- Verify nameservers in Vercel
- Check domain registrar DNS settings
- Wait 24-48 hours for propagation

---

## QUICK REFERENCE

| Step | Time | Action |
|------|------|--------|
| 1. Git Init | 1 min | `git init && git add . && git commit` |
| 2. GitHub | 2 min | Create repo and push code |
| 3. Vercel | 2 min | Connect GitHub and deploy |
| 4. Live! | Total: 5 min | Your site is live! 🎉 |

---

## EXAMPLE DEPLOYMENT

**GitHub**: `github.com/mohammedbaig/portfolio`
**Vercel**: `portfolio.vercel.app`
**Custom**: `mohammedbaig.dev`

---

## STILL NEED HELP?

📚 **Full Guide**: See `DEPLOYMENT_COMPLETE.md`
🎯 **More Options**: Netlify, GitHub Pages
💬 **Support**: https://vercel.com/support

---

**You're ready to deploy! 🚀**

Next command: `git push origin main`
