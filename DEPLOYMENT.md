# GitHub Pages Deployment Guide

This project is now configured for GitHub Pages deployment. Here are the available deployment methods:

## Automatic Deployment (Recommended)

### Using GitHub Actions
The project includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the main branch.

1. **Enable GitHub Pages in your repository settings:**
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Under "Source", select "GitHub Actions"
   - Under "Custom domain", enter `romanpretty.com`
   - Save the settings

2. **Push your changes:**
   ```bash
   git add .
   git commit -m "Configure for GitHub Pages deployment"
   git push origin main
   ```

3. **Access your site:**
   Your site will be available at: `https://romanpretty.com/`

## Custom Domain Setup

This project is configured to use the custom domain `romanpretty.com`. Here's what you need to do:

### DNS Configuration
Make sure your domain's DNS is configured to point to GitHub Pages:

**For apex domain (romanpretty.com):**
- Add A records pointing to GitHub Pages IP addresses:
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153

**For www subdomain (optional):**
- Add a CNAME record pointing `www.romanpretty.com` to `roman-pretty.github.io`

### GitHub Pages Configuration
1. In your repository settings, under Pages:
   - Set source to "GitHub Actions"
   - Set custom domain to "romanpretty.com"
   - Enable "Enforce HTTPS"

## Manual Deployment Methods

### Method 1: Using the deployment script (Windows)
```bash
# Run the deployment script
./deploy.bat
```

### Method 2: Using npm script
```bash
# Build and deploy using the npm script
npm run deploy
```

### Method 3: Manual step-by-step
```bash
# 1. Build the project for GitHub Pages
npm run build-ghpages

# 2. Add the dist folder to git (temporarily)
git add dist

# 3. Commit the changes
git commit -m "adding dist subtree"

# 4. Push to gh-pages branch
git subtree push --prefix dist origin gh-pages
```

## Project Configuration Changes

The following changes were made to configure the project for GitHub Pages:

1. **Updated `vite.config.ts`:**
   - Changed base URL to `/` for custom domain (romanpretty.com)
   - Changed output directory to `dist`

2. **Updated `package.json`:**
   - Added `build-ghpages` script that creates a 404.html file
   - Added `deploy` script for manual deployment

3. **Added GitHub Actions workflow:**
   - `.github/workflows/deploy.yml` for automatic deployment

4. **Added deployment scripts:**
   - `deploy.sh` for Unix/Linux/Mac
   - `deploy.bat` for Windows

5. **Added CNAME file:**
   - `public/CNAME` for custom domain configuration

## Important Notes

- The `404.html` file is a copy of `index.html` to handle client-side routing
- The `dist` folder is ignored in `.gitignore` for normal development
- During deployment, the `dist` folder is temporarily committed and pushed to the `gh-pages` branch
- Your site will be available at: `https://romanpretty.com/`
- The `CNAME` file configures GitHub Pages to use your custom domain

## Troubleshooting

If you encounter issues:

1. Make sure GitHub Pages is enabled in your repository settings
2. Check that the `gh-pages` branch exists and contains the built files
3. Verify that the base URL in `vite.config.ts` is set to `/` for custom domains
4. Make sure your DNS is properly configured to point to GitHub Pages
5. Wait a few minutes after deployment for changes to appear (GitHub Pages has a small delay)

## Development

For local development, use:
```bash
npm run dev
```

This will use the local development server with the correct base URL.
