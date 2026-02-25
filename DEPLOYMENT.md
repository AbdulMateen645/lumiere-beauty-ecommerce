# 🚀 Deployment Guide - Lumière Beauty

This guide will help you deploy the Lumière Beauty demo to various hosting platforms.

---

## 📦 Pre-Deployment Checklist

Before deploying, ensure:

- ✅ All dependencies are installed (`npm install`)
- ✅ Project builds successfully (`npm run build`)
- ✅ No TypeScript errors (`npm run lint`)
- ✅ Environment variables are configured
- ✅ All images load correctly
- ✅ Test on multiple browsers

---

## 🌐 Deployment Options

### Option 1: Vercel (Recommended - Easiest)

**Why Vercel?**
- ✅ Free tier available
- ✅ Automatic deployments from Git
- ✅ Built-in CDN
- ✅ Zero configuration for Vite/React

**Steps:**

1. **Install Vercel CLI** (optional)
   ```bash
   npm install -g vercel
   ```

2. **Deploy via CLI**
   ```bash
   vercel
   ```

3. **Or Deploy via GitHub**
   - Push code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your repository
   - Vercel auto-detects Vite settings
   - Click "Deploy"

**Configuration:**
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

---

### Option 2: Netlify

**Why Netlify?**
- ✅ Free tier with generous limits
- ✅ Drag-and-drop deployment
- ✅ Form handling built-in
- ✅ Easy custom domain setup

**Steps:**

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy via Drag & Drop**
   - Go to [netlify.com](https://netlify.com)
   - Drag the `dist` folder to the deploy zone

3. **Or Deploy via Git**
   - Connect your GitHub repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`

**netlify.toml** (optional):
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

### Option 3: GitHub Pages

**Steps:**

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/repository-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.ts**
   ```typescript
   export default defineConfig({
     base: '/repository-name/',
     // ... rest of config
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

---

### Option 4: AWS S3 + CloudFront

**For production-grade hosting:**

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Create S3 Bucket**
   - Enable static website hosting
   - Set bucket policy for public read

3. **Upload dist folder**
   ```bash
   aws s3 sync dist/ s3://your-bucket-name
   ```

4. **Create CloudFront Distribution**
   - Point to S3 bucket
   - Configure custom domain
   - Enable HTTPS

---

### Option 5: Docker

**Dockerfile:**
```dockerfile
# Build stage
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**nginx.conf:**
```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

**Deploy:**
```bash
docker build -t lumiere-beauty .
docker run -p 80:80 lumiere-beauty
```

---

## 🔧 Environment Variables

For production, set these environment variables:

```bash
# Production URL
APP_URL=https://yourdomain.com

# Optional: If using AI features
GEMINI_API_KEY=your_production_key
```

**Platform-specific:**

- **Vercel:** Project Settings → Environment Variables
- **Netlify:** Site Settings → Build & Deploy → Environment
- **GitHub Pages:** Use GitHub Secrets for Actions

---

## 🌍 Custom Domain Setup

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### Netlify
1. Go to Domain Settings
2. Add custom domain
3. Configure DNS or use Netlify DNS

### Cloudflare (Recommended for any platform)
1. Add site to Cloudflare
2. Update nameservers
3. Enable SSL/TLS
4. Configure caching rules

---

## ⚡ Performance Optimization

### Before Deployment:

1. **Optimize Images**
   - Use WebP format
   - Compress images
   - Use CDN for images

2. **Code Splitting**
   - Already configured with Vite
   - Lazy load routes if needed

3. **Enable Compression**
   - Gzip/Brotli compression
   - Most platforms enable this automatically

4. **CDN Configuration**
   - Cache static assets
   - Set proper cache headers

---

## 🔒 Security Headers

Add these headers in your hosting platform:

```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

**Netlify (_headers file):**
```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
```

**Vercel (vercel.json):**
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        }
      ]
    }
  ]
}
```

---

## 📊 Monitoring & Analytics

### Add Google Analytics

1. **Get tracking ID** from Google Analytics
2. **Add to index.html** before `</head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Error Tracking

Consider adding:
- **Sentry** - Error tracking
- **LogRocket** - Session replay
- **Hotjar** - User behavior analytics

---

## 🧪 Testing Deployment

After deployment, test:

- [ ] Homepage loads
- [ ] All routes work (no 404s)
- [ ] Images load correctly
- [ ] Forms submit properly
- [ ] Mobile responsive
- [ ] HTTPS enabled
- [ ] Fast load times (<3s)
- [ ] No console errors
- [ ] SEO meta tags present

**Tools:**
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

---

## 🔄 Continuous Deployment

### GitHub Actions (Example)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - run: npm run deploy
```

---

## 💰 Cost Estimates

### Free Tier Options:
- **Vercel:** Free for personal projects
- **Netlify:** 100GB bandwidth/month free
- **GitHub Pages:** Free for public repos
- **Cloudflare:** Free CDN and DNS

### Paid Options (for scaling):
- **Vercel Pro:** $20/month
- **Netlify Pro:** $19/month
- **AWS:** Pay-as-you-go (~$5-50/month)

---

## 🆘 Troubleshooting

### Issue: 404 on page refresh
**Solution:** Configure redirects to index.html

### Issue: Images not loading
**Solution:** Check CORS and referrer policy

### Issue: Slow load times
**Solution:** Enable CDN, compress assets, optimize images

### Issue: Build fails
**Solution:** Check Node version, clear cache, reinstall dependencies

---

## 📞 Support

For deployment issues:
1. Check platform documentation
2. Review build logs
3. Test locally first
4. Contact hosting support

---

## ✅ Deployment Checklist

- [ ] Code pushed to Git repository
- [ ] Build succeeds locally
- [ ] Environment variables configured
- [ ] Custom domain purchased (if needed)
- [ ] SSL certificate configured
- [ ] Analytics added
- [ ] Error tracking setup
- [ ] Performance tested
- [ ] Mobile tested
- [ ] SEO verified
- [ ] Backup plan in place

---

<div align="center">
  <p><strong>Ready to go live? Choose your platform and deploy!</strong></p>
  <p>Recommended: Start with Vercel for the easiest deployment experience.</p>
</div>
