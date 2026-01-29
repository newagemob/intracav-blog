# Clinical Usability Checklist
## Intracav Wiki - Quality Assurance

**Purpose:** Ensure the wiki meets hospital EHR UX standards, medical device IFU quality, and payer policy portal credibility.

**Use Case:** Review before launch, after major changes, and quarterly audits.

---

## I. Point-of-Care Usability

### Mobile-First Requirements
- [ ] Search bar visible above fold on mobile (no scrolling required)
- [ ] Search input is 48px minimum height (thumb-friendly)
- [ ] All interactive elements are 48px minimum tap targets
- [ ] Navigation is one-hand usable (within thumb zone)
- [ ] No horizontal scrolling on any screen size
- [ ] Content loads in <2 seconds on 3G connection
- [ ] Critical information (warnings, contraindications) visible without scrolling

### Emergency Access
- [ ] Emergency/high-risk content has fast path (FAB or prominent link)
- [ ] Emergency procedures load in <1 second
- [ ] No conversion prompts on emergency pages
- [ ] Clear visual indicators for high-risk content

### Search Functionality
- [ ] Search is always accessible (not hidden in menu)
- [ ] Search results prioritize exact matches
- [ ] Search results show relevance indicators
- [ ] Search works offline (cached results)
- [ ] Autocomplete suggests recent searches

---

## II. Visual Clarity & Hierarchy

### Title Redundancy
- [ ] Page titles don't repeat in breadcrumbs
- [ ] Card titles don't repeat page section titles
- [ ] No "Welcome to [Title]" patterns
- [ ] H1 is used once per page (document title)

### Meta Information
- [ ] Meta badges consolidated to single line where possible
- [ ] Status badges only for document status (Active/Draft/Superseded)
- [ ] Category shown as text (not badge) unless filtering
- [ ] Author only on policy pages (not blog cards)
- [ ] Dates formatted consistently (e.g., "Jan 2024")

### Content Hierarchy
- [ ] Heading levels are sequential (no H1 → H3 skipping)
- [ ] Heading sizes create clear visual hierarchy
- [ ] Section spacing is consistent (rhythm-based)
- [ ] No decorative underlines (use borders sparingly)

---

## III. Trust & Credibility

### Clinical Authority
- [ ] Document status clearly visible (Active/Draft/Superseded)
- [ ] Version numbers displayed on policies
- [ ] Effective dates and next review dates shown
- [ ] Regulatory references (CMS/FDA) clearly marked
- [ ] Authority/approver information visible on policies

### Content Quality
- [ ] No sales language in clinical content
- [ ] Evidence levels displayed where applicable
- [ ] Citations formatted consistently
- [ ] Revision history accessible
- [ ] Superseded content clearly marked

### Institutional Restraint
- [ ] No popups or modals
- [ ] No animated decorations
- [ ] Color palette is muted (medical-grade)
- [ ] Typography prioritizes legibility over expressiveness
- [ ] No gradients or decorative elements

---

## IV. Mobile Navigation

### Navigation Structure
- [ ] Hamburger menu opens bottom sheet (not side drawer)
- [ ] Bottom sheet is dismissible (tap outside or swipe down)
- [ ] Navigation items have 56px minimum tap targets
- [ ] Search is always visible (not hidden in menu)
- [ ] Quick access buttons for emergency content (if applicable)

### One-Hand Usability
- [ ] All primary actions within thumb zone (bottom 2/3 of screen)
- [ ] FAB positioned for right-thumb reach (bottom right)
- [ ] No actions require two hands
- [ ] Swipe gestures work for navigation

### Performance
- [ ] Page loads in <2 seconds on 3G
- [ ] Images lazy-load (don't block content)
- [ ] JavaScript is minimal and non-blocking
- [ ] Critical CSS is inline

---

## V. Conversion Architecture (Subtle)

### Non-Intrusive Placement
- [ ] No popups or modals for conversion
- [ ] No banners that interrupt reading
- [ ] Conversion prompts only after user scrolls 50% of content
- [ ] Conversion prompts are dismissible
- [ ] No conversion prompts on emergency/high-risk pages

### Language & Tone
- [ ] No sales language ("standardize" not "upgrade")
- [ ] Natural language in content flow
- [ ] Product pathways use capability framing ("Teams can...")
- [ ] Trust-first messaging (content quality before conversion)

### Contextual Relevance
- [ ] Conversion prompts only on relevant pages (policies, not blog)
- [ ] Side-rail content matches current page topic
- [ ] End-of-section affordances are natural
- [ ] Pathway differentiation is clear (For Clinicians vs. For Teams)

---

## VI. Accessibility (WCAG AAA)

### Visual Accessibility
- [ ] Color contrast: 7:1 minimum for body text
- [ ] Color contrast: 4.5:1 minimum for large text (18pt+)
- [ ] Focus indicators visible on all interactive elements
- [ ] High contrast mode supported
- [ ] Text resizes up to 200% without horizontal scroll

### Keyboard Navigation
- [ ] All interactive elements keyboard accessible
- [ ] Tab order is logical
- [ ] Skip links available for main content
- [ ] Focus traps in modals (if any)

### Screen Reader Support
- [ ] Semantic HTML used (article, section, nav, etc.)
- [ ] ARIA labels on interactive elements
- [ ] Alt text on all images
- [ ] Form labels associated with inputs
- [ ] Status messages announced (aria-live)

### Reduced Motion
- [ ] Respects prefers-reduced-motion
- [ ] No auto-playing animations
- [ ] Transitions are subtle (<300ms)

---

## VII. Content Organization

### Information Architecture
- [ ] Policies clearly separated from blog content
- [ ] Categories are intuitive and consistent
- [ ] Related content suggestions at end of articles
- [ ] Breadcrumbs show clear navigation path
- [ ] Search filters work correctly

### Content Discovery
- [ ] Homepage shows clear pathways (For Clinicians, For Teams)
- [ ] Category browsing is intuitive
- [ ] "Essential Reading" section for new hires (if applicable)
- [ ] Recent updates visible
- [ ] Most accessed content highlighted (if applicable)

---

## VIII. Performance & Reliability

### Load Times
- [ ] Homepage loads in <2 seconds
- [ ] Content pages load in <2 seconds
- [ ] Search results appear in <500ms
- [ ] Images optimize automatically

### Offline Capability
- [ ] Critical content cached (service worker)
- [ ] Search works offline (cached index)
- [ ] Offline indicator visible
- [ ] Print-friendly styles available

### Error Handling
- [ ] 404 pages are helpful (suggestions, search)
- [ ] Search errors show helpful messages
- [ ] Network errors don't break the page
- [ ] Form validation is clear and helpful

---

## IX. Clinical Context Specific

### Medical Documentation Standards
- [ ] Document IDs follow consistent format
- [ ] Version numbers use semantic versioning
- [ ] Effective dates are machine-readable (ISO format)
- [ ] Regulatory references link to source (if available)
- [ ] Evidence levels displayed consistently

### Procedure Documentation
- [ ] Step-by-step procedures are numbered
- [ ] Rationale provided for each step (where applicable)
- [ ] Duration/timing information included
- [ ] Contraindications clearly marked
- [ ] Warnings use appropriate visual treatment

### Policy Documentation
- [ ] Status indicators are color-coded and clear
- [ ] Superseded content links to new version
- [ ] Revision history is accessible
- [ ] Authority/approver information visible
- [ ] Next review date displayed

---

## X. Browser & Device Testing

### Mobile Devices
- [ ] iPhone (Safari) - iOS 14+
- [ ] Android (Chrome) - Android 10+
- [ ] Tablet (iPad, Android tablet)
- [ ] Small screens (320px width minimum)

### Desktop Browsers
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Assistive Technologies
- [ ] Screen reader (NVDA, JAWS, VoiceOver)
- [ ] Keyboard-only navigation
- [ ] High contrast mode
- [ ] Zoom up to 200%

---

## XI. Pre-Launch Checklist

### Content Review
- [ ] All policies have status indicators
- [ ] All policies have version numbers
- [ ] All policies have effective dates
- [ ] Superseded content is clearly marked
- [ ] Regulatory references are accurate

### Technical Review
- [ ] All links work (no 404s)
- [ ] Search returns relevant results
- [ ] Mobile navigation works on all devices
- [ ] Print styles render correctly
- [ ] Performance meets targets

### Legal/Compliance Review
- [ ] No unapproved product claims
- [ ] Regulatory references are accurate
- [ ] Copyright notices present (if required)
- [ ] Privacy policy linked (if required)
- [ ] Terms of service linked (if required)

---

## XII. Quarterly Audit

### Usage Analytics Review
- [ ] Search query analysis (what are users looking for?)
- [ ] Page view analysis (what's most accessed?)
- [ ] Mobile vs. desktop usage
- [ ] Error rate monitoring
- [ ] Performance metrics tracking

### User Feedback
- [ ] Clinical usability survey (quarterly)
- [ ] Trust score monitoring
- [ ] Content accuracy feedback
- [ ] Feature requests tracking

### Content Maintenance
- [ ] Review superseded content (archive if needed)
- [ ] Update effective dates (schedule reviews)
- [ ] Check regulatory reference links (still valid?)
- [ ] Review and update categories (if needed)

---

## Usage Instructions

1. **Before Launch:** Complete all sections (I-XI)
2. **After Major Changes:** Review relevant sections
3. **Quarterly:** Complete section XII (Audit)
4. **Document Issues:** Track in issue tracker with "usability" label
5. **Prioritize Fixes:** Critical (point-of-care) > Essential (trust) > Enhancement

---

**Document Classification:** Quality Assurance Checklist  
**Version:** 1.0.0  
**Effective Date:** January 28, 2026  
**Authority:** Principal Healthcare UX Architect  
**Next Review:** April 28, 2026
