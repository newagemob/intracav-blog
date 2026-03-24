+++
title = "Part 1: ARDS Definition and Initial Ventilator Setup"
description = "Berlin criteria for ARDS severity classification, initial ventilator mode selection, lung-protective tidal volume targets, ideal body weight calculations, plateau and driving pressure limits, ARDSNet PEEP/FiO2 tables, respiratory rate management, and permissive hypercapnia."
date = 2026-03-15T00:00:00-05:00
lastmod = 2026-03-15T00:00:00-05:00
draft = false
weight = 1
content_type = "guidelines"
audience = "clinician"
departments = ["icu"]
category = ["guidelines", "icu", "critical-care", "ARDS", "mechanical-ventilation"]
source_org = "icu_vent_ards"
guideline_set = "icu_vent_ards_guideline_2026"
aliases = ["/guidelines/icu/mechanical-ventilation-ards/part-1-ards-definition-initial-ventilator-setup/"]
+++

## 1. Acute Respiratory Distress Syndrome: Definition and Classification

### 1.1 The Berlin Definition

The internationally accepted definition of ARDS was established by a consensus task force in 2012 and is known as the Berlin Definition.[^1] This classification replaced the prior American-European Consensus Conference (AECC) definition from 1994, which used the terms acute lung injury (ALI) and ARDS. The Berlin Definition eliminated the ALI category and introduced three mutually exclusive severity strata based on the degree of hypoxemia.

**Diagnostic Criteria — All Four Must Be Present:**

| Criterion | Requirement |
|---|---|
| **Timing** | Within 1 week of a known clinical insult, or new or worsening respiratory symptoms |
| **Chest imaging** | Bilateral opacities on chest radiograph or computed tomography, not fully explained by effusions, lobar/lung collapse, or nodules |
| **Origin of edema** | Respiratory failure not fully explained by cardiac failure or fluid overload; objective assessment (e.g., echocardiography) needed to exclude hydrostatic edema if no risk factor identified |
| **Oxygenation** | PaO2/FiO2 ratio meeting severity threshold (see below), with minimum PEEP or CPAP of 5 cmH2O |

### 1.2 Severity Classification by PaO2/FiO2 Ratio

All PaO2/FiO2 ratios are assessed with a minimum PEEP (or CPAP) of 5 cmH2O.[^1]

| Severity | PaO2/FiO2 Ratio | Mortality (Berlin Cohort) |
|---|---|---|
| **Mild** | 201–300 mmHg | 27% (95% CI 24–30%) |
| **Moderate** | 101–200 mmHg | 32% (95% CI 29–34%) |
| **Severe** | ≤100 mmHg | 45% (95% CI 42–48%) |

**Key Points on Severity Classification:**

- The PaO2/FiO2 ratio must be calculated at a minimum PEEP of 5 cmH2O; patients on lower or no PEEP who otherwise meet criteria should have PEEP adjusted before classification
- Severity can change over the first 24 to 48 hours; reassessment at 24 hours after standardizing PEEP provides a more stable prognostic classification[^1]
- The PaO2/FiO2 ratio is influenced by the level of PEEP applied: higher PEEP may improve the ratio by recruiting collapsed alveoli, potentially reclassifying severity without an actual change in the underlying lung pathology
- When arterial blood gas sampling is not readily available, SpO2/FiO2 ratios of 235 (mild), 315 (moderate), and 148 (severe) have been proposed as approximations, though they are less validated[^2]

### 1.3 Limitations of the Berlin Definition

Despite widespread adoption, the Berlin Definition has several recognized limitations:[^1][^2]

1. **Dependence on PEEP level:** The PaO2/FiO2 ratio is PEEP-dependent. A patient classified as severe ARDS at PEEP 5 cmH2O may reclassify as moderate at PEEP 15 cmH2O, though the underlying lung injury has not changed.
2. **Chest imaging variability:** Inter-observer agreement for bilateral opacities on chest radiograph is moderate at best (kappa 0.55). CT imaging is more sensitive but not routinely required by the definition.
3. **Exclusion of cardiac edema:** Differentiating ARDS from cardiogenic pulmonary edema is frequently challenging. The Berlin Definition removed the requirement for a pulmonary artery occlusion pressure <18 mmHg but replaced it with a subjective assessment.
4. **Heterogeneity within strata:** Each severity band encompasses patients with vastly different pathophysiology, ventilatory mechanics, and prognosis.
5. **Timing criterion:** The 1-week window is arbitrary. Some patients develop ARDS after this period, and others have pre-existing interstitial lung disease that complicates classification.
6. **FiO2 setting not standardized:** Two patients may have different PaO2/FiO2 ratios simply because of the FiO2 selected, as the relationship between FiO2 and PaO2 is not linear.

### 1.4 Updates and Evolving Concepts

Recent consensus statements have proposed refinements to the ARDS definition:[^2]

- **Inclusion of high-flow nasal cannula patients:** A 2023 international consensus expanded the definition to include patients receiving high-flow nasal cannula (HFNC) at flow rates ≥30 L/min with FiO2 ≥0.3 and SpO2/FiO2 ≤315, acknowledging that many patients with ARDS now receive HFNC rather than invasive mechanical ventilation at initial presentation
- **Non-intubated ARDS:** Recognition that ARDS may be diagnosed in non-intubated patients on CPAP or BiPAP with PEEP ≥5 cmH2O
- **Resource-variable settings:** Allowance for SpO2-based criteria and ultrasound-based imaging in settings where ABG analysis and chest radiography are not available
- **Phenotyping:** Two distinct ARDS sub-phenotypes (hypo-inflammatory and hyper-inflammatory) have been identified through latent class analysis of clinical trial data, with differing treatment responses — the hyper-inflammatory phenotype appears to benefit more from higher PEEP, conservative fluid strategy, and simvastatin[^2]

---

## 2. Pathophysiology of ARDS: Implications for Ventilator Strategy

### 2.1 The Injured Lung

Understanding ARDS pathophysiology is essential for rational ventilator management. The ARDS lung is characterized by:[^3]

- **Diffuse alveolar damage:** Endothelial and epithelial injury leads to increased permeability pulmonary edema, alveolar flooding with protein-rich fluid, inactivation of surfactant, and formation of hyaline membranes
- **Heterogeneous aeration:** CT studies reveal that the ARDS lung is not uniformly diseased. Classically, there are three zones:
  - **Normally aerated** regions (typically ventral/non-dependent)
  - **Recruitable** collapsed regions (potentially recruitable with PEEP)
  - **Consolidated** regions (not recruitable, typically dorsal/dependent)
- **"Baby lung" concept:** The volume of normally aerated lung in ARDS is dramatically reduced — often to the functional equivalent of a child's lung (300–500 mL). This means that a "normal" tidal volume of 10–12 mL/kg applied to the full predicted body weight can cause overdistension of the small aerated compartment, leading to further injury.[^3]
- **Dead space increase:** Microvascular obstruction (thrombosis, inflammation) and overdistension of aerated regions increase alveolar dead space, which manifests as elevated VD/VT ratios (often >0.5) and is an independent predictor of mortality

### 2.2 Ventilator-Induced Lung Injury (VILI)

Mechanical ventilation, while life-sustaining, can itself exacerbate lung injury through several mechanisms:[^3][^4]

| Mechanism | Description | Clinical Implication |
|---|---|---|
| **Volutrauma** | Overdistension of alveoli by excessive tidal volume | Limit VT to 6 mL/kg IBW |
| **Barotrauma** | Excessive transpulmonary pressure causing air leak | Keep plateau pressure ≤30 cmH2O |
| **Atelectrauma** | Cyclic opening and closing of unstable alveoli | Apply adequate PEEP to maintain recruitment |
| **Biotrauma** | Mechanical stretch triggers inflammatory mediator release | Lung-protective ventilation reduces systemic inflammation |

The entire framework of lung-protective ventilation is designed to minimize these injurious forces while maintaining adequate gas exchange.

### 2.3 Mechanical Power and Driving Pressure

Beyond individual parameters, two integrative concepts have emerged:

**Driving Pressure (ΔP):**[^5]
$$\Delta P = P_{plateau} - PEEP$$

Driving pressure reflects the tidal strain applied to the aerated lung. A post-hoc meta-analysis of individual patient data from nine randomized trials found that driving pressure was the ventilatory variable most strongly associated with survival in ARDS. Each 1 cmH2O increase in driving pressure above 15 cmH2O was associated with increased mortality.[^5]

- **Target:** Driving pressure <15 cmH2O (ideally <13 cmH2O)
- Driving pressure should be used to evaluate the appropriateness of both VT and PEEP settings: an increase in PEEP that increases driving pressure (by failing to recruit lung) is unlikely to be beneficial

**Mechanical Power:**[^6]
Mechanical power integrates all ventilatory variables (VT, respiratory rate, PEEP, driving pressure, airway resistance, flow) into a single measure of energy delivered to the lungs per unit time (Joules/minute). Higher mechanical power is associated with increased mortality. While not yet a direct clinical target, it reinforces the concept that all ventilator settings interact and should be considered together.

---

## 3. Initial Ventilator Setup in ARDS

### 3.1 Mode Selection

No randomized controlled trial has demonstrated superiority of one ventilator mode over another for mortality in ARDS.[^7] The choice of mode depends on clinician familiarity, institutional practice, and patient-specific factors.

| Mode | Mechanism | Advantages | Disadvantages |
|---|---|---|---|
| **Volume-Assist/Control (VAC)** | Delivers a set tidal volume at a set rate; inspiratory flow is constant (square wave) | Guaranteed tidal volume delivery; easy to monitor compliance and resistance; widely available; used in the landmark ARDS network trial[^8] | Peak airway pressure varies with compliance and resistance; may not reflect alveolar pressure; potential for patient-ventilator dyssynchrony |
| **Pressure-Assist/Control (PAC)** | Delivers a set inspiratory pressure for a set time at a set rate; flow is decelerating | More uniform pressure distribution; may improve patient comfort; decelerating flow pattern may improve gas distribution | Tidal volume varies with compliance and resistance; must closely monitor VT to avoid excessive or inadequate delivery |
| **Pressure-Regulated Volume Control (PRVC)** | Adaptive mode: targets a set tidal volume using the minimum necessary inspiratory pressure; adjusts breath-to-breath | Combines volume guarantee with pressure-limited delivery; decelerating flow pattern | Proprietary algorithms vary by manufacturer; may auto-adjust in ways that undermine lung-protection goals; requires close monitoring |
| **Airway Pressure Release Ventilation (APRV)** | Time-cycled alternation between high and low airway pressures; allows spontaneous breathing at high pressure level | Preserves spontaneous breathing; may maintain recruitment; lower sedation requirements | Limited high-quality evidence in ARDS; risk of excessive VT with inadequate release time settings; steep learning curve |

**Recommended Approach:**
- Volume-assist/control is the most thoroughly studied mode in ARDS and should be considered the default for initial setup, particularly in moderate-to-severe ARDS[^7][^8]
- Pressure-assist/control is an acceptable alternative provided tidal volume is closely monitored and kept within protective limits
- PRVC may be used with careful attention to tidal volume delivery, recognizing that the ventilator may increase inspiratory pressure in ways that override lung-protective intent
- APRV is not recommended as a primary mode in moderate-to-severe ARDS due to insufficient evidence for benefit and difficulty ensuring lung-protective VT delivery

### 3.2 Tidal Volume: The Cornerstone of Lung-Protective Ventilation

The landmark multicenter trial published in 2000 by the ARDS network investigators definitively established that lower tidal volumes improve survival in ARDS.[^8] The trial randomized 861 patients with acute lung injury and ARDS to receive either:

- **Lower tidal volume:** 6 mL/kg ideal (predicted) body weight, with a plateau pressure target ≤30 cmH2O
- **Higher tidal volume:** 12 mL/kg ideal body weight, with plateau pressure target ≤50 cmH2O

The lower tidal volume group had a **31% relative reduction in mortality** (31.0% vs. 39.8%, p = 0.007), equivalent to an absolute risk reduction of 8.8% and a number needed to treat of approximately 11. Additionally, the lower VT group had more ventilator-free days (12 ± 11 vs. 10 ± 11, p = 0.007) and more days free of non-pulmonary organ failure.[^8]

**Tidal Volume Protocol:**

1. **Calculate ideal body weight (IBW)** using the following formulas:

| Sex | Formula |
|---|---|
| **Male** | IBW (kg) = 50 + 2.3 × (height in inches − 60) |
| **Female** | IBW (kg) = 45.5 + 2.3 × (height in inches − 60) |

For height in centimeters, first convert: inches = (height in cm − 152.4) / 2.54 + 60, or use the equivalent metric formulas:

| Sex | Metric Formula |
|---|---|
| **Male** | IBW (kg) = 50 + 0.91 × (height in cm − 152.4) |
| **Female** | IBW (kg) = 45.5 + 0.91 × (height in cm − 152.4) |

2. **Set initial tidal volume at 6 mL/kg IBW** (range 4–8 mL/kg IBW)

3. **Measure plateau pressure** (Pplat) with an inspiratory hold of 0.5–1.0 seconds

4. **Adjust VT based on plateau pressure:**

| Plateau Pressure | Action |
|---|---|
| >30 cmH2O | Decrease VT by 1 mL/kg IBW (minimum 4 mL/kg IBW) |
| 26–30 cmH2O | Maintain current VT if patient is tolerating |
| <26 cmH2O and VT <6 mL/kg IBW | May increase VT toward 6 mL/kg IBW if driving pressure remains <15 |
| <26 cmH2O and VT = 6 mL/kg IBW | No change needed; do NOT increase VT above 6 mL/kg IBW |

**IBW Quick Reference Table:**

| Height (cm) | Height (inches) | Male IBW (kg) | Female IBW (kg) | VT at 6 mL/kg (mL) Male | VT at 6 mL/kg (mL) Female |
|---|---|---|---|---|---|
| 152 | 60 | 50.0 | 45.5 | 300 | 273 |
| 155 | 61 | 52.3 | 47.8 | 314 | 287 |
| 157 | 62 | 54.6 | 50.1 | 328 | 301 |
| 160 | 63 | 56.9 | 52.4 | 341 | 314 |
| 163 | 64 | 59.2 | 54.7 | 355 | 328 |
| 165 | 65 | 61.5 | 57.0 | 369 | 342 |
| 168 | 66 | 63.8 | 59.3 | 383 | 356 |
| 170 | 67 | 66.1 | 61.6 | 397 | 370 |
| 173 | 68 | 68.4 | 63.9 | 410 | 383 |
| 175 | 69 | 70.7 | 66.2 | 424 | 397 |
| 178 | 70 | 73.0 | 68.5 | 438 | 411 |
| 180 | 71 | 75.3 | 70.8 | 452 | 425 |
| 183 | 72 | 77.6 | 73.1 | 466 | 439 |
| 185 | 73 | 79.9 | 75.4 | 479 | 452 |
| 188 | 74 | 82.2 | 77.7 | 493 | 466 |
| 190 | 75 | 84.5 | 80.0 | 507 | 480 |
| 193 | 76 | 86.8 | 82.3 | 521 | 494 |

> **Critical point:** Tidal volume must always be based on ideal (predicted) body weight, NOT actual body weight. An obese patient with a height of 170 cm should receive approximately 397 mL (male) or 370 mL (female) regardless of whether they weigh 80 kg or 150 kg. Using actual body weight is one of the most common and dangerous errors in ventilator management.[^8]

### 3.3 Plateau Pressure and Its Measurement

Plateau pressure (Pplat) approximates end-inspiratory alveolar pressure when flow has ceased. It is the primary airway pressure target in lung-protective ventilation.[^8]

**Measurement technique:**
1. Set the ventilator to deliver an inspiratory pause (hold) of 0.5 to 1.0 seconds
2. Ensure the patient is not actively breathing during the maneuver (may require brief increase in sedation or timing the hold during passive breaths)
3. Read the plateau pressure from the ventilator display at the end of the pause when the pressure tracing has reached a plateau
4. Subtract PEEP from Pplat to calculate driving pressure

**Targets:**
- **Plateau pressure ≤30 cmH2O** — the upper limit used in the ARDS network low-VT trial[^8]
- **Driving pressure <15 cmH2O** — the threshold identified in multi-trial meta-analysis as associated with improved survival[^5]

**Troubleshooting Elevated Plateau Pressure:**

| Plateau Pressure | First Steps | Additional Steps |
|---|---|---|
| 31–35 cmH2O | Reduce VT by 1 mL/kg IBW (minimum 4 mL/kg IBW); check for auto-PEEP; ensure bed elevation is appropriate | Consider reducing PEEP if driving pressure is >15; evaluate for pneumothorax, right mainstem intubation, abdominal distension |
| >35 cmH2O | Immediately reduce VT; consider neuromuscular blockade if patient is actively breathing and measurements are unreliable | Re-evaluate PEEP strategy; consider prone positioning; assess for worsening disease, pneumothorax |

### 3.4 PEEP Strategies

Positive end-expiratory pressure (PEEP) is applied to prevent end-expiratory alveolar collapse, maintain lung recruitment, improve oxygenation, and reduce atelectrauma. However, excessive PEEP can cause overdistension, hemodynamic compromise, and increased dead space.[^7][^9]

#### 3.4.1 ARDSNet Lower PEEP/FiO2 Table

The following table was used in the landmark ARDS network low tidal volume trial. It represents a conservative PEEP strategy and is the most widely used approach worldwide.[^8]

| FiO2 | 0.3 | 0.4 | 0.4 | 0.5 | 0.5 | 0.6 | 0.7 | 0.7 | 0.7 | 0.8 | 0.9 | 0.9 | 0.9 | 1.0 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **PEEP** | **5** | **5** | **8** | **8** | **10** | **10** | **10** | **12** | **14** | **14** | **14** | **16** | **18** | **18–24** |

#### 3.4.2 ARDSNet Higher PEEP/FiO2 Table

The higher PEEP table was used in the ALVEOLI trial (ARDS network assessment of low tidal volume and elevated end-expiratory lung volume). While the ALVEOLI trial did not show a mortality benefit for higher PEEP overall, meta-analyses suggest benefit in moderate-to-severe ARDS.[^9][^10]

| FiO2 | 0.3 | 0.3 | 0.3 | 0.3 | 0.3 | 0.4 | 0.4 | 0.5 | 0.5 | 0.5–0.8 | 0.8 | 0.9 | 1.0 | 1.0 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **PEEP** | **5** | **8** | **10** | **12** | **14** | **14** | **16** | **16** | **18** | **20** | **22** | **22** | **22** | **24** |

#### 3.4.3 Choosing Between Lower and Higher PEEP Strategies

An individual patient data meta-analysis combining three large randomized trials (ALVEOLI, LOV, and ExPress) found no overall mortality difference between higher and lower PEEP strategies. However, in the subgroup with moderate-to-severe ARDS (PaO2/FiO2 ≤200 mmHg), higher PEEP was associated with reduced hospital mortality (34.1% vs. 39.1%, p = 0.049).[^10]

**Recommended approach:**

| ARDS Severity | PEEP Strategy |
|---|---|
| **Mild** (P/F 201–300) | Lower PEEP/FiO2 table; higher PEEP unlikely to benefit and may cause harm |
| **Moderate** (P/F 101–200) | Consider higher PEEP/FiO2 table; monitor driving pressure — if increasing PEEP increases driving pressure, the PEEP is likely causing overdistension rather than recruitment |
| **Severe** (P/F ≤100) | Higher PEEP/FiO2 table; strongly consider prone positioning before or alongside PEEP escalation |

#### 3.4.4 PEEP Titration by Driving Pressure

A practical bedside approach to individualizing PEEP is to titrate by driving pressure:[^5]

1. Start at a PEEP level appropriate for the current FiO2 from the PEEP/FiO2 table
2. Increase PEEP in increments of 2 cmH2O every 5–10 minutes
3. After each increase, measure Pplat and calculate driving pressure (Pplat − PEEP)
4. The optimal PEEP is the level that results in the lowest driving pressure (indicating maximum compliance and therefore maximum recruitment relative to overdistension)
5. If increasing PEEP raises the driving pressure, the additional PEEP is causing overdistension and should be reduced

#### 3.4.5 PEEP Titration by Transpulmonary Pressure (Esophageal Manometry)

The EPVent-2 trial investigated PEEP titration guided by esophageal pressure (as a surrogate for pleural pressure) to target a positive end-expiratory transpulmonary pressure of 0–6 cmH2O.[^11] The trial did not show a mortality benefit compared to a high PEEP/FiO2 table strategy. However, esophageal manometry can provide useful physiological information in select cases:

- Patients with high chest wall elastance (e.g., obesity, abdominal compartment syndrome) where high airway pressures do not necessarily reflect high transpulmonary pressures
- Situations where the driving pressure approach does not provide clarity
- Research protocols investigating personalized PEEP strategies

**Transpulmonary Pressure Calculation:**
$$P_{transpulmonary} = P_{airway} - P_{esophageal}$$

**Target:** End-expiratory transpulmonary pressure of 0 to +6 cmH2O; end-inspiratory transpulmonary pressure <20 cmH2O.

### 3.5 FiO2 Titration and Oxygenation Targets

**Oxygenation targets in ARDS:**[^7][^8]

| Parameter | Target | Rationale |
|---|---|---|
| **SpO2** | 92–96% | The ARDS network protocol targeted PaO2 55–80 mmHg (SpO2 88–95%); current practice and updated guidelines favor a slightly higher lower limit of 92% based on observational data and the LOCO2 trial |
| **PaO2** | 55–80 mmHg | Direct measurement target from the ARDS network protocol; PaO2 >80 mmHg provides no benefit and suggests FiO2 and/or PEEP can be reduced |

**Important considerations:**

- The LOCO2 trial (2020) compared a conservative oxygenation target (PaO2 55–70 mmHg, SpO2 88–92%) to a liberal target (PaO2 90–105 mmHg, SpO2 ≥96%) in ARDS. The conservative arm was stopped early for safety concerns, with a trend toward increased 90-day mortality (44.4% vs. 30.4%) and five cases of mesenteric ischemia in the conservative group. This trial raised concerns about targeting SpO2 <92%.[^12]
- The HOT-ICU trial (2021) compared a lower (PaO2 60 mmHg) versus a higher (PaO2 90 mmHg) oxygenation target in a general ICU population with acute hypoxemic respiratory failure and found no difference in 90-day mortality[^13]
- **Current best practice:** Target SpO2 92–96% (PaO2 approximately 60–80 mmHg); avoid both excessive hypoxemia and unnecessary hyperoxia
- FiO2 should be weaned before PEEP in most circumstances, as FiO2 reduction carries less hemodynamic consequence than PEEP reduction

### 3.6 Respiratory Rate and pH Management

#### 3.6.1 Initial Respiratory Rate Settings

When tidal volume is reduced to 6 mL/kg IBW, minute ventilation decreases, leading to CO2 retention and respiratory acidosis. The respiratory rate should be adjusted to maintain adequate minute ventilation and pH.[^8]

**Initial settings:**
- Set respiratory rate at 20–35 breaths per minute
- Target pH ≥7.30 (not PCO2)
- Maximum respiratory rate of 35 breaths per minute
- Monitor for auto-PEEP (intrinsic PEEP) when respiratory rate exceeds 25–30, especially in patients with obstructive airway disease

**Respiratory Rate Adjustment Protocol:**

| pH | Action |
|---|---|
| 7.30–7.45 | No change needed |
| 7.15–7.30 | Increase respiratory rate (up to 35/min); if at maximum rate, consider NaHCO3 infusion |
| <7.15 | Increase respiratory rate to maximum (35/min); administer NaHCO3; may increase VT to 7–8 mL/kg IBW if Pplat allows (keeping Pplat ≤30) |
| >7.45 | Decrease respiratory rate |

#### 3.6.2 Permissive Hypercapnia

Permissive hypercapnia is the deliberate acceptance of elevated PaCO2 levels in order to maintain lung-protective tidal volumes. It is a consequence of, not a goal of, lung-protective ventilation.[^7][^14]

**Principles:**

- The primary target is pH, not PaCO2. Mild respiratory acidosis (pH 7.25–7.35) is generally well-tolerated
- Renal compensation (bicarbonate retention) typically begins within 6–12 hours and is meaningful within 24–48 hours
- PaCO2 levels of 50–80 mmHg are commonly seen and tolerated in ARDS patients on lung-protective ventilation
- Buffering with sodium bicarbonate may be considered for pH <7.15, though evidence for benefit is limited
- Tris-hydroxymethyl aminomethane (THAM) is an alternative buffer that does not generate CO2

**Contraindications/cautions for permissive hypercapnia:**

| Condition | Concern |
|---|---|
| Elevated intracranial pressure | CO2 is a potent cerebral vasodilator; hypercapnia can critically increase ICP |
| Acute right ventricular failure | Hypercapnia increases pulmonary vascular resistance |
| Severe metabolic acidosis | Combined acidosis may not be tolerated |
| Pre-existing pulmonary hypertension | Further increases in PVR may precipitate RV failure |
| Hemodynamic instability | Acidosis impairs cardiac contractility and vasopressor responsiveness |

#### 3.6.3 Auto-PEEP (Intrinsic PEEP) Assessment

At higher respiratory rates, incomplete exhalation can lead to progressive air trapping (auto-PEEP or intrinsic PEEP), which increases total PEEP above the set level, raises driving pressure, reduces venous return, and can cause hemodynamic compromise.[^7]

**Detection:**
1. Perform an expiratory hold maneuver
2. Read the total PEEP from the ventilator display
3. Auto-PEEP = Total PEEP − Set PEEP

**Management of auto-PEEP >2 cmH2O:**
- Reduce respiratory rate if pH allows
- Increase inspiratory flow rate to allow more time for exhalation (in volume-control mode)
- Decrease I:E ratio (aim for 1:2 or greater)
- Evaluate for bronchospasm and treat with bronchodilators if present
- Rarely, may need to reduce set PEEP to account for intrinsic PEEP (controversial)

---

## 4. Initial Ventilator Setup: Summary Protocol

### 4.1 Step-by-Step Initial Ventilator Setup for ARDS

| Step | Action | Target/Detail |
|---|---|---|
| 1 | **Confirm ARDS diagnosis** | Berlin criteria met; identify and treat underlying etiology |
| 2 | **Calculate ideal body weight** | Male: 50 + 2.3(height in inches − 60); Female: 45.5 + 2.3(height in inches − 60) |
| 3 | **Select ventilator mode** | Volume-assist/control recommended; pressure-assist/control acceptable |
| 4 | **Set tidal volume** | 6 mL/kg IBW (start at 8 mL/kg, reduce by 1 mL/kg every 2 hours to 6 mL/kg if hemodynamically stable) |
| 5 | **Set initial PEEP** | Per lower PEEP/FiO2 table for mild ARDS; higher table for moderate-severe |
| 6 | **Set initial FiO2** | 1.0 at intubation, titrate down within minutes to target SpO2 92–96% |
| 7 | **Set respiratory rate** | 20–35 breaths/min to achieve pH ≥7.30 |
| 8 | **Measure plateau pressure** | Inspiratory hold; target Pplat ≤30 cmH2O |
| 9 | **Calculate driving pressure** | Pplat − PEEP; target <15 cmH2O |
| 10 | **Set I:E ratio** | 1:1 to 1:3 (typically 1:2); adjust based on auto-PEEP assessment |
| 11 | **Obtain ABG** | Within 30–60 minutes of initiating ventilation; adjust RR for pH, FiO2 for oxygenation |
| 12 | **Reassess severity** | Reclassify ARDS severity at standardized settings; escalate therapy if severe |

### 4.2 Monitoring Checklist — First 24 Hours

| Parameter | Frequency | Target |
|---|---|---|
| SpO2 | Continuous | 92–96% |
| Plateau pressure | Every 4 hours and after VT/PEEP changes | ≤30 cmH2O |
| Driving pressure | Every 4 hours and after VT/PEEP changes | <15 cmH2O |
| Tidal volume | Continuous | 4–6 mL/kg IBW (verify delivery matches setting) |
| ABG | 30–60 min after change; then every 4–6 hours | pH ≥7.25; PaO2 55–80 mmHg |
| Auto-PEEP | Every 4 hours if RR >25 | <2 cmH2O |
| Respiratory rate | Continuous | ≤35 breaths/min |
| Hemodynamics (MAP, CVP, lactate) | Continuous MAP; lactate every 4–6 hours | MAP ≥65 mmHg |
| I&O and fluid balance | Hourly | Target even to negative after initial resuscitation |
| Sedation (RASS) | Every 2–4 hours | RASS −2 to 0 in most patients; deeper (−4 to −5) with NMB or prone |

---

## References

[^1]: ARDS Definition Task Force; Ranieri VM, Rubenfeld GD, Thompson BT, et al. "Acute respiratory distress syndrome: the Berlin Definition." *JAMA*, 307(23), 2526-2533, 2012. doi:10.1001/jama.2012.5669. https://doi.org/10.1001/jama.2012.5669

[^2]: Matthay MA, Arabi Y, Arroliga AC, et al. "A new global definition of acute respiratory distress syndrome." *Am J Respir Crit Care Med*, 209(1), 37-47, 2024. doi:10.1164/rccm.202303-0558WS. https://doi.org/10.1164/rccm.202303-0558WS

[^3]: Gattinoni L, Pesenti A. "The concept of 'baby lung'." *Intensive Care Med*, 31(6), 776-784, 2005. doi:10.1007/s00134-005-2627-z. https://doi.org/10.1007/s00134-005-2627-z

[^4]: Slutsky AS, Ranieri VM. "Ventilator-induced lung injury." *N Engl J Med*, 369(22), 2126-2136, 2013. doi:10.1056/NEJMra1208707. https://doi.org/10.1056/NEJMra1208707

[^5]: Amato MBP, Meade MO, Slutsky AS, et al. "Driving pressure and survival in the acute respiratory distress syndrome." *N Engl J Med*, 372(8), 747-755, 2015. doi:10.1056/NEJMsa1410639. https://doi.org/10.1056/NEJMsa1410639

[^6]: Gattinoni L, Tonetti T, Cressoni M, et al. "Ventilator-related causes of lung injury: the mechanical power." *Intensive Care Med*, 42(10), 1567-1575, 2016. doi:10.1007/s00134-016-4505-2. https://doi.org/10.1007/s00134-016-4505-2

[^7]: Fan E, Del Sorbo L, Goligher EC, et al. "An official American Thoracic Society/European Society of Intensive Care Medicine/Society of Critical Care Medicine clinical practice guideline: mechanical ventilation in adult patients with acute respiratory distress syndrome." *Am J Respir Crit Care Med*, 195(9), 1253-1263, 2017. ATS/ESICM/SCCM. doi:10.1164/rccm.201703-0548ST. https://doi.org/10.1164/rccm.201703-0548ST

[^8]: The Acute Respiratory Distress Syndrome Network. "Ventilation with lower tidal volumes as compared with traditional tidal volumes for acute lung injury and the acute respiratory distress syndrome." *N Engl J Med*, 342(18), 1301-1308, 2000. NHLBI ARDS Network. doi:10.1056/NEJM200005043421801. https://doi.org/10.1056/NEJM200005043421801

[^9]: Brower RG, Lanken PN, MacIntyre N, et al. "Higher versus lower positive end-expiratory pressures in patients with the acute respiratory distress syndrome (ALVEOLI)." *N Engl J Med*, 351(4), 327-336, 2004. NHLBI ARDS Network. doi:10.1056/NEJMoa032193. https://doi.org/10.1056/NEJMoa032193

[^10]: Briel M, Meade M, Mercat A, et al. "Higher vs lower positive end-expiratory pressure in patients with acute lung injury and acute respiratory distress syndrome: systematic review and meta-analysis." *JAMA*, 303(9), 865-873, 2010. doi:10.1001/jama.2010.218. https://doi.org/10.1001/jama.2010.218

[^11]: Beitler JR, Sarge T, Banner-Goodspeed VM, et al. "Effect of titrating positive end-expiratory pressure (PEEP) with an esophageal pressure-guided strategy vs an empirical high PEEP-FiO2 strategy on death and days free from mechanical ventilation among patients with acute respiratory distress syndrome: a randomized clinical trial (EPVent-2)." *JAMA*, 321(9), 846-857, 2019. doi:10.1001/jama.2019.0555. https://doi.org/10.1001/jama.2019.0555

[^12]: Barrot L, Asfar P, Mauny F, et al. "Liberal or conservative oxygen therapy for acute respiratory distress syndrome (LOCO2)." *N Engl J Med*, 382(11), 999-1008, 2020. doi:10.1056/NEJMoa1916431. https://doi.org/10.1056/NEJMoa1916431

[^13]: Schjorring OL, Klitgaard TL, Perner A, et al. "Lower or higher oxygenation targets for acute hypoxemic respiratory failure (HOT-ICU)." *N Engl J Med*, 384(14), 1301-1311, 2021. doi:10.1056/NEJMoa2032510. https://doi.org/10.1056/NEJMoa2032510

[^14]: Hickling KG, Henderson SJ, Jackson R. "Low mortality associated with low volume pressure limited ventilation with permissive hypercapnia in severe adult respiratory distress syndrome." *Intensive Care Med*, 16(6), 372-377, 1990. doi:10.1007/BF01735174. https://doi.org/10.1007/BF01735174
