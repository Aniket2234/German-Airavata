# Netlify Deployment Guide

Your project is now ready for Netlify deployment! 🚀

## What's Been Configured

✅ **Netlify Configuration** (`netlify.toml`)
- Build command: `npm run build`
- Publish directory: `dist/public`
- SPA routing redirects configured

✅ **SPA Routing Fix** (`client/public/_redirects`)
- All routes redirect to `/index.html` with status 200
- Prevents 404 errors on page refresh or direct navigation
- Enables proper client-side routing with Wouter

## How to Deploy to Netlify

### Option 1: Deploy via Netlify UI (Recommended)

1. **Create a Netlify account** at https://netlify.com if you don't have one

2. **Connect your repository**:
   - Click "Add new site" → "Import an existing project"
   - Connect to your Git provider (GitHub, GitLab, etc.)
   - Select your repository

3. **Configure build settings** (should auto-detect from `netlify.toml`):
   - Build command: `npm run build`
   - Publish directory: `dist/public`

4. **Deploy**:
   - Click "Deploy site"
   - Netlify will build and deploy your app automatically

### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy (from project root)
netlify deploy --prod
```

## Testing After Deployment

After deployment, test the following:

1. ✅ Navigate to different pages using the navigation menu
2. ✅ Refresh the page on any route (should not show 404)
3. ✅ Copy and paste a direct URL (e.g., `/about`, `/services`) in a new tab
4. ✅ Test language toggle functionality
5. ✅ Test theme toggle (dark/light mode)

## Environment Variables

If your app uses environment variables:
1. Go to Netlify Dashboard → Site settings → Environment variables
2. Add your variables there
3. Redeploy for changes to take effect

## Custom Domain

To use a custom domain:
1. Go to Netlify Dashboard → Domain settings
2. Click "Add custom domain"
3. Follow the DNS configuration instructions

## Troubleshooting

**Problem: 404 on page refresh**
- Check that `_redirects` file exists in `dist/public/` after build
- Verify `netlify.toml` publish directory is set to `dist/public`

**Problem: Build fails**
- Check build logs in Netlify dashboard
- Ensure all dependencies are in `package.json` (not just devDependencies)
- Try building locally first: `npm run build`

**Problem: Assets not loading**
- Check that asset paths are relative (not absolute)
- Verify Vite's base URL configuration

## Support

For Netlify-specific issues, check:
- Netlify Documentation: https://docs.netlify.com
- Netlify Community: https://answers.netlify.com
