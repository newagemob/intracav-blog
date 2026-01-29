# Medical-Grade Design System - Implementation Guide

**Authority Level:** CMS / FDA / Epic Systems  
**Version:** 1.0.0  
**Effective Date:** January 28, 2026

---

## I. Quick Start

### Step 1: Update Hugo Configuration

Add the new CSS files to your Hugo site. Update `layouts/partials/extend_head.html`:

```html
<!-- Medical-Grade Design System -->
{{ $medicalCore := resources.Get "css/medical-core.css" }}
{{ $medicalComponents := resources.Get "css/medical-components.css" }}
{{ $medicalCss := slice $medicalCore $medicalComponents | resources.Concat "css/medical-combined.css" | resources.Minify | resources.Fingerprint }}
<link rel="stylesheet" href="{{ $medicalCss.RelPermalink }}" integrity="{{ $medicalCss.Data.Integrity }}">
```

### Step 2: Choose Your Layout Approach

**Option A: Existing Layout (Minimal Changes)**
Keep your current layout but add medical-grade components to individual pages.

**Option B: Enhanced Layout (Recommended)**
Update your `single.html` layout to use medical-grade headers:

```html
{{- define "main" }}
<article class="medical-document">
  {{- partial "document-header-enhanced.html" . -}}
  
  {{- partial "document-status-bar.html" . -}}
  
  <div class="handbook-content medical-content">
    {{ .Content }}
  </div>
  
  {{- partial "regulatory-footer-enhanced.html" . -}}
</article>
{{- end }}
```

### Step 3: Update Content

Add medical-grade metadata to your front matter:

```yaml
+++
# Document Identity
document_id = "IC-CP-001"
document_type = "clinical_policy"
title = "Your Policy Title"

# Versioning
version = "1.2.0"
effective_date = "2024-04-21"
revision_date = "2024-04-21"
next_review = "2025-04-21"
supersedes = "IC-CP-001 v1.1.0"

# Authority
author = ["Clinical Standards Committee"]
approver = "Chief Medical Officer"
authority = "Infection Control Committee"

# Classification
content_type = "policies"
category = ["Infection Control", "Clinical Guidelines"]
audience = "clinician"

# Status
status = "active"
regulatory_refs = ["CMS § 482.42", "CDC Guidelines 2022"]

# Hugo Standard
date = 2024-04-21T13:16:02-05:00
description = "Evidence-based guidance for implementation"
+++
```

---

## II. Using Medical-Grade Components

### Callout Blocks

**Information:**
```markdown
{{< callout type="info" title="Information" >}}
Standard precautions apply to all patients regardless of diagnosis.
{{< /callout >}}
```

**Warning/Caution:**
```markdown
{{< callout type="warning" title="Clinical Caution" >}}
Verify patient allergies before administering antiseptic solution.
{{< /callout >}}
```

**Critical/Contraindication:**
```markdown
{{< callout type="critical" title="Contraindication" >}}
**Do not** use chlorhexidine on patients with known hypersensitivity.
{{< /callout >}}
```

**Regulatory:**
```markdown
{{< callout type="regulatory" title="Regulatory Requirement" >}}
Required per CMS Condition of Participation § 482.42
{{< /callout >}}
```

### Evidence Levels

```markdown
This recommendation is supported by high-quality evidence 
{{< evidence "1a" "Systematic review of randomized controlled trials" >}}.
```

Available levels:
- `1a` - Systematic review of RCTs (highest)
- `1b` - Individual RCT
- `2a` - Systematic review of cohort studies
- `2b` - Individual cohort study
- `3` - Case-control study
- `4` - Case series
- `5` - Expert opinion (lowest)

### Regulatory References

```markdown
{{< regulatory source="cms" citation="CMS § 482.42" url="https://..." >}}

{{< regulatory source="fda" citation="FDA Guidance 2023" >}}

{{< regulatory source="cdc" citation="CDC Guidelines" url="https://..." >}}
```

### Procedure Lists

```markdown
## Procedure

<ol class="procedure-list">
{{< procedure-step number="1" title="Hand Hygiene" >}}
Perform hand hygiene using alcohol-based hand rub or antimicrobial soap and water.

**Duration:** Minimum 20 seconds  
**Rationale:** Reduces transient flora on hands (CDC, 2022)
{{< /procedure-step >}}

{{< procedure-step number="2" title="Prepare Equipment" >}}
Gather all necessary sterile supplies...

**Note:** Ensure all packages are unopened and within expiration date.
{{< /procedure-step >}}
</ol>
```

### Document Metadata Block

```markdown
{{< document-metadata 
    doc_id="IC-CP-001" 
    version="1.2.0" 
    effective="2024-04-21"
    authority="Infection Control Committee"
    next_review="2025-04-21"
    supersedes="IC-CP-001 v1.1.0"
>}}
```

### Clinical Tables

```markdown
{{< table-clinical caption="Table 1: Recommended Antiseptic Solutions by Site" >}}
| Site | Recommended Agent | Contact Time | Evidence Level |
|------|-------------------|--------------|----------------|
| Central line insertion | 2% Chlorhexidine gluconate | 30 seconds | {{< evidence "1a" >}} |
| Peripheral IV | 2% Chlorhexidine or 70% alcohol | 30 seconds | {{< evidence "1b" >}} |
{{< /table-clinical >}}
```

### Superseded Document Alert

```markdown
{{< alert-superseded 
    replacement="New ANTT Protocol 2025" 
    link="/policies/antt-2025" 
    date="2025-01-15"
>}}
```

---

## III. Front Matter Schemas

### Clinical Policy

```yaml
+++
# Document Identity
document_id = "XX-XX-000"
document_type = "clinical_policy"
title = ""

# Versioning
version = "1.0.0"
effective_date = "2024-01-01"
revision_date = "2024-01-01"
next_review = "2025-01-01"
supersedes = ""

# Authority
author = [""]
approver = ""
authority = ""

# Classification
content_type = "policies"
category = [""]
audience = "clinician"
clinical_domain = [""]

# Status
status = "active"
regulatory_refs = [""]

# Hugo Standard
date = 2024-01-01T00:00:00-00:00
description = ""
+++
```

### Clinical Guideline

Same as policy, but:
```yaml
document_type = "clinical_guideline"
content_type = "policies"
```

### Procedure

Same as policy, but:
```yaml
document_type = "procedure"
content_type = "policies"
```

### Research/Blog

```yaml
+++
title = ""
date = 2024-01-01T00:00:00-00:00
content_type = "blog"
category = [""]
tags = [""]
author = [""]
description = ""
+++
```

---

## IV. CSS Class Reference

### Typography

```css
.text-primary         /* Primary text color */
.text-secondary       /* Secondary text color */
.text-tertiary        /* Tertiary text color */

.text-normative       /* Normative language (must, shall) */
.text-advisory        /* Advisory language (should, recommended) */
.text-warning         /* Warning/caution text */

.font-regular         /* Regular weight */
.font-medium          /* Medium weight */
.font-semibold        /* Semibold weight */
.font-bold            /* Bold weight */
```

### Badges

```html
<span class="badge badge-policy">Policy</span>
<span class="badge badge-guideline">Guideline</span>
<span class="badge badge-procedure">Procedure</span>
```

### Status Indicators

```html
<span class="status-badge status-active">Active</span>
<span class="status-badge status-draft">Draft</span>
<span class="status-badge status-review">Review</span>
<span class="status-badge status-superseded">Superseded</span>
```

### Links & References

```html
<a href="/policies/other" class="ref-internal">See Hand Hygiene Protocol</a>

<a href="#ref-1" class="ref-citation"><sup>[1]</sup></a>
```

---

## V. Example Document Structure

Here's a complete example of a medical-grade policy document:

```markdown
+++
document_id = "IC-CP-001"
document_type = "clinical_policy"
title = "Aseptic Non-Touch Technique (ANTT®) in Clinical Practice"
version = "1.2.0"
effective_date = "2024-04-21"
revision_date = "2024-04-21"
next_review = "2025-04-21"
supersedes = "IC-CP-001 v1.1.0"
author = ["Infection Control Committee"]
approver = "Chief Medical Officer"
authority = "Infection Control Committee"
content_type = "policies"
category = ["Infection Control", "Clinical Guidelines"]
audience = "clinician"
status = "active"
regulatory_refs = ["CMS § 482.42", "CDC Guidelines 2022"]
date = 2024-04-21T13:16:02-05:00
description = "Evidence-based guidance for ANTT implementation"
+++

## Executive Summary

The ASEPTIC NON-TOUCH TECHNIQUE (ANTT®) is a pivotal approach in infection control during invasive clinical procedures. {{< evidence "1a" >}}

## Scope

This policy applies to all clinical staff performing invasive procedures or managing indwelling medical devices.

{{< callout type="regulatory" title="Regulatory Requirement" >}}
Required per {{< regulatory source="cms" citation="CMS § 482.42" >}}
{{< /callout >}}

## Definitions

**Aseptic Technique**: The fundamental practice of preventing infections during invasive procedures by maintaining a sterile environment.

**ANTT®**: A specialized theory-practice framework that emphasizes Key-Part and Key-Site Protection.

## Policy Statement

{{< callout type="info" title="Policy" >}}
All clinical staff **shall** utilize ANTT principles when performing invasive procedures or managing invasive medical devices.
{{< /callout >}}

## Procedure

<ol class="procedure-list">
{{< procedure-step number="1" title="Hand Hygiene" >}}
Perform hand hygiene using alcohol-based hand rub or antimicrobial soap and water.

**Duration:** Minimum 20 seconds  
**Rationale:** Reduces transient flora on hands
{{< /procedure-step >}}

{{< procedure-step number="2" title="Prepare Aseptic Field" >}}
Set up sterile field using sterile drape...

**Note:** Maintain 1-meter perimeter around sterile field
{{< /procedure-step >}}
</ol>

## Clinical Recommendations

{{< table-clinical caption="Table 1: Recommended Antiseptic Solutions" >}}
| Site | Agent | Contact Time | Evidence |
|------|-------|--------------|----------|
| Central line | 2% CHG | 30 sec | {{< evidence "1a" >}} |
{{< /table-clinical >}}

## Contraindications

{{< callout type="critical" title="Contraindication" >}}
**Do not** use chlorhexidine on patients with known hypersensitivity.
{{< /callout >}}

## References

1. Centers for Disease Control and Prevention. Guidelines for the Prevention of Intravascular Catheter-Related Infections. MMWR. 2022;71(RR-9):1-28.

---

**Document Classification:** Clinical Policy  
**Version:** 1.2.0  
**Effective Date:** April 21, 2024  
**Authority:** Infection Control Committee  
**Next Review:** April 21, 2025
```

---

## VI. Migration Path

### Phase 1: CSS Implementation (Week 1)
1. ✅ Add `medical-core.css` to `assets/css/`
2. ✅ Add `medical-components.css` to `assets/css/`
3. Update `extend_head.html` to include new CSS
4. Test on a single page

### Phase 2: Shortcodes (Week 1)
1. ✅ Add all shortcodes to `layouts/shortcodes/`
2. Test each shortcode individually
3. Update one existing article as pilot

### Phase 3: Layout Partials (Week 2)
1. ✅ Add layout partials
2. Update `single.html` layout (or create new layout for policies)
3. Test with existing content

### Phase 4: Content Updates (Week 2-3)
1. Update front matter for existing policies
2. Add medical-grade metadata
3. Replace basic formatting with shortcodes
4. Add regulatory references

### Phase 5: Archetype Templates (Week 3)
1. ✅ Create archetype for clinical policies
2. Create archetype for guidelines
3. Create archetype for procedures
4. Update documentation

### Phase 6: Documentation & Training (Week 4)
1. Create author guidelines
2. Create style guide
3. Train content authors
4. Establish governance process

---

## VII. Testing Checklist

### Visual Testing
- [ ] Document headers display correctly
- [ ] Callout blocks have correct colors and borders
- [ ] Evidence badges render properly
- [ ] Procedure lists have correct spacing
- [ ] Tables are responsive
- [ ] Dark mode works correctly
- [ ] Print styles work (Cmd/Ctrl + P)

### Accessibility Testing
- [ ] Keyboard navigation works
- [ ] Screen reader compatibility (test with VoiceOver/NVDA)
- [ ] Color contrast meets WCAG AAA
- [ ] Focus indicators visible
- [ ] ARIA labels present
- [ ] Heading hierarchy correct

### Cross-Browser Testing
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari
- [ ] Mobile browsers

### Content Testing
- [ ] Metadata displays correctly
- [ ] Links work (internal and external)
- [ ] Shortcodes render without errors
- [ ] Citations are formatted properly
- [ ] Regulatory references display correctly

---

## VIII. Troubleshooting

### CSS Not Loading
- Check that `extend_head.html` is in correct location
- Verify CSS files are in `assets/css/`
- Clear Hugo cache: `hugo --gc`
- Check browser console for errors

### Shortcodes Not Rendering
- Verify shortcodes are in `layouts/shortcodes/`
- Check for typos in shortcode names
- Ensure closing tags match opening tags
- Test with `hugo server` to see errors

### Metadata Not Displaying
- Verify front matter YAML/TOML syntax
- Check that partial is called in layout
- Ensure dates are in correct format (YYYY-MM-DD)
- Check Hugo version (requires 0.112.4+)

### Dark Mode Issues
- Ensure `.dark` class is applied to body
- Check that theme toggle script works
- Verify CSS custom properties are overridden

---

## IX. Support & Resources

### Documentation
- **Design System Spec:** `/DESIGN_SYSTEM.md`
- **Implementation Guide:** This document
- **Content Structure:** `/CONTENT_STRUCTURE.md`

### Hugo Documentation
- [Hugo Shortcodes](https://gohugo.io/content-management/shortcodes/)
- [Hugo Templates](https://gohugo.io/templates/)
- [Hugo Front Matter](https://gohugo.io/content-management/front-matter/)

### Accessibility Resources
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

---

## X. Maintenance

### Regular Reviews
- **Monthly:** Review new content for compliance
- **Quarterly:** Audit accessibility standards
- **Annually:** Review design system for updates

### Version Control
- All design system changes must be documented
- Breaking changes require migration guide
- Maintain backward compatibility when possible

### Governance
- Design system changes require approval
- New components require documentation
- Deprecated patterns must have sunset timeline

---

**Document Classification:** Implementation Guide  
**Version:** 1.0.0  
**Effective Date:** January 28, 2026  
**Authority:** Design Systems Engineering
