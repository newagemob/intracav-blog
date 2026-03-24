+++
title = "Sepsis and Septic Shock — Part 1: Definitions, Screening & Early Identification"
description = "Sepsis-3 definitions, SOFA and qSOFA scoring, septic shock criteria, comparison with SIRS/Sepsis-2, and screening tools (NEWS, MEWS, qSOFA, SIRS) with sensitivity and specificity data."
date = 2026-03-15T00:00:00-05:00
lastmod = 2026-03-15T00:00:00-05:00
draft = false
weight = 1
source_org = "icu_sepsis"
guideline_set = "icu_sepsis_guideline_2026"
departments = ["icu", "ed"]
category = ["guidelines", "icu", "critical-care", "sepsis"]
audience = "clinician"
content_type = "guidelines"
+++

## 1. Evolution of Sepsis Definitions

### 1.1 Historical Context

The conceptual framework for sepsis has undergone significant evolution over the past three decades. The original consensus conference in 1991 introduced the systemic inflammatory response syndrome (SIRS) paradigm, which defined sepsis as SIRS in the presence of suspected or confirmed infection.[^1] While this framework was widely adopted and formed the basis of clinical practice for over two decades, it was increasingly recognized as lacking both specificity (SIRS criteria are met by many non-infectious conditions including post-surgical states, pancreatitis, and burns) and prognostic discrimination.[^2]

The 2001 consensus conference (commonly referred to as "Sepsis-2") retained the SIRS-based definitions but added a more extensive list of diagnostic criteria. The concept of "severe sepsis" was introduced to describe sepsis with organ dysfunction, and septic shock was defined as sepsis-induced hypotension persisting despite adequate fluid resuscitation.[^1]

### 1.2 Sepsis-3 Definitions (2016 — Current Standard)

The third international consensus definitions, published in 2016 by a joint task force of the major critical care and infectious disease societies, fundamentally redefined sepsis to emphasize the dysregulated host response and organ dysfunction rather than the inflammatory response alone.[^2]

#### Sepsis

> **Sepsis** is defined as life-threatening organ dysfunction caused by a dysregulated host response to infection.

Key conceptual changes from prior definitions:

- The term "severe sepsis" has been **eliminated** — all sepsis, by definition, involves organ dysfunction
- SIRS criteria are no longer required for the diagnosis of sepsis
- Organ dysfunction is operationalized using the Sequential (Sepsis-related) Organ Failure Assessment (SOFA) score
- An acute change in SOFA score of **≥ 2 points** from baseline (presumed to be zero in patients without known pre-existing organ dysfunction) is the diagnostic threshold, reflecting an associated in-hospital mortality of approximately 10%[^2]

#### Septic Shock

> **Septic shock** is defined as a subset of sepsis in which underlying circulatory, cellular, and metabolic abnormalities are sufficiently profound to substantially increase mortality.

Operationally, patients with septic shock are identified by the presence of **all three** of the following criteria:

1. Clinical criteria for sepsis (as defined above)
2. Persistent hypotension requiring **vasopressors** to maintain a mean arterial pressure (MAP) of **≥ 65 mmHg**
3. A serum **lactate level > 2 mmol/L (18 mg/dL)** despite adequate volume resuscitation

The combination of vasopressor requirement and elevated lactate identifies patients with an in-hospital mortality exceeding **40%**.[^2]

---

## 2. SOFA Score — Complete Reference

The SOFA score is the validated clinical tool for identifying organ dysfunction in the context of suspected infection. It assesses six organ systems, each scored from 0 (normal function) to 4 (severe dysfunction).[^3] [^2]

### 2.1 Complete SOFA Scoring Table

| Organ System | Score 0 | Score 1 | Score 2 | Score 3 | Score 4 |
|---|---|---|---|---|---|
| **Respiration** (PaO2/FiO2, mmHg) | ≥ 400 | < 400 | < 300 | < 200 with respiratory support | < 100 with respiratory support |
| **Coagulation** (Platelets, × 10³/μL) | ≥ 150 | < 150 | < 100 | < 50 | < 20 |
| **Liver** (Bilirubin, mg/dL) | < 1.2 | 1.2–1.9 | 2.0–5.9 | 6.0–11.9 | > 12.0 |
| **Cardiovascular** | MAP ≥ 70 mmHg | MAP < 70 mmHg | Dopamine < 5 or dobutamine (any dose)* | Dopamine 5.1–15 or epinephrine ≤ 0.1 or norepinephrine ≤ 0.1* | Dopamine > 15 or epinephrine > 0.1 or norepinephrine > 0.1* |
| **Central Nervous System** (Glasgow Coma Scale) | 15 | 13–14 | 10–12 | 6–9 | < 6 |
| **Renal** (Creatinine, mg/dL) | < 1.2 | 1.2–1.9 | 2.0–3.4 | 3.5–4.9 | > 5.0 |
| **Renal** (Urine output, mL/day) | — | — | — | < 500 | < 200 |

*Catecholamine doses are expressed in μg/kg/min and must be administered for at least 1 hour.

### 2.2 Interpreting the SOFA Score

| SOFA Score | Approximate In-Hospital Mortality |
|---|---|
| 0–6 | < 10% |
| 7–9 | 15–20% |
| 10–12 | 40–50% |
| 13–14 | 50–60% |
| ≥ 15 | > 80% |

### 2.3 Clinical Application Notes

- **Baseline SOFA:** In patients without known pre-existing organ dysfunction, the baseline SOFA score is assumed to be **zero**.[^2]
- **Acute change ≥ 2 points:** The diagnostic threshold for sepsis. This represents a clinically meaningful deterioration associated with an in-hospital mortality rate of approximately **10% or greater**.
- **Serial monitoring:** The SOFA score should be recalculated at least every **24 hours** in ICU patients; a rising SOFA score is associated with increased mortality, while a declining score suggests treatment response.
- **Limitations:** The SOFA score requires laboratory data (PaO2, bilirubin, creatinine, platelets) that may not be immediately available, particularly outside the ICU setting. This limitation led to the development of the qSOFA as a bedside screening tool.[^2]
- **PaO2/FiO2 estimation:** For patients not on mechanical ventilation, the SpO2/FiO2 ratio can be used as a surrogate. A SpO2/FiO2 of 235 corresponds approximately to a PaO2/FiO2 of 200, and a SpO2/FiO2 of 315 corresponds approximately to a PaO2/FiO2 of 300.[^4]

---

## 3. Quick SOFA (qSOFA) — Bedside Screening

The qSOFA was developed as a simplified bedside tool for rapid identification of adult patients with suspected infection who are likely to have poor outcomes. It was intended for use **outside the ICU** — in emergency departments, general wards, and pre-hospital settings — where the full SOFA score may not be readily calculable.[^2] [^5]

### 3.1 qSOFA Criteria

| Criterion | Threshold | Points |
|---|---|---|
| Altered mental status | Glasgow Coma Scale < 15 | 1 |
| Systolic blood pressure | ≤ 100 mmHg | 1 |
| Respiratory rate | ≥ 22 breaths/min | 1 |

**A qSOFA score ≥ 2** (out of 3) is considered positive and should prompt:

- Consideration of possible sepsis
- Further assessment for organ dysfunction (full SOFA score)
- Increased level of care and monitoring
- Re-evaluation of antimicrobial therapy if not already initiated

### 3.2 Important Limitations of qSOFA

The international sepsis guidelines published in 2021 issued a **strong recommendation against using qSOFA as a single screening tool** for sepsis, based on concerns about its sensitivity.[^6]

Key limitations:

- **Low sensitivity:** In prospective validation studies, qSOFA had a sensitivity of only **30–55%** for detecting sepsis in emergency department populations, meaning it may miss up to half of sepsis cases[^5] [^7]
- **Better as a prognostic tool:** qSOFA performs well as a predictor of poor outcomes (ICU admission, mortality) but poorly as an early detection/screening tool
- **Not a replacement for clinical judgment:** A negative qSOFA does not rule out sepsis; clinical suspicion should always take precedence
- **Not intended for ICU use:** Within the ICU, the full SOFA score should be used

---

## 4. Comparison with Prior Definitions: SIRS and Sepsis-2

### 4.1 SIRS Criteria (Sepsis-1/Sepsis-2 Era)

The SIRS criteria, while no longer the defining framework for sepsis, remain in widespread clinical use and continue to be incorporated into some regulatory quality measures and electronic sepsis screening algorithms.[^1] [^8]

| SIRS Criterion | Threshold |
|---|---|
| Temperature | > 38.3 °C (100.9 °F) **or** < 36.0 °C (96.8 °F) |
| Heart rate | > 90 beats/min |
| Respiratory rate | > 20 breaths/min **or** PaCO2 < 32 mmHg |
| White blood cell count | > 12,000/μL **or** < 4,000/μL **or** > 10% immature (band) forms |

**SIRS-based sepsis (historical definition):** ≥ 2 SIRS criteria + suspected or confirmed infection.

**Severe sepsis (historical — now eliminated):** Sepsis + evidence of organ dysfunction, hypoperfusion, or hypotension.

### 4.2 Head-to-Head Comparison: Sepsis-1/2 vs. Sepsis-3

| Feature | Sepsis-1/2 (SIRS-Based) | Sepsis-3 (SOFA-Based) |
|---|---|---|
| Definition of sepsis | SIRS + infection | Organ dysfunction + infection |
| Diagnostic criteria | ≥ 2 SIRS criteria | SOFA increase ≥ 2 |
| "Severe sepsis" category | Yes (sepsis + organ dysfunction) | Eliminated (all sepsis = organ dysfunction) |
| Septic shock definition | Hypotension despite fluids | Vasopressor + lactate > 2 despite fluids |
| Sensitivity for infection-related mortality | High (~90%) | Moderate (~70%) |
| Specificity for infection-related mortality | Low (~30%) | Higher (~65–70%) |
| Bedside applicability | High (vital signs only) | Requires labs for SOFA; qSOFA for bedside |
| Regulatory adoption | Still used in CMS SEP-1 | Endorsed by critical care societies |
| Prognostic value | Limited | Strong |

### 4.3 The CMS SEP-1 (Severe Sepsis and Septic Shock Early Management Bundle) Measure

The Centers for Medicare & Medicaid Services SEP-1 core measure, introduced in October 2015, continues to use a hybrid approach that incorporates elements of both SIRS-based and organ dysfunction criteria.[^8] [^9]

#### SEP-1 Severe Sepsis Criteria (All Three Required)

1. **Suspected infection:** Defined by concurrent orders for blood cultures AND antibiotics (either within 24 hours of each other)
2. **≥ 2 SIRS criteria** (as defined above)
3. **≥ 1 organ dysfunction criterion:**

| Organ Dysfunction | Criterion |
|---|---|
| Hypotension | Systolic BP < 90 mmHg, MAP < 65 mmHg, or SBP decrease > 40 mmHg from baseline |
| Lactate elevation | ≥ 2.0 mmol/L (initial) |
| Acute respiratory failure | New need for invasive mechanical ventilation |
| Creatinine elevation | > 2.0 mg/dL (acute change) |
| Bilirubin elevation | > 2.0 mg/dL (acute change) |
| Platelet count | < 100,000/μL (acute change) |
| INR | > 1.5 (acute change, not on anticoagulant) |

#### SEP-1 Septic Shock Criteria

- Initial lactate ≥ 4.0 mmol/L, **OR**
- Persistent hypotension after ≥ 30 mL/kg IV crystalloid fluid challenge

#### SEP-1 Required Bundle Elements (Within 3 Hours of Severe Sepsis Presentation)

1. Measure **lactate** level
2. Obtain **blood cultures** prior to antibiotics
3. Administer **broad-spectrum antibiotics**

#### SEP-1 Required Bundle Elements (Within 6 Hours if Septic Shock or Lactate ≥ 4)

4. Administer **30 mL/kg crystalloid** for hypotension or lactate ≥ 4 mmol/L
5. Apply **vasopressors** if hypotension persists despite fluid resuscitation (to maintain MAP ≥ 65 mmHg)
6. **Reassess volume status and tissue perfusion** (documented by either focused exam OR two of: CVP measurement, ScvO2 measurement, bedside cardiovascular ultrasound, passive leg raise or fluid challenge)
7. **Re-measure lactate** if initial lactate was elevated (> 2.0 mmol/L)

#### Notable Criticisms of SEP-1

The infectious disease professional societies have raised several formal concerns regarding the SEP-1 measure, including:[^9]

- The rigid 3-hour antibiotic window does not account for clinical scenarios where the diagnosis of sepsis is uncertain and a brief period of evaluation is appropriate
- The mandatory 30 mL/kg crystalloid bolus does not account for patients in whom large-volume fluid administration may be harmful (e.g., heart failure, end-stage renal disease)
- The "time zero" determination is often subjective and retrospectively adjudged
- The measure conflates quality of care with documentation compliance

---

## 5. Screening Tools — Comprehensive Comparison

Early identification of sepsis is critical, as delays in recognition and treatment are independently associated with increased mortality.[^6] Multiple screening tools exist, each with distinct performance characteristics depending on the clinical setting.

### 5.1 Screening Tool Comparison Table

| Tool | Components | Positive Threshold | Sensitivity (ED) | Specificity (ED) | Sensitivity (Ward) | Specificity (Ward) | Best Use Case |
|---|---|---|---|---|---|---|---|
| **SIRS** | Temp, HR, RR, WBC | ≥ 2 of 4 criteria | 80–97% | 25–35% | 70–90% | 30–40% | High sensitivity screen; CMS SEP-1 |
| **qSOFA** | Mental status, SBP, RR | ≥ 2 of 3 criteria | 30–55% | 83–96% | 50–70% | 80–90% | Prognostication; outside ICU |
| **NEWS** | RR, SpO2, temp, SBP, HR, consciousness, supplemental O2 | ≥ 5 (medium risk) or ≥ 7 (high risk) | 75–92% | 60–75% | 85–95% | 55–70% | Inpatient ward screening |
| **MEWS** | SBP, HR, RR, temp, consciousness | ≥ 4 or ≥ 5 | 60–75% | 65–80% | 70–85% | 60–75% | Resource-limited settings |

### 5.2 National Early Warning Score (NEWS / NEWS2)

The NEWS2 is a standardized early warning score adopted widely across healthcare systems as a "track-and-trigger" tool for identifying patients at risk of clinical deterioration, including sepsis.[^10]

#### NEWS2 Scoring Table

| Parameter | Score 3 | Score 2 | Score 1 | Score 0 | Score 1 | Score 2 | Score 3 |
|---|---|---|---|---|---|---|---|
| **Respiration rate** (breaths/min) | ≤ 8 | — | 9–11 | 12–20 | — | 21–24 | ≥ 25 |
| **SpO2 Scale 1** (%) | ≤ 91 | 92–93 | 94–95 | ≥ 96 | — | — | — |
| **SpO2 Scale 2** (%) | ≤ 83 | 84–85 | 86–87 | 88–92 ≥ 93 on air | 93–94 on O2 | 95–96 on O2 | ≥ 97 on O2 |
| **Air or oxygen** | — | — | Oxygen | Air | — | — | — |
| **Systolic BP** (mmHg) | ≤ 90 | 91–100 | 101–110 | 111–219 | — | — | ≥ 220 |
| **Heart rate** (beats/min) | ≤ 40 | — | 41–50 | 51–90 | 91–110 | 111–130 | ≥ 131 |
| **Consciousness** | — | — | — | Alert | — | — | CVPU (Confusion, Voice, Pain, Unresponsive) |
| **Temperature** (°C) | ≤ 35.0 | — | 35.1–36.0 | 36.1–38.0 | 38.1–39.0 | ≥ 39.1 | — |

**Aggregate Score Interpretation:**

| NEWS2 Score | Risk Level | Clinical Response |
|---|---|---|
| 0–4 | Low | Routine monitoring (minimum every 12 hours) |
| 3 in any single parameter | Low-medium | Urgent bedside assessment by clinician |
| 5–6 | Medium | Urgent review; consider escalation of care |
| ≥ 7 | High | Emergency assessment; consider ICU/critical care team |

### 5.3 Modified Early Warning Score (MEWS)

| Parameter | Score 0 | Score 1 | Score 2 | Score 3 |
|---|---|---|---|---|
| Systolic BP (mmHg) | 101–199 | 81–100 | 71–80 or ≥ 200 | ≤ 70 |
| Heart rate (beats/min) | 51–100 | 101–110 or 41–50 | 111–129 or < 40 | ≥ 130 |
| Respiratory rate (breaths/min) | 9–14 | 15–20 | 21–29 | ≥ 30 or < 9 |
| Temperature (°C) | 35.0–38.4 | — | ≥ 38.5 or < 35.0 | — |
| Consciousness (AVPU) | Alert | Responsive to voice | Responsive to pain | Unresponsive |

A MEWS score ≥ 4 should trigger urgent clinical review and consideration of sepsis.

### 5.4 Recommended Screening Approach

The 2021 international sepsis guidelines make the following recommendation regarding screening:[^6]

> **Recommendation:** For hospitals and health systems, the panel suggests using a performance improvement program for sepsis, including sepsis screening for acutely ill, high-risk patients.
>
> *Strength: Best practice statement*

Key principles for institutional screening programs:

- **No single tool is sufficient.** The panel recommends against relying solely on qSOFA for screening. A multi-modal approach combining standardized screening tools with clinician assessment is preferred.[^6]
- **SIRS-based screening** has the highest sensitivity but lowest specificity, leading to alert fatigue in electronic health record-based screening programs.
- **NEWS/NEWS2** offers the best balance of sensitivity and specificity for inpatient ward screening and has been endorsed by multiple national health systems.
- **Machine learning-based tools** (e.g., Epic Sepsis Model and other proprietary algorithms) have been increasingly deployed, though external validation studies have shown variable performance and potential for bias.[^11]
- **Nurse-driven screening protocols** using structured assessment tools at triage and during routine vital sign collection have been shown to reduce time to treatment.

---

## 6. Lactate as a Biomarker in Sepsis

Serum lactate is a critical biomarker in sepsis management, serving as both a diagnostic criterion and a therapeutic target.[^6] [^12]

### 6.1 Lactate Physiology in Sepsis

Elevated lactate in sepsis is multifactorial:

- **Tissue hypoperfusion** → anaerobic glycolysis → increased lactate production
- **Stress-related catecholamine surge** → aerobic glycolysis via beta-2 adrenergic stimulation → increased lactate production even with adequate oxygen delivery
- **Impaired hepatic lactate clearance** in the setting of hepatic hypoperfusion or dysfunction
- **Mitochondrial dysfunction** → inability to utilize oxygen at the cellular level despite adequate delivery

### 6.2 Lactate Interpretation

| Lactate Level (mmol/L) | Interpretation | Clinical Significance |
|---|---|---|
| < 1.0 | Normal | Low risk |
| 1.0–1.9 | Normal to mildly elevated | Intermediate risk; does not meet septic shock criteria |
| 2.0–3.9 | Elevated | Meets component of septic shock criteria; associated with increased mortality; warrants aggressive resuscitation |
| ≥ 4.0 | Severely elevated | Associated with mortality > 30%; meets CMS SEP-1 septic shock trigger; mandates aggressive resuscitation |

### 6.3 Lactate-Guided Resuscitation

The 2021 international sepsis guidelines recommend:[^6]

> **Recommendation:** The panel suggests guiding resuscitation to decrease serum lactate in patients with elevated lactate levels, as a marker of tissue hypoperfusion.
>
> *Strength: Weak recommendation, low quality of evidence*

**Target:** Normalization of lactate OR lactate clearance of ≥ 10–20% every 2 hours during the initial resuscitation period.

**Lactate clearance** is calculated as:

> Lactate clearance (%) = [(Initial lactate – Repeat lactate) / Initial lactate] × 100

A lactate clearance of ≥ 10% within the first 2–6 hours has been associated with improved survival in multiple observational studies and one randomized controlled trial.[^12]

### 6.4 Pitfalls in Lactate Interpretation

- **Point-of-care vs. laboratory:** Venous and arterial lactate levels are clinically interchangeable for screening purposes; venous lactate runs approximately 0.2–0.3 mmol/L higher than arterial but this difference is not clinically meaningful.[^6]
- **Non-sepsis causes of elevated lactate:** Seizures, mesenteric ischemia, diabetic ketoacidosis, liver failure, medications (epinephrine infusion, metformin, linezolid, nucleoside reverse transcriptase inhibitors), thiamine deficiency, vigorous exercise, and sample handling errors (tourniquet time, delayed processing)
- **Normal lactate does not exclude sepsis:** Approximately 20–30% of patients who meet Sepsis-3 criteria have a normal initial lactate level

---

## 7. Procalcitonin in Sepsis

### 7.1 Physiology and Clinical Utility

Procalcitonin (PCT) is a 116-amino-acid prohormone of calcitonin that is released by various tissues in response to bacterial infection and systemic inflammation. In health, PCT levels are very low (< 0.05 ng/mL). In bacterial infection, PCT rises within 2–4 hours of onset, peaks at 12–24 hours, and has a serum half-life of approximately 24 hours.[^13]

### 7.2 Interpretation

| PCT Level (ng/mL) | Interpretation |
|---|---|
| < 0.1 | Bacterial infection very unlikely |
| 0.1–0.25 | Bacterial infection unlikely; consider withholding or stopping antibiotics |
| 0.25–0.5 | Bacterial infection possible; consider clinical context |
| 0.5–2.0 | Bacterial infection likely |
| 2.0–10.0 | Severe bacterial infection / sepsis highly likely |
| > 10.0 | Severe sepsis / septic shock with high bacterial burden |

### 7.3 Guideline Recommendations for PCT

The 2021 international sepsis guidelines recommend:[^6]

> **Recommendation:** The panel suggests using procalcitonin along with clinical evaluation to decide when to discontinue antimicrobials in adults with an initial diagnosis of sepsis or septic shock.
>
> *Strength: Weak recommendation, low quality of evidence*

PCT is discussed further in Part 3 (Antimicrobial Therapy & Source Control).

---

## References

[^1]: Bone RC, Balk RA, Cerra FB, et al. "Definitions for sepsis and organ failure and guidelines for the use of innovative therapies in sepsis." *Chest*. 1992;101(6):1644-1655. DOI: [10.1378/chest.101.6.1644](https://doi.org/10.1378/chest.101.6.1644)

[^2]: Singer M, Deutschman CS, Seymour CW, et al. "The Third International Consensus Definitions for Sepsis and Septic Shock (Sepsis-3)." *JAMA*. 2016;315(8):801-810. DOI: [10.1001/jama.2016.0287](https://doi.org/10.1001/jama.2016.0287)

[^3]: Vincent JL, Moreno R, Takala J, et al. "The SOFA (Sepsis-related Organ Failure Assessment) score to describe organ dysfunction/failure." *Intensive Care Med*. 1996;22(7):707-710. DOI: [10.1007/BF01709751](https://doi.org/10.1007/BF01709751)

[^4]: Rice TW, Wheeler AP, Bernard GR, et al. "Comparison of the SpO2/FIO2 ratio and the PaO2/FIO2 ratio in patients with acute lung injury or ARDS." *Chest*. 2007;132(2):410-417. DOI: [10.1378/chest.07-0617](https://doi.org/10.1378/chest.07-0617)

[^5]: Seymour CW, Liu VX, Iwashyna TJ, et al. "Assessment of Clinical Criteria for Sepsis: For the Third International Consensus Definitions for Sepsis and Septic Shock (Sepsis-3)." *JAMA*. 2016;315(8):762-774. DOI: [10.1001/jama.2016.0288](https://doi.org/10.1001/jama.2016.0288)

[^6]: Evans L, Rhodes A, Alhazzani W, et al. "Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021." *Crit Care Med*. 2021;49(11):e1063-e1143. DOI: [10.1097/CCM.0000000000005337](https://doi.org/10.1097/CCM.0000000000005337)

[^7]: Churpek MM, Snyder A, Han X, et al. "Quick Sepsis-related Organ Failure Assessment, Systemic Inflammatory Response Syndrome, and Early Warning Scores for Detecting Clinical Deterioration in Infected Patients outside the Intensive Care Unit." *Am J Respir Crit Care Med*. 2017;195(7):906-911. DOI: [10.1164/rccm.201604-0854OC](https://doi.org/10.1164/rccm.201604-0854OC)

[^8]: Centers for Medicare & Medicaid Services. "Specifications Manual for National Hospital Inpatient Quality Measures: Severe Sepsis and Septic Shock (SEP-1)." Version 5.12. CMS.gov. Available at: [https://qualitynet.cms.gov/inpatient/specifications-manuals](https://qualitynet.cms.gov/inpatient/specifications-manuals)

[^9]: Rhee C, Chiotos K, Gershengorn HB, et al. "Infectious Diseases Society of America Position Paper: Recommended Revisions to the National Severe Sepsis and Septic Shock Early Management Bundle (SEP-1)." *Clin Infect Dis*. 2021;72(4):541-552. DOI: [10.1093/cid/ciaa059](https://doi.org/10.1093/cid/ciaa059)

[^10]: Royal College of Physicians. "National Early Warning Score (NEWS) 2: Standardising the assessment of acute-illness severity in the NHS." Updated report of a working party. London: RCP, 2017. Available at: [https://www.rcplondon.ac.uk/projects/outputs/national-early-warning-score-news-2](https://www.rcplondon.ac.uk/projects/outputs/national-early-warning-score-news-2)

[^11]: Wong A, Otles E, Donnelly JP, et al. "External Validation of a Widely Implemented Proprietary Sepsis Prediction Model in Hospitalized Patients." *JAMA Intern Med*. 2021;181(8):1065-1070. DOI: [10.1001/jamainternmed.2021.2626](https://doi.org/10.1001/jamainternmed.2021.2626)

[^12]: Jansen TC, van Bommel J, Schoonderbeek FJ, et al. "Early lactate-guided therapy in intensive care unit patients: a multicenter, open-label, randomized controlled trial." *Am J Respir Crit Care Med*. 2010;182(6):752-761. DOI: [10.1164/rccm.200912-1918OC](https://doi.org/10.1164/rccm.200912-1918OC)

[^13]: Schuetz P, Beishuizen A, Giamarellos-Bourboulis EJ, et al. "Procalcitonin (PCT)-guided antibiotic stewardship: an international experts consensus on optimized clinical use." *Clin Chem Lab Med*. 2019;57(9):1308-1318. DOI: [10.1515/cclm-2018-1181](https://doi.org/10.1515/cclm-2018-1181)
