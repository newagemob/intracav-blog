# Clinical UX Architecture
## Intracav Wiki - Healthcare Knowledge Portal

**Authority Level:** Principal Healthcare UX Architect  
**Version:** 1.0.0  
**Effective Date:** January 28, 2026  
**Classification:** UX Design Specification

---

## Executive Summary

This document defines the end-to-end UX architecture for the Intracav Wiki, optimized for vascular access clinicians operating under time pressure, cognitive load, and mobile constraints.

**Core Principle:** A clinician should think "This helps me do my job better — and I trust it" before any product pathways become visible.

---

## I. Clinician-First UX Flows

### A. Flow 1: "I Need This Now" (Point-of-Care Reference)

**User:** Clinician at bedside, needs immediate procedure guidance

**Journey:**
```
Mobile Landing → Search (prominent) → Result → Content
     ↓
Emergency/High-Risk Quick Access (if applicable)
```

**Requirements:**
- Search bar visible above fold on mobile (no scrolling)
- Search results prioritize:
  1. Exact title matches
  2. High-risk/emergency content (flagged)
  3. Most recent updates
- Content loads in <2 seconds
- Critical information (warnings, contraindications) visible without scrolling
- One-tap access to procedure steps

**Mobile Optimizations:**
- Search input: 48px height (thumb-friendly)
- Results: Large tap targets (48px minimum)
- Content: Collapsible sections for quick scanning
- Emergency procedures: Floating action button (FAB) on mobile

### B. Flow 2: "Teach Me the Standard" (Training & Onboarding)

**User:** New hire, learning institutional standards

**Journey:**
```
Home → "For New Clinicians" → Category Browse → Policy → Related Content
```

**Requirements:**
- Clear onboarding pathway from homepage
- Category-based browsing (not just search)
- Related content suggestions at end of articles
- "Essential Reading" section for new hires
- Version history visible (what changed, when)

**Information Architecture:**
- Group by clinical domain (Vascular Access, Infection Control, etc.)
- Show learning path: "Start here" → "Then read" → "Advanced topics"
- Visual indicators for required vs. recommended content

### C. Flow 3: "What's the Policy?" (Policy Lookup)

**User:** Lead clinician verifying current policy

**Journey:**
```
Home → Policies → Filter by Category → Policy → Status/Version Check
```

**Requirements:**
- Policies clearly separated from blog content
- Status indicators: Active, Draft, Superseded, Archived
- Version number and effective date prominent
- Quick filter by category/topic
- Regulatory references clearly marked

**Visual Hierarchy:**
- Policy header: Document ID, Version, Effective Date, Authority
- Status badge: Color-coded (Active = green, Draft = yellow, Superseded = gray)
- Regulatory footer: CMS/FDA citations at bottom

### D. Flow 4: "How Do We Enforce Consistency?" (Admin/Educator)

**User:** Admin or educator managing team standards

**Journey:**
```
Admin Dashboard → Content Management → Version Control → Team Distribution
```

**Requirements:**
- Admin interface separate from public content
- Version comparison tools
- Export capabilities (PDF for training materials)
- Usage analytics (what's being accessed most)
- Change notifications for policy updates

---

## II. Mobile Navigation Architecture

### A. Primary Mobile Navigation (Non-Negotiable)

**Structure:**
```
┌─────────────────────────────────┐
│  [≡] Intracav Wiki    [🔍] [🌙] │  ← Header (sticky)
├─────────────────────────────────┤
│  [🔍 Search...]                 │  ← Search (prominent, always visible)
├─────────────────────────────────┤
│  Quick Access:                   │
│  [🚨 Emergency] [📋 Procedures] │  ← Fast paths (if applicable)
├─────────────────────────────────┤
│  Main Navigation:                │
│  • Policies                      │
│  • Procedures                    │
│  • Categories                    │
│  • For Clinicians                │
│  • For Teams                     │  ← Conversion touchpoint
└─────────────────────────────────┘
```

**Implementation Rules:**
1. **Hamburger menu** (≡) opens bottom sheet (not side drawer)
   - Bottom sheet: Easier one-hand reach on mobile
   - Full-height on small screens
   - Dismissible by tapping outside or swiping down

2. **Search always visible** (not hidden in menu)
   - Fixed position below header on scroll
   - 48px height minimum
   - Autocomplete with recent searches

3. **Quick access buttons** (contextual)
   - Only show if emergency/high-risk content exists
   - Large tap targets (56px minimum)
   - Icon + text label

4. **One-hand usability**
   - All interactive elements within thumb zone (bottom 2/3 of screen)
   - FAB for critical actions (if needed)
   - Swipe gestures for navigation

### B. Mobile Navigation States

**Default State:**
- Header: Logo, hamburger, search icon, theme toggle
- Search bar: Visible, collapsible
- Content: Full width

**Menu Open State:**
- Bottom sheet slides up from bottom
- Overlay dims background
- Navigation items: Large tap targets (56px)
- Sections: Collapsible for organization

**Search Active State:**
- Search bar expands to full width
- Results appear below (overlay or inline)
- Keyboard-friendly (no viewport jumping)

### C. Fast Paths to Critical Content

**Emergency Procedures:**
- Floating action button (FAB) on mobile
- Position: Bottom right, 56px diameter
- Icon: Alert triangle or medical cross
- Tap: Opens emergency procedures list

**Recent/Frequent:**
- "Recently Viewed" section on homepage
- "Most Accessed" for team standardization
- Quick links in header (if space allows)

---

## III. Visual Hierarchy & Redundancy Reduction

### A. Title Hierarchy Rules

**Page Title (H1):**
- Single, clear, descriptive
- No repetition with breadcrumbs
- No "Welcome to [Title]" patterns
- Example: "ANTT Protocol" not "ANTT Protocol - Intracav Wiki"

**Section Headers (H2-H6):**
- Clear hierarchy (size, weight, spacing)
- No decorative underlines (use borders sparingly)
- Consistent spacing above/below

**Card Titles:**
- Use H3 (not H2) for article cards
- No repetition with page title
- Truncate at 2 lines max with ellipsis

### B. Meta Information Consolidation

**Before (Redundant):**
```
Title: ANTT Protocol
Badge: Policy
Badge: Active
Date: January 2024
Category: Infection Control
Author: Clinical Standards
```

**After (Consolidated):**
```
Title: ANTT Protocol
Meta: Policy • Active • Jan 2024 • Infection Control
```

**Rules:**
- Single meta line with separators (•)
- Badges only for status (Active/Draft/Superseded)
- Category shown as text (not badge) unless filtering
- Author only on policy pages (not blog)

### C. Card Layout Optimization

**Article Card Structure:**
```
┌─────────────────────────────────────┐
│ Title (H3)                          │
│ Description (1-2 lines, truncated)  │
│ Meta: Type • Date • Category        │
└─────────────────────────────────────┘
```

**Removed:**
- Redundant badges (type + category + audience = too many)
- Author on cards (only on single pages)
- Decorative borders (use subtle shadows)
- Hover animations (distracting)

**Retained:**
- Clear title hierarchy
- Scannable description
- Essential metadata
- Tap target size (minimum 48px)

### D. Content Page Header

**Single Page Header:**
```
┌─────────────────────────────────────┐
│ [Breadcrumbs: Home / Policies]       │
│                                      │
│ Title (H1)                          │
│ Description (if exists)              │
│ Status: Active • Version 1.2.0       │
│ Effective: Jan 2024 • Next Review:   │
│   Jan 2025                           │
└─────────────────────────────────────┘
```

**Removed:**
- Duplicate title in breadcrumbs
- Multiple badge rows
- Redundant metadata blocks

**Consolidated:**
- Single status line
- Version + dates in one block
- Authority/approver only if policy

---

## IV. Conversion Architecture (Subtle Funneling)

### A. Product Positioning

**intracav.ai** (Individual/Personal)
- Position: Personal clinical intelligence & guidance
- Audience: Individual clinicians, patients
- Value: Evidence-based recommendations, personalized insights

**qpolicy.ai** (Team/Enterprise)
- Position: Policy enforcement, versioning, compliance
- Audience: Teams, hospitals, enterprises
- Value: Standardization, audit trails, team coordination

### B. Conversion Touchpoints (Non-Intrusive)

#### 1. Contextual Side-Rails

**Location:** Right sidebar (desktop), bottom (mobile)

**Content:**
```
┌─────────────────────────┐
│ For Teams               │
│                         │
│ Standardize this policy │
│ across your team with   │
│ qpolicy.ai              │
│                         │
│ [Learn More →]          │
└─────────────────────────┘
```

**Rules:**
- Only on policy pages (not blog)
- Appears after user scrolls 50% of content
- Dismissible (X button)
- No popup/overlay

#### 2. End-of-Section Affordances

**Location:** After major sections (procedures, guidelines)

**Content:**
```
Teams can standardize this procedure with version control
and compliance tracking. [Learn about qpolicy.ai →]
```

**Rules:**
- Text link only (no button)
- Appears naturally in content flow
- No sales language ("standardize" not "upgrade")

#### 3. Pathway Differentiation

**Header Navigation:**
- "For Clinicians" → Individual guidance (intracav.ai)
- "For Teams" → Team/enterprise (qpolicy.ai)

**Homepage Sections:**
- "Individual Guidance" → Links to intracav.ai
- "Team Standardization" → Links to qpolicy.ai

#### 4. Capability Framing

**In Content:**
- "Teams can standardize this..." (not "Upgrade to...")
- "For individual clinicians..." (not "Try our...")
- Natural language, not sales copy

### C. Conversion Constraints

**Never:**
- Popups or modals
- Banners that interrupt reading
- Sales language inside clinical content
- Conversion prompts on emergency/high-risk pages
- Multiple conversion prompts on same page

**Always:**
- Trust-first (content quality before conversion)
- Contextual (relevant to current content)
- Dismissible (user control)
- Subtle (doesn't distract from clinical content)

---

## V. Information Architecture

### A. Content Organization

**Primary Navigation:**
1. **Home** - Landing with search + quick access
2. **Policies** - All clinical policies (filterable)
3. **Procedures** - Step-by-step clinical procedures
4. **Categories** - Browse by topic (Vascular Access, Infection Control, etc.)
5. **For Clinicians** - Clinician-specific content (intracav.ai pathway)
6. **For Teams** - Team/enterprise content (qpolicy.ai pathway)

**Secondary Navigation (Footer/Sidebar):**
- About
- Admin (if authorized)
- Categories (full list)
- Recent Updates

### B. Search Architecture

**Search Priority:**
1. Title matches (exact)
2. Category matches
3. Content matches (full text)
4. Metadata matches (tags, keywords)

**Search Filters:**
- Content Type (Policies, Blog, Procedures)
- Category
- Audience (Clinician, Patient)
- Status (Active, Draft, Superseded)

**Search Results:**
- Title (linked)
- Description/Summary
- Meta: Type • Category • Date
- Relevance indicator (if applicable)

---

## VI. Mobile-First Layout Rules

### A. Breakpoints

```
Mobile:    320px - 767px   (primary focus)
Tablet:    768px - 1023px (optimized)
Desktop:   1024px+         (enhanced)
```

### B. Mobile Layout Principles

1. **Single Column**
   - No sidebars on mobile
   - Full-width content
   - Stacked navigation

2. **Touch Targets**
   - Minimum 48px height/width
   - 8px spacing between targets
   - No hover states (touch only)

3. **Typography**
   - Minimum 16px body text (prevents zoom on iOS)
   - Line height: 1.5 minimum
   - Headings: Clear size hierarchy

4. **Scrolling**
   - Smooth, native scrolling
   - No horizontal scroll
   - Sticky header (60px max height)

5. **Performance**
   - Lazy load images
   - Minimal JavaScript
   - Critical CSS inline

---

## VII. Accessibility Standards

### A. WCAG AAA Compliance

- Color contrast: 7:1 minimum (body text)
- Focus indicators: Visible on all interactive elements
- Keyboard navigation: Full keyboard accessibility
- Screen reader support: Semantic HTML, ARIA labels
- Text resizing: Support up to 200% zoom

### B. Clinical Context Accessibility

- High contrast mode support
- Reduced motion preferences
- Print-friendly (for offline reference)
- Offline capability (service worker for critical content)

---

## VIII. Implementation Priorities

### Phase 1: Critical (Week 1)
- [ ] Mobile navigation (bottom sheet, one-hand usable)
- [ ] Search prominence (above fold, always visible)
- [ ] Title/meta redundancy reduction
- [ ] Fast paths to emergency content

### Phase 2: Essential (Week 2)
- [ ] Card layout optimization
- [ ] Content page header consolidation
- [ ] Conversion touchpoints (subtle)
- [ ] Mobile layout refinements

### Phase 3: Enhancement (Week 3)
- [ ] Advanced search filters
- [ ] Related content suggestions
- [ ] Usage analytics integration
- [ ] Performance optimization

---

## IX. Success Metrics

### Clinical Usability
- Time to find content: <30 seconds
- Mobile usage: >60% of traffic
- Search usage: >40% of navigation
- Content trust score: >4.5/5 (user survey)

### Conversion (Secondary)
- Team pathway clicks: Track but don't optimize for
- Individual pathway clicks: Track but don't optimize for
- Conversion rate: Measure but don't prioritize over trust

---

## X. Design Principles Summary

1. **Trust > Conversion**
   - Clinical credibility first
   - No sales language in content
   - Subtle product pathways

2. **Clarity > Density**
   - Remove redundant information
   - Clear hierarchy
   - Scannable layouts

3. **Utility > Aesthetics**
   - Functional over decorative
   - Performance over polish
   - Accessibility over animation

4. **Calm > Clever**
   - Predictable patterns
   - No surprises
   - Institutional restraint

---

**Document Classification:** UX Design Specification  
**Version:** 1.0.0  
**Effective Date:** January 28, 2026  
**Authority:** Principal Healthcare UX Architect  
**Next Review:** April 28, 2026
