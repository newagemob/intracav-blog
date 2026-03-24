+++
title = "Acute Coronary Syndromes — Part 2: Cardiac Biomarkers & Risk Stratification"
description = "Troponin biology, high-sensitivity troponin algorithms (0/1h and 0/3h), HEART score, TIMI risk scores, GRACE score, HEART Pathway, and chest pain observation pathways."
date = 2026-03-15T00:00:00-05:00
lastmod = 2026-03-15T00:00:00-05:00
draft = false
weight = 2
source_org = "ed_acs"
guideline_set = "ed_acs_guideline_2026"
departments = ["ed", "icu"]
category = ["guidelines", "ed", "cardiology", "acute-coronary-syndromes"]
audience = "clinician"
content_type = "guidelines"
aliases = ["/guidelines/ed/acute-coronary-syndromes/part-2-troponin-risk-stratification/"]
+++

## 1. Cardiac Troponin — The Biomarker of Myocardial Necrosis

### 1.1 Biology of Cardiac Troponin

Cardiac troponins are structural proteins of the sarcomere that regulate calcium-mediated contraction of cardiac myocytes. The troponin complex consists of three subunits:[^1]

- **Troponin C (TnC):** Binds calcium; identical isoform in cardiac and skeletal muscle — not used as a cardiac biomarker
- **Troponin I (cTnI):** Inhibits actin-myosin interaction; cardiac-specific isoform distinct from skeletal muscle
- **Troponin T (cTnT):** Binds the troponin complex to tropomyosin; cardiac-specific isoform distinct from skeletal muscle

Both cTnI and cTnT are preferred biomarkers for the detection of myocardial injury. Following myocardial necrosis:[^1] [^2]

| Kinetic Parameter | Conventional Troponin | High-Sensitivity Troponin (hs-cTn) |
|---|---|---|
| **Initial rise** | 3-6 hours after symptom onset | 1-3 hours after symptom onset |
| **Peak** | 12-24 hours (cTnI); 12-48 hours (cTnT) | Same as conventional |
| **Return to baseline** | 5-14 days (cTnI); 5-21 days (cTnT) | Same as conventional |
| **Analytical sensitivity** | Detects values at/above the 99th percentile URL | Detects values 10-100x lower than conventional; measurable in >50% of healthy individuals |

### 1.2 Conventional vs. High-Sensitivity Troponin Assays

| Feature | Conventional Assay | High-Sensitivity Assay |
|---|---|---|
| **Definition** | Coefficient of variation (CV) at 99th percentile URL is >10% (imprecise at the diagnostic threshold) | CV at 99th percentile URL is ≤10% AND measurable concentrations in ≥50% of a healthy reference population |
| **Diagnostic threshold** | 99th percentile URL (assay-specific) | 99th percentile URL (assay-specific; sex-specific thresholds recommended) |
| **Sensitivity for MI at presentation** | 50-75% at 0-3 hours | 80-95% at presentation (0 hours) |
| **Negative predictive value (single draw)** | Insufficient for early rule-out | Very high (>99%) when below limit of detection in low-risk patients |
| **Serial testing required** | Yes — 3-6 hour repeat minimum | 0/1-hour or 0/3-hour algorithms validated |
| **Specificity considerations** | Higher specificity (fewer detectable elevations from non-ACS causes) | Lower specificity (detects subclinical myocardial injury from many causes — CKD, HF, sepsis, PE, myocarditis, etc.) |

### 1.3 Commonly Used High-Sensitivity Troponin Assays and Thresholds

| Assay | Manufacturer | 99th Percentile URL (Overall) | 99th Percentile URL (Female) | 99th Percentile URL (Male) | Units |
|---|---|---|---|---|---|
| **hs-cTnT (Elecsys)** | Roche | 14 ng/L | 9 ng/L | 16 ng/L | ng/L |
| **hs-cTnI (ARCHITECT STAT)** | Abbott | 26 ng/L | 16 ng/L | 34 ng/L | ng/L |
| **hs-cTnI (ADVIA Centaur)** | Siemens | 47 ng/L | 34 ng/L | 53 ng/L | ng/L |
| **hs-cTnI (ACCESS)** | Beckman Coulter | 18 ng/L | 11 ng/L | 20 ng/L | ng/L |
| **hs-cTnI (Atellica/VISTA)** | Siemens | 46 ng/L | 34 ng/L | 53 ng/L | ng/L |

**Critical note:** Assay-specific thresholds must be used. Values are NOT interchangeable between platforms. Clinicians must know which assay their laboratory uses.[^2] [^3]

### 1.4 Sex-Specific Thresholds

The international expert consensus panel and the European cardiology guidelines committee both recommend the use of sex-specific 99th percentile thresholds for high-sensitivity troponin assays. Women have lower circulating troponin levels than men; using a single (overall) threshold may result in underdiagnosis of MI in women. Sex-specific thresholds increase the diagnosis of MI in women by approximately 40-60% in registry studies, with improved long-term outcomes when appropriately treated.[^3] [^4]

---

## 2. Rapid Rule-Out and Rule-In Algorithms

### 2.1 The 0/1-Hour Algorithm (European Cardiology Guidelines Committee)

The 0/1-hour (0h/1h) algorithm is recommended as the preferred rapid assessment pathway by the international cardiology guidelines committee, using high-sensitivity cardiac troponin (hs-cTn) measured at presentation (0h) and at 1 hour (1h).[^3]

**Prerequisites for using the 0/1h algorithm:**
- High-sensitivity troponin assay (not conventional assay)
- Chest pain onset > 3 hours before presentation (if < 3 hours, a 3-hour re-test is recommended if 0/1h is negative)
- Assay-specific validated cutoffs must be used

#### 0/1-Hour Algorithm for hs-cTnT (Roche Elecsys)

| Category | 0h Criteria | 1h Criteria | Action |
|---|---|---|---|
| **Rule-out** | hs-cTnT < 5 ng/L at 0h | — (no 1h needed if very low at 0h) | Discharge pathway (if low clinical risk and no ongoing symptoms) |
| **Rule-out (with 1h)** | hs-cTnT < 12 ng/L at 0h | AND delta (1h - 0h) < 3 ng/L | Discharge pathway |
| **Observe** | Does not meet rule-out or rule-in criteria | — | Serial troponin at 3h; further evaluation |
| **Rule-in** | hs-cTnT ≥ 52 ng/L at 0h | OR delta (1h - 0h) ≥ 5 ng/L | Invasive management pathway; treat as NSTEMI |

#### 0/1-Hour Algorithm for hs-cTnI (Abbott ARCHITECT)

| Category | 0h Criteria | 1h Criteria | Action |
|---|---|---|---|
| **Rule-out** | hs-cTnI < 5 ng/L at 0h | — (no 1h needed if very low at 0h) | Discharge pathway |
| **Rule-out (with 1h)** | hs-cTnI < 12 ng/L at 0h | AND delta (1h - 0h) < 2 ng/L | Discharge pathway |
| **Observe** | Does not meet rule-out or rule-in criteria | — | Serial troponin at 3h |
| **Rule-in** | hs-cTnI ≥ 52 ng/L at 0h | OR delta (1h - 0h) ≥ 6 ng/L | Invasive management pathway |

#### 0/1-Hour Algorithm for hs-cTnI (Siemens Atellica/ADVIA Centaur)

| Category | 0h Criteria | 1h Criteria | Action |
|---|---|---|---|
| **Rule-out** | hs-cTnI < 5 ng/L at 0h | — | Discharge pathway |
| **Rule-out (with 1h)** | hs-cTnI < 120 ng/L at 0h | AND delta (1h - 0h) < 12 ng/L | Discharge pathway |
| **Observe** | Does not meet rule-out or rule-in criteria | — | Serial troponin at 3h |
| **Rule-in** | hs-cTnI ≥ 120 ng/L at 0h | OR delta (1h - 0h) ≥ 12 ng/L | Invasive management pathway |

### 2.2 The 0/3-Hour Algorithm

For institutions not validated on the 0/1h pathway or using conventional troponin assays, a 0/3-hour protocol is an acceptable alternative:[^3] [^5]

| Time Point | Rule-Out Criteria (hs-cTn) | Rule-Out Criteria (Conventional cTn) |
|---|---|---|
| **0 hours** | hs-cTn below 99th percentile URL AND low clinical risk (HEART ≤ 3) | Below 99th percentile URL |
| **3 hours** | hs-cTn remains below 99th percentile URL AND delta < 20% (if 0h value above limit of detection) or delta < 50% (if 0h value below limit of detection) | Remains below 99th percentile URL |
| **Rule-in** | Rise and/or fall with at least one value above 99th percentile URL + clinical context consistent with ischemia | Same |
| **6 hours** | Not routinely needed with hs-cTn if 0/3h negative | Recommended with conventional assays if presentation < 6h from symptom onset |

### 2.3 Key Principles of Troponin Interpretation

1. **Rise and/or fall pattern:** A single elevated troponin value indicates myocardial injury but does not distinguish acute from chronic injury. The **dynamic change** (rise and/or fall) is essential for diagnosing acute myocardial injury.[^1]
2. **Clinical context is paramount:** An elevated troponin requires clinical correlation. The differential diagnosis of elevated troponin extends far beyond Type 1 MI.
3. **Delta values:** The absolute change (delta) between serial measurements is more clinically useful than relative (percentage) change, particularly with hs-cTn assays.[^3]

### 2.4 Common Causes of Elevated Troponin Beyond Type 1 MI

| Category | Conditions |
|---|---|
| **Cardiac (non-ACS)** | Heart failure (acute and chronic), myocarditis, takotsubo cardiomyopathy, cardiac contusion, cardioversion, ablation procedures, cardiac surgery, hypertrophic cardiomyopathy, aortic valve disease, aortic dissection (when involving coronary ostia) |
| **Systemic** | Sepsis/critical illness, pulmonary embolism, pulmonary hypertension, renal failure (chronic — steady-state elevation; acute — rising), stroke/subarachnoid hemorrhage, infiltrative diseases (amyloidosis, sarcoidosis), chemotherapy cardiotoxicity |
| **Demand ischemia (Type 2 MI)** | Sustained tachyarrhythmia, severe hypo/hypertension, severe anemia, respiratory failure, severe aortic stenosis |
| **Non-pathologic** | Extreme endurance exercise (transient elevation), assay interference (heterophile antibodies, biotin) |

---

## 3. Other Cardiac Biomarkers

### 3.1 CK-MB

Creatine kinase-MB isoenzyme is no longer recommended as the primary biomarker for MI diagnosis but retains a role in specific clinical scenarios:[^1]

- **Detecting reinfarction:** CK-MB rises and falls more rapidly than troponin (returns to baseline within 48-72 hours), making it useful for detecting reinfarction in the setting of an already-elevated troponin from a recent MI
- **Periprocedural MI:** Some protocols still use CK-MB for diagnosing periprocedural MI after PCI or CABG
- **Timing of MI:** A rising CK-MB with elevated troponin suggests acute (< 48 hour) MI; an elevated troponin with normal CK-MB suggests the MI occurred > 48-72 hours prior

### 3.2 BNP / NT-proBNP

B-type natriuretic peptide and its N-terminal fragment are not diagnostic for MI but provide prognostic information in ACS:[^2]

- Elevated BNP or NT-proBNP at presentation is associated with higher risk of death and heart failure in ACS
- Useful for assessing LV dysfunction and volume status
- May help differentiate dyspnea due to HF vs. ACS vs. pulmonary causes

### 3.3 High-Sensitivity C-Reactive Protein (hs-CRP)

- Inflammatory biomarker associated with plaque instability
- Elevated hs-CRP (> 2 mg/L) in ACS is associated with worse outcomes
- Not recommended for acute diagnosis; may have role in risk stratification for secondary prevention decisions[^2]

---

## 4. Risk Stratification Scores

### 4.1 HEART Score

The HEART score was specifically developed and validated for risk stratification of undifferentiated chest pain patients in the emergency department. It has been validated in multiple large multicenter studies and is recommended by the chest pain evaluation guidelines committee.[^5] [^6]

#### Complete HEART Score Table

| Component | 0 Points | 1 Point | 2 Points |
|---|---|---|---|
| **H — History** | Slightly suspicious (non-specific history, atypical symptoms) | Moderately suspicious (mixed typical and atypical features) | Highly suspicious (primarily typical features: substernal pressure, radiation to arm/jaw, diaphoresis, exertional, relief with nitro/rest) |
| **E — ECG** | Normal | Non-specific repolarization disturbance (LBBB, LVH, paced rhythm, ST depression < 0.5 mm, or other non-specific changes) | Significant ST deviation (ST depression ≥ 0.5 mm, new T-wave inversions, or ST elevation not meeting STEMI criteria) |
| **A — Age** | < 45 years | 45-64 years | ≥ 65 years |
| **R — Risk Factors** | No known risk factors | 1-2 risk factors (HTN, DM, hyperlipidemia, smoking, obesity/BMI > 30, family history of premature CAD, PAD, prior stroke) | ≥ 3 risk factors OR known atherosclerotic disease (prior MI, PCI, CABG, stroke/TIA, PAD) |
| **T — Troponin** | ≤ normal limit | 1-3 × normal limit | > 3 × normal limit |

**Total score range: 0-10**

#### HEART Score Risk Categories and Recommended Disposition

| HEART Score | Risk Category | 30-Day MACE Rate | Recommended Action |
|---|---|---|---|
| **0-3** | Low risk | 0.9-1.7% | Consider early discharge with outpatient follow-up within 72 hours; further testing at discretion of treating physician |
| **4-6** | Intermediate risk | 12-17% | Admit for observation, serial troponin, and further risk stratification (stress testing or coronary CTA); cardiology consultation |
| **7-10** | High risk | 50-65% | Admit to monitored bed; early invasive strategy (cardiac catheterization); cardiology consultation |

### 4.2 HEART Pathway

The HEART Pathway integrates the HEART score with serial high-sensitivity troponin testing to create a structured decision protocol:[^6]

**Step 1:** Calculate HEART score at presentation
**Step 2:** Obtain initial troponin

- If HEART score 0-3 AND initial troponin negative → **low risk**
  - If using hs-cTn: consider single-draw discharge if hs-cTn below limit of detection and symptom onset > 3 hours
  - If using conventional troponin: obtain repeat troponin at 3-6 hours
- If HEART score 0-3 AND troponin positive → reclassify as intermediate/high risk
- If HEART score 4-6 → intermediate risk pathway (observation, serial troponins, stress testing or CTA)
- If HEART score 7-10 → high risk (invasive strategy)

**Step 3:** Serial troponin (if indicated)
- If both troponins negative AND HEART 0-3 → discharge with follow-up
- If troponin rises above threshold → manage as NSTEMI

**Validation data:** The HEART Pathway has been shown to safely identify approximately 40% of ED chest pain patients as low risk for early discharge, with a 30-day MACE miss rate of < 1%.[^6]

### 4.3 TIMI Risk Score for NSTEMI/UA

The TIMI risk score for NSTEMI/UA was derived from clinical trial data and predicts 14-day risk of death, MI, or urgent revascularization.[^7]

| Risk Factor | Points | Definition |
|---|---|---|
| Age ≥ 65 years | 1 | — |
| ≥ 3 CAD risk factors | 1 | Hypertension, diabetes, hyperlipidemia, smoking, family history of premature CAD |
| Known CAD (stenosis ≥ 50%) | 1 | Prior catheterization demonstrating significant stenosis |
| ASA use in past 7 days | 1 | Aspirin use (suggesting failure of therapy) |
| Severe angina (≥ 2 episodes in 24h) | 1 | Recurrent symptoms |
| ST deviation ≥ 0.5 mm | 1 | New ST depression ≥ 0.5 mm on ECG |
| Positive cardiac biomarker | 1 | Elevated troponin or CK-MB |

**Total score range: 0-7**

| TIMI Score | Risk Level | 14-Day Event Rate (Death/MI/Urgent Revasc) |
|---|---|---|
| 0-1 | Low | 4.7-8.3% |
| 2 | Low-Intermediate | 8.3% |
| 3 | Intermediate | 13.2% |
| 4 | Intermediate-High | 19.9% |
| 5 | High | 26.2% |
| 6-7 | Very High | 40.9-41.0% |

### 4.4 TIMI Risk Score for STEMI

The TIMI risk score for STEMI predicts 30-day mortality in patients with STEMI treated with fibrinolytic therapy. It was derived from the InTIME-II trial.[^8]

| Risk Factor | Points |
|---|---|
| Age 65-74 years | 2 |
| Age ≥ 75 years | 3 |
| Systolic BP < 100 mmHg | 3 |
| Heart rate > 100 bpm | 2 |
| Killip class II-IV | 2 |
| Body weight < 67 kg | 1 |
| Anterior STEMI or LBBB | 1 |
| Time to treatment > 4 hours | 1 |
| Diabetes, hypertension, or angina history | 1 |

**Total score range: 0-14**

| TIMI Score | 30-Day Mortality |
|---|---|
| 0 | 0.8% |
| 1 | 1.6% |
| 2 | 2.2% |
| 3 | 4.4% |
| 4 | 7.3% |
| 5 | 12.4% |
| 6 | 16.1% |
| 7 | 23.4% |
| 8+ | 26.8-35.9% |

### 4.5 GRACE Score

The Global Registry of Acute Coronary Events (GRACE) score is the most extensively validated risk prediction tool for in-hospital and 6-month mortality across the entire ACS spectrum. It is recommended by the international cardiology guidelines committee as the preferred risk assessment tool for guiding timing of invasive strategy in NSTE-ACS.[^3] [^9]

#### GRACE Score Components

| Variable | Range of Points |
|---|---|
| **Age** | 0-100 (continuous; higher with increasing age) |
| **Heart rate** | 0-46 (continuous; higher with increasing HR) |
| **Systolic blood pressure** | 0-63 (continuous; higher with decreasing SBP — inverse relationship) |
| **Creatinine** | 1-31 (continuous; higher with increasing creatinine) |
| **Killip class** | I = 0; II = 21; III = 43; IV = 64 |
| **Cardiac arrest at admission** | 43 points if present |
| **ST-segment deviation** | 30 points if present |
| **Elevated cardiac biomarkers** | 15 points if present |

**Note:** The GRACE score is typically calculated using an online calculator or app (www.gracescore.org) because the individual variable points follow non-linear curves. A simplified GRACE risk calculator (GRACE 2.0) is also available.

#### GRACE Score Risk Categories

| GRACE Score | In-Hospital Mortality | 6-Month Mortality | Risk Category | Recommended Timing of Invasive Strategy |
|---|---|---|---|---|
| **≤ 108** | < 1% | < 3% | Low | Elective invasive evaluation (within 72 hours) or initially conservative |
| **109-140** | 1-3% | 3-8% | Intermediate | Early invasive strategy (within 24 hours) |
| **> 140** | > 3% | > 8% | High | Immediate or very early invasive strategy (within 24 hours; consider < 2 hours if very high risk features) |

### 4.6 Comparison of Risk Scores

| Feature | HEART | TIMI (NSTE-ACS) | GRACE |
|---|---|---|---|
| **Developed for** | ED chest pain (undifferentiated) | Clinical trial NSTE-ACS population | ACS registry (all ACS) |
| **Best suited for** | Initial ED triage/disposition | Risk assessment after ACS diagnosis | Risk assessment for timing of invasive strategy |
| **Ease of calculation** | Simple (5 variables, integer scoring) | Simple (7 yes/no variables) | Moderate (requires calculator for non-linear curves) |
| **Validation** | Extensive in ED populations | Moderate (clinical trial derivation) | Extensive (large international registry) |
| **Guideline endorsement** | Chest pain evaluation guidelines | NSTE-ACS guidelines | International and North American cardiology guidelines for timing of angiography |
| **Outcome predicted** | 30-day MACE | 14-day death/MI/urgent revasc | In-hospital and 6-month mortality |

---

## 5. Chest Pain Observation and Disposition Pathways

### 5.1 Who Can Be Safely Discharged from the ED?

Based on the 2021 chest pain evaluation guidelines and contemporary evidence, patients may be considered for early discharge from the ED if ALL of the following criteria are met:[^5]

1. **HEART score 0-3** (low risk)
2. **Normal or non-ischemic ECG** (no ST changes, no new conduction abnormalities)
3. **Negative serial troponin** (two negative hs-cTn values using a validated protocol — 0/1h or 0/3h — OR a single hs-cTn below the limit of detection with symptom onset > 3 hours)
4. **No ongoing symptoms** at time of proposed discharge
5. **No hemodynamic instability** during ED stay
6. **Reliable follow-up** can be arranged within 72 hours

### 5.2 Observation Unit / Chest Pain Unit Pathways

For patients not meeting criteria for immediate discharge or high-risk admission, an observation pathway is appropriate:[^5]

| Phase | Duration | Components |
|---|---|---|
| **Monitoring** | 6-12 hours | Continuous telemetry, serial ECGs (at 0, 3, 6 hours or with recurrent symptoms), serial troponin (per protocol) |
| **Risk assessment** | During observation | Calculate HEART, TIMI, or GRACE scores; review troponin trends; cardiology consultation for intermediate/high-risk patients |
| **Provocative testing** (if low-intermediate risk, negative troponins) | Prior to discharge | Exercise stress ECG, stress echocardiography, stress MPI/SPECT, or coronary CT angiography (CCTA) |
| **Disposition** | After testing | Negative test → discharge with follow-up; positive test → admission and invasive evaluation |

### 5.3 Coronary CT Angiography (CCTA) in the Chest Pain Pathway

The 2021 chest pain guidelines provide a Class I recommendation for CCTA as an alternative to functional stress testing for low-to-intermediate risk patients with acute chest pain:[^5]

- **Advantages:** High sensitivity (95-99%) and negative predictive value (97-100%) for obstructive CAD; rapid (< 30 minutes); provides anatomic information
- **Best candidates:** Young to middle-aged patients, no known CAD, low-intermediate pretest probability, able to hold breath, heart rate controllable to < 65 bpm (beta-blocker premedication)
- **Limitations:** Radiation exposure, contrast administration, limited in heavy calcification (calcium score > 400), post-stent/post-CABG evaluation limited, less useful in known CAD

### 5.4 Stress Testing Options for the Chest Pain Pathway

| Modality | Sensitivity for Obstructive CAD | Specificity | Best Candidates | Contraindications |
|---|---|---|---|---|
| **Exercise ECG** (treadmill) | 68% | 77% | Patients who can exercise, normal baseline ECG, no LVH, not on digoxin | LBBB, ventricular paced rhythm, ST depression > 1 mm at baseline, unable to exercise |
| **Stress echocardiography** (exercise or dobutamine) | 80-85% | 80-88% | Patients with baseline ECG abnormalities; provides wall motion + valvular assessment | Very limited echocardiographic windows; severe arrhythmia |
| **Stress MPI (SPECT)** (exercise or pharmacologic) | 82-88% | 70-75% | Unable to exercise (pharmacologic option); obesity; baseline ECG abnormalities | Severe bronchospasm (for adenosine/regadenoson); recent caffeine intake |
| **Stress CMR** (pharmacologic) | 86-91% | 81-86% | Excellent spatial resolution; no radiation | Implanted devices (most); claustrophobia; severe CKD (gadolinium concern) |

---

## 6. Approach to Troponin Elevation in Specific Clinical Scenarios

### 6.1 Chronic Kidney Disease

Patients with CKD (particularly stages 4-5 and dialysis) frequently have chronically elevated troponin levels, especially hs-cTnT. This reflects chronic myocardial injury (from LVH, microvascular disease, volume overload) rather than acute MI.[^1] [^3]

**Key principles:**
- The **99th percentile URL** remains the diagnostic threshold; do NOT use a higher threshold for CKD patients
- The **dynamic change** (rise and/or fall) is the critical distinction between chronic elevation and acute MI
- A **delta of ≥ 20%** (some guidelines suggest ≥ 50% for hs-cTnT in advanced CKD) from baseline to 3-6 hour repeat is suggestive of acute MI
- hs-cTnI may be less affected by renal function than hs-cTnT, though both can be chronically elevated in CKD
- Clinical context and ECG remain essential

### 6.2 Heart Failure

Patients with acute and chronic heart failure frequently have elevated troponin, reflecting ongoing myocardial stress and injury. A stable chronically elevated troponin in a heart failure patient carries prognostic significance (higher mortality) but does not indicate acute MI. The same rise/fall criteria apply for diagnosing superimposed acute MI.[^1]

### 6.3 Very Early Presentation (< 1-2 Hours from Symptom Onset)

- Initial troponin may be negative even with true MI if measured very early
- A **single negative hs-cTn below the limit of detection** (< 5 ng/L for most assays) with symptom onset > 3 hours has > 99% NPV for MI and may be sufficient for rule-out in low-risk patients
- If symptom onset < 3 hours, a repeat troponin at 1 hour (0/1h algorithm) or 3 hours (0/3h algorithm) is mandatory regardless of the initial result[^3]

### 6.4 Late Presentation (> 12-24 Hours)

- Troponin may have already peaked and may be declining
- A single elevated troponin above the 99th percentile URL in the appropriate clinical context suggests acute MI, but additional testing (repeat troponin to demonstrate fall, imaging for wall motion abnormalities) may be needed to confirm the diagnosis and timing

---

## References

[^1]: Thygesen K, Alpert JS, Jaffe AS, et al. "Fourth Universal Definition of Myocardial Infarction (2018)." *Circulation*. 2018;138(20):e618-e651. DOI: [10.1161/CIR.0000000000000617](https://doi.org/10.1161/CIR.0000000000000617)

[^2]: Amsterdam EA, Wenger NK, Brindis RG, et al. "2014 AHA/ACC Guideline for the Management of Patients With Non-ST-Elevation Acute Coronary Syndromes." *Circulation*. 2014;130(25):e344-e426. DOI: [10.1161/CIR.0000000000000134](https://doi.org/10.1161/CIR.0000000000000134)

[^3]: Byrne RA, Rossello X, Coughlan JJ, et al. "2023 ESC Guidelines for the management of acute coronary syndromes." *Eur Heart J*. 2023;44(38):3720-3826. DOI: [10.1093/eurheartj/ehad191](https://doi.org/10.1093/eurheartj/ehad191)

[^4]: Shah ASV, Anand A, Strachan FE, et al. "High-sensitivity troponin in the evaluation of patients with suspected acute coronary syndrome: a stepped-wedge, cluster-randomised controlled trial." *Lancet*. 2018;392(10151):919-928. DOI: [10.1016/S0140-6736(18)31923-8](https://doi.org/10.1016/S0140-6736(18)31923-8)

[^5]: Gulati M, Levy PD, Mukherjee D, et al. "2021 AHA/ACC/ASE/CHEST/SAEM/SCCT/SCMR Guideline for the Evaluation and Diagnosis of Chest Pain." *Circulation*. 2021;144(22):e588-e637. DOI: [10.1161/CIR.0000000000001029](https://doi.org/10.1161/CIR.0000000000001029)

[^6]: Mahler SA, Riley RF, Hiestand BC, et al. "The HEART Pathway randomized trial: identifying emergency department patients with acute chest pain for early discharge." *Circ Cardiovasc Qual Outcomes*. 2015;8(2):195-203. DOI: [10.1161/CIRCOUTCOMES.114.001384](https://doi.org/10.1161/CIRCOUTCOMES.114.001384)

[^7]: Antman EM, Cohen M, Bernink PJ, et al. "The TIMI risk score for unstable angina/non-ST elevation MI: A method for prognostication and therapeutic decision making." *JAMA*. 2000;284(7):835-842. DOI: [10.1001/jama.284.7.835](https://doi.org/10.1001/jama.284.7.835)

[^8]: Morrow DA, Antman EM, Charlesworth A, et al. "TIMI risk score for ST-elevation myocardial infarction: A convenient, bedside, clinical score for risk assessment at presentation." *Circulation*. 2000;102(17):2031-2037. DOI: [10.1161/01.CIR.102.17.2031](https://doi.org/10.1161/01.CIR.102.17.2031)

[^9]: Fox KA, Dabbous OH, Goldberg RJ, et al. "Prediction of risk of death and myocardial infarction in the six months after presentation with acute coronary syndrome: prospective multinational observational study (GRACE)." *BMJ*. 2006;333(7578):1091. DOI: [10.1136/bmj.38985.646481.55](https://doi.org/10.1136/bmj.38985.646481.55)
