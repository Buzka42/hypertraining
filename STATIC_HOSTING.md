# Static Site Hosting Setup

This website has been configured for static site hosting using Next.js static export.

## 📦 Build Process

The site is built using Next.js's static export feature:

```bash
npm run export
```

This generates static HTML/CSS/JS files in the `out/` directory.

## 🚀 Deployment Options

### Option 1: GitHub Pages

1. The `out/` directory is already committed to the repository
2. Go to your GitHub repository settings
3. Navigate to **Pages** section
4. Under "Build and deployment":
   - **Source**: Deploy from a branch
   - **Branch**: `main`
   - **Folder**: `/out`
5. Click **Save**
6. Your site will be available at: `https://buzka42.github.io/hypertraining/`

### Option 2: Netlify

1. Sign up at [Netlify](https://www.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Build settings:
   - **Build command**: `npm run export`
   - **Publish directory**: `out`
5. Click "Deploy site"

### Option 3: Vercel

1. Sign up at [Vercel](https://vercel.com)
2. Click "Import Project"
3. Connect your GitHub repository
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

### Option 4: Any Static Hosting Provider

Simply upload the contents of the `out/` directory to any static hosting service:
- AWS S3 + CloudFront
- Azure Static Web Apps
- Google Cloud Storage
- Cloudflare Pages
- Surge.sh
- Firebase Hosting

## 🔄 Update Workflow

After making changes to the site:

```bash
# 1. Build the static site
npm run export

# 2. Commit changes
git add .
git commit -m "Update website"

# 3. Push to GitHub
git push origin main
```

If using GitHub Pages, the changes will be live within a few minutes.

## ⚙️ Configuration

The following changes were made to enable static export:

### `next.config.js`
- Added `output: 'export'` to enable static HTML export
- Added `trailingSlash: true` for consistent URLs
- Set `unoptimized: true` for images (required for static export)

### `.gitignore`
- Removed `out/` to allow committing the build directory

### `out/.nojekyll`
- Added to prevent GitHub Pages from processing files with Jekyll

## 📝 Notes

- The site is fully static with no server-side rendering
- All pages are pre-rendered at build time
- Client-side JavaScript still works for interactivity
- Contact forms use EmailJS for email functionality (client-side)
