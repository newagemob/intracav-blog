# Intracav Wiki Routes

## Active Routes

### Main Pages
- `/` - Homepage
- `/articles/` - All articles listing
- `/about/` - About page
- `/admin/` - Admin dashboard (password protected)

### Content Type Routes
- `/content_type/policies/` - All policy articles
- `/content_type/blog/` - All blog posts

### Audience Routes
- `/audience/clinician/` - Clinician-facing content
- `/audience/patient/` - Patient-facing content

### Category Routes
- `/category/` - All categories listing
- `/category/{category-name}/` - Articles in a specific category

### Individual Articles
- `/articles/{article-slug}/` - Individual article pages

## Removed Routes

- `/tags/` - Tags taxonomy page (removed)
- `/tags/{tag-name}/` - Individual tag pages (removed)

Tags are still stored in frontmatter for potential future use but are not displayed or linked in the UI.

## Navigation Structure

### Sidebar Navigation
- Home
- All Content
- Content Types (Policies, Blog)
- Audience (Clinician, Patient)
- Browse (Categories, About)

### Header Navigation
- Knowledge Base
- Policies
- Blog
- For Clinicians
- For Patients
- About

## Data Organization

All content is organized using:
- **content_type**: policies or blog
- **audience**: clinician or patient
- **category**: topic-based categories (primary organization method)
- **tags**: stored in frontmatter but not displayed (for internal use)
