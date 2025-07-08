# Deployment Instructions

## Prerequisites
1. Install Git on your system
2. Install Node.js (version 16 or higher)
3. Have a GitHub account

## Steps to Deploy

### 1. Install Dependencies
```bash
npm install
```

### 2. Test the Website Locally
```bash
npm run dev
```
Visit http://localhost:3000 to see the website

### 3. Build for Production
```bash
npm run build
```

### 4. Initialize Git Repository and Push to GitHub
```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Modern HyperTraining website with Next.js, React, and Tailwind CSS

Features:
- Responsive design with Poppins fonts and company logo
- Interactive booking widget with email integration
- 5 main pages: Home, Pricing, About, FAQ, Contact
- Google Maps integration for gym location
- Image gallery with seamless transitions
- SEO optimized with Polish content
- Modern animations with Framer Motion"

# Add remote repository
git remote add origin https://github.com/Buzka42/hypertraining.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 5. Enable GitHub Pages (Optional)
1. Go to your repository settings on GitHub
2. Navigate to "Pages" section
3. Select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Your website will be available at: https://buzka42.github.io/hypertraining

## Important Notes

### SEO Keywords Integration
The website currently has placeholder content. To integrate the actual SEO keywords from your Excel file:

1. Open `SEO.xlsx` and extract keywords with highest monthly volume
2. Update the content in these files:
   - `pages/index.tsx` - Homepage content
   - `pages/_document.tsx` - Meta keywords
   - All page files for relevant keyword integration

### Pricing Integration
Update the pricing in `pages/cennik.tsx` with actual data from `cennik.xlsx`

### Email Integration
To make the booking widget functional:
1. Sign up for EmailJS (https://emailjs.com)
2. Update the `components/BookingWidget.tsx` file with your EmailJS configuration
3. Replace the placeholder email sending logic with actual EmailJS calls

### Gallery Images
Add your gym photos to the `public/galeria_goclaw/` directory and update the image paths in `pages/o-mnie.tsx`

### Contact Information
Update all contact information throughout the website with your actual:
- Phone number
- Email address
- Confirm the gym address is correct

## File Structure
```
hypertraining/
├── components/          # React components
├── pages/              # Next.js pages
├── public/             # Static assets
├── styles/             # CSS styles
├── package.json        # Dependencies
└── README.md          # Documentation
```