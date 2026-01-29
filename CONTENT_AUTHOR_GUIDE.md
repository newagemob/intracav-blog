# Content Author Guide - Medical-Grade Documentation

**Quick Reference for Writing Clinical Policies & Guidelines**

---

## 1. Creating a New Policy

### Use the Archetype

```bash
hugo new content/articles/My-New-Policy.md --kind clinical-policy
```

This creates a pre-structured document with all the required metadata.

### Or Copy the Template

```yaml
+++
document_id = "XX-XX-000"
document_type = "clinical_policy"
title = "Your Policy Title"
version = "1.0.0"
effective_date = "2024-01-01"
authority = "Clinical Standards Committee"
content_type = "policies"
category = ["Infection Control"]
audience = "clinician"
status = "draft"
regulatory_refs = ["CMS § XXX"]
date = 2024-01-01T00:00:00-00:00
description = "Brief description"
+++
```

---

## 2. Essential Components

### Document Header (Automatic)

If you use the enhanced layout, the document header renders automatically from your front matter. Otherwise, add manually:

```markdown
{{< document-metadata 
    doc_id="IC-CP-001" 
    version="1.0.0" 
    effective="2024-04-21"
    authority="Infection Control Committee"
    next_review="2025-04-21"
>}}
```

### Executive Summary

Every policy should start with a brief summary:

```markdown
## Executive Summary

This policy establishes [purpose] for [scope]. Key requirements include [summary].
```

### Scope

Define who it applies to:

```markdown
## Scope

This policy applies to:
- All clinical staff performing invasive procedures
- Facilities with inpatient units
- Emergency department personnel
```

---

## 3. Using Callouts

### Information

For general information:

```markdown
{{< callout type="info" title="Information" >}}
Standard precautions apply to all patients regardless of diagnosis.
{{< /callout >}}
```

### Warning/Caution

For things that require attention:

```markdown
{{< callout type="warning" title="Clinical Caution" >}}
Verify patient allergies before administering antiseptic solution.
{{< /callout >}}
```

### Critical/Contraindication

For safety-critical information:

```markdown
{{< callout type="critical" title="Contraindication" >}}
**Do not** use chlorhexidine on patients with known hypersensitivity. Use alternative antiseptic per facility protocol.
{{< /callout >}}
```

### Regulatory

For compliance requirements:

```markdown
{{< callout type="regulatory" title="Regulatory Requirement" >}}
Required per {{< regulatory source="cms" citation="CMS § 482.42" >}}
{{< /callout >}}
```

---

## 4. Writing Procedures

Use the structured format:

```markdown
## Procedure

<ol class="procedure-list">
{{< procedure-step number="1" title="Hand Hygiene" >}}
Perform hand hygiene using:
- Alcohol-based hand rub (ABHR), OR
- Antimicrobial soap and water

**Duration:** Minimum 20 seconds  
**Rationale:** Reduces transient flora on hands (CDC, 2022)
{{< /procedure-step >}}

{{< procedure-step number="2" title="Prepare Equipment" >}}
Gather all necessary sterile supplies:
- Sterile gloves
- Sterile drape
- Antiseptic solution

**Note:** Verify all packages are unopened and within expiration date.
{{< /procedure-step >}}
</ol>
```

---

## 5. Adding Evidence Levels

Use evidence badges to show the strength of recommendations:

```markdown
This recommendation is supported by high-quality evidence 
{{< evidence "1a" "Systematic review of RCTs" >}}.
```

**Evidence Hierarchy:**
- **Level 1A** (Highest): Systematic review of RCTs
- **Level 1B**: Individual RCT
- **Level 2A**: Systematic review of cohort studies
- **Level 2B**: Individual cohort study
- **Level 3**: Case-control study
- **Level 4**: Case series
- **Level 5** (Lowest): Expert opinion

---

## 6. Creating Tables

```markdown
{{< table-clinical caption="Table 1: Recommended Antiseptic Solutions by Site" >}}

| Site | Recommended Agent | Contact Time | Evidence Level |
|------|-------------------|--------------|----------------|
| Central line insertion | 2% Chlorhexidine gluconate | 30 seconds | {{< evidence "1a" >}} |
| Peripheral IV | 2% CHG or 70% alcohol | 30 seconds | {{< evidence "1b" >}} |
| Arterial line | 2% Chlorhexidine gluconate | 30 seconds | {{< evidence "1a" >}} |

{{< /table-clinical >}}
```

---

## 7. Regulatory References

### Inline References

```markdown
This requirement is mandated by {{< regulatory source="cms" citation="CMS § 482.42" >}}.
```

**Available Sources:**
- `cms` - Centers for Medicare & Medicaid Services
- `fda` - Food and Drug Administration
- `cdc` - Centers for Disease Control
- `osha` - Occupational Safety and Health Administration
- `jcaho` - Joint Commission
- `state` - State regulations

### Footer References

These display automatically from your front matter:

```yaml
regulatory_refs = [
  "CMS § 482.42",
  "CDC Guidelines 2022",
  "FDA Guidance Document"
]
```

---

## 8. References & Citations

### Reference List

```markdown
## References

1. Centers for Disease Control and Prevention. Guidelines for the Prevention of Intravascular Catheter-Related Infections. *MMWR*. 2022;71(RR-9):1-28. [https://doi.org/10.15585/mmwr.rr7109a1](https://doi.org/10.15585/mmwr.rr7109a1)

2. Infusion Nurses Society. Infusion Therapy Standards of Practice, 9th Edition. *Journal of Infusion Nursing*. 2024;47(1S):S1-S285.
```

### In-Text Citations

```markdown
Studies show improved outcomes with this approach.[^1]

[^1]: Smith et al., 2022
```

Or use superscript:

```markdown
Multiple studies support this recommendation.<sup>[1,2]</sup>
```

---

## 9. Document Status

### Active Documents

```yaml
status = "active"
```

### Draft Documents

```yaml
status = "draft"
draft = true  # Won't publish until changed to false
```

### Superseded Documents

Add alert at the top of the document:

```markdown
{{< alert-superseded 
    replacement="New ANTT Protocol 2025" 
    link="/articles/antt-2025" 
    date="2025-01-15"
>}}
```

And update front matter:

```yaml
status = "superseded"
```

---

## 10. Version Control

Use semantic versioning (MAJOR.MINOR.PATCH):

- **MAJOR**: Significant changes that alter clinical practice
- **MINOR**: Updates, additions, clarifications
- **PATCH**: Typo fixes, formatting corrections

```yaml
version = "1.2.0"
revision_date = "2024-04-21"
supersedes = "IC-CP-001 v1.1.0"
```

---

## 11. Style Guidelines

### Language

**Normative Language** (requirements):
- SHALL / SHALL NOT - Mandatory requirement
- MUST / MUST NOT - Absolute requirement
- REQUIRED - Mandatory

**Advisory Language** (recommendations):
- SHOULD / SHOULD NOT - Strong recommendation
- RECOMMENDED - Best practice
- MAY / OPTIONAL - Permissible

### Formatting

**Bold** for emphasis:
```markdown
**Do not** skip this step.
```

*Italic* for definitions or citations:
```markdown
The term *aseptic technique* refers to...
```

`Code` for technical terms:
```markdown
Enter `2% CHG` in the medication field.
```

### Headings

```markdown
## Major Section (Level 2)
### Subsection (Level 3)
#### Minor Section (Level 4)
```

---

## 12. Accessibility Requirements

### Alt Text for Images

```markdown
![Diagram showing hand hygiene steps](image.jpg "Five steps of proper hand hygiene technique")
```

### Descriptive Links

❌ Bad:
```markdown
Click [here](/policy) to read the policy.
```

✅ Good:
```markdown
Refer to the [Hand Hygiene Policy](/policy).
```

### Abbreviations

First use:
```markdown
Central Venous Catheter (CVC)
```

Subsequent uses:
```markdown
CVC
```

Or use HTML:
```html
<abbr title="Central Venous Catheter">CVC</abbr>
```

---

## 13. Checklist Before Publishing

- [ ] Document ID assigned
- [ ] Version number set
- [ ] Effective date specified
- [ ] Authority/approver listed
- [ ] Status set to "active"
- [ ] Categories assigned
- [ ] Regulatory references listed (if applicable)
- [ ] All procedures have numbered steps
- [ ] Evidence levels cited (for guidelines)
- [ ] References formatted correctly
- [ ] No broken links
- [ ] Reviewed for typos
- [ ] Accessibility checked (alt text, abbreviations)
- [ ] Print preview looks correct (Cmd/Ctrl + P)

---

## 14. Common Mistakes

### ❌ Missing Metadata

```yaml
# Too minimal - missing key fields
title = "My Policy"
date = 2024-01-01
```

### ✅ Complete Metadata

```yaml
document_id = "XX-XX-000"
document_type = "clinical_policy"
title = "My Policy Title"
version = "1.0.0"
effective_date = "2024-01-01"
authority = "Committee Name"
status = "active"
content_type = "policies"
category = ["Topic"]
```

### ❌ Unstructured Procedures

```markdown
1. Do hand hygiene
2. Put on gloves
3. Prepare site
```

### ✅ Structured Procedures

```markdown
<ol class="procedure-list">
{{< procedure-step number="1" title="Hand Hygiene" >}}
Detailed instructions...

**Duration:** 20 seconds
{{< /procedure-step >}}
</ol>
```

### ❌ Missing Evidence

```markdown
We recommend using chlorhexidine.
```

### ✅ Evidence-Based

```markdown
We recommend using 2% chlorhexidine gluconate 
{{< evidence "1a" >}} for central line site preparation.
```

---

## 15. Getting Help

### Documentation

- **Design System Spec:** `/DESIGN_SYSTEM.md`
- **Implementation Guide:** `/IMPLEMENTATION_GUIDE.md`
- **Content Structure:** `/CONTENT_STRUCTURE.md`

### Templates

- New policy: `hugo new content/articles/My-Policy.md --kind clinical-policy`
- View example: `/content/articles/ANTT.md`

### Testing

- **Local preview:** `hugo server`
- **Print preview:** Open page, press Cmd/Ctrl + P
- **Dark mode:** Toggle theme in upper right

---

## 16. Quick Reference Card

| Element | Shortcode |
|---------|-----------|
| Information callout | `{{< callout type="info" >}}...{{< /callout >}}` |
| Warning | `{{< callout type="warning" >}}...{{< /callout >}}` |
| Contraindication | `{{< callout type="critical" >}}...{{< /callout >}}` |
| Regulatory | `{{< callout type="regulatory" >}}...{{< /callout >}}` |
| Evidence level | `{{< evidence "1a" >}}` |
| Regulatory reference | `{{< regulatory source="cms" citation="CMS § 482.42" >}}` |
| Procedure step | `{{< procedure-step number="1" title="Title" >}}...{{< /procedure-step >}}` |
| Clinical table | `{{< table-clinical caption="..." >}}...{{< /table-clinical >}}` |
| Metadata block | `{{< document-metadata doc_id="..." version="..." >}}` |
| Superseded alert | `{{< alert-superseded replacement="..." link="..." date="..." >}}` |

---

**Document Classification:** Author Guide  
**Version:** 1.0.0  
**Last Updated:** January 28, 2026
