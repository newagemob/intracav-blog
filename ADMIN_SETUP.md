# Admin Interface Setup Guide

## Overview

The admin interface allows your clinical team to create articles through a web UI without needing to edit markdown files directly.

## Features

- **Secure token-based authentication** (no passwords in source code)
- Form for creating articles with:
  - Title, content type, audience
  - Categories and tags
  - Author information
  - Description
  - Markdown content editor
  - Image upload support

## Authentication Setup

**⚠️ IMPORTANT**: The admin page now uses secure password-based authentication. See [ADMIN_PASSWORD_SETUP.md](./ADMIN_PASSWORD_SETUP.md) for detailed setup instructions.

Quick setup:
1. Generate a password hash: `node scripts/generate-admin-token.js "your-password"`
2. Set `ADMIN_PASSWORD_HASH` environment variable with the hash
3. Share the password (not the hash) with your team
4. Rebuild the site

## Setup Options

### Option 1: GitHub API Integration (Recommended)

If your site is hosted on GitHub Pages or uses GitHub for version control:

1. **Create a GitHub Personal Access Token:**
   - Go to GitHub Settings → Developer settings → Personal access tokens
   - Create a token with `repo` scope
   - Store it securely

2. **Set Environment Variables:**
   ```bash
   export GITHUB_TOKEN=your_token_here
   export GITHUB_REPO=your-username/intracav-blog
   export ADMIN_PASSWORD_HASH=your_password_hash_here  # See ADMIN_PASSWORD_SETUP.md
   ```

3. **Deploy Serverless Function:**
   - For Netlify: Place `api/create-article.js` in `netlify/functions/`
   - For Vercel: Place in `api/create-article.js` (auto-detected)
   - For GitHub Actions: Use GitHub API directly

### Option 2: Manual Creation (Current)

The form currently outputs the markdown content. You can:
1. Copy the generated markdown
2. Create the file manually in `content/articles/`
3. Commit and push

### Option 3: Custom Backend

Create your own backend API that:
- Accepts POST requests to `/api/create-article`
- Validates authentication
- Creates markdown files in `content/articles/`
- Handles image uploads to `static/images/`
- Commits to git repository

## Usage

1. Navigate to `/admin/`
2. Enter the admin password when prompted
3. Fill out the form
4. Submit to create the article

## Security

- **Password-based authentication**: Passwords are hashed, never stored in plain text
- **Environment variables**: Password hash is set at build time, not in source code
- **Secure password sharing**: Share passwords via encrypted channels
- **Password rotation**: Change passwords periodically (see ADMIN_PASSWORD_SETUP.md)
- Consider adding rate limiting for production use

## Image Handling

Images uploaded through the form should be:
- Saved to `static/images/` directory
- Referenced in markdown as `/images/filename.jpg`
- Optimized before upload (consider client-side compression)

## Next Steps

1. Set up your preferred backend option
2. Configure environment variables
3. Test the admin interface
4. Train cofounders on usage
