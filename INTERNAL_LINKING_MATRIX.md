# Intracav Vascular Access — Internal Linking Matrix
**Version 1.0 | 2026-02-25**

This matrix defines the internal linking architecture for the Intracav knowledge base. Every page must participate in the topical ecosystem. No orphan pages.

---

## Architecture Principles

1. **Every pillar links to all 9 other pillars** (cross-cluster authority flow)
2. **Every satellite links up to its parent pillar** (cluster → pillar)
3. **Every satellite links laterally to 2–3 peers in the same cluster**
4. **Every guide page links to the corresponding policy in `/policies/`** (guide ↔ reference)
5. **Every guide page links to the corresponding patient education guide** (clinical ↔ patient)
6. **Every policy links to its related guide page** (reverse link from reference to educational)
7. **Flagship resources link from all related guides and satellites**

---

## Tier 1: Pillar-to-Pillar Links (Cross-Cluster)

Each pillar page must contain a "Related Clinical Guides" section at the bottom linking to all other 9 pillars.

| Source Pillar | Must Link To |
|---|---|
| `/guides/vascular-access/` | All 9 other pillars |
| `/guides/picc-lines/` | CVC guide, Complications, CLABSI Prevention, Infusion Safety, Credentialing |
| `/guides/central-venous-catheters/` | PICC Lines, CLABSI Prevention, Complications, Special Populations, Infusion Safety |
| `/guides/clabsi-prevention/` | Vascular Access, CVC, PICC Lines, Complications, Ultrasound, Infusion Safety |
| `/guides/catheter-complications/` | PICC Lines, CVC, CLABSI Prevention, Infusion Safety, Special Populations |
| `/guides/ultrasound-guided-vascular-access/` | PICC Lines, CVC, Credentialing, VAT Models |
| `/guides/vascular-access-credentialing/` | Ultrasound, VAT Models, Vascular Access (master) |
| `/guides/infusion-therapy-safety/` | PICC Lines, CVC, Complications, Special Populations |
| `/guides/vascular-access-special-populations/` | PICC Lines, CVC, CLABSI, Infusion Safety, VAT Models |
| `/guides/vascular-access-team-models/` | All 9 other pillars (VAT is the operational hub) |

---

## Tier 2: Satellite → Pillar (Upward Links)

Every satellite article must open with or include a clear link back to its parent pillar.

| Satellite | Parent Pillar Link |
|---|---|
| `what-is-vascular-access` | → `/guides/vascular-access/` |
| `vascular-access-device-types-comparison` | → `/guides/vascular-access/` |
| `evidence-based-device-selection` | → `/guides/vascular-access/` |
| `vascular-access-standards-regulations` | → `/guides/vascular-access/` |
| `vascular-access-documentation-requirements` | → `/guides/vascular-access/` |
| `picc-line-indications` | → `/guides/picc-lines/` |
| `picc-insertion-technique` | → `/guides/picc-lines/` |
| `picc-tip-position-verification` | → `/guides/picc-lines/` |
| `picc-vs-midline-vs-cvc` | → `/guides/picc-lines/` AND `/guides/central-venous-catheters/` |
| `picc-complications-prevention` | → `/guides/picc-lines/` AND `/guides/catheter-complications/` |
| `picc-care-maintenance` | → `/guides/picc-lines/` AND `/guides/infusion-therapy-safety/` |
| `non-tunneled-cvc-guide` | → `/guides/central-venous-catheters/` |
| `tunneled-central-catheters-guide` | → `/guides/central-venous-catheters/` |
| `implanted-port-guide` | → `/guides/central-venous-catheters/` |
| `hemodialysis-vascular-access-guide` | → `/guides/central-venous-catheters/` AND `/guides/vascular-access-special-populations/` |
| `cvad-tip-location-standards` | → `/guides/central-venous-catheters/` AND `/guides/picc-lines/` |
| `clabsi-definition-epidemiology` | → `/guides/clabsi-prevention/` |
| `clabsi-insertion-bundle` | → `/guides/clabsi-prevention/` |
| `clabsi-maintenance-bundle` | → `/guides/clabsi-prevention/` |
| `chlorhexidine-gluconate-clabsi` | → `/guides/clabsi-prevention/` |
| `antimicrobial-catheters-dressings` | → `/guides/clabsi-prevention/` |
| `needleless-connector-clabsi-prevention` | → `/guides/clabsi-prevention/` AND `/guides/infusion-therapy-safety/` |
| `catheter-thrombosis-guide` | → `/guides/catheter-complications/` |
| `phlebitis-recognition-management` | → `/guides/catheter-complications/` |
| `catheter-occlusion-management` | → `/guides/catheter-complications/` |
| `air-embolism-prevention-guide` | → `/guides/catheter-complications/` |
| `infiltration-extravasation-guide` | → `/guides/catheter-complications/` AND `/guides/infusion-therapy-safety/` |
| `catheter-malposition-guide` | → `/guides/catheter-complications/` AND `/guides/picc-lines/` |
| `vascular-anatomy-ultrasound` | → `/guides/ultrasound-guided-vascular-access/` |
| `ultrasound-technique-vascular-access` | → `/guides/ultrasound-guided-vascular-access/` |
| `ultrasound-peripheral-iv-difficult-access` | → `/guides/ultrasound-guided-vascular-access/` |
| `ultrasound-picc-insertion-guide` | → `/guides/ultrasound-guided-vascular-access/` AND `/guides/picc-lines/` |
| `ultrasound-credentialing-requirements` | → `/guides/ultrasound-guided-vascular-access/` AND `/guides/vascular-access-credentialing/` |
| `va-bc-certification-guide` | → `/guides/vascular-access-credentialing/` |
| `picc-insertion-competency-framework` | → `/guides/vascular-access-credentialing/` AND `/guides/picc-lines/` |
| `ultrasound-credentialing-vascular-access` | → `/guides/vascular-access-credentialing/` AND `/guides/ultrasound-guided-vascular-access/` |
| `institutional-privileging-framework` | → `/guides/vascular-access-credentialing/` |
| `crni-certification-guide` | → `/guides/vascular-access-credentialing/` |
| `infusion-filtration-guide` | → `/guides/infusion-therapy-safety/` |
| `flushing-locking-sash-protocol` | → `/guides/infusion-therapy-safety/` |
| `vesicant-administration-safety` | → `/guides/infusion-therapy-safety/` AND `/guides/catheter-complications/` |
| `high-alert-medications-iv` | → `/guides/infusion-therapy-safety/` |
| `parenteral-nutrition-vascular-access` | → `/guides/infusion-therapy-safety/` AND `/guides/central-venous-catheters/` |
| `pediatric-peripheral-iv-guide` | → `/guides/vascular-access-special-populations/` |
| `nicu-vascular-access-guide` | → `/guides/vascular-access-special-populations/` |
| `oncology-vascular-access-guide` | → `/guides/vascular-access-special-populations/` AND `/guides/central-venous-catheters/` |
| `hemodialysis-access-clinical-guide` | → `/guides/vascular-access-special-populations/` |
| `critical-care-vascular-access-guide` | → `/guides/vascular-access-special-populations/` AND `/guides/central-venous-catheters/` |
| `vascular-access-team-evidence-roi` | → `/guides/vascular-access-team-models/` |
| `vascular-access-quality-metrics` | → `/guides/vascular-access-team-models/` |

---

## Tier 3: Satellite → Lateral (Peer Links)

Within-cluster links for topical depth and crawl efficiency.

### Cluster: Vascular Access (General)
- `what-is-vascular-access` → `vascular-access-device-types-comparison`, `evidence-based-device-selection`
- `vascular-access-device-types-comparison` → `what-is-vascular-access`, `evidence-based-device-selection`, `picc-vs-midline-vs-cvc`
- `evidence-based-device-selection` → `vascular-access-device-types-comparison`, `picc-vs-midline-vs-cvc`
- `vascular-access-standards-regulations` → `vascular-access-documentation-requirements`, `evidence-based-device-selection`
- `vascular-access-documentation-requirements` → `vascular-access-standards-regulations`

### Cluster: PICC Lines
- `picc-line-indications` → `picc-vs-midline-vs-cvc`, `evidence-based-device-selection`
- `picc-insertion-technique` → `picc-tip-position-verification`, `ultrasound-picc-insertion-guide`
- `picc-tip-position-verification` → `picc-insertion-technique`, `cvad-tip-location-standards`
- `picc-vs-midline-vs-cvc` → `picc-line-indications`, `non-tunneled-cvc-guide`, `evidence-based-device-selection`
- `picc-complications-prevention` → `catheter-thrombosis-guide`, `clabsi-insertion-bundle`, `catheter-malposition-guide`
- `picc-care-maintenance` → `flushing-locking-sash-protocol`, `clabsi-maintenance-bundle`

### Cluster: Central Venous Catheters
- `non-tunneled-cvc-guide` → `picc-vs-midline-vs-cvc`, `cvad-tip-location-standards`, `clabsi-insertion-bundle`
- `tunneled-central-catheters-guide` → `implanted-port-guide`, `picc-vs-midline-vs-cvc`
- `implanted-port-guide` → `tunneled-central-catheters-guide`, `oncology-vascular-access-guide`
- `hemodialysis-vascular-access-guide` → `hemodialysis-access-clinical-guide`
- `cvad-tip-location-standards` → `picc-tip-position-verification`, `catheter-malposition-guide`

### Cluster: CLABSI Prevention
- `clabsi-definition-epidemiology` → `clabsi-insertion-bundle`, `clabsi-maintenance-bundle`
- `clabsi-insertion-bundle` → `clabsi-definition-epidemiology`, `clabsi-maintenance-bundle`, `chlorhexidine-gluconate-clabsi`
- `clabsi-maintenance-bundle` → `clabsi-insertion-bundle`, `needleless-connector-clabsi-prevention`
- `chlorhexidine-gluconate-clabsi` → `clabsi-insertion-bundle`, `antimicrobial-catheters-dressings`
- `antimicrobial-catheters-dressings` → `chlorhexidine-gluconate-clabsi`, `clabsi-insertion-bundle`
- `needleless-connector-clabsi-prevention` → `clabsi-maintenance-bundle`, `flushing-locking-sash-protocol`

### Cluster: Catheter Complications
- `catheter-thrombosis-guide` → `picc-complications-prevention`, `catheter-occlusion-management`
- `phlebitis-recognition-management` → `infiltration-extravasation-guide`
- `catheter-occlusion-management` → `catheter-thrombosis-guide`, `flushing-locking-sash-protocol`
- `air-embolism-prevention-guide` → `catheter-malposition-guide`
- `infiltration-extravasation-guide` → `phlebitis-recognition-management`, `vesicant-administration-safety`
- `catheter-malposition-guide` → `picc-tip-position-verification`, `cvad-tip-location-standards`

### Cluster: Ultrasound
- `vascular-anatomy-ultrasound` → `ultrasound-technique-vascular-access`
- `ultrasound-technique-vascular-access` → `vascular-anatomy-ultrasound`, `ultrasound-picc-insertion-guide`
- `ultrasound-peripheral-iv-difficult-access` → `ultrasound-technique-vascular-access`, `vascular-anatomy-ultrasound`
- `ultrasound-picc-insertion-guide` → `picc-insertion-technique`, `ultrasound-technique-vascular-access`
- `ultrasound-credentialing-requirements` → `ultrasound-credentialing-vascular-access`, `picc-insertion-competency-framework`

### Cluster: Credentialing
- `va-bc-certification-guide` → `crni-certification-guide`, `picc-insertion-competency-framework`
- `picc-insertion-competency-framework` → `va-bc-certification-guide`, `ultrasound-credentialing-requirements`
- `ultrasound-credentialing-vascular-access` → `ultrasound-credentialing-requirements`, `picc-insertion-competency-framework`
- `institutional-privileging-framework` → `picc-insertion-competency-framework`, `va-bc-certification-guide`
- `crni-certification-guide` → `va-bc-certification-guide`

### Cluster: Infusion Safety
- `infusion-filtration-guide` → `parenteral-nutrition-vascular-access`, `picc-care-maintenance`
- `flushing-locking-sash-protocol` → `picc-care-maintenance`, `needleless-connector-clabsi-prevention`
- `vesicant-administration-safety` → `infiltration-extravasation-guide`, `oncology-vascular-access-guide`
- `high-alert-medications-iv` → `vesicant-administration-safety`
- `parenteral-nutrition-vascular-access` → `infusion-filtration-guide`, `nicu-vascular-access-guide`

### Cluster: Special Populations
- `pediatric-peripheral-iv-guide` → `nicu-vascular-access-guide`, `ultrasound-peripheral-iv-difficult-access`
- `nicu-vascular-access-guide` → `pediatric-peripheral-iv-guide`, `parenteral-nutrition-vascular-access`
- `oncology-vascular-access-guide` → `implanted-port-guide`, `vesicant-administration-safety`
- `hemodialysis-access-clinical-guide` → `hemodialysis-vascular-access-guide`
- `critical-care-vascular-access-guide` → `non-tunneled-cvc-guide`, `clabsi-insertion-bundle`

### Cluster: VAT Models
- `vascular-access-team-evidence-roi` → `vascular-access-quality-metrics`
- `vascular-access-quality-metrics` → `vascular-access-team-evidence-roi`, `clabsi-definition-epidemiology`

---

## Tier 4: Guide → Policy Links (Educational ↔ Reference)

| Guide Page | Links to Policy in /policies/ |
|---|---|
| `/guides/picc-lines/` | `/policies/vascular-access-device-selection-insertion/`, `/policies/central-vascular-access-device-tip-location/`, `/policies/vascular-access-device-securement/` |
| `/guides/central-venous-catheters/` | `/policies/vascular-access-device-selection-insertion/`, `/policies/central-vascular-access-device-tip-location/`, `/policies/implanted-vascular-access-ports/`, `/policies/vascular-access-hemodialysis/` |
| `/guides/clabsi-prevention/` | `/policies/vascular-access-device-related-infections/`, `/policies/hand-hygiene/`, `/policies/ANTT/`, `/policies/standard-precautions/` |
| `/guides/catheter-complications/` | `/policies/catheter-associated-thrombosis/`, `/policies/phlebitis-vascular-access-management/`, `/policies/vascular-access-device-occlusion/`, `/policies/air-embolism-vascular-access/`, `/policies/infiltration-extravasation-management/`, `/policies/catheter-damage-embolism-repair-exchange/`, `/policies/catheter-associated-skin-injury/` |
| `/guides/ultrasound-guided-vascular-access/` | `/policies/vascular-visualization-technology/` |
| `/guides/infusion-therapy-safety/` | `/policies/filtration-vascular-access/`, `/policies/flushing-locking-vascular-access-devices/`, `/policies/administration-set-management/`, `/policies/needleless-connectors/`, `/policies/add-on-devices-vascular-access/` |
| `/guides/vascular-access-special-populations/` | `/policies/umbilical-catheter-management-neonates/`, `/policies/neuraxial-access-devices/`, `/policies/intraosseous-vascular-access/`, `/policies/vascular-access-hemodialysis/` |
| `/guides/vascular-access-credentialing/` | `/policies/competency-competency-validation/`, `/policies/scope-of-practice-professional-boundaries/` |
| `/guides/vascular-access-team-models/` | `/policies/service-delivery-models-operational-scope/`, `/policies/quality-improvement-vascular-access/`, `/policies/strategic-planning-implementation-vascular-access-services/` |

---

## Tier 5: Guide → Patient Education Links

| Guide Page | Links to Patient Education |
|---|---|
| `/guides/picc-lines/` | `/patient-education/going-home-with-a-picc-line/`, `/patient-education/preparing-for-picc-placement/`, `/patient-education/picc-removal-what-to-expect/` |
| `/guides/central-venous-catheters/` | `/patient-education/going-home-with-a-tunneled-catheter/`, `/patient-education/going-home-with-an-implanted-port/`, `/patient-education/preparing-for-port-placement/` |
| `/guides/clabsi-prevention/` | `/patient-education/keeping-your-iv-safe-infection-prevention/` |
| `/guides/catheter-complications/` | `/patient-education/recognizing-complications-when-to-call/`, `/patient-education/er-visit-with-a-catheter/` |
| `/guides/infusion-therapy-safety/` | `/patient-education/iv-medications-infusion-therapy-explained/`, `/patient-education/home-tpn-guide/` |
| `/guides/vascular-access-special-populations/` | `/patient-education/nicu-vascular-access-parent-guide/`, `/patient-education/dialysis-vascular-access/`, `/patient-education/immunocompromised-patient-guide/` |
| `/guides/vascular-access-credentialing/` | `/patient-education/your-rights-informed-consent/`, `/patient-education/questions-to-ask-your-vascular-access-team/` |

---

## Tier 6: Resources → Guide Links

| Resource | Linked From These Guides |
|---|---|
| `/resources/clabsi-prevention-framework/` | CLABSI Prevention pillar, all 6 CLABSI satellites, PICC care, CVC guide |
| `/resources/vad-competency-credentialing-checklist/` | Credentialing pillar, all 5 credentialing satellites, VAT Models pillar |
| `/resources/vascular-access-safety-report/` | Master pillar, VAT Models, CLABSI prevention, Complications pillar |

---

## Anchor Text Guidelines

Use descriptive, keyword-rich anchor text. Never use "click here" or "learn more."

### Approved Anchor Text Patterns

| Destination | Approved Anchor Text |
|---|---|
| `/guides/vascular-access/` | "vascular access clinical reference", "complete guide to vascular access", "vascular access device overview" |
| `/guides/picc-lines/` | "PICC line clinical guide", "peripherally inserted central catheter reference", "PICC line management" |
| `/guides/clabsi-prevention/` | "CLABSI prevention bundle", "central line infection prevention", "zero CLABSI framework" |
| `/guides/catheter-complications/` | "catheter complication management", "recognizing catheter complications", "vascular access complications" |
| `/guides/ultrasound-guided-vascular-access/` | "ultrasound-guided vascular access", "US guidance for IV placement", "ultrasound technique for catheters" |
| `/guides/vascular-access-credentialing/` | "vascular access credentialing", "VA-BC certification guide", "PICC insertion competency" |
| `/resources/clabsi-prevention-framework/` | "CLABSI prevention framework", "bundle checklist for central lines", "zero CLABSI implementation guide" |
| `/resources/vad-competency-credentialing-checklist/` | "VAD competency checklist", "PICC credentialing framework", "vascular access skills assessment" |
| Policy links | "[Policy Title]" or "institutional policy on [topic]" |
| Patient education links | "patient guide to [topic]", "what patients should know about [device]" |

---

## Orphan Page Prevention Checklist

Before publishing any new page, verify:
- [ ] Page has at least 3 incoming internal links from other pages
- [ ] Page links up to its parent pillar
- [ ] Page links to 2–3 lateral peers in same cluster
- [ ] Page links to 1–2 policies in /policies/
- [ ] Page links to 1 patient education guide where applicable
- [ ] Page appears in its parent section's _index.md Related Articles list

---

## Implementation Priority

Phase 1 (immediately): Pillar → Pillar cross-links
Phase 2 (with satellite launch): Satellite → Pillar upward links + lateral links
Phase 3 (ongoing): Guide → Policy reverse links (update existing policies to link to new guide pages)
Phase 4 (ongoing): Resource links from new guide content

---

*Last updated: 2026-02-25*
*Maintained by: Intracav Editorial Team*
