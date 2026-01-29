# Intracav Wiki Routes

## Active Routes

### Main Pages
- `/` - Homepage
- `/about/` - About Intracav and the team
- `/admin/` - Admin dashboard (password protected)

### Content Sections
- `/policies/` - Clinical policies and guidelines
- `/blog/` - Clinical insights and analysis

### Audience Routes
- `/audience/clinician/` - Content for clinicians
- `/audience/patient/` - Content for patients

### Category Routes
- `/category/` - All categories listing
- `/category/{category-name}/` - Articles in a specific category

### Individual Articles
- `/policies/{article-slug}/` - Individual policy pages
- `/blog/{article-slug}/` - Individual blog post pages

## Removed Routes

- `/content_type/policies/` - **Redundant** (use `/policies/` instead)
- `/content_type/blog/` - **Redundant** (use `/blog/` instead)
- `/articles/` - **Removed** (content now organized by section)
- `/tags/` - Tags taxonomy page (removed)
- `/tags/{tag-name}/` - Individual tag pages (removed)

## Navigation Structure

### Header Navigation
- Policies
- Blog
- For Clinicians
- For Patients
- Categories
- About

### Sidebar Navigation
- **Intracav Wiki**
  - Home
  - Policies
  - Blog
- **Audience**
  - For Clinicians
  - For Patients
- **Browse**
  - Categories
  - About

### Mobile Navigation
Same as Header Navigation plus quick access to emergency/high-priority content.

## Data Organization

All content is organized using Hugo taxonomies:
- **content_type**: `policies` or `blog` (used for internal organization, not exposed as routes)
- **audience**: `clinician` or `patient` (exposed as `/audience/{type}/`)
- **category**: Topic-based categories (primary browsing method)

**Note**: The `content_type` taxonomy remains in the configuration for content organization but is not exposed as public routes to avoid redundancy with section-based routes (`/policies/` and `/blog/`).
