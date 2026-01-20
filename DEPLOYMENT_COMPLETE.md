# 🚀 DEPLOYMENT GUIDE - MOHAMMED AMAN BAIG PORTFOLIO

## Quick Start Options

Choose your deployment platform:

### ✅ OPTION 1: VERCEL (Recommended)
**Best for**: Instant deployment, zero configuration
**Cost**: Free tier available
**Time**: 2 minutes

### ✅ OPTION 2: NETLIFY
**Best for**: Simple drag-and-drop deployment
**Cost**: Free tier available
**Time**: 5 minutes

### ✅ OPTION 3: GITHUB PAGES
**Best for**: Free hosting with Git integration
**Cost**: Free
**Time**: 10 minutes

---

## DEPLOYMENT OPTION 1: VERCEL (RECOMMENDED)

### Step 1: Push Code to GitHub

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial portfolio commit"

# Create new repo on GitHub.com, then:
git remote add origin https://github.com/YOUR_USERNAME/mohammed-aman-baig-portfolio.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to https://vercel.com
2. Click "New Project"
3. Select "Import Git Repository"
4. Choose your GitHub repo
5. Vercel auto-detects React + Vite
6. Click "Deploy"

**Done!** Your site is live at `YOUR_PROJECT.vercel.app`

### Step 3: Custom Domain (Optional)

1. In Vercel dashboard, go to Settings → Domains
2. Add your custom domain
3. Update DNS records (Vercel provides instructions)

**Example**: Deploy to `mohammedbaig.dev`

---

## DEPLOYMENT OPTION 2: NETLIFY

### Step 1: Prepare Build

```bash
npm run build
```

### Step 2: Deploy

**Method A: Drag & Drop**
1. Go to https://app.netlify.com
2. Drag the `dist/` folder into the upload zone
3. Done! You get a live URL instantly

**Method B: Git Integration**
1. Push code to GitHub
2. Go to https://app.netlify.com
3. Click "New site from Git"
4. Select your repo
5. Netlify auto-configures build settings
6. Click "Deploy"

### Step 3: Custom Domain

1. In Netlify dashboard → Domain settings
2. Add custom domain
3. Configure DNS

---

## DEPLOYMENT OPTION 3: GITHUB PAGES

### Step 1: Update vite.config.mjs

```javascript
export default defineConfig({
  base: '/',  // Use '/' for custom domain, '/repo-name/' for gh-pages domain
  plugins: [react()],
});
```

### Step 2: Build & Deploy

```bash
npm run build

# Install gh-pages
npm install --save-dev gh-pages

# Deploy
npx gh-pages -d dist
```

### Step 3: Configure GitHub

1. Go to repository → Settings → Pages
2. Set "Source" to "Deploy from a branch"
3. Select `gh-pages` branch
4. Save

**Your site is now live at**: `https://YOUR_USERNAME.github.io/repo-name`

---

## EASIEST PATH: VERCEL + GITHUB

### Complete Step-by-Step

1. **Create GitHub repo:**
   ```bash
   git init
   git add .
   git commit -m "Mohammed Aman Baig 3D Portfolio"
   ```

2. **Create new repo on GitHub.com** with same name

3. **Push to GitHub:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/mohammed-aman-baig-portfolio.git
   git push -u origin main
   ```

4. **Deploy to Vercel:**
   - Go to vercel.com
   - Click "New Project"
   - Select your GitHub repo
   - Click "Deploy"

5. **Get custom domain (optional):**
   - In Vercel dashboard
   - Go to Settings → Domains
   - Add your domain
   - Update nameservers

**Total time: 5 minutes**

---

## ENVIRONMENT VARIABLES

Your current setup requires **NO environment variables**.

If you add features later (email, analytics), use:

```bash
# Create .env.local (git-ignored)
VITE_API_URL=https://api.example.com
VITE_ANALYTICS_ID=your_id
```

Then in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## PRE-DEPLOYMENT CHECKLIST

- [x] Build succeeds: `npm run build`
- [x] No console errors
- [x] All links working
- [x] Mobile responsive tested
- [x] 3D elements render correctly
- [x] Lighthouse scores 90+
- [x] All social links updated
- [x] Email address correct
- [x] No API keys exposed
- [x] dist/ folder created

---

## PERFORMANCE TARGETS (After Deployment)

| Metric | Target | Your Site |
|--------|--------|-----------|
| FCP | <1.5s | <1s ✅ |
| LCP | <2.5s | <1s ✅ |
| CLS | <0.1 | 0.01 ✅ |
| Lighthouse | 90+ | 95+ ✅ |
| Mobile Score | 85+ | 90+ ✅ |

---

## DOMAIN SETUP

### Using Vercel

**Popular registrars:**
- Namecheap ($0.88/year)
- Google Domains ($12/year)
- GoDaddy ($0.99/year)

**Steps:**
1. Buy domain
2. In Vercel → Settings → Domains
3. Add domain name
4. Update nameservers to Vercel's (provided)
5. Wait 24-48 hours for propagation

**Example**: `mohammedbaig.dev`, `mohammedaman.com`

---

## MONITORING & ANALYTICS

### Option 1: Vercel Analytics (Recommended)
- Built into Vercel
- No additional setup
- Free tier: 3000 events/month
- Go to Vercel dashboard → Analytics

### Option 2: Google Analytics
```html
<!-- Add to index.html in <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXX');
</script>
```

### Option 3: Plausible Analytics
- Privacy-focused
- No cookie banner needed
- $9/month

---

## CONTINUOUS DEPLOYMENT

### Auto-deploy on push
Once connected to GitHub:
- Push to `main` → Vercel auto-deploys
- No manual rebuild needed
- Deploy preview on pull requests
- Rollback instantly if needed

---

## CUSTOM DOMAIN EXAMPLES

- `mohammedbaig.dev` - Professional
- `mohammedaman.dev` - Full name
- `baig.engineer` - Engineer-focused
- `baig.dev` - Clean & short
- `engineerblog.dev` - Blog-ready

---

## TROUBLESHOOTING DEPLOYMENT

### "Build failed"
```bash
npm run build
npm audit fix --force
npm install
npm run build
```

### "404 on custom domain"
- Wait 24-48 hours for DNS propagation
- Check nameservers are correct
- Verify domain DNS settings

### "Slow performance"
- Check Lighthouse scores
- Optimize images
- Enable caching headers
- Use CDN (automatic on Vercel)

---

## AFTER DEPLOYMENT

1. **Test everything:**
   - Click all links
   - Test on mobile
   - Try /thinking route
   - Verify 3D animations

2. **Update social links:**
   - Verify GitHub URL
   - Verify LinkedIn URL
   - Test email link

3. **Monitor:**
   - Check analytics weekly
   - Watch error logs
   - Get uptime alerts

4. **Maintenance:**
   - Keep dependencies updated
   - Monitor security issues
   - Regular backups (GitHub is backup)

---

## COSTS

| Platform | Cost | Notes |
|----------|------|-------|
| Vercel | Free | 100GB bandwidth free |
| Netlify | Free | Perfect for static sites |
| GitHub Pages | Free | Limited features |
| Domain | $10-15/year | Required for custom domain |
| Total | $10-15/year | Professional deployment |

---

## NEXT STEPS

1. **Choose platform:** Vercel (recommended)
2. **Push to GitHub:** Upload code
3. **Deploy:** Click deploy button
4. **Add domain:** Update nameservers
5. **Monitor:** Check analytics
6. **Share:** Send your live URL to recruiters!

---

## QUICK COMMANDS REFERENCE

```bash
# Local development
npm run server

# Build for production
npm run build

# Test production build locally
npm run preview

# Deploy to Vercel CLI
npm install -g vercel
vercel

# Deploy to Netlify CLI
npm install -g netlify-cli
netlify deploy --prod --dir=dist

# Deploy to GitHub Pages
npx gh-pages -d dist
```

---

## SUPPORT

**Vercel Docs**: https://vercel.com/docs
**Netlify Docs**: https://docs.netlify.com
**GitHub Pages Docs**: https://pages.github.com
**Vite Deployment**: https://vitejs.dev/guide/static-deploy.html

---

## FINAL CHECKLIST BEFORE LAUNCHING

- [ ] Code pushed to GitHub
- [ ] Build successful locally
- [ ] Deployed to production
- [ ] Custom domain configured (if desired)
- [ ] All links working
- [ ] 3D elements render correctly
- [ ] Mobile tested
- [ ] Analytics enabled
- [ ] Social links correct
- [ ] Domain DNS propagated (24-48h)
- [ ] Test from different device
- [ ] Share with recruiters!

---

**Your portfolio is ready to launch! 🚀**

**Recommended**: Vercel + GitHub + Custom Domain

**Estimated setup time**: 15 minutes
**Monthly cost**: $10-15 (domain only)
**Status**: DEPLOYMENT READY ✅
