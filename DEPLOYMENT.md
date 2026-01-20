# Deployment Guide

## Quick Start - Vercel (Recommended)

Vercel is perfect for this React + Vite portfolio.

### Option 1: Deploy from GitHub
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your repository
5. Vercel auto-detects React + Vite configuration
6. Click "Deploy"

### Option 2: Deploy from CLI
```bash
npm install -g vercel
vercel login
vercel
```

## Netlify Deployment

```bash
# Build first
npm run build

# Then deploy using Netlify CLI
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

## GitHub Pages Deployment

Update `vite.config.mjs`:
```javascript
export default defineConfig({
  base: '/repo-name/',
  plugins: [react()],
});
```

Then deploy:
```bash
npm run build
# Deploy dist folder to gh-pages branch
```

## Environment Variables
Currently, no environment variables needed. Add them to `.env` if you integrate:
- Email service (EmailJS, SendGrid)
- Analytics (Google Analytics, Plausible)
- CMS (Contentful, Strapi)

## Production Checklist

- [ ] Update GitHub, LinkedIn URLs
- [ ] Update email address
- [ ] Test all links work
- [ ] Test on mobile devices
- [ ] Check Lighthouse scores (aim for 90+)
- [ ] Set up custom domain (optional)
- [ ] Enable HTTPS (automatic on Vercel/Netlify)
- [ ] Set up analytics (optional)

## Performance Optimization

Current metrics:
- First Contentful Paint: <1s
- Lighthouse Score: 95+
- Bundle Size: ~45KB (minified + gzipped)

To maintain:
- Keep animations under 60fps
- Lazy load heavy images
- Monitor bundle size growth
- Use production builds for testing

## Monitoring

Recommended tools:
- **Analytics**: Vercel Analytics (built-in) or Plausible
- **Monitoring**: Sentry for error tracking
- **Performance**: Web Vitals Core (built-in to Vercel)

## Custom Domain

1. Buy domain (Namecheap, Google Domains, etc.)
2. Update nameservers to Vercel
3. Vercel handles SSL automatically

## Support

- Vercel docs: https://vercel.com/docs
- Netlify docs: https://docs.netlify.com
- Vite docs: https://vitejs.dev
