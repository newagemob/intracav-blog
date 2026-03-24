+++
title = "Acute Kidney Injury — Part 1: Definition, Staging & Epidemiology"
description = "KDIGO AKI definition and staging criteria, RIFLE and AKIN historical comparison, novel biomarkers (NGAL, KIM-1, NephroCheck), subclinical AKI, ICU epidemiology, and outcomes by stage."
date = 2026-03-15T00:00:00-05:00
lastmod = 2026-03-15T00:00:00-05:00
draft = false
weight = 1
source_org = "icu_aki"
guideline_set = "icu_aki_guideline_2026"
departments = ["icu", "nephrology"]
category = ["guidelines", "icu", "nephrology", "critical-care", "AKI"]
audience = "clinician"
content_type = "guidelines"
aliases = ["/guidelines/icu/acute-kidney-injury-rrt/part-1-definition-staging-epidemiology/"]
+++

## 1. Definition of Acute Kidney Injury

### 1.1 Conceptual Framework

Acute kidney injury (AKI) is defined as an abrupt decline in kidney function, occurring over hours to days, resulting in the retention of nitrogenous waste products (urea, creatinine), dysregulation of extracellular fluid volume, and disruption of electrolyte and acid-base homeostasis. Unlike chronic kidney disease (CKD), AKI is considered at least partially reversible in most cases, though it is increasingly recognized that even brief episodes of AKI confer long-term risk of CKD progression and cardiovascular events.[^1] [^2]

The international nephrology guideline organization's 2012 clinical practice guideline for AKI unified the prior RIFLE and AKIN classification systems into a single, harmonized definition and staging system that has become the global standard for clinical practice, research, and epidemiologic surveillance.[^1]

### 1.2 Consensus Definition

AKI is defined by the presence of **any one** of the following criteria:[^1]

- **Increase in serum creatinine (SCr) by ≥ 0.3 mg/dL (≥ 26.5 micromol/L) within 48 hours**
- **Increase in SCr to ≥ 1.5 times baseline, which is known or presumed to have occurred within the prior 7 days**
- **Urine volume < 0.5 mL/kg/hr for 6 hours**

> **Clinical Pearl:** The 48-hour creatinine window and the 7-day creatinine window serve different purposes. The absolute 0.3 mg/dL increase within 48 hours captures rapid injury (e.g., contrast exposure, post-operative AKI), while the 1.5x baseline within 7 days identifies more insidious declines. Both criteria are independently sufficient for diagnosis.

### 1.3 Baseline Creatinine Determination

Determining baseline creatinine is critical for staging and can be challenging, particularly in patients without prior laboratory data. The following hierarchy is recommended:[^1] [^3]

1. **Pre-admission creatinine** measured within the prior 7-365 days (ideally within 3 months) — preferred
2. **Admission creatinine** — if no prior values available and the clinical scenario suggests the admission value represents baseline function
3. **Back-calculation** using the Modification of Diet in Renal Disease (MDRD) equation, assuming a baseline estimated glomerular filtration rate (eGFR) of 75 mL/min/1.73 m² — use only when no measured baseline is available

> **Caution:** Back-calculating baseline creatinine systematically overestimates AKI incidence in patients with pre-existing CKD and underestimates it in patients with high baseline eGFR (young, muscular patients). Clinical context must guide interpretation.

---

## 2. AKI Staging — Complete Reference

### 2.1 Current Staging Criteria

The staging system classifies AKI severity into three stages based on changes in serum creatinine and/or urine output from baseline. The **worst** criterion (creatinine or urine output) determines the stage.[^1]

#### Complete Staging Table

| Stage | Serum Creatinine Criteria | Urine Output Criteria |
|---|---|---|
| **Stage 1** | Increase ≥ 0.3 mg/dL (≥ 26.5 micromol/L) within 48 hours **OR** increase to 1.5-1.9 times baseline within 7 days | < 0.5 mL/kg/hr for 6-12 hours |
| **Stage 2** | Increase to 2.0-2.9 times baseline | < 0.5 mL/kg/hr for ≥ 12 hours |
| **Stage 3** | Increase to ≥ 3.0 times baseline **OR** increase to ≥ 4.0 mg/dL (≥ 353.6 micromol/L) **OR** initiation of renal replacement therapy **OR** in patients < 18 years, decrease in eGFR to < 35 mL/min/1.73 m² | < 0.3 mL/kg/hr for ≥ 24 hours **OR** anuria for ≥ 12 hours |

#### Key Notes on Staging

- **Stage 3 by RRT:** Any patient initiated on renal replacement therapy is automatically classified as Stage 3, regardless of creatinine or urine output at the time of initiation
- **Stage 3 absolute threshold:** The ≥ 4.0 mg/dL absolute threshold for Stage 3 applies only when there has been an acute increase of at least 0.3 mg/dL or a rise to ≥ 1.5 times baseline — it is not intended to capture patients with stable CKD and chronically elevated creatinine
- **Urine output caveats:** Urine output criteria require accurate measurement (typically via indwelling urinary catheter) and must be interpreted in the context of volume status, diuretic use, and urinary obstruction
- **Worst criterion prevails:** A patient may meet Stage 1 by creatinine but Stage 2 by urine output; the higher stage (Stage 2) is assigned
- **Transient vs. persistent AKI:** AKI resolving within 48 hours is termed "transient AKI" and carries a better prognosis than persistent AKI, but still confers risk above patients without AKI[^2]

### 2.2 Practical Application of Staging Criteria

| Clinical Scenario | Baseline SCr | Current SCr | Change | UOP | Stage |
|---|---|---|---|---|---|
| Post-cardiac surgery, day 1 | 0.9 mg/dL | 1.3 mg/dL | +0.4 mg/dL (1.44x) | 0.4 mL/kg/hr x 8 hrs | **Stage 1** (both SCr and UOP criteria met for Stage 1) |
| Septic shock, day 2 | 1.0 mg/dL | 2.5 mg/dL | +1.5 mg/dL (2.5x) | 0.3 mL/kg/hr x 14 hrs | **Stage 2** (SCr 2.0-2.9x; UOP meets Stage 2) |
| Rhabdomyolysis, day 3 | 0.8 mg/dL | 5.2 mg/dL | +4.4 mg/dL (6.5x) | Anuric x 18 hrs | **Stage 3** (SCr ≥ 3x and ≥ 4.0; UOP meets Stage 3) |
| CRRT initiated | 1.2 mg/dL | 2.0 mg/dL | +0.8 mg/dL (1.67x) | 0.4 mL/kg/hr x 10 hrs | **Stage 3** (by RRT initiation, regardless of other criteria) |

---

## 3. Historical Classification Systems — RIFLE and AKIN

### 3.1 RIFLE Criteria (2004)

The RIFLE classification, proposed by the Acute Dialysis Quality Initiative (ADQI) in 2004, was the first consensus definition for AKI and introduced a graduated severity scheme using the acronym: Risk, Injury, Failure, Loss, End-stage.[^4]

| Class | GFR Criteria | Urine Output Criteria |
|---|---|---|
| **Risk** | SCr increase to 1.5x baseline OR GFR decrease > 25% | < 0.5 mL/kg/hr for 6 hours |
| **Injury** | SCr increase to 2.0x baseline OR GFR decrease > 50% | < 0.5 mL/kg/hr for 12 hours |
| **Failure** | SCr increase to 3.0x baseline OR GFR decrease > 75% OR SCr ≥ 4.0 mg/dL with acute rise ≥ 0.5 mg/dL | < 0.3 mL/kg/hr for 24 hours OR anuria for 12 hours |
| **Loss** | Persistent AKI = complete loss of kidney function for > 4 weeks | — |
| **End-stage** | End-stage kidney disease (> 3 months) | — |

### 3.2 AKIN Criteria (2007)

The Acute Kidney Injury Network (AKIN) modified the RIFLE criteria in 2007 with several key changes:[^5]

| Stage | Serum Creatinine Criteria | Urine Output Criteria |
|---|---|---|
| **Stage 1** | Increase ≥ 0.3 mg/dL OR increase to 1.5-2.0x baseline | < 0.5 mL/kg/hr for > 6 hours |
| **Stage 2** | Increase to > 2.0-3.0x baseline | < 0.5 mL/kg/hr for > 12 hours |
| **Stage 3** | Increase to > 3.0x baseline OR ≥ 4.0 mg/dL with acute increase ≥ 0.5 mg/dL OR initiation of RRT | < 0.3 mL/kg/hr for 24 hours OR anuria for 12 hours |

### 3.3 Comparison of All Three Classification Systems

| Feature | RIFLE (2004) | AKIN (2007) | Current Standard (2012) |
|---|---|---|---|
| **Number of severity stages** | 3 (Risk, Injury, Failure) + 2 outcome classes (Loss, End-stage) | 3 stages | 3 stages |
| **Absolute SCr increase threshold** | Not included | ≥ 0.3 mg/dL within 48 hrs (Stage 1) | ≥ 0.3 mg/dL within 48 hrs (Stage 1) |
| **GFR criteria** | Included (GFR decrease > 25/50/75%) | Not included | Not included |
| **Time window for SCr** | Not specified | 48 hours | 48 hours (absolute) OR 7 days (relative) |
| **RRT as Stage 3 criterion** | Not explicitly included | Yes | Yes |
| **Baseline determination** | Known or estimated | Known; 48-hour rolling window | Known or estimated; back-calculation accepted |
| **Outcome classes** | Loss, End-stage | Removed | Removed |

> **Clinical Significance:** The current staging system harmonized the RIFLE and AKIN approaches, incorporating the 0.3 mg/dL absolute threshold from AKIN and the 7-day relative change window from RIFLE, while eliminating the GFR criteria (which were difficult to apply in acute settings) and the outcome classes (which are better described as sequelae rather than staging categories).

---

## 4. Novel Biomarkers of AKI

### 4.1 Limitations of Traditional Markers

Serum creatinine and urine output — the basis of current AKI definitions — have well-recognized limitations as markers of kidney injury:[^6] [^2]

- **Creatinine is a marker of function, not injury:** SCr reflects glomerular filtration rate, not tubular damage; it may take 24-72 hours after injury to rise above the diagnostic threshold
- **Creatinine is affected by non-renal factors:** Muscle mass, protein intake, volume of distribution (dilution in fluid-resuscitated patients), drug interference with tubular secretion (trimethoprim, cimetidine)
- **Functional reserve obscures early injury:** Due to the kidney's substantial functional reserve, up to 50% of nephron function may be lost before SCr rises appreciably
- **Urine output is non-specific:** Oliguria may reflect appropriate renal physiology (volume depletion, ADH release) rather than injury

### 4.2 Emerging Biomarkers

| Biomarker | Source | Timing of Rise After Injury | Clinical Utility | Regulatory Status |
|---|---|---|---|---|
| **NGAL** (Neutrophil Gelatinase-Associated Lipocalin) | Urine and plasma | 2-4 hours | Early detection; particularly studied in cardiac surgery and contrast-associated AKI | CE-marked (Europe); not FDA-cleared for AKI diagnosis as of 2024 |
| **KIM-1** (Kidney Injury Molecule-1) | Urine | 6-12 hours | Proximal tubular injury marker; prognostic for AKI severity and renal recovery | Research use; not FDA-cleared |
| **TIMP-2 • IGFBP7** (NephroCheck) | Urine | 4-6 hours (prior to SCr rise) | Risk assessment for moderate-to-severe AKI within 12 hours; validated in critically ill patients | **FDA-cleared** (2014) — first and only FDA-cleared AKI biomarker test |
| **L-FABP** (Liver-type Fatty Acid Binding Protein) | Urine | 4-6 hours | Proximal tubular ischemia marker; studied in cardiac surgery and sepsis | CE-marked (Japan/Europe) |
| **IL-18** (Interleukin-18) | Urine | 6-12 hours | Marker of tubular inflammation; studied in cardiac surgery and ARDS | Research use |
| **Cystatin C** | Serum | 12-24 hours (earlier than creatinine) | Alternative filtration marker; less dependent on muscle mass than creatinine | Widely available; used for GFR estimation |

### 4.3 TIMP-2 • IGFBP7 (NephroCheck) — Clinical Application

The NephroCheck test is the first and only FDA-cleared biomarker test for AKI risk assessment. It measures the urinary concentration of two cell-cycle arrest markers — tissue inhibitor of metalloproteinase-2 (TIMP-2) and insulin-like growth factor-binding protein 7 (IGFBP7) — which are released by renal tubular cells in the earliest phases of cellular stress, before structural damage or functional decline occurs.[^7] [^8]

**Test Interpretation:**

| [TIMP-2] • [IGFBP7] Result (ng/mL²/1000) | Risk Category | Interpretation |
|---|---|---|
| **< 0.3** | Low risk | Low probability of moderate-to-severe AKI (Stage 2-3) within 12 hours |
| **0.3 - 2.0** | Intermediate risk | Increased probability; clinical vigilance warranted; consider nephroprotective measures |
| **> 2.0** | High risk | High probability of moderate-to-severe AKI within 12 hours; implement aggressive nephroprotective bundle |

**Validation Evidence:**

- The Sapphire study (n = 728 critically ill adults) established the AUC of 0.80 for prediction of moderate-to-severe AKI within 12 hours, superior to all existing biomarkers (NGAL, KIM-1, IL-18, L-FABP, cystatin C, pi-GST)[^7]
- The Opal validation study (n = 154) confirmed the cutoff of 0.3 with a sensitivity of 92% and a negative predictive value of 97% for Stage 2-3 AKI within 12 hours[^8]
- The PrevAKI trial demonstrated that a biomarker-guided care bundle (triggered by [TIMP-2] • [IGFBP7] > 0.3) reduced the incidence of AKI following cardiac surgery compared to standard care (55.1% vs. 71.7%, absolute risk reduction 16.6%, p = 0.004)[^9]

### 4.4 Subclinical AKI

The concept of subclinical AKI refers to the presence of tubular injury — evidenced by elevated urinary biomarkers — in the absence of changes in serum creatinine or urine output that meet the diagnostic criteria for AKI. This state represents genuine kidney damage that is "invisible" to conventional detection methods.[^2] [^6]

Patients with subclinical AKI have outcomes intermediate between patients without AKI and those with clinical AKI:

- Higher rates of subsequent clinical AKI progression
- Longer ICU and hospital length of stay
- Increased risk of renal replacement therapy
- Increased risk of long-term CKD

> **Emerging Concept:** The identification of subclinical AKI may allow earlier implementation of nephroprotective strategies (avoidance of further nephrotoxin exposure, optimization of hemodynamics, avoidance of fluid overload) before functional decline becomes clinically apparent.

---

## 5. Epidemiology of AKI in Critical Care

### 5.1 Incidence

AKI is one of the most common organ dysfunctions encountered in the ICU. Incidence estimates vary depending on the population studied and the diagnostic criteria applied:[^10] [^11]

| Population | Estimated AKI Incidence | Stage 3 / Severe AKI | RRT Requirement |
|---|---|---|---|
| **All hospitalized patients** | 10-15% | 2-5% | 1-2% |
| **General ICU admissions** | 50-60% | 15-20% | 5-10% |
| **Sepsis/septic shock** | 40-50% | 20-25% | 10-15% |
| **Cardiac surgery** | 20-40% | 2-6% | 2-5% |
| **Major non-cardiac surgery** | 5-15% | 1-3% | 0.5-2% |
| **Contrast exposure (diagnostic)** | 5-10% | < 1% | < 0.5% |
| **Liver transplant** | 40-80% | 10-25% | 5-15% |

### 5.2 Outcomes by AKI Stage

Mortality and other adverse outcomes increase in a graded fashion with AKI severity:[^10] [^11] [^12]

| Outcome | No AKI | Stage 1 | Stage 2 | Stage 3 | Stage 3 with RRT |
|---|---|---|---|---|---|
| **ICU mortality** | 5-8% | 15-20% | 25-30% | 35-50% | 40-55% |
| **Hospital mortality** | 8-12% | 20-25% | 30-40% | 45-60% | 50-65% |
| **90-day mortality** | 10-15% | 22-28% | 35-45% | 50-65% | 55-70% |
| **Need for RRT** | — | 2-5% | 5-10% | 30-40% (if not already on RRT) | 100% (by definition) |
| **RRT dependence at discharge** | — | < 1% | 1-3% | 5-15% | 10-25% |
| **Progression to CKD (1 year)** | Reference | OR 2.0-4.0 | OR 4.0-8.0 | OR 8.0-15.0 | OR 10.0-20.0 |

### 5.3 Long-Term Renal Outcomes After AKI

The traditional view that AKI is a fully reversible condition has been challenged by robust epidemiologic evidence demonstrating that AKI — even a single episode of Stage 1 AKI — is an independent risk factor for the development and progression of CKD, end-stage kidney disease (ESKD), and cardiovascular events:[^13] [^14]

- **AKI to CKD transition:** Approximately 25-30% of patients with AKI in the ICU develop new or worsening CKD within 1-3 years of follow-up
- **AKI to ESKD:** The risk of ESKD is increased 3-10-fold after an episode of AKI requiring RRT
- **Dose-response relationship:** The risk of CKD and ESKD increases progressively with AKI severity and with the number of AKI episodes
- **Even "complete" recovery carries risk:** Patients whose serum creatinine returns to baseline after AKI still have elevated long-term risk of CKD compared to matched patients who never developed AKI
- **Cardiovascular risk:** AKI is independently associated with increased risk of heart failure, acute myocardial infarction, and stroke in the years following the acute episode

### 5.4 Global Burden and Health System Impact

The international nephrology guideline organization's 2020 controversies conference highlighted AKI as a major global health concern:[^2]

- AKI causes an estimated 1.7 million deaths annually worldwide
- The burden is disproportionately high in low- and middle-income countries, where access to RRT and critical care is limited
- AKI-related health care costs exceed $10 billion annually in the United States alone
- AKI survivors generate substantial downstream costs through CKD management, dialysis, and transplantation

---

## 6. AKI Duration and Recovery Terminology

### 6.1 Consensus Definitions for AKI Duration

The Acute Disease Quality Initiative (ADQI) 16th consensus conference proposed standardized definitions for AKI duration and recovery, which have been adopted by the broader nephrology and critical care community:[^15]

| Term | Definition |
|---|---|
| **Transient AKI** | AKI resolving within 48 hours of onset |
| **Persistent AKI** | AKI lasting > 48 hours but < 7 days |
| **Acute kidney disease (AKD)** | Kidney dysfunction persisting for 7-90 days after AKI onset; bridges the definitional gap between AKI and CKD |
| **CKD after AKI** | eGFR < 60 mL/min/1.73 m² or other markers of kidney damage persisting > 90 days after AKI onset |

### 6.2 Recovery Definitions

| Term | Definition |
|---|---|
| **Complete recovery** | Return of SCr to within 0.3 mg/dL of baseline AND absence of ongoing RRT |
| **Partial recovery** | SCr improvement but remaining above baseline + 0.3 mg/dL; or RRT-free but with reduced eGFR |
| **No recovery** | Persistent elevation of SCr ≥ 1.5x baseline OR ongoing RRT dependence |

> **Clinical Implication:** All patients with AKI — including those with apparent complete recovery — should have nephrology follow-up within 3 months of hospital discharge to assess renal function, proteinuria, and blood pressure. This recommendation is consistently endorsed by the international nephrology guideline organizations and expert consensus panels.[^1] [^2]

---

## References

[^1]: Kidney Disease: Improving Global Outcomes (KDIGO) Acute Kidney Injury Work Group. "KDIGO Clinical Practice Guideline for Acute Kidney Injury." *Kidney Int Suppl*. 2012;2(1):1-138. DOI: [10.1038/kisup.2012.1](https://doi.org/10.1038/kisup.2012.1)

[^2]: Ostermann M, Bellomo R, Burdmann EA, et al. "Controversies in Acute Kidney Injury: Conclusions from a Kidney Disease: Improving Global Outcomes (KDIGO) Conference." *Kidney Int*. 2020;98(2):294-309. DOI: [10.1016/j.kint.2020.04.020](https://doi.org/10.1016/j.kint.2020.04.020)

[^3]: Kellum JA, Lameire N; KDIGO AKI Guideline Work Group. "Diagnosis, Evaluation, and Management of Acute Kidney Injury: A KDIGO Summary (Part 1)." *Crit Care*. 2013;17(1):204. DOI: [10.1186/cc11454](https://doi.org/10.1186/cc11454)

[^4]: Bellomo R, Ronco C, Kellum JA, et al. "Acute Renal Failure — Definition, Outcome Measures, Animal Models, Fluid Therapy and Information Technology Needs: The Second International Consensus Conference of the Acute Dialysis Quality Initiative (ADQI) Group." *Crit Care*. 2004;8(4):R204-R212. DOI: [10.1186/cc2872](https://doi.org/10.1186/cc2872)

[^5]: Mehta RL, Kellum JA, Shah SV, et al. "Acute Kidney Injury Network: Report of an Initiative to Improve Outcomes in Acute Kidney Injury." *Crit Care*. 2007;11(2):R31. DOI: [10.1186/cc5713](https://doi.org/10.1186/cc5713)

[^6]: Haase M, Devarajan P, Haase-Fielitz A, et al. "The Outcome of Neutrophil Gelatinase-Associated Lipocalin-Positive Subclinical Acute Kidney Injury: A Multicenter Pooled Analysis of Prospective Studies." *J Am Coll Cardiol*. 2011;57(17):1752-1761. DOI: [10.1016/j.jacc.2010.11.051](https://doi.org/10.1016/j.jacc.2010.11.051)

[^7]: Kashani K, Al-Khafaji A, Ardiles T, et al. "Discovery and Validation of Cell Cycle Arrest Biomarkers in Human Acute Kidney Injury." *Crit Care*. 2013;17(1):R25. DOI: [10.1186/cc12503](https://doi.org/10.1186/cc12503)

[^8]: Bihorac A, Chawla LS, Shaw AD, et al. "Validation of Cell-Cycle Arrest Biomarkers for Acute Kidney Injury Using Clinical Adjudication." *Am J Respir Crit Care Med*. 2014;189(8):932-939. DOI: [10.1164/rccm.201401-0077OC](https://doi.org/10.1164/rccm.201401-0077OC)

[^9]: Meersch M, Schmidt C, Hoffmeier A, et al. "Prevention of Cardiac Surgery-Associated AKI by Implementing the KDIGO Guidelines in High Risk Patients Identified by Biomarkers: The PrevAKI Randomized Controlled Trial." *Intensive Care Med*. 2017;43(11):1551-1561. DOI: [10.1007/s00134-016-4670-3](https://doi.org/10.1007/s00134-016-4670-3)

[^10]: Hoste EAJ, Bagshaw SM, Bellomo R, et al. "Epidemiology of Acute Kidney Injury in Critically Ill Patients: The Multinational AKI-EPI Study." *Intensive Care Med*. 2015;41(8):1411-1423. DOI: [10.1007/s00134-015-3934-7](https://doi.org/10.1007/s00134-015-3934-7)

[^11]: Susantitaphong P, Cruz DN, Cerda J, et al. "World Incidence of AKI: A Meta-Analysis." *Clin J Am Soc Nephrol*. 2013;8(9):1482-1493. DOI: [10.2215/CJN.00710113](https://doi.org/10.2215/CJN.00710113)

[^12]: Uchino S, Kellum JA, Bellomo R, et al. "Acute Renal Failure in Critically Ill Patients: A Multinational, Multicenter Study." *JAMA*. 2005;294(7):813-818. DOI: [10.1001/jama.294.7.813](https://doi.org/10.1001/jama.294.7.813)

[^13]: Chawla LS, Eggers PW, Star RA, et al. "Acute Kidney Injury and Chronic Kidney Disease as Interconnected Syndromes." *N Engl J Med*. 2014;371(1):58-66. DOI: [10.1056/NEJMra1214243](https://doi.org/10.1056/NEJMra1214243)

[^14]: See EJ, Jayasinghe K, Glassford N, et al. "Long-term Risk of Adverse Outcomes After Acute Kidney Injury: A Systematic Review and Meta-analysis of Cohort Studies Using Consensus Definitions of Exposure." *Kidney Int*. 2019;95(1):160-172. DOI: [10.1016/j.kint.2018.08.036](https://doi.org/10.1016/j.kint.2018.08.036)

[^15]: Chawla LS, Bellomo R, Bihorac A, et al. "Acute Kidney Disease and Renal Recovery: Consensus Report of the Acute Disease Quality Initiative (ADQI) 16 Workgroup." *Nat Rev Nephrol*. 2017;13(4):241-257. DOI: [10.1038/nrneph.2017.2](https://doi.org/10.1038/nrneph.2017.2)
