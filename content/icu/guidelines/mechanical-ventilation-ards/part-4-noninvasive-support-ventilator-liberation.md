+++
title = "Part 4: Non-Invasive Support and Ventilator Liberation"
description = "High-flow nasal cannula and FLORALI trial evidence, NIV/BiPAP in ARDS, daily spontaneous breathing trial protocols, SAT-SBT coordination, RSBI, extubation criteria, cuff leak test, post-extubation support, and tracheostomy timing."
date = 2026-03-15T00:00:00-05:00
lastmod = 2026-03-15T00:00:00-05:00
draft = false
weight = 4
content_type = "guidelines"
audience = "clinician"
departments = ["icu"]
category = ["guidelines", "icu", "critical-care", "ARDS", "mechanical-ventilation"]
source_org = "icu_vent_ards"
guideline_set = "icu_vent_ards_guideline_2026"
aliases = ["/guidelines/icu/mechanical-ventilation-ards/part-4-noninvasive-support-ventilator-liberation/"]
+++

## 14. Non-Invasive Respiratory Support

### 14.1 High-Flow Nasal Cannula (HFNC)

#### 14.1.1 Mechanism and Physiological Effects

High-flow nasal cannula delivers heated, humidified oxygen at flow rates up to 60–80 L/min through large-bore nasal prongs. Its physiological benefits include:[^1][^2]

| Effect | Mechanism |
|---|---|
| **Washout of nasopharyngeal dead space** | High flow flushes CO2-rich gas from the upper airway, improving alveolar ventilation efficiency |
| **Positive airway pressure** | Low-level PEEP effect (2–7 cmH2O, flow-dependent) with mouth closed; helps maintain airway patency and functional residual capacity |
| **Reduced work of breathing** | Meeting or exceeding the patient's inspiratory flow demand eliminates the entrainment of room air that dilutes oxygen with standard nasal cannula |
| **Reliable FiO2 delivery** | Because flow exceeds inspiratory demand, the set FiO2 is actually delivered (unlike standard nasal cannula where actual FiO2 depends on breathing pattern) |
| **Mucociliary function preservation** | Heated, humidified gas preserves mucosal integrity and facilitates secretion clearance |
| **Patient comfort** | Better tolerated than face masks or NIV in many patients; allows eating, speaking, and coughing |

#### 14.1.2 Evidence: The FLORALI Trial

The pivotal trial evaluating HFNC in acute hypoxemic respiratory failure was published in 2015.[^1]

**FLORALI Trial Design:**
- 310 patients with acute hypoxemic respiratory failure (PaO2/FiO2 ≤300) without hypercapnia, not primarily from cardiogenic edema or COPD exacerbation
- Randomized to three groups: HFNC at 50 L/min, standard face mask oxygen, or NIV
- Primary outcome: intubation rate at 28 days

**Results:**

| Outcome | HFNC | Standard Oxygen | NIV | Significance |
|---|---|---|---|---|
| **Intubation rate** | 38% | 47% | 50% | p = 0.18 (NS overall) |
| **90-day mortality** | 12% | 23% | 28% | p = 0.02 (HFNC vs. standard) |
| **Subgroup P/F ≤200: Intubation** | 35% | 53% | 58% | p = 0.009 |
| Ventilator-free days (28-day) | 24 ± 8 | 22 ± 10 | 19 ± 12 | p = 0.02 |
| Comfort at 1 hour (VAS) | Best | Intermediate | Worst | — |

**Key findings:**
- While the primary endpoint (overall intubation rate) was not statistically significant, HFNC significantly reduced 90-day mortality compared to both standard oxygen and NIV[^1]
- In the more hypoxemic subgroup (PaO2/FiO2 ≤200), HFNC significantly reduced intubation rates
- NIV performed worse than both other strategies, possibly due to higher tidal volumes generated during NIV (mean VT 9.2 mL/kg IBW) causing patient self-inflicted lung injury
- The mortality benefit with HFNC was one of the unexpected findings that has reshaped the approach to acute hypoxemic respiratory failure

#### 14.1.3 HFNC Settings and Management

| Parameter | Recommendation |
|---|---|
| **Initial flow rate** | 40–60 L/min (start at 50 L/min for most adults) |
| **FiO2** | Titrate to SpO2 92–96% |
| **Temperature** | 37°C (may reduce to 34–36°C if patient reports discomfort) |
| **Interface** | Appropriately sized nasal prongs (should not occlude >50% of nares) |
| **Mouth breathing** | Encourage mouth-closed breathing for maximum PEEP effect; however, HFNC provides benefit even with mouth open through dead space washout |

#### 14.1.4 Monitoring for HFNC Failure (ROX Index)

The ROX index provides an objective assessment of HFNC response and predicts the need for intubation:[^3]

$$ROX = \frac{SpO_2/FiO_2}{Respiratory\ Rate}$$

| ROX Index | Interpretation | Action |
|---|---|---|
| ≥4.88 at 2, 6, or 12 hours | Low risk of HFNC failure | Continue HFNC |
| 3.85–4.88 | Intermediate risk | Close monitoring; reassess frequently |
| <3.85 at 2, 6, or 12 hours | High risk of HFNC failure | Consider intubation; do not delay if clinical deterioration |

**Criteria for intubation in patients on HFNC:**

| Red Flag | Action |
|---|---|
| Persistent or worsening hypoxemia (SpO2 <92% on FiO2 ≥0.7) | Intubate |
| Respiratory rate >35 persistently | Intubate |
| Worsening respiratory distress (accessory muscle use, diaphoresis) | Intubate |
| Hemodynamic instability | Intubate |
| Altered mental status | Intubate |
| ROX <3.85 at 6–12 hours | Strongly consider intubation |
| Failure to improve after 6–12 hours of HFNC | Do not persist; intubate |

> **Critical point:** Delayed intubation in patients failing HFNC is associated with increased mortality. HFNC should not be used to avoid intubation when intubation is clearly needed. Frequent reassessment and a low threshold for intubation are essential.[^4]

### 14.2 Non-Invasive Ventilation (NIV/BiPAP) in ARDS

#### 14.2.1 General Considerations

Non-invasive positive pressure ventilation (NIV), typically delivered as bilevel positive airway pressure (BiPAP), has a limited and carefully circumscribed role in ARDS.[^2][^5]

**Concerns with NIV in ARDS:**

| Concern | Explanation |
|---|---|
| **High tidal volumes** | Pressure support + patient effort can generate VT >8–12 mL/kg IBW, causing lung injury (P-SILI); the FLORALI trial found mean VT of 9.2 mL/kg in the NIV group[^1] |
| **Inability to control VT** | NIV does not guarantee lung-protective tidal volumes |
| **Mask intolerance** | Critically ill patients often poorly tolerate face masks; breaks in NIV result in derecruitment |
| **Delayed intubation** | NIV may mask deterioration and delay necessary intubation, worsening outcomes[^4] |
| **Aspiration risk** | Positive pressure with a face mask may increase gastric distension and aspiration risk |
| **Inability to perform prone positioning** | Most centers do not prone patients on NIV (though awake proning is increasingly practiced) |

#### 14.2.2 Situations Where NIV May Be Considered

| Situation | Rationale | Caution |
|---|---|---|
| **Immunocompromised patients** with acute hypoxemic respiratory failure | Multiple trials show that early NIV in immunocompromised patients (hematologic malignancy, solid organ transplant) can reduce intubation and mortality[^5] | More recent data (HIGH trial, 2018) challenged this, showing no NIV benefit in immunocompromised patients; HFNC may be preferred[^6] |
| **Mild ARDS (P/F 200–300)** in the initial hours | Brief trial of NIV while assessing trajectory; may avoid intubation in some patients | Strict time limit (1–2 hours); intubate if not improving |
| **Cardiogenic pulmonary edema component** | NIV is highly effective for cardiogenic pulmonary edema; if a mixed picture is suspected, a brief NIV trial is reasonable | Distinguish from pure ARDS |
| **DNI (do not intubate) patients** | NIV as ceiling of care | Comfort and goals-of-care discussion essential |

#### 14.2.3 NIV Settings if Used in ARDS

| Parameter | Setting |
|---|---|
| **Mode** | BiPAP (spontaneous/timed) |
| **IPAP** | 8–12 cmH2O (start low, titrate to comfort and VT) |
| **EPAP** | 5–10 cmH2O |
| **Target VT** | <8 mL/kg IBW (this is difficult to achieve and monitor on NIV) |
| **FiO2** | Titrate to SpO2 92–96% |
| **Interface** | Full face mask (oronasal) preferred; total face mask or helmet for better PEEP delivery |
| **Maximum trial duration** | 1–2 hours for reassessment; if no improvement or clinical worsening, intubate without further delay |

#### 14.2.4 Helmet NIV

Helmet NIV (a transparent hood encompassing the entire head, sealed at the neck) offers theoretical advantages over face mask NIV in ARDS:[^7]

- Better PEEP delivery and less air leak
- Improved patient comfort and tolerance
- Potentially lower tidal volumes due to the compliant interface dampening pressure swings
- A single-center randomized trial showed that helmet NIV reduced intubation rates and 90-day mortality compared to face mask NIV in ARDS[^7]

However, helmet NIV requires specialized equipment, training, and close monitoring. It is not widely available and is not considered standard of care. When available, it may be preferred over face mask NIV for patients with ARDS who are candidates for a non-invasive approach.

---

## 15. Ventilator Liberation (Weaning)

### 15.1 Importance of Protocolized Liberation

Ventilator liberation (historically termed "weaning") is the process of transitioning a patient from mechanical ventilation to spontaneous breathing and eventual extubation. It accounts for a significant portion of the total duration of mechanical ventilation — up to 40–50% in many patients. Protocolized approaches to liberation reduce duration of ventilation, ICU length of stay, and complications.[^8][^9]

### 15.2 Readiness Assessment: Criteria for Spontaneous Breathing Trial

Before attempting a spontaneous breathing trial (SBT), the patient should meet the following readiness criteria:[^8][^9]

| Criterion | Threshold |
|---|---|
| **Cause of respiratory failure** | Resolving or resolved |
| **Oxygenation** | PaO2/FiO2 ≥150 (or SpO2 ≥92% on FiO2 ≤0.4 and PEEP ≤8 cmH2O) |
| **Hemodynamic stability** | No or low-dose vasopressors (norepinephrine ≤0.1 mcg/kg/min or equivalent); no active myocardial ischemia; stable heart rate |
| **Neurological status** | Able to initiate spontaneous breaths; follows commands or has purposeful movements; no continuous sedative infusions (or minimal) |
| **Adequate cough** | Can generate effective cough when suctioned |
| **Manageable secretions** | Not requiring suctioning more than every 2 hours |
| **No planned procedures** | No upcoming return to OR or need for deep sedation |
| **Acid-base** | pH ≥7.25 |
| **Temperature** | <38.5°C (relative; fever alone should not preclude SBT if other criteria met) |

### 15.3 Spontaneous Awakening Trial (SAT) — Coordination with SBT

#### 15.3.1 The ABC (Awakening and Breathing Coordination) Trial

The landmark ABC trial (2008) demonstrated that pairing daily spontaneous awakening trials (interruption of sedative infusions) with daily spontaneous breathing trials significantly improved outcomes compared to SBT alone.[^10]

**ABC Trial Results:**

| Outcome | SAT + SBT (coordinated) | SBT Alone (usual sedation) | Significance |
|---|---|---|---|
| **Ventilator-free days (28-day)** | 14.7 | 11.6 | p = 0.02 |
| **ICU-free days (28-day)** | 9.1 | 6.2 | p = 0.01 |
| **1-year mortality** | 44% | 58% | HR 0.68, p = 0.01 |
| Self-extubation | 10% | 4% | Higher in SAT group but offset by overall benefit |

#### 15.3.2 SAT + SBT Protocol

**Step 1: Spontaneous Awakening Trial (SAT)**

| SAT Element | Detail |
|---|---|
| **Safety screen** | No active seizures; no alcohol withdrawal requiring infusion; no escalating sedation for agitation; no neuromuscular blockade; no acute myocardial ischemia |
| **Procedure** | Stop all continuous sedative infusions (propofol, midazolam, dexmedetomidine); continue analgesic infusions at reduced rate |
| **Observation** | Assess for 30 minutes; observe for agitation (RASS >+1), anxiety, desaturation, respiratory distress, tachycardia |
| **If passes SAT** | Proceed immediately to SBT |
| **If fails SAT** | Restart sedation at half the previous rate; re-attempt SAT next day |

**Step 2: Spontaneous Breathing Trial (SBT)**

### 15.4 Spontaneous Breathing Trial Methods

| Method | Description | Advantages | Disadvantages |
|---|---|---|---|
| **T-piece trial** | Patient breathes through ETT connected to a T-piece with supplemental oxygen; no ventilator support | Most closely replicates post-extubation conditions; avoids compensatory ventilator support that may mask inability to breathe independently | No monitoring of VT or RR by ventilator; higher work of breathing due to ETT resistance; may overestimate post-extubation difficulty (ETT resistance removed after extubation) |
| **Pressure support ventilation (PSV) trial** | Patient breathes on ventilator with low pressure support (5–8 cmH2O) and PEEP 0–5 cmH2O | Compensates for ETT resistance; ventilator provides continuous monitoring; slightly less demanding than T-piece | May underestimate post-extubation work of breathing; PS of 5–8 may provide meaningful support |
| **Automatic tube compensation (ATC)** | Ventilator provides variable flow to exactly overcome ETT resistance based on tube size | Most physiologically accurate simulation of post-extubation breathing | Not available on all ventilators; requires correct tube size input |
| **CPAP trial** | Patient breathes on CPAP 5 cmH2O without pressure support | Simple; maintains some FRC | Less commonly studied than T-piece or PSV |

**Evidence on SBT method:**
- The clinical practice guideline from the major thoracic and chest physician societies recommends a 30-minute SBT using inspiratory pressure augmentation (PSV 5–8 cmH2O) rather than a T-piece or CPAP trial, based on evidence showing shorter time to successful extubation and lower ICU mortality with this approach[^8]
- A T-piece trial may be appropriate when the clinician wants a more rigorous assessment of extubation readiness (e.g., patients with previous SBT/extubation failures)
- Duration: **30 minutes** is recommended (120-minute trials confer no additional benefit and may unnecessarily fatigue patients)[^8]

### 15.5 SBT Assessment Criteria

**The SBT is considered PASSED if the patient tolerates 30 minutes without any of the following:**

| Failure Criterion | Threshold |
|---|---|
| **Respiratory rate** | >35 breaths/min for >5 minutes |
| **SpO2** | <90% (or decrease >4% from baseline) |
| **Heart rate** | >140 bpm, or increase >20% from baseline, or new arrhythmia |
| **Systolic blood pressure** | >180 mmHg or <90 mmHg |
| **Agitation or anxiety** | Diaphoresis, accessory muscle use, paradoxical breathing, distress |
| **Altered mental status** | Somnolence, decreased consciousness |
| **Rapid shallow breathing index (RSBI)** | >105 breaths/min/L (see below) |

### 15.6 Rapid Shallow Breathing Index (RSBI)

The RSBI (also known as the frequency-to-tidal volume ratio, f/VT) is the most widely used predictor of weaning success.[^11]

$$RSBI = \frac{Respiratory\ Rate\ (breaths/min)}{Tidal\ Volume\ (liters)}$$

| RSBI Value | Interpretation | Positive Predictive Value |
|---|---|---|
| <105 | Likely to tolerate extubation | ~80% |
| 80–105 | Intermediate; proceed with SBT and clinical assessment | — |
| >105 | High likelihood of SBT failure | Negative predictive value ~95% |

**Measurement technique:**
1. Measure during the first 1–3 minutes of the SBT (before respiratory muscle fatigue develops)
2. Patient should be breathing spontaneously with no or minimal support
3. Use average RR and VT over 1 minute

**Limitations:**
- RSBI is most accurate when measured without any ventilatory support (T-piece)
- Less predictive in patients with chronic respiratory disease, neurological impairment, or prolonged ventilation
- Should be used as one component of a comprehensive assessment, not as a sole decision point

### 15.7 Extubation Criteria

After a successful 30-minute SBT, extubation should be performed if all of the following are met:[^8][^9]

| Criterion | Requirement |
|---|---|
| **Passed SBT** | Tolerated 30 minutes without failure criteria |
| **Adequate cough** | Can generate strong cough on command; peak cough flow >60 L/min (if measured) |
| **Manageable secretions** | Suctioning frequency ≤every 2 hours; secretions not copious or tenacious |
| **Neurological status** | Awake, follows commands, GCS ≥8 (especially eye opening and motor response) |
| **Ability to protect airway** | Intact gag and swallow reflexes |
| **No upper airway obstruction anticipated** | See cuff leak test below |
| **No planned return to OR in next 24 hours** | — |

### 15.8 Cuff Leak Test

The cuff leak test assesses for upper airway edema that may cause post-extubation stridor and reintubation.[^12]

**Technique:**
1. Suction the oropharynx and above-cuff secretions
2. Set the ventilator to volume-assist/control
3. Record the average exhaled tidal volume over 6 breaths with the cuff inflated
4. Deflate the endotracheal tube cuff
5. Record the average exhaled tidal volume over the next 6 breaths with the cuff deflated
6. **Cuff leak volume** = Inspired VT − Exhaled VT (with cuff deflated)

| Cuff Leak Volume | Interpretation | Action |
|---|---|---|
| >110 mL (or >10–15% of VT) | Adequate leak; low risk of post-extubation stridor | Proceed with extubation |
| ≤110 mL (or ≤10–15% of VT) | Absent or minimal leak; increased risk of post-extubation stridor | Consider dexamethasone 4 mg IV every 6 hours for 24 hours before extubation; repeat cuff leak test; have reintubation equipment ready |

**Indications for cuff leak test:**
- Prolonged intubation (>48–72 hours)
- Traumatic or difficult intubation
- Large ETT relative to airway
- Prior failed extubation with stridor
- Not routinely needed for short intubations (<48 hours)

**Dexamethasone for stridor prevention:**
- Dexamethasone 4 mg IV every 6 hours for 4 doses (beginning 12–24 hours before planned extubation) reduces the incidence of post-extubation stridor and reintubation in patients with a low cuff leak volume[^12]
- Consider empiric dexamethasone for all patients intubated >48 hours if not already on corticosteroids

### 15.9 Post-Extubation Respiratory Support

#### 15.9.1 Evidence for Post-Extubation HFNC

Post-extubation HFNC has been shown to reduce reintubation rates in high-risk patients:[^13][^14]

| Trial | Population | Intervention | Result |
|---|---|---|---|
| **Hernandez et al. (2016)** — High-risk | Patients at high risk for reintubation (age >65, heart failure, COPD, ≥2 failed SBTs, obesity, etc.) | HFNC vs. NIV post-extubation | Non-inferior: reintubation 22.8% vs. 19.1% (HFNC non-inferior to NIV)[^13] |
| **Hernandez et al. (2016)** — Low-risk | Patients at low risk for reintubation | HFNC vs. standard nasal cannula | Reintubation 4.9% vs. 12.2%, p = 0.004[^14] |
| **Thille et al. (2019)** | High-risk patients after planned extubation | HFNC + NIV vs. HFNC alone post-extubation | Reintubation 11.8% vs. 18.2%, p = 0.02[^15] |

#### 15.9.2 Post-Extubation Support Protocol

| Risk Category | Definition | Recommended Support |
|---|---|---|
| **Low risk** | Age <65, no CHF, no COPD, first extubation attempt, SBT passed easily | HFNC at 40–50 L/min for 24 hours → standard nasal cannula if tolerating |
| **High risk** | Age ≥65, CHF, moderate-severe COPD, failed SBT requiring re-trial, BMI >30, prolonged ventilation (>7 days), multiple comorbidities | HFNC at 50–60 L/min alternating with NIV (BiPAP IPAP 8–12, EPAP 5) for first 24–48 hours[^15] |
| **Very high risk** | Prior reintubation, neuromuscular disease, severe COPD with hypercapnia | NIV as primary post-extubation support; HFNC between NIV sessions; continuous monitoring in ICU |

### 15.10 Management of Extubation Failure

| Time Frame | Assessment | Action |
|---|---|---|
| **Within 48 hours** | Reintubation required | Reintubate without delay; analyze cause (upper airway, respiratory failure, secretions, cardiac); consider tracheostomy if repeated failure |
| **Immediate stridor** | Upper airway edema | Nebulized racemic epinephrine (0.5 mL of 2.25% in 3 mL saline); consider reintubation with smaller ETT; plan for dexamethasone and delayed re-extubation |
| **Respiratory failure** (hypoxemia, hypercapnia, fatigue) | Inadequate respiratory reserve | Brief trial of NIV if cause is rapidly reversible (e.g., flash pulmonary edema); otherwise reintubate promptly; analyze contributing factors |
| **Inability to protect airway** | Neurological or bulbar dysfunction | Reintubate; consider tracheostomy for prolonged airway protection needs |

> **Critical point:** Do NOT delay reintubation when a patient is failing post-extubation. Prolonged attempts with NIV or HFNC to avoid reintubation after extubation failure are associated with worse outcomes, including cardiac arrest during emergency reintubation.[^4]

### 15.11 Tracheostomy Timing

#### 15.11.1 Evidence

| Trial | Year | Comparison | Result |
|---|---|---|---|
| **TracMan** | 2013 | Early tracheostomy (≤4 days) vs. late (≥10 days) in patients expected to require prolonged MV | No mortality difference (30.8% vs. 31.5%); 54% of late group never needed tracheostomy[^16] |
| **SETPOINT** | 2010 | Early (≤4 days) vs. late (≥10 days) tracheostomy | No mortality difference; early tracheostomy reduced sedation and ICU length of stay[^17] |

#### 15.11.2 Recommendations

| Recommendation | Detail |
|---|---|
| **Routine early tracheostomy (≤7 days)** | NOT recommended for all patients; many patients extubate successfully with protocolized weaning |
| **Consider tracheostomy at 10–14 days** | If continued need for mechanical ventilation is anticipated, ongoing sedation requirements, or failed extubation attempts |
| **Individualized decision** | Based on: anticipated trajectory of underlying disease, neurological status and ability to protect airway, secretion burden, likelihood of successful extubation in next 7 days, patient/family preferences |
| **Percutaneous vs. surgical** | Percutaneous dilatational tracheostomy (PDT) at bedside is the preferred technique in most ICU patients; surgical tracheostomy for patients with unfavorable anatomy, prior neck surgery, or coagulopathy |
| **Contraindications to bedside PDT** | Uncorrectable coagulopathy (INR >1.5, platelets <50,000), anterior neck mass, high-riding innominate artery, morbid obesity with inability to extend neck |

---

## 16. Ventilator-Associated Lung Injury (VILI) Prevention Bundle

### 16.1 Comprehensive VILI Prevention Strategy

| Component | Target | Rationale |
|---|---|---|
| **Tidal volume** | 4–6 mL/kg IBW | Reduces volutrauma; landmark trial evidence[^18] |
| **Plateau pressure** | ≤30 cmH2O | Reduces barotrauma |
| **Driving pressure** | <15 cmH2O | Strongest individual predictor of outcome; integrates VT and PEEP appropriateness[^19] |
| **PEEP** | Adequate to prevent cyclic derecruitment; individualized | Reduces atelectrauma |
| **FiO2** | Lowest achieving SpO2 92–96% | Reduces oxygen toxicity |
| **Prone positioning** | ≥16 hours/day in severe ARDS | Homogenizes ventilation distribution; reduces regional strain[^20] |
| **Spontaneous breathing** | Allow when appropriate (light sedation, RASS 0 to −1); avoid in early severe ARDS if generating excessive efforts | Prevents diaphragm atrophy; but uncontrolled efforts can cause P-SILI |
| **Sedation minimization** | Target lightest sedation compatible with safe ventilation | Reduces duration of MV; prevents over-sedation complications |
| **Fluid management** | Conservative after initial resuscitation | Reduces pulmonary edema and improves compliance[^21] |
| **Early mobility** | When safe and feasible | Prevents deconditioning; may reduce ventilator duration |

### 16.2 Ventilator-Induced Diaphragm Dysfunction (VIDD)

Mechanical ventilation causes rapid diaphragm atrophy and dysfunction, contributing to weaning failure:[^22]

| Factor | Effect |
|---|---|
| **Controlled ventilation** | Diaphragm disuse atrophy begins within 18–24 hours; 50% fiber area reduction by day 3–4 |
| **Excessive support** (over-assistance) | Partial support with too-high pressure support also contributes to disuse |
| **Excessive spontaneous effort** (under-assistance) | Can cause eccentric contraction injury (load-induced myotrauma) |
| **PEEP** | Shortens diaphragm fibers at FRC; may impair force generation |

**Prevention of VIDD:**
- Transition to partial support modes (pressure support, proportional assist) as soon as clinical condition allows
- Maintain some degree of spontaneous effort when safe (not in early severe ARDS with high transpulmonary pressures)
- Minimize duration of neuromuscular blockade
- Daily SBT attempts to exercise the diaphragm
- Diaphragm ultrasound may be used to monitor thickness and thickening fraction as indicators of diaphragm activity and health

---

## References

[^1]: Frat JP, Thille AW, Mercat A, et al. "High-flow oxygen through nasal cannula in acute hypoxemic respiratory failure." *N Engl J Med*, 372(23), 2185-2196, 2015. FLORALI trial. doi:10.1056/NEJMoa1503326. https://doi.org/10.1056/NEJMoa1503326

[^2]: Rochwerg B, Einav S, Chaudhuri D, et al. "The role for high flow nasal cannula as a respiratory support strategy in adults: a clinical practice guideline." *Intensive Care Med*, 46(12), 2226-2237, 2020. doi:10.1007/s00134-020-06312-y. https://doi.org/10.1007/s00134-020-06312-y

[^3]: Roca O, Caralt B, Messika J, et al. "An index combining respiratory rate and oxygenation to predict outcome of nasal high-flow therapy." *Am J Respir Crit Care Med*, 199(11), 1368-1376, 2019. doi:10.1164/rccm.201803-0589OC. https://doi.org/10.1164/rccm.201803-0589OC

[^4]: Kang BJ, Koh Y, Lim CM, et al. "Failure of high-flow nasal cannula therapy may delay intubation and increase mortality." *Intensive Care Med*, 41(4), 623-632, 2015. doi:10.1007/s00134-015-3693-5. https://doi.org/10.1007/s00134-015-3693-5

[^5]: Rochwerg B, Brochard L, Elliott MW, et al. "Official ERS/ATS clinical practice guidelines: noninvasive ventilation for acute respiratory failure." *Eur Respir J*, 50(2), 1602426, 2017. doi:10.1183/13993003.02426-2016. https://doi.org/10.1183/13993003.02426-2016

[^6]: Azoulay E, Pickkers P, Soares M, et al. "Acute hypoxemic respiratory failure in immunocompromised patients: the Efraim multinational observational study." *Intensive Care Med*, 43(12), 1808-1819, 2017. doi:10.1007/s00134-017-4947-1. https://doi.org/10.1007/s00134-017-4947-1

[^7]: Patel BK, Wolfe KS, Pohlman AS, et al. "Effect of noninvasive ventilation delivered by helmet vs face mask on the rate of endotracheal intubation in patients with acute respiratory distress syndrome: a randomized clinical trial." *JAMA*, 315(22), 2435-2441, 2016. doi:10.1001/jama.2016.6338. https://doi.org/10.1001/jama.2016.6338

[^8]: Girard TD, Alhazzani W, Kress JP, et al. "An official American Thoracic Society/American College of Chest Physicians clinical practice guideline: liberation from mechanical ventilation in critically ill adults." *Am J Respir Crit Care Med*, 195(1), 120-133, 2017. ATS/ACCP. doi:10.1164/rccm.201610-2075ST. https://doi.org/10.1164/rccm.201610-2075ST

[^9]: Schmidt GA, Girard TD, Kress JP, et al. "Liberation from mechanical ventilation in critically ill adults: executive summary of an official American College of Chest Physicians/American Thoracic Society clinical practice guideline." *Chest*, 151(1), 160-165, 2017. doi:10.1016/j.chest.2016.10.036. https://doi.org/10.1016/j.chest.2016.10.036

[^10]: Girard TD, Kress JP, Fuchs BD, et al. "Efficacy and safety of a paired sedation and ventilator weaning protocol for mechanically ventilated patients in intensive care (Awakening and Breathing Controlled trial): a randomised controlled trial." *Lancet*, 371(9607), 126-134, 2008. doi:10.1016/S0140-6736(08)60105-1. https://doi.org/10.1016/S0140-6736(08)60105-1

[^11]: Yang KL, Tobin MJ. "A prospective study of indexes predicting the outcome of trials of weaning from mechanical ventilation." *N Engl J Med*, 324(21), 1445-1450, 1991. doi:10.1056/NEJM199105233242101. https://doi.org/10.1056/NEJM199105233242101

[^12]: Darmon JY, Rauss A, Dreyfuss D, et al. "Evaluation of risk factors for laryngeal edema after tracheal extubation in adults and its prevention by dexamethasone: a placebo-controlled, double-blind, multicenter study." *Anesthesiology*, 77(2), 245-251, 1992. doi:10.1097/00000542-199208000-00004. https://doi.org/10.1097/00000542-199208000-00004

[^13]: Hernandez G, Vaquero C, Colinas L, et al. "Effect of postextubation high-flow nasal cannula vs noninvasive ventilation on reintubation and postextubation respiratory failure in high-risk patients: a randomized clinical trial." *JAMA*, 316(15), 1565-1574, 2016. doi:10.1001/jama.2016.14194. https://doi.org/10.1001/jama.2016.14194

[^14]: Hernandez G, Vaquero C, Gonzalez P, et al. "Effect of postextubation high-flow nasal cannula vs conventional oxygen therapy on reintubation in low-risk patients: a randomized clinical trial." *JAMA*, 315(13), 1354-1361, 2016. doi:10.1001/jama.2016.2711. https://doi.org/10.1001/jama.2016.2711

[^15]: Thille AW, Muller G, Gacouin A, et al. "Effect of postextubation high-flow nasal oxygen with noninvasive ventilation vs high-flow nasal oxygen alone on reintubation among patients at high risk of extubation failure: a randomized clinical trial." *JAMA*, 322(15), 1465-1475, 2019. doi:10.1001/jama.2019.14901. https://doi.org/10.1001/jama.2019.14901

[^16]: Young D, Harrison DA, Cuthbertson BH, Rowan K; TracMan Collaborators. "Effect of early vs late tracheostomy placement on survival in patients receiving mechanical ventilation: the TracMan randomized clinical trial." *JAMA*, 309(20), 2121-2129, 2013. doi:10.1001/jama.2013.5154. https://doi.org/10.1001/jama.2013.5154

[^17]: Terragni PP, Antonelli M, Fumagalli R, et al. "Early vs late tracheotomy for prevention of pneumonia in mechanically ventilated adult ICU patients: a randomized controlled trial." *JAMA*, 303(15), 1483-1489, 2010. doi:10.1001/jama.2010.447. https://doi.org/10.1001/jama.2010.447

[^18]: The Acute Respiratory Distress Syndrome Network. "Ventilation with lower tidal volumes as compared with traditional tidal volumes for acute lung injury and the acute respiratory distress syndrome." *N Engl J Med*, 342(18), 1301-1308, 2000. NHLBI ARDS Network. doi:10.1056/NEJM200005043421801. https://doi.org/10.1056/NEJM200005043421801

[^19]: Amato MBP, Meade MO, Slutsky AS, et al. "Driving pressure and survival in the acute respiratory distress syndrome." *N Engl J Med*, 372(8), 747-755, 2015. doi:10.1056/NEJMsa1410639. https://doi.org/10.1056/NEJMsa1410639

[^20]: Guerin C, Reignier J, Richard JC, et al. "Prone positioning in severe acute respiratory distress syndrome." *N Engl J Med*, 368(23), 2159-2168, 2013. PROSEVA trial. doi:10.1056/NEJMoa1214103. https://doi.org/10.1056/NEJMoa1214103

[^21]: National Heart, Lung, and Blood Institute Acute Respiratory Distress Syndrome (ARDS) Clinical Trials Network; Wiedemann HP, Wheeler AP, Bernard GR, et al. "Comparison of two fluid-management strategies in acute lung injury (FACTT)." *N Engl J Med*, 354(24), 2564-2575, 2006. doi:10.1056/NEJMoa062200. https://doi.org/10.1056/NEJMoa062200

[^22]: Goligher EC, Dres M, Fan E, et al. "Mechanical ventilation-induced diaphragm atrophy strongly impacts clinical outcomes." *Am J Respir Crit Care Med*, 197(2), 204-213, 2018. doi:10.1164/rccm.201703-0536OC. https://doi.org/10.1164/rccm.201703-0536OC
