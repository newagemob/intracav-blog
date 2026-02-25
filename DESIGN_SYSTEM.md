# Medical-Grade Design System
## MedWiki Documentation Portal

**Design Authority Level:** CMS / FDA / Epic Systems Internal Documentation  
**Revision:** 1.0.0  
**Effective Date:** January 28, 2026  
**Classification:** Design System Specification

---

## I. Executive Summary

This design system elevates the MedWiki from a functional documentation site to a medical-grade knowledge portal suitable for healthcare institutions, regulatory bodies, and clinical decision-making environments.

**Design Philosophy:** Institutional restraint. Clinical precision. Regulatory confidence.

**Core Principle:** If it cannot survive a CMS audit, legal discovery, or FDA inspection, it does not belong in this system.

---

## II. Typography System

### A. Type Scale & Hierarchy

Medical documentation requires exceptional legibility for dense clinical text. The typography system prioritizes readability over expressiveness.

#### Primary Typeface Stack

```css
--font-family-base: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", 
                     Roboto, "Helvetica Neue", Arial, sans-serif;
--font-family-mono: "IBM Plex Mono", "Monaco", "Menlo", "Courier New", monospace;
--font-family-serif: "Charter", "Georgia", "Times New Roman", serif;
```

**Rationale:**
- **Inter**: Designed for screen legibility, clinical precision
- **IBM Plex Mono**: Medical code/data display, not decorative
- **Charter**: For quoted regulations, legal text, formal citations

#### Type Scale (Medical Context)

```css
/* Policy Headers */
--text-6xl: 2.5rem;    /* 40px - Document Title */
--text-5xl: 2rem;      /* 32px - Section Header (Level 1) */
--text-4xl: 1.75rem;   /* 28px - Section Header (Level 2) */
--text-3xl: 1.5rem;    /* 24px - Subsection Header */
--text-2xl: 1.25rem;   /* 20px - Procedure Step */
--text-xl:  1.125rem;  /* 18px - Emphasis */
--text-base: 1rem;     /* 16px - Body Text (Primary) */
--text-sm: 0.875rem;   /* 14px - Metadata, Citations */
--text-xs: 0.75rem;    /* 12px - Microcopy, Footnotes */
```

#### Line Height (Clinical Reading)

```css
--leading-tight: 1.25;   /* Headings */
--leading-snug: 1.375;   /* Subheadings */
--leading-normal: 1.5;   /* Body text (minimum) */
--leading-relaxed: 1.625; /* Long-form clinical documentation */
--leading-loose: 1.75;   /* Contraindications, warnings */
```

**Standard:** Body text never below 1.5 line height. Clinical procedures at 1.625 minimum.

#### Font Weights

```css
--font-regular: 400;   /* Body text */
--font-medium: 500;    /* Subheadings, emphasis */
--font-semibold: 600;  /* Section headers */
--font-bold: 700;      /* Warnings only */
```

**Constraint:** Never use font-weight above 700. Institutional documentation avoids bold-heavy typography.

### B. Semantic Text Roles

#### Normative Language
Text conveying requirements, obligations, or prohibitions.

```css
.text-normative {
  font-weight: 600;
  font-family: var(--font-family-serif);
  color: var(--color-text-primary);
}
```

**Usage:** "shall", "must", "required", "prohibited"  
**Rendering:** Slight boldness, serif font for legal weight

#### Advisory Language
Text conveying recommendations or best practices.

```css
.text-advisory {
  font-weight: 400;
  font-style: normal;
  color: var(--color-text-secondary);
}
```

**Usage:** "should", "recommended", "consider"  
**Rendering:** Standard weight, slightly muted

#### Contraindications & Warnings
Critical safety information.

```css
.text-warning {
  font-weight: 600;
  line-height: 1.75;
  color: var(--color-warning-text);
  letter-spacing: 0.01em;
}
```

**Rendering:** Increased line-height and letter-spacing for safety-critical text

---

## III. Color System

### A. Core Palette

Medical-grade color systems are **deliberately muted**. No gradients. No saturated blues. No startup energy.

#### Neutral Base (Primary)

```css
/* Light Mode */
--color-white: #FFFFFF;
--color-neutral-50: #F9FAFB;   /* Page background */
--color-neutral-100: #F3F4F6;  /* Section background */
--color-neutral-200: #E5E7EB;  /* Borders (primary) */
--color-neutral-300: #D1D5DB;  /* Borders (subtle) */
--color-neutral-400: #9CA3AF;  /* Disabled text */
--color-neutral-500: #6B7280;  /* Secondary text */
--color-neutral-600: #4B5563;  /* Tertiary text */
--color-neutral-700: #374151;  /* Body text */
--color-neutral-800: #1F2937;  /* Headings */
--color-neutral-900: #111827;  /* Emphasis */
--color-black: #000000;
```

#### Dark Mode Adjustments

```css
/* Dark Mode */
--color-dark-bg-primary: #0A0A0B;      /* Page background */
--color-dark-bg-secondary: #17181A;    /* Content containers */
--color-dark-bg-tertiary: #25262B;     /* Elevated surfaces */
--color-dark-border: #2C2E33;          /* Borders */
--color-dark-text-primary: #E0E0E3;    /* Body text */
--color-dark-text-secondary: #A0A0A8;  /* Metadata */
--color-dark-text-tertiary: #707078;   /* Disabled */
```

**Rationale:** Darker than typical dark modes for clinical evening reading. Reduces eye strain during long documentation review.

### B. Semantic Colors

#### Informational (Policy, Guidelines)

```css
--color-info-bg: #EFF6FF;      /* Background */
--color-info-border: #BFDBFE;  /* Border */
--color-info-text: #1E3A8A;    /* Text */
--color-info-accent: #3B82F6;  /* Accent (minimal use) */
```

**Usage:** General information, non-critical guidance

#### Success (Approved, Validated)

```css
--color-success-bg: #F0FDF4;
--color-success-border: #BBF7D0;
--color-success-text: #14532D;
--color-success-accent: #16A34A;
```

**Usage:** Approved protocols, validated procedures

#### Warning (Caution, Review Required)

```css
--color-warning-bg: #FFFBEB;
--color-warning-border: #FDE68A;
--color-warning-text: #78350F;
--color-warning-accent: #F59E0B;
```

**Usage:** Items requiring attention, pending review

#### Critical (Danger, Contraindication)

```css
--color-critical-bg: #FEF2F2;
--color-critical-border: #FECACA;
--color-critical-text: #7F1D1D;
--color-critical-accent: #DC2626;
```

**Usage:** Contraindications, safety warnings, prohibited actions

#### Regulatory (Compliance, Citations)

```css
--color-regulatory-bg: #F5F3FF;
--color-regulatory-border: #DDD6FE;
--color-regulatory-text: #4C1D95;
--color-regulatory-accent: #7C3AED;
```

**Usage:** FDA references, CMS citations, regulatory requirements

### C. Interactive States

```css
/* Links */
--color-link-default: #1E40AF;     /* Unvisited */
--color-link-hover: #1E3A8A;       /* Hover */
--color-link-active: #172554;      /* Active */
--color-link-visited: #4C1D95;     /* Visited (subtle) */

/* Focus States (Accessibility) */
--color-focus-ring: #3B82F6;
--color-focus-ring-offset: 2px;
```

**Standard:** All interactive elements must have visible focus states for accessibility compliance.

### D. Contrast Requirements

**WCAG AAA Compliance (Medical Standard)**

- Body text: Minimum 7:1 contrast ratio
- Large text (18pt+): Minimum 4.5:1 contrast ratio
- Interactive elements: Minimum 4.5:1 contrast ratio

**Rationale:** Medical professionals may review documentation in suboptimal lighting (on-call rooms, emergency situations). AAA standard ensures legibility.

---

## IV. Spacing & Layout System

### A. Spatial Scale

```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

### B. Content Width Constraints

```css
--width-prose: 68ch;         /* Optimal reading width (primary) */
--width-prose-wide: 80ch;    /* Wide-format tables, procedures */
--width-content: 900px;      /* Main content container */
--width-sidebar: 280px;      /* Navigation sidebar */
--width-max: 1400px;         /* Maximum page width */
```

**Rationale:** 
- 68 characters = optimal reading width for medical documentation
- Wide enough for clinical tables without horizontal scroll
- Narrow enough to prevent eye fatigue during long reading sessions

### C. Vertical Rhythm

```css
/* Section Spacing */
--rhythm-section: 4rem;      /* Between major sections */
--rhythm-subsection: 2.5rem; /* Between subsections */
--rhythm-paragraph: 1.25rem; /* Between paragraphs */
--rhythm-list: 0.75rem;      /* Between list items */
```

**Standard:** All vertical spacing must align to 4px baseline grid for visual consistency.

---

## V. Component Design Patterns

### A. Document Header

**Purpose:** Establish authority, provide metadata, signal document type

```html
<header class="document-header">
  <div class="document-classification">
    <span class="classification-badge classification-policy">Clinical Policy</span>
    <span class="classification-status status-active">Active</span>
  </div>
  
  <h1 class="document-title">
    Aseptic Non-Touch Technique (ANTT®) in Clinical Practice
  </h1>
  
  <div class="document-metadata">
    <dl class="metadata-grid">
      <dt>Effective Date:</dt>
      <dd><time datetime="2024-04-21">April 21, 2024</time></dd>
      
      <dt>Document ID:</dt>
      <dd>IC-CP-001</dd>
      
      <dt>Revision:</dt>
      <dd>1.2.0</dd>
      
      <dt>Authority:</dt>
      <dd>Infection Control Committee</dd>
      
      <dt>Next Review:</dt>
      <dd><time datetime="2025-04-21">April 21, 2025</time></dd>
    </dl>
  </div>
</header>
```

**Visual Treatment:**
- Thin top border (1px, neutral-300)
- Metadata in definition list format (clinical precision)
- No decorative elements
- Ample whitespace for scanning

### B. Callout Blocks

#### Information Block

```html
<aside class="callout callout-info">
  <div class="callout-header">
    <span class="callout-icon" aria-hidden="true">ⓘ</span>
    <h4 class="callout-title">Information</h4>
  </div>
  <div class="callout-content">
    <p>Standard precautions apply to all patients regardless of diagnosis.</p>
  </div>
</aside>
```

#### Warning Block (Clinical Caution)

```html
<aside class="callout callout-warning">
  <div class="callout-header">
    <span class="callout-icon" aria-hidden="true">⚠</span>
    <h4 class="callout-title">Caution</h4>
  </div>
  <div class="callout-content">
    <p>Verify patient allergies before administering antiseptic solution.</p>
  </div>
</aside>
```

#### Critical Warning (Contraindication)

```html
<aside class="callout callout-critical">
  <div class="callout-header">
    <span class="callout-icon" aria-hidden="true">⊗</span>
    <h4 class="callout-title">Contraindication</h4>
  </div>
  <div class="callout-content">
    <p><strong>Do not</strong> use chlorhexidine on patients with known hypersensitivity.</p>
  </div>
</aside>
```

#### Regulatory Reference

```html
<aside class="callout callout-regulatory">
  <div class="callout-header">
    <span class="callout-icon" aria-hidden="true">§</span>
    <h4 class="callout-title">Regulatory Requirement</h4>
  </div>
  <div class="callout-content">
    <p>Required per CMS Condition of Participation § 482.42</p>
  </div>
</aside>
```

**Visual Specifications:**
- Left border: 4px, semantic color
- Background: Semantic bg color (subtle, <5% opacity)
- Border: 1px solid semantic border color
- Padding: 1.25rem
- Border radius: 0 (institutional preference) or 4px maximum
- Icon: Monochrome, semantic color, 20px

### C. Evidence Levels

For clinical guidelines requiring evidence citations:

```html
<span class="evidence-level evidence-level-1a">
  <abbr title="Systematic review of randomized controlled trials">Level 1A</abbr>
</span>
```

**Evidence Level Scale:**
- **1A**: Systematic review of RCTs (darkest)
- **1B**: Individual RCT
- **2A**: Systematic review of cohort studies
- **2B**: Individual cohort study
- **3**: Case-control study
- **4**: Case series
- **5**: Expert opinion (lightest)

**Visual Treatment:**
- Inline badge
- Monospace font
- Neutral-600 background
- White or neutral-100 text
- 2px padding
- No border-radius (regulatory preference)

### D. Procedure Lists

Medical procedures require numbered, hierarchical steps:

```html
<ol class="procedure-list">
  <li class="procedure-step">
    <strong class="step-number">1.</strong>
    <div class="step-content">
      <h4 class="step-title">Hand Hygiene</h4>
      <p class="step-description">
        Perform hand hygiene using alcohol-based hand rub or antimicrobial soap and water.
      </p>
      <div class="step-duration">
        <strong>Duration:</strong> Minimum 20 seconds
      </div>
      <div class="step-rationale">
        <strong>Rationale:</strong> Reduces transient flora on hands (CDC, 2022)
      </div>
    </div>
  </li>
</ol>
```

**Visual Specifications:**
- Step number: Semibold, larger size, separate column
- Step content: Indented, generous line-height
- Rationale: Smaller text, italic, muted color
- Citations: Inline, small, neutral-500

### E. Tables (Clinical Data)

```html
<table class="table-clinical">
  <caption class="table-caption">
    Table 1: Recommended Antiseptic Solutions by Site
  </caption>
  <thead>
    <tr>
      <th scope="col">Site</th>
      <th scope="col">Recommended Agent</th>
      <th scope="col">Contact Time</th>
      <th scope="col">Evidence Level</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Central line insertion</td>
      <td>2% Chlorhexidine gluconate</td>
      <td>30 seconds</td>
      <td><span class="evidence-level evidence-level-1a">1A</span></td>
    </tr>
  </tbody>
</table>
```

**Visual Specifications:**
- Caption: Above table, semibold, neutral-700
- Header: Background neutral-100, border-bottom 2px neutral-300
- Cells: Border-bottom 1px neutral-200
- Padding: 0.75rem (comfortable for scanning)
- Hover: Row highlight neutral-50 (subtle)
- No zebra striping (reduces clinical data scanning efficiency)

### F. Revision History

Essential for regulatory compliance:

```html
<section class="revision-history">
  <h2 class="revision-title">Revision History</h2>
  <table class="table-revisions">
    <thead>
      <tr>
        <th scope="col">Version</th>
        <th scope="col">Date</th>
        <th scope="col">Changes</th>
        <th scope="col">Author</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1.2.0</td>
        <td><time datetime="2024-04-21">2024-04-21</time></td>
        <td>Updated antiseptic recommendations per new CDC guidance</td>
        <td>Clinical Standards Committee</td>
      </tr>
    </tbody>
  </table>
</section>
```

### G. Citations & References

```html
<section class="references">
  <h2>References</h2>
  <ol class="reference-list">
    <li class="reference-item" id="ref-1">
      <span class="reference-authors">Centers for Disease Control and Prevention.</span>
      <span class="reference-title">Guidelines for the Prevention of Intravascular Catheter-Related Infections.</span>
      <span class="reference-publication">MMWR.</span>
      <time datetime="2022">2022</time>;
      <span class="reference-volume">71(RR-9)</span>:1-28.
      <a href="https://doi.org/..." class="reference-doi">https://doi.org/...</a>
    </li>
  </ol>
</section>
```

**Visual Specifications:**
- Hanging indent (first line outdented)
- Neutral-600 text
- Smaller font size (0.875rem)
- DOI links in monospace font
- Section at document end

---

## VI. Information Architecture

### A. Document Types

```
├── Policies (Normative)
│   ├── Clinical Policies
│   ├── Safety Policies
│   └── Operational Policies
│
├── Guidelines (Advisory)
│   ├── Clinical Guidelines
│   ├── Best Practices
│   └── Recommendations
│
├── Procedures (Instructional)
│   ├── Standard Operating Procedures (SOPs)
│   ├── Clinical Procedures
│   └── Technical Procedures
│
├── Standards (Regulatory)
│   ├── Compliance Standards
│   ├── Quality Standards
│   └── Safety Standards
│
└── References (Supporting)
    ├── Research Summaries
    ├── Evidence Reviews
    └── Technical References
```

### B. Metadata Schema

Every document must include:

```yaml
---
# Document Identity
document_id: "IC-CP-001"           # Unique identifier
document_type: "clinical_policy"   # Type classification
title: "Aseptic Non-Touch Technique"

# Versioning
version: "1.2.0"                   # Semantic versioning
effective_date: "2024-04-21"       # When it takes effect
revision_date: "2024-04-21"        # Last modified
next_review: "2025-04-21"          # Scheduled review
supersedes: "IC-CP-001 v1.1.0"     # Previous version

# Authority
author: ["Clinical Standards Committee"]
approver: "Chief Medical Officer"
authority: "Infection Control Committee"

# Classification
content_type: "policies"           # Hugo taxonomy
category: ["Infection Control", "Clinical Guidelines"]
audience: "clinician"              # Target audience
clinical_domain: ["Vascular Access", "Infection Prevention"]

# Status
status: "active"                   # active | draft | superseded | archived
regulatory_refs: ["CMS § 482.42", "CDC 2022 Guidelines"]

# Content
description: "Evidence-based guidance for ANTT implementation"
keywords: ["ANTT", "aseptic technique", "infection control"]
---
```

### C. Document Status Indicators

```css
/* Status Badges */
.status-draft      { background: var(--color-warning-bg); }
.status-review     { background: var(--color-info-bg); }
.status-active     { background: var(--color-success-bg); }
.status-superseded { background: var(--color-neutral-100); }
.status-archived   { background: var(--color-neutral-100); }
```

### D. Cross-Reference System

```html
<!-- Internal Reference -->
<a href="/policies/infection-control/hand-hygiene" class="ref-internal">
  See Hand Hygiene Protocol (IC-CP-002)
</a>

<!-- External Regulatory Reference -->
<a href="..." class="ref-regulatory" data-source="cms">
  CMS Condition of Participation § 482.42
</a>

<!-- Citation Reference -->
<a href="#ref-1" class="ref-citation">
  <sup>[1]</sup>
</a>
```

**Visual Treatment:**
- Internal refs: Standard link color
- Regulatory refs: Purple accent, § symbol
- Citations: Superscript, neutral-500, bracketed

---

## VII. Hugo Implementation

### A. Shortcodes for Medical Semantics

#### `{{< callout >}}`

```go
<!-- layouts/shortcodes/callout.html -->
{{- $type := .Get "type" | default "info" -}}
{{- $title := .Get "title" | default "" -}}
<aside class="callout callout-{{ $type }}">
  {{- if $title -}}
  <div class="callout-header">
    <h4 class="callout-title">{{ $title }}</h4>
  </div>
  {{- end -}}
  <div class="callout-content">
    {{ .Inner | markdownify }}
  </div>
</aside>
```

**Usage:**
```markdown
{{< callout type="warning" title="Clinical Caution" >}}
Verify patient allergies before proceeding.
{{< /callout >}}
```

#### `{{< evidence >}}`

```go
<!-- layouts/shortcodes/evidence.html -->
{{- $level := .Get 0 -}}
{{- $description := .Get 1 | default "" -}}
<span class="evidence-level evidence-level-{{ $level | lower }}">
  <abbr title="{{ $description }}">Level {{ $level | upper }}</abbr>
</span>
```

**Usage:**
```markdown
This recommendation is supported by high-quality evidence 
{{< evidence "1a" "Systematic review of randomized controlled trials" >}}.
```

#### `{{< regulatory >}}`

```go
<!-- layouts/shortcodes/regulatory.html -->
{{- $source := .Get "source" -}}
{{- $citation := .Get "citation" -}}
{{- $url := .Get "url" | default "" -}}
<span class="regulatory-reference ref-{{ $source | lower }}">
  <span class="regulatory-symbol">§</span>
  {{- if $url -}}
  <a href="{{ $url }}" class="regulatory-link">{{ $citation }}</a>
  {{- else -}}
  {{ $citation }}
  {{- end -}}
</span>
```

**Usage:**
```markdown
{{< regulatory source="cms" citation="CMS § 482.42" url="https://..." >}}
```

#### `{{< document-header >}}`

```go
<!-- layouts/shortcodes/document-header.html -->
<div class="document-metadata-block">
  <dl class="metadata-grid">
    {{- with .Get "doc_id" -}}
    <dt>Document ID:</dt><dd>{{ . }}</dd>
    {{- end -}}
    {{- with .Get "version" -}}
    <dt>Version:</dt><dd>{{ . }}</dd>
    {{- end -}}
    {{- with .Get "effective" -}}
    <dt>Effective Date:</dt><dd><time datetime="{{ . }}">{{ dateFormat "January 2, 2006" (time .) }}</time></dd>
    {{- end -}}
    {{- with .Get "authority" -}}
    <dt>Authority:</dt><dd>{{ . }}</dd>
    {{- end -}}
  </dl>
</div>
```

#### `{{< procedure-step >}}`

```go
<!-- layouts/shortcodes/procedure-step.html -->
{{- $number := .Get "number" -}}
{{- $title := .Get "title" -}}
<li class="procedure-step" id="step-{{ $number }}">
  <strong class="step-number">{{ $number }}.</strong>
  <div class="step-content">
    {{- if $title -}}<h4 class="step-title">{{ $title }}</h4>{{- end -}}
    {{ .Inner | markdownify }}
  </div>
</li>
```

**Usage:**
```markdown
<ol class="procedure-list">
{{< procedure-step number="1" title="Hand Hygiene" >}}
Perform hand hygiene using alcohol-based hand rub...
**Duration:** 20 seconds
{{< /procedure-step >}}
</ol>
```

### B. Layout Partials

#### `layouts/partials/document-status.html`

```go
{{- $status := .Params.status | default "active" -}}
{{- $version := .Params.version | default "" -}}
{{- $effective := .Params.effective_date -}}

<div class="document-status-bar">
  <span class="status-badge status-{{ $status }}">{{ $status | title }}</span>
  {{- if $version -}}
  <span class="version-badge">Version {{ $version }}</span>
  {{- end -}}
  {{- if $effective -}}
  <span class="effective-date">
    Effective: <time datetime="{{ $effective }}">{{ dateFormat "Jan 2, 2006" (time $effective) }}</time>
  </span>
  {{- end -}}
  {{- if .Params.supersedes -}}
  <span class="supersedes-notice">
    Supersedes: {{ .Params.supersedes }}
  </span>
  {{- end -}}
</div>
```

#### `layouts/partials/regulatory-footer.html`

```go
{{- with .Params.regulatory_refs -}}
<footer class="regulatory-footer">
  <h4 class="regulatory-footer-title">Regulatory References</h4>
  <ul class="regulatory-ref-list">
    {{- range . -}}
    <li>{{ . }}</li>
    {{- end -}}
  </ul>
</footer>
{{- end -}}
```

### C. Front Matter Template

```toml
# layouts/archetypes/policy.md
+++
# Document Identity
document_id = "XX-XX-000"
document_type = "clinical_policy"
title = ""

# Versioning
version = "1.0.0"
effective_date = ""
revision_date = ""
next_review = ""
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
status = "draft"
regulatory_refs = [""]

# Hugo Metadata
date = {{ .Date }}
description = ""
+++
```

---

## VIII. CSS Architecture

### A. File Structure

```
assets/css/
├── medical-core.css          # Core design system tokens
├── medical-layout.css        # Layout patterns
├── medical-components.css    # Component styles
├── medical-typography.css    # Typography system
├── medical-tables.css        # Clinical tables
└── medical-print.css         # Print styles (audit-ready)
```

### B. CSS Custom Properties Organization

```css
/* assets/css/medical-core.css */
:root {
  /* ========================================
     TYPOGRAPHY TOKENS
     ======================================== */
  --font-family-base: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-family-mono: "IBM Plex Mono", monospace;
  --font-family-serif: "Charter", Georgia, serif;
  
  /* Type Scale */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  /* ... etc ... */
  
  /* ========================================
     COLOR TOKENS
     ======================================== */
  /* Neutrals */
  --color-neutral-50: #F9FAFB;
  /* ... etc ... */
  
  /* Semantic Colors */
  --color-info-bg: #EFF6FF;
  /* ... etc ... */
  
  /* ========================================
     SPACING TOKENS
     ======================================== */
  --space-1: 0.25rem;
  /* ... etc ... */
  
  /* ========================================
     LAYOUT TOKENS
     ======================================== */
  --width-prose: 68ch;
  --width-sidebar: 280px;
  /* ... etc ... */
}

/* Dark Mode Overrides */
@media (prefers-color-scheme: dark) {
  :root {
    --color-text-primary: var(--color-dark-text-primary);
    /* ... etc ... */
  }
}
```

### C. Naming Conventions

**Pattern:** `{component}-{element}-{modifier}`

```css
/* Component */
.callout { }

/* Element */
.callout-header { }
.callout-title { }
.callout-content { }

/* Modifier */
.callout-warning { }
.callout-critical { }
```

**No BEM.** Medical documentation uses simple, semantic naming.

---

## IX. Accessibility Standards

### A. WCAG AAA Compliance

**Required for Medical Documentation**

- Color contrast: 7:1 minimum for body text
- Focus indicators: Visible on all interactive elements
- Keyboard navigation: Full keyboard accessibility
- Screen reader support: Semantic HTML, ARIA labels
- Text resizing: Support up to 200% zoom without horizontal scroll

### B. Semantic HTML Requirements

```html
<!-- Use semantic elements -->
<article>      <!-- For documents -->
<section>      <!-- For major sections -->
<aside>        <!-- For callouts, warnings -->
<dl>           <!-- For metadata -->
<figure>       <!-- For images, diagrams -->
<figcaption>   <!-- For captions -->
<time>         <!-- For dates -->
<abbr>         <!-- For acronyms -->
```

### C. ARIA Patterns

```html
<!-- Document landmarks -->
<nav aria-label="Document navigation">...</nav>
<main aria-label="Document content">...</main>
<aside aria-label="Related information">...</aside>

<!-- Status messages -->
<div role="status" aria-live="polite">Document updated</div>
<div role="alert" aria-live="assertive">Critical warning</div>

<!-- Expandable sections -->
<button aria-expanded="false" aria-controls="section-1">
  Expand Section
</button>
<div id="section-1" aria-hidden="true">...</div>
```

---

## X. Print Styles (Audit-Ready)

Medical documentation must print cleanly for regulatory review, legal discovery, and offline reference.

```css
/* assets/css/medical-print.css */
@media print {
  /* Page setup */
  @page {
    size: 8.5in 11in;
    margin: 0.75in;
  }
  
  /* Typography */
  body {
    font-family: Charter, Georgia, serif;
    font-size: 11pt;
    line-height: 1.5;
    color: #000;
  }
  
  /* Headers */
  h1 { font-size: 18pt; }
  h2 { font-size: 16pt; }
  h3 { font-size: 14pt; }
  
  /* Avoid breaks */
  h1, h2, h3, h4, h5, h6 {
    page-break-after: avoid;
    page-break-inside: avoid;
  }
  
  .callout,
  .procedure-step,
  table {
    page-break-inside: avoid;
  }
  
  /* Remove interactive elements */
  button,
  .theme-toggle,
  nav[role="navigation"] {
    display: none;
  }
  
  /* Show URLs for links */
  a[href^="http"]:after {
    content: " (" attr(href) ")";
    font-size: 0.85em;
    color: #666;
  }
  
  /* Document header */
  .document-metadata {
    border: 1px solid #000;
    padding: 0.5in;
    margin-bottom: 0.25in;
  }
  
  /* Footer with page numbers */
  @page {
    @bottom-right {
      content: "Page " counter(page) " of " counter(pages);
      font-size: 9pt;
    }
  }
}
```

---

## XI. Medical-Grade Readiness Checklist

### Phase 1: Core System (Week 1)
- [ ] Implement typography system
- [ ] Implement color system
- [ ] Implement spacing system
- [ ] Create CSS custom properties
- [ ] Update base layout template

### Phase 2: Components (Week 2)
- [ ] Document header component
- [ ] Callout blocks (info, warning, critical, regulatory)
- [ ] Evidence level badges
- [ ] Procedure list styling
- [ ] Clinical tables
- [ ] Citation/reference styling

### Phase 3: Hugo Integration (Week 3)
- [ ] Create shortcodes (callout, evidence, regulatory, procedure-step)
- [ ] Update layout partials (document-status, regulatory-footer)
- [ ] Create archetype templates (policy, guideline, procedure)
- [ ] Implement metadata schema in front matter

### Phase 4: Information Architecture (Week 4)
- [ ] Document type classification system
- [ ] Status indicators (draft, active, superseded, archived)
- [ ] Revision history component
- [ ] Cross-reference system
- [ ] Regulatory reference system

### Phase 5: Accessibility & Compliance (Week 5)
- [ ] WCAG AAA audit
- [ ] Keyboard navigation testing
- [ ] Screen reader testing
- [ ] Print stylesheet implementation
- [ ] Contrast ratio validation

### Phase 6: Documentation (Week 6)
- [ ] Design system documentation
- [ ] Component usage guide
- [ ] Content author guidelines
- [ ] Accessibility guidelines
- [ ] Maintenance procedures

---

## XII. Future Enhancements (Post-Launch)

### A. Version Control & Diffing
- Document comparison view
- Change highlighting
- Version timeline

### B. Audit Trail
- View history tracking
- Download logs
- Change approval workflows

### C. Advanced Metadata
- Effective date enforcement
- Automated review reminders
- Supersession notifications

### D. Search Enhancements
- Metadata-aware search
- Regulatory reference search
- Evidence level filtering

### E. Export Capabilities
- PDF generation (audit-ready)
- Word document export
- Regulatory submission packages

---

## XIII. Design System Governance

### A. Change Control

All changes to the design system must:
1. Be documented in revision history
2. Maintain backward compatibility where possible
3. Include migration guide for breaking changes
4. Be reviewed by design system steward

### B. Component Approval Process

New components require:
1. Use case documentation
2. Accessibility review
3. Visual design review
4. Code implementation review
5. Documentation update

### C. Deprecation Policy

Deprecated patterns:
1. Marked as deprecated in documentation
2. Maintain for 6 months minimum
3. Provide migration path
4. Remove after deprecation period

---

## XIV. Conclusion

This design system transforms the MedWiki from a functional documentation site into a medical-grade knowledge portal worthy of Epic Systems, CMS, FDA, and healthcare institutions.

**Key Principles:**
- Boring is a feature
- Typography over decoration
- Restraint over expressiveness
- Clarity over cleverness

**Success Criteria:**
When a CMS compliance officer, hospital legal counsel, or FDA reviewer opens this site, their first reaction should be:

> "This feels official."

---

**Document Classification:** Design System Specification  
**Version:** 1.0.0  
**Effective Date:** January 28, 2026  
**Authority:** Design Systems Engineering  
**Next Review:** July 28, 2026
