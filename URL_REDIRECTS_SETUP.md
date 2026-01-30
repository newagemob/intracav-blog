# URL Redirects Setup - Old /articles/ Routes

## Date: January 29, 2026

This document explains how to handle redirects from old `/articles/` URLs to the new `/blog/` and `/policies/` routes for SEO purposes.

---

## ✅ Current Status

### URLs Are Correct
- ✅ **Sitemap**: All URLs use `/blog/` and `/policies/` paths
- ✅ **Canonical URLs**: All pages use correct paths in canonical tags
- ✅ **Permalinks**: Configured correctly in `hugo.yaml`
- ✅ **No `/articles/` routes**: No new content generates `/articles/` URLs

### Verification
```bash
# Check sitemap
grep -E "/blog/|/policies/" public/sitemap.xml

# Check canonical URLs
grep "canonical" public/blog/*/index.html
grep "canonical" public/policies/*/index.html
```

---

## 🔄 Redirect Files Created

I've created redirect files for common hosting platforms:

### 1. Netlify (`static/_redirects`)
For sites hosted on Netlify, this file automatically handles redirects:
```
/articles/*  /blog/:splat  301
/articles    /blog          301
```

### 2. Apache (`static/.htaccess`)
For Apache servers, use the `.htaccess` file:
```apache
RewriteRule ^articles/(.*)$ /blog/$1 [R=301,L]
RewriteRule ^articles$ /blog [R=301,L]
```

### 3. Nginx
If using Nginx, add to your server configuration:
```nginx
location ~ ^/articles/(.*)$ {
    return 301 /blog/$1;
}
location = /articles {
    return 301 /blog;
}
```

### 4. GitHub Pages
GitHub Pages doesn't support server-side redirects. Use one of these options:

**Option A: HTML Redirect Pages**
Create `public/articles/index.html` with:
```html
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="refresh" content="0; url=/blog/">
    <link rel="canonical" href="/blog/">
</head>
<body>
    <p>Redirecting to <a href="/blog/">/blog/</a>...</p>
</body>
</html>
```

**Option B: JavaScript Redirect**
```html
<script>
    window.location.replace('/blog/');
</script>
```

---

## 📋 Specific Article Redirects

If you know specific old article URLs that were indexed, add explicit redirects:

### Netlify (`static/_redirects`)
```
/articles/old-slug-1  /blog/new-slug-1  301
/articles/old-slug-2  /policies/new-slug-2  301
```

### Apache (`.htaccess`)
```apache
Redirect 301 /articles/old-slug-1 /blog/new-slug-1
Redirect 301 /articles/old-slug-2 /policies/new-slug-2
```

---

## 🔍 Finding Old URLs in Google

### Step 1: Check Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Navigate to **Coverage** or **URL Inspection**
3. Search for `site:blog.intracav.ai/articles`
4. Identify any indexed `/articles/` URLs

### Step 2: Check Server Logs
Look for 404 errors or requests to `/articles/`:
```bash
# If you have access to server logs
grep "/articles/" access.log | head -20
```

### Step 3: Use Redirect Checker Tools
- [Redirect Checker](https://www.redirect-checker.org/)
- [HTTP Status Code Checker](https://httpstatus.io/)

---

## 🚀 Implementation Steps

### For Netlify
1. ✅ File already created: `static/_redirects`
2. Deploy your site
3. Netlify will automatically use the redirects file
4. Test: Visit `https://blog.intracav.ai/articles/` (should redirect to `/blog/`)

### For Apache
1. ✅ File already created: `static/.htaccess`
2. Ensure `.htaccess` is copied to `public/` during build
3. Verify Apache has `mod_rewrite` enabled
4. Test redirects

### For Nginx
1. Add redirect rules to your Nginx config (see above)
2. Reload Nginx: `sudo nginx -s reload`
3. Test redirects

### For GitHub Pages
1. Create HTML redirect pages for known old URLs
2. Or use a custom domain with Cloudflare/Netlify for redirect support

---

## ✅ Testing Redirects

### Manual Testing
```bash
# Test redirect (should return 301)
curl -I https://blog.intracav.ai/articles/

# Follow redirect
curl -L https://blog.intracav.ai/articles/
```

### Automated Testing
```bash
# Check all redirects work
for url in "/articles" "/articles/test"; do
  echo "Testing: $url"
  curl -I "https://blog.intracav.ai$url" | grep -E "HTTP|Location"
done
```

---

## 📊 SEO Impact

### Benefits
- ✅ **Preserve SEO value**: 301 redirects pass link equity
- ✅ **Fix broken links**: Users won't hit 404 errors
- ✅ **Update search engines**: Google will reindex new URLs
- ✅ **Maintain rankings**: Preserve search positions

### Timeline
- **Immediate**: Redirects start working
- **1-2 weeks**: Google begins recognizing redirects
- **1-3 months**: Old URLs fully replaced in search results

---

## 🔧 Maintenance

### Monitor Redirects
1. Check Google Search Console monthly
2. Monitor 404 errors for `/articles/` URLs
3. Update redirects if new old URLs are discovered

### Update Sitemap
Your sitemap already uses correct URLs, so no changes needed. However:
- Submit updated sitemap to Google Search Console
- Request reindexing of important pages

### Remove Old Redirects
After 6-12 months (when old URLs are no longer indexed):
1. Check Google Search Console for `/articles/` URLs
2. If none exist, you can remove redirect rules
3. Keep monitoring for a few more months

---

## 📝 Current URL Structure

### Active Routes
- `/blog/{slug}/` - Blog posts
- `/policies/{slug}/` - Clinical policies
- `/category/{category}/` - Category pages
- `/audience/{type}/` - Audience-specific content

### Deprecated Routes (Redirected)
- `/articles/{slug}/` → `/blog/{slug}/` or `/policies/{slug}/`
- `/articles/` → `/blog/`

---

## 🆘 Troubleshooting

### Redirects Not Working
1. **Netlify**: Check `_redirects` file is in `static/` directory
2. **Apache**: Verify `mod_rewrite` is enabled
3. **Nginx**: Check config syntax and reload server
4. **GitHub Pages**: Use HTML redirect pages or switch to Netlify

### 404 Errors Still Occurring
1. Check redirect file syntax
2. Verify file is deployed to production
3. Clear CDN cache if using one
4. Check server logs for errors

### Google Still Showing Old URLs
1. Submit updated sitemap
2. Request URL removal for old URLs (temporary)
3. Wait for Google to recrawl (1-4 weeks)
4. Use Change of Address tool if domain changed

---

## 📚 Resources

- [Netlify Redirects Documentation](https://docs.netlify.com/routing/redirects/)
- [Apache mod_rewrite Guide](https://httpd.apache.org/docs/current/mod/mod_rewrite.html)
- [Nginx Redirect Guide](https://nginx.org/en/docs/http/ngx_http_rewrite_module.html)
- [Google Search Console](https://search.google.com/search-console)

---

## Summary

✅ **URLs are correct**: All new content uses `/blog/` and `/policies/`  
✅ **Redirects ready**: Files created for common hosting platforms  
✅ **SEO protected**: 301 redirects preserve search rankings  
✅ **Future-proof**: No new `/articles/` routes will be created  

**Next Steps:**
1. Deploy redirect files to your hosting platform
2. Test redirects work correctly
3. Monitor Google Search Console for old URLs
4. Submit updated sitemap to Google

---

**Last Updated:** January 29, 2026  
**Status:** ✅ Ready for Deployment
