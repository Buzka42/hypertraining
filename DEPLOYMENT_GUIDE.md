# 🚀 Deployment Guide - HyperTraining Website

## Step-by-Step Deployment to GitHub & Vercel

### 1. **Initialize Git Repository**

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "🎉 Complete bilingual personal trainer website

✅ Fully functional Polish/English website
✅ 5 complete pages with professional design
✅ 200+ translations, SEO optimized
✅ Contact forms, pricing packages, FAQ
✅ Responsive design, modern animations
✅ Ready for production deployment"
```

### 2. **Create GitHub Repository**

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `hypertraining-website` (or your preferred name)
3. Set to **Public** or **Private**
4. **Don't** check "Add README" (we already have files)
5. Click **"Create repository"**

### 3. **Push to GitHub**

```bash
# Add GitHub remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 4. **Deploy to Vercel**

#### Option A: Vercel Dashboard (Recommended)
1. Go to [vercel.com](https://vercel.com)
2. Sign up/login (use GitHub account for easy integration)
3. Click **"New Project"**
4. **Import** your `hypertraining-website` repository
5. Vercel will auto-detect Next.js settings ✅
6. Click **"Deploy"**

#### Option B: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow prompts:
# - Link to existing project? N
# - Project name: hypertraining-website
# - Directory: ./
# - Override settings? N
```

### 5. **Automatic Deployments**

Once connected to GitHub:
- **Every push to `main`** = Production deployment
- **Pull requests** = Preview deployments
- **Rollback** available in Vercel dashboard

### 6. **Custom Domain (Optional)**

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

### 7. **Environment Variables (If Needed)**

If you add contact form integration later:

1. In Vercel dashboard: Settings → Environment Variables
2. Add variables for different environments:
   - Development
   - Preview  
   - Production

Example variables:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## ✅ What Gets Deployed

- **Fully bilingual website** (Polish/English)
- **All 5 pages**: Home, About, Pricing, FAQ, Contact
- **Complete translations** (200+ keys)
- **Responsive design** for all devices
- **SEO optimized** with meta tags
- **Contact forms** ready for integration
- **Professional animations** and UI

## 🎯 Post-Deployment Checklist

After deployment, test:
- [ ] Language switching works
- [ ] All pages load correctly
- [ ] Contact form displays properly
- [ ] Mobile responsiveness
- [ ] SEO meta tags
- [ ] Performance (should be fast!)
- [ ] All translations display correctly

## 📊 Monitoring & Analytics

Vercel provides:
- **Analytics** (page views, performance)
- **Error tracking**
- **Performance insights**
- **Deployment logs**

## 🔧 Future Updates

To update the website:
```bash
# Make your changes
git add .
git commit -m "Update: description of changes"
git push

# Vercel automatically deploys the changes
```

## 🆘 Troubleshooting

If deployment fails:
1. Check Vercel deployment logs
2. Verify `npm run build` works locally
3. Check all dependencies in package.json
4. Ensure no TypeScript errors

## 🎉 Success!

Your professional personal trainer website is now live and ready to attract clients!

**Next Steps:**
1. Share your live URL
2. Set up contact form backend (EmailJS, Formspree, etc.)
3. Add Google Analytics (optional)
4. Configure custom domain (optional)
5. Start getting clients! 💪