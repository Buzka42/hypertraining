#!/bin/bash

# 🚀 HyperTraining Website Deployment Script
# This script prepares and deploys the website to GitHub and Vercel

echo "🏋️ HyperTraining Website Deployment"
echo "=================================="

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📁 Initializing Git repository..."
    git init
fi

# Add all files
echo "📦 Adding files to Git..."
git add .

# Commit with comprehensive message
echo "💾 Committing changes..."
git commit -m "🎉 Complete bilingual personal trainer website

✅ Fully functional Polish/English website
✅ 5 complete pages with professional design  
✅ 200+ translations, SEO optimized
✅ Contact forms, pricing packages, FAQ
✅ Responsive design, modern animations
✅ Ready for production deployment

Features:
- Bilingual support (Polish/English)
- Home, About, Pricing, FAQ, Contact pages
- Professional UI with Framer Motion animations
- SEO optimized with meta tags
- Contact forms ready for integration
- Responsive design for all devices
- TypeScript + Next.js 14 + Tailwind CSS"

echo ""
echo "✅ Repository prepared for deployment!"
echo ""
echo "🚀 Next Steps:"
echo "1. Create GitHub repository at: https://github.com/new"
echo "2. Run: git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git"
echo "3. Run: git push -u origin main"
echo "4. Deploy to Vercel at: https://vercel.com"
echo ""
echo "📖 See DEPLOYMENT_GUIDE.md for detailed instructions"