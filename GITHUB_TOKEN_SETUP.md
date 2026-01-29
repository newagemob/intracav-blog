# GitHub Token Setup for Admin Panel

This guide explains how to set up a GitHub Personal Access Token so the admin panel can create files directly in your repository.

## Why This Is Needed

The admin panel needs a GitHub token to:
- Create new markdown files in your repository
- Commit them directly to the `main` branch
- Trigger automatic site rebuilds

## Step 1: Create a GitHub Personal Access Token

1. Go to GitHub Settings: https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Fill in the details:
   - **Note**: `Intracav Blog Admin Panel`
   - **Expiration**: Choose your preferred expiration (90 days, 1 year, or no expiration)
   - **Scopes**: Check **`repo`** (this gives full control of private/public repositories)
4. Scroll down and click **"Generate token"**
5. **IMPORTANT**: Copy the token immediately (it won't be shown again)
   - It will look like: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

## Step 2: Add Token as GitHub Secret

1. Go to your repository on GitHub
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **"New repository secret"**
4. Fill in:
   - **Name**: `ADMIN_GITHUB_TOKEN`
   - **Secret**: Paste the token you copied from Step 1
5. Click **"Add secret"**

## Step 3: Verify Setup

After adding both secrets (`ADMIN_PASSWORD_HASH` and `ADMIN_GITHUB_TOKEN`), your admin panel will be able to:

1. Authenticate users with the password
2. Create new policy/blog files directly in GitHub
3. Automatically trigger site rebuilds

## Security Notes

- **Never commit the token to your repository** - it's stored as a GitHub secret
- The token is only embedded in the built site (not in your source code)
- The token has write access to your repository, so keep it secure
- You can revoke the token at any time from GitHub Settings → Developer settings → Personal access tokens
- Consider setting an expiration date and rotating the token periodically

## Testing

After setup:

1. Push your changes to trigger a new build
2. Wait for the GitHub Actions workflow to complete
3. Go to `/admin/` on your live site
4. Enter the admin password
5. Fill out the form and click "Create Article"
6. You should see a success message
7. Check your repository - the new file should appear in `content/policies/` or `content/blog/`
8. The site will automatically rebuild and publish the new content

## Troubleshooting

### "GitHub integration not configured" error
- Verify `ADMIN_GITHUB_TOKEN` is set in GitHub Secrets
- Make sure you've pushed the updated workflow file
- Rebuild the site after adding the secret

### "Failed to create file on GitHub" error
- Check that the token has `repo` scope permissions
- Verify the token hasn't expired
- Check the browser console for detailed error messages

### Token expired
- Generate a new token following Step 1
- Update the `ADMIN_GITHUB_TOKEN` secret with the new token
- Trigger a new deployment

## Summary

You need **2 secrets** in your GitHub repository:

1. **`ADMIN_PASSWORD_HASH`**: For admin authentication (generated via `node scripts/generate-admin-token.js`)
2. **`ADMIN_GITHUB_TOKEN`**: For creating files (GitHub Personal Access Token with `repo` scope)

Once both are set up, your clinical team can create content directly from the admin panel, and it will automatically appear in your repository and on your live site!
