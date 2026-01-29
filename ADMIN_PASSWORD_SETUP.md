# Admin Password Authentication Setup

This document explains how to set up secure password-based authentication for the admin page, allowing your clinical team to contribute content without requiring a full authentication service.

## How It Works

The admin page uses **hash-based password authentication**:
- You choose a password and share it with authorized team members
- The password is hashed using SHA-256, and only the hash is stored in the build configuration
- The actual password never appears in the source code or client-side JavaScript
- Team members simply enter the password on the admin page to access the dashboard

## Setup Instructions

### Step 1: Generate a Password Hash

Choose a strong password and generate its hash:

```bash
node scripts/generate-admin-token.js "your-secure-password"
```

Or run without arguments to be prompted securely:

```bash
node scripts/generate-admin-token.js
```

This will output:
- **PASSWORD HASH**: The hash to set as an environment variable (this is safe to commit)
- The actual password is what you'll share with your team

### Step 2: Configure Hugo Security

Add the following to your `hugo.yaml` (or `config.toml`) to allow the `ADMIN_PASSWORD_HASH` environment variable:

```yaml
security:
  funcs:
    getenv:
      - ^HUGO_
      - ^CI$
      - ^ADMIN_PASSWORD_HASH$
```

### Step 3: Set the Password Hash as Environment Variable

Set the `ADMIN_PASSWORD_HASH` environment variable before building your Hugo site:

```bash
export ADMIN_PASSWORD_HASH="<password-hash-from-step-1>"
hugo
```

For production deployments:

**GitHub Actions:**
```yaml
env:
  ADMIN_PASSWORD_HASH: ${{ secrets.ADMIN_PASSWORD_HASH }}
```

**Netlify:**
- Go to Site settings → Environment variables
- Add `ADMIN_PASSWORD_HASH` with your password hash value

**Vercel:**
- Go to Project settings → Environment Variables
- Add `ADMIN_PASSWORD_HASH` with your password hash value

### Step 4: Share the Password with Your Team

Share the **PASSWORD** (not the hash) with authorized team members via a secure channel (e.g., encrypted email, password manager, secure messaging).

They can access the admin page by:
1. Navigating to `https://blog.intracav.ai/admin/`
2. Entering the password when prompted
3. The session will be saved for the current browser session

## Security Best Practices

1. **Use strong passwords**: Choose passwords with at least 12 characters, mixing letters, numbers, and symbols
2. **Rotate passwords periodically**: Change passwords every 3-6 months or if compromised
3. **Share passwords securely**: Use encrypted channels or password managers
4. **Revoke access**: If a team member leaves, change the password and update the hash
5. **Monitor usage**: Check your site analytics for admin page access patterns

## Password Rotation

To change the password:

1. Generate a new password hash: `node scripts/generate-admin-token.js "new-password"`
2. Update `ADMIN_PASSWORD_HASH` in your deployment environment
3. Rebuild and redeploy the site
4. Share the new password with your team
5. The old password will no longer work

## Troubleshooting

### "Incorrect password" error
- Verify the password was entered correctly (check for typos, case sensitivity)
- Check that `ADMIN_PASSWORD_HASH` is set correctly in your build environment
- Ensure the site was rebuilt after setting the environment variable

### Password not working after deployment
- Confirm `ADMIN_PASSWORD_HASH` is set in your hosting platform's environment variables
- Rebuild the site after setting the environment variable
- Clear browser cache and sessionStorage if testing

### API endpoint returns 401
- Verify the password hash is set in your serverless function environment (Netlify/Vercel)
- Check that the password hash matches the one generated from your password

## Technical Details

- **Hash Algorithm**: SHA-256
- **Session Storage**: sessionStorage (cleared when browser closes)
- **Password Requirements**: Choose a strong password (recommended: 12+ characters)
- **Validation**: Client-side hash comparison + server-side validation for API calls

The password hash is embedded in the HTML at build time, but the actual password is never exposed in the source code, making this approach secure for static site deployments.
