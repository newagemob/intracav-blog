# Quick Start Guide - Admin Access

## For Administrators

### 1. Generate a Password Hash

```bash
node scripts/generate-admin-token.js "your-secure-password"
```

Example output:
```
🔐 PASSWORD HASH (set this as ADMIN_PASSWORD_HASH env var):
7c13ab2e1d157284ccb11e9737f90cbb611b0acdb8f8dcd4e303a680e58a8b1b
```

### 2. Build the Site with the Password Hash

```bash
export ADMIN_PASSWORD_HASH="7c13ab2e1d157284ccb11e9737f90cbb611b0acdb8f8dcd4e303a680e58a8b1b"
hugo
```

Or for development:
```bash
export ADMIN_PASSWORD_HASH="7c13ab2e1d157284ccb11e9737f90cbb611b0acdb8f8dcd4e303a680e58a8b1b"
hugo server
```

### 3. Share the Password

Share the **password** (not the hash) with your clinical team via a secure channel.

---

## For Clinical Team Members

### Accessing the Admin Dashboard

1. Navigate to: `https://blog.intracav.ai/admin/`
2. Enter the password provided by your administrator
3. Click "Access Dashboard"

### Creating a New Article

1. Fill out the form:
   - **Title**: Article title (required)
   - **Content Type**: Choose "Policies" or "Blog"
   - **Audience**: Choose "Clinician" or "Patient"
   - **Categories**: Comma-separated (e.g., "Infection Control, Clinical Guidelines")
   - **Tags**: Comma-separated (e.g., "ANTT, Guidelines")
   - **Author(s)**: Your name(s), comma-separated
   - **Description**: Brief summary for listings
   - **Content**: Write your article in Markdown format

2. Click "Preview" to see how it will look (optional)

3. Click "Create Article" to submit

### If API is Not Configured

If you see a message saying "API endpoint not configured", the system will:
- Generate the markdown file content for you
- Display it in an alert
- You can copy this content and send it to your administrator to add manually

---

## Markdown Tips

### Headings
```markdown
# Heading 1
## Heading 2
### Heading 3
```

### Bold and Italic
```markdown
**bold text**
*italic text*
```

### Lists
```markdown
- Item 1
- Item 2
- Item 3

1. First item
2. Second item
3. Third item
```

### Links
```markdown
[Link text](https://example.com)
```

### Images
```markdown
![Alt text](/images/filename.jpg)
```

### Code
```markdown
`inline code`

```
code block
```
```

---

## Security Notes

- The password is hashed using SHA-256 before being embedded in the site
- The actual password never appears in the source code
- Sessions are stored in sessionStorage (cleared when browser closes)
- Change the password periodically for security
