# SEO URL Verification - /blog/ and /policies/ Routes

## Date: January 29, 2026

## ✅ Verification Complete

All SEO URLs are correctly configured to use `/blog/` and `/policies/` routes instead of the deprecated `/articles/` route.

---

## 🔍 What Was Checked

### 1. Sitemap URLs ✅
**Status:** All URLs use correct paths

**Sample from sitemap.xml:**
- ✅ `https://blog.intracav.ai/blog/introducing-intracavos/`
- ✅ `https://blog.intracav.ai/blog/apis-over-guidelines/`
- ✅ `https://blog.intracav.ai/policies/antt-aseptic-non-touch-technique/`
- ✅ `https://blog.intracav.ai/policies/blood-draws-hemolysis-prevention/`

**No `/articles/` URLs found in sitemap.**

### 2. Canonical URLs ✅
**Status:** All canonical tags use correct paths

**Implementation:**
- Uses Hugo's `.Permalink` which respects permalink configuration
- All blog posts: `/blog/{slug}/`
- All policies: `/policies/{slug}/`

**Example from generated HTML:**
```html
<link rel="canonical" href="https://blog.intracav.ai/blog/introducing-intracavos/">
<link rel="canonical" href="https://blog.intracav.ai/policies/antt-aseptic-non-touch-technique/">
```

### 3. Open Graph URLs ✅
**Status:** All OG tags use correct paths

**Example:**
```html
<meta property="og:url" content="https://blog.intracav.ai/blog/introducing-intracavos/">
<meta name="twitter:url" content="https://blog.intracav.ai/blog/introducing-intracavos/">
```

### 4. Structured Data URLs ✅
**Status:** All JSON-LD schema uses correct paths

**Example:**
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "url": "https://blog.intracav.ai/blog/introducing-intracavos/",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://blog.intracav.ai/blog/introducing-intracavos/"
  }
}
```

### 5. Permalink Configuration ✅
**Status:** Correctly configured in `hugo.yaml`

```yaml
permalinks:
  blog: /blog/:slug/
  policies: /policies/:slug/
```

### 6. Generated Routes ✅
**Status:** No `/articles/` routes are being generated

**Verification:**
- ✅ No `/articles/` in sitemap
- ✅ No `/articles/` in generated HTML
- ✅ All content uses section-based routes

---

## 📊 Current URL Structure

### Blog Posts
```
/blog/{slug}/
```

**Examples:**
- `/blog/introducing-intracavos/`
- `/blog/apis-over-guidelines/`
- `/blog/healthcare-slow-moving-carcass/`

### Policies
```
/policies/{slug}/
```

**Examples:**
- `/policies/antt-aseptic-non-touch-technique/`
- `/policies/blood-draws-hemolysis-prevention/`
- `/policies/clinical-decision-making-vascular-access/`

---

## 🔄 Redirects for Old URLs

If Google has indexed old `/articles/` URLs, redirect files have been created:

### Files Created
1. **`static/_redirects`** - For Netlify hosting
2. **`static/.htaccess`** - For Apache servers
3. **`URL_REDIRECTS_SETUP.md`** - Complete redirect documentation

### Redirect Rules
```
/articles/*  →  /blog/:splat  (301 redirect)
/articles    →  /blog         (301 redirect)
```

**Note:** For GitHub Pages (your current setup), you'll need to:
1. Use a custom domain with Cloudflare/Netlify for redirect support, OR
2. Create HTML redirect pages for known old URLs

See `URL_REDIRECTS_SETUP.md` for detailed instructions.

---

## ✅ SEO Checklist

- [x] Sitemap uses correct URLs (`/blog/` and `/policies/`)
- [x] Canonical URLs use correct paths
- [x] Open Graph URLs use correct paths
- [x] Twitter Card URLs use correct paths
- [x] Structured data URLs use correct paths
- [x] Permalink configuration is correct
- [x] No `/articles/` routes are generated
- [x] Redirect files created for old URLs
- [x] All meta tags point to correct URLs

---

## 🚀 Next Steps

### Immediate
1. ✅ **URLs are correct** - No changes needed
2. ✅ **Redirects ready** - Files created in `static/` directory
3. ⏳ **Deploy redirects** - If using Netlify/Apache, redirects will work automatically

### For GitHub Pages
Since you're using GitHub Pages, you have two options:

**Option 1: Use Netlify (Recommended)**
- Deploy to Netlify instead of GitHub Pages
- `_redirects` file will work automatically
- Better redirect support

**Option 2: HTML Redirect Pages**
- Create HTML redirect pages for known old URLs
- Place in `static/articles/` directory
- Less elegant but works on GitHub Pages

### Monitor
1. **Google Search Console**
   - Check for any `/articles/` URLs still indexed
   - Submit updated sitemap
   - Request reindexing of important pages

2. **Server Logs**
   - Monitor for 404 errors on `/articles/` paths
   - Add specific redirects as needed

---

## 📈 Expected Results

### Search Engine Results
- ✅ All new URLs will use `/blog/` or `/policies/`
- ✅ Old `/articles/` URLs will redirect (if redirects deployed)
- ✅ Canonical tags ensure correct URLs are indexed
- ✅ Sitemap guides search engines to correct URLs

### Timeline
- **Immediate**: New content uses correct URLs
- **1-2 weeks**: Google begins recognizing new URL structure
- **1-3 months**: Old URLs fully replaced in search results (with redirects)

---

## 🔧 Maintenance

### Monthly
- Check Google Search Console for any `/articles/` URLs
- Monitor 404 errors
- Update redirects if new old URLs discovered

### Quarterly
- Review sitemap for accuracy
- Check canonical URLs are correct
- Verify redirects are working

---

## 📚 Related Documentation

- **`URL_REDIRECTS_SETUP.md`** - Complete redirect setup guide
- **`SEO_GUIDE.md`** - Comprehensive SEO best practices
- **`SEO_IMPLEMENTATION_SUMMARY.md`** - Full SEO implementation details

---

## Summary

✅ **All URLs are correct**: Using `/blog/` and `/policies/` routes  
✅ **No deprecated routes**: No `/articles/` URLs being generated  
✅ **SEO optimized**: Canonical, OG, and structured data all correct  
✅ **Redirects ready**: Files created for handling old URLs  

**Status:** ✅ Production Ready

---

**Last Updated:** January 29, 2026  
**Verified By:** AI Assistant  
**Status:** All SEO URLs verified and correct
