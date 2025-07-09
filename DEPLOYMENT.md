# 🚀 HyperTraining Website Deployment Guide

## Prerequisites
- Node.js 18+ installed
- Git installed
- GitHub account
- Vercel account (free)

## Step-by-Step Deployment

### 1. **Test Build Locally**
```bash
# Install dependencies
npm install

# Build the project
npm run build

# Test production build
npm start
```

### 2. **Initialize Git Repository**
```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Complete bilingual personal trainer website"
```

### 3. **Create GitHub Repository**
1. Go to [GitHub.com](https://github.com)
2. Click "New Repository"
3. Name it: `hypertraining-website` (or your preferred name)
4. Set to **Public** or **Private**
5. **Don't** initialize with README (we already have files)
6. Click "Create Repository"

### 4. **Push to GitHub**
```bash
# Add GitHub remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 5. **Deploy to Vercel**

#### Option A: Vercel CLI (Recommended)
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

#### Option B: Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Configure:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`
5. Click "Deploy"

### 6. **Custom Domain (Optional)**
1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## 🎯 What Gets Deployed

✅ **Fully bilingual website** (Polish/English)
✅ **All pages**: Home, About, Pricing, FAQ, Contact
✅ **Complete translations** (200+ keys)
✅ **Responsive design**
✅ **SEO optimized**
✅ **Contact forms**
✅ **Gallery functionality**

## 🔧 Environment Variables (if needed)
If you add any API keys or secrets later:

1. In Vercel dashboard: Settings → Environment Variables
2. Add variables for different environments:
   - Development
   - Preview
   - Production

## 📱 Testing Deployment

After deployment, test:
- [ ] Language switching works
- [ ] All pages load correctly
- [ ] Contact form works
- [ ] Mobile responsiveness
- [ ] SEO meta tags
- [ ] Performance (should be fast!)

## 🚀 Automatic Deployments

Once connected to GitHub:
- **Every push to `main`** = Production deployment
- **Pull requests** = Preview deployments
- **Rollback** available in Vercel dashboard

## 📊 Monitoring

Vercel provides:
- **Analytics** (page views, performance)
- **Error tracking**
- **Performance insights**
- **Deployment logs**

---

## Quick Commands Reference

```bash
# Local development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Deploy to Vercel
vercel

# Deploy to production
vercel --prod
```

## Support

If you encounter issues:
1. Check Vercel deployment logs
2. Verify all dependencies in package.json
3. Test build locally first
4. Check GitHub repository is up to date