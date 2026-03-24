+++
title = "Nutrition in Critical Illness — Part 1: Nutritional Assessment & Energy/Protein Requirements"
description = "Comprehensive guide to nutrition screening tools (NUTRIC score, NRS-2002, mNUTRIC), limitations of traditional biomarkers, body composition assessment, indirect calorimetry, predictive equations, caloric and protein targets, and obesity adjustments in the critically ill adult."
date = 2026-03-15T00:00:00-05:00
lastmod = 2026-03-15T00:00:00-05:00
draft = false
weight = 1
source_org = "icu_nutrition"
guideline_set = "icu_nutrition_guideline_2026"
category = ["guidelines", "icu", "critical-care", "nutrition", "nutritional-assessment"]
audience = "clinician"
content_type = "guidelines"
aliases = ["/guidelines/icu/nutrition-critical-illness/part-1-nutritional-assessment-energy-protein-requirements/"]
+++

## 1. Nutritional Assessment in the ICU

### 1.1 Importance of Nutritional Assessment

Malnutrition in the critically ill is independently associated with increased morbidity and mortality. Unlike ward patients, ICU patients often cannot participate in subjective assessment tools (e.g., Subjective Global Assessment), making validated screening instruments essential. The primary goals of nutritional assessment in the ICU are to:[^1] [^2]

- Identify patients at high nutritional risk who will benefit most from aggressive nutrition therapy
- Guide caloric and protein prescription
- Monitor response to nutrition intervention
- Identify patients at risk for refeeding syndrome

### 1.2 Timing of Nutritional Assessment

All patients admitted to the ICU should undergo nutritional risk screening within the **first 24 to 48 hours of admission**. The assessment should be repeated at regular intervals (at least weekly) and whenever there is a significant change in clinical status.[^1] [^3]

---

## 2. Nutrition Screening Tools

### 2.1 NUTRIC Score (Nutrition Risk in the Critically Ill)

The NUTRIC score is the only nutrition risk assessment tool specifically developed and validated for the ICU population. It identifies critically ill patients who are most likely to benefit from aggressive protein-energy delivery. Higher scores indicate greater nutritional risk and a stronger association between adequate nutrition and improved outcomes.[^4]

#### Complete NUTRIC Score Variables and Scoring

| Variable | Range | Score 0 | Score 1 | Score 2 | Score 3 |
|---|---|---|---|---|---|
| Age (years) | 0-1 | < 50 | 50 to < 75 | >= 75 | — |
| APACHE II | 0-3 | < 15 | 15 to < 20 | 20 to < 28 | >= 28 |
| SOFA (day 1) | 0-3 | < 6 | 6 to < 10 | >= 10 | — |
| Number of comorbidities | 0-1 | 0-1 | >= 2 | — | — |
| Days from hospital to ICU admission | 0-1 | 0 (< 1 day) | >= 1 (1+ days) | — | — |
| IL-6 (if available) | 0-1 | 0 to < 400 | >= 400 | — | — |

**Total score range:** 0-10 (with IL-6) or 0-9 (without IL-6, the modified NUTRIC or mNUTRIC)

#### NUTRIC Score Interpretation

| Score (with IL-6) | Score (without IL-6 / mNUTRIC) | Category | Interpretation |
|---|---|---|---|
| 6-10 | 5-9 | **High risk** | Associated with worse clinical outcomes (mortality, ventilator days). These patients are most likely to benefit from aggressive nutrition therapy. |
| 0-5 | 0-4 | **Low risk** | Lower nutritional risk. These patients may not derive as large a benefit from early aggressive nutrition support. |

#### Key Validation Data

- In the original validation cohort (n = 597), patients with high NUTRIC scores (>=6) who received higher percentages of prescribed calories had significantly lower 28-day mortality (OR 0.27; 95% CI 0.11-0.67; p = 0.005).[^4]
- Among patients with low NUTRIC scores, there was no significant association between caloric adequacy and mortality, suggesting a ceiling effect in low-risk patients.[^4]
- The modified NUTRIC (mNUTRIC), which omits IL-6 (as it is not routinely measured in most ICUs), has been independently validated and demonstrates comparable predictive performance to the full NUTRIC score.[^5]

#### Comorbidity Definitions for NUTRIC Score

The comorbidity count in the NUTRIC score uses a broadly inclusive definition. Relevant comorbidities include but are not limited to:

- Chronic liver disease
- Chronic kidney disease / end-stage renal disease
- Chronic obstructive pulmonary disease
- Heart failure (NYHA class III-IV)
- Diabetes mellitus
- Active malignancy
- Immunosuppression (HIV/AIDS, chronic immunosuppressive therapy, organ transplantation)

### 2.2 NRS-2002 (Nutritional Risk Screening 2002)

The NRS-2002 was developed for use in hospitalized patients and has been validated in the ICU setting, though it was not specifically designed for critical illness. All ICU patients automatically receive at least 3 points due to the severity-of-disease component, making the tool somewhat less discriminating in this population.[^6]

#### NRS-2002 Scoring System

**Step 1: Initial Screening**

| Question | Yes | No |
|---|---|---|
| Is BMI < 20.5? | Proceed to Step 2 | If all "No," |
| Has the patient lost weight within the last 3 months? | Proceed to Step 2 | rescreen weekly |
| Has the patient had a reduced dietary intake in the last week? | Proceed to Step 2 | |
| Is the patient severely ill (e.g., ICU admission)? | Proceed to Step 2 | |

**Step 2: Final Screening — Impaired Nutritional Status**

| Score | Criterion |
|---|---|
| 0 (Absent) | Normal nutritional status |
| 1 (Mild) | Weight loss > 5% in 3 months OR food intake 50-75% of normal in preceding week |
| 2 (Moderate) | Weight loss > 5% in 2 months OR BMI 18.5-20.5 with impaired general condition OR food intake 25-50% of normal in preceding week |
| 3 (Severe) | Weight loss > 5% in 1 month (>15% in 3 months) OR BMI < 18.5 with impaired general condition OR food intake 0-25% of normal in preceding week |

**Step 2: Final Screening — Severity of Disease**

| Score | Criterion |
|---|---|
| 0 (Absent) | Normal nutritional requirements |
| 1 (Mild) | Hip fracture, chronic disease (cirrhosis, COPD, hemodialysis, diabetes, oncology) |
| 2 (Moderate) | Major abdominal surgery, stroke, severe pneumonia, hematologic malignancy |
| 3 (Severe) | Head injury, bone marrow transplant, ICU patients (APACHE >= 10) |

**Age adjustment:** Add 1 point if age >= 70 years.

**Total score** = Nutritional status score + Disease severity score + Age adjustment.

**Interpretation:** A total score >= 3 indicates that the patient is at nutritional risk and should receive a nutrition care plan.[^6]

### 2.3 Comparison of Screening Tools in the ICU

| Feature | NUTRIC / mNUTRIC | NRS-2002 | SGA (Subjective Global Assessment) |
|---|---|---|---|
| Developed for ICU | Yes | No (general hospital) | No (general hospital) |
| Requires patient interview | No | Yes (often impractical in ICU) | Yes (impractical in ICU) |
| Validated in ICU | Yes | Yes | Limited in ICU |
| Incorporates disease severity | Yes (APACHE II, SOFA) | Yes (disease category) | No |
| IL-6 required | Optional (mNUTRIC omits it) | No | No |
| Recommended by major societies | Yes (recommended by the sponsoring critical care and nutrition societies) | Yes (recommended by the European nutrition society) | Limited ICU applicability |
| Predictive of benefit from nutrition therapy | Yes | Not directly validated | Not directly validated |

**Recommendation:** The mNUTRIC score (without IL-6) is the preferred screening tool in the ICU due to its ICU-specific validation, lack of need for patient participation, and demonstrated ability to identify patients who benefit most from nutrition optimization.[^1] [^2] [^4] [^5]

---

## 3. Limitations of Traditional Nutritional Biomarkers

### 3.1 Serum Albumin

Serum albumin has traditionally been used as a nutritional marker, but it is **not a reliable indicator of nutritional status** in critically ill patients and should **not** be used to guide nutrition therapy decisions in the ICU.[^1] [^2]

**Why albumin fails in critical illness:**

- Albumin is a **negative acute-phase reactant** — serum levels decrease rapidly (within hours) during systemic inflammation due to hepatic reprioritization toward synthesis of positive acute-phase proteins (e.g., C-reactive protein, ferritin)
- The half-life of albumin is approximately **20 days**, making it unresponsive to short-term nutritional changes
- Capillary leak during critical illness results in redistribution of albumin to the extravascular space
- Fluid resuscitation causes dilutional hypoalbuminemia
- Albumin levels correlate with **illness severity and inflammation**, not nutritional status

**Clinical utility:** Low albumin is a marker of **prognosis and inflammation severity** rather than malnutrition. It predicts outcomes (mortality, length of stay) but should not be used to diagnose malnutrition or monitor nutrition therapy response.[^7]

### 3.2 Prealbumin (Transthyretin)

Prealbumin has a shorter half-life (~2 days) than albumin and was once thought to be a more responsive nutritional marker. However, like albumin, prealbumin is a **negative acute-phase reactant** and is unreliable in the presence of inflammation.[^1]

- Levels decrease with systemic inflammation, hepatic dysfunction, and renal disease
- Levels increase with corticosteroid use and renal insufficiency (reduced clearance)
- Trending prealbumin may have limited value during the **recovery phase** (once inflammation has resolved, as indicated by declining CRP), but it should not be used during the acute phase of critical illness

### 3.3 Other Biomarkers

| Marker | Half-Life | Limitations in Critical Illness |
|---|---|---|
| Albumin | ~20 days | Negative acute-phase reactant; dilution; capillary leak |
| Prealbumin (transthyretin) | ~2 days | Negative acute-phase reactant; affected by renal/hepatic function |
| Transferrin | ~8-10 days | Negative acute-phase reactant; affected by iron status |
| Retinol-binding protein | ~12 hours | Negative acute-phase reactant; affected by renal function; not widely available |
| Nitrogen balance | 24-hour collection | Inaccurate in renal failure, burns, diarrhea, fistulae; underestimates losses |

---

## 4. Body Composition Assessment

### 4.1 Rationale

Standard anthropometric measures (BMI, weight) are often unreliable in the ICU due to fluid shifts, edema, and inability to obtain accurate weights. More advanced body composition assessment techniques can identify sarcopenia and guide protein targets.[^2] [^3]

### 4.2 Bedside Ultrasound for Muscle Mass

Ultrasonographic measurement of the rectus femoris cross-sectional area (RF-CSA) and quadriceps muscle layer thickness (QMLT) at the mid-thigh is emerging as a practical bedside tool for assessing and monitoring muscle mass in critically ill patients.[^8]

**Technique:**
- Patient positioned supine with knee extended
- Linear transducer placed at the midpoint between the anterior superior iliac spine and the superior pole of the patella
- Minimal compression applied to avoid distortion
- Measure in both transverse (for cross-sectional area) and longitudinal planes

**Clinical significance:**
- Significant quadriceps muscle wasting (10-20% loss of RF-CSA) can occur within the first 7-10 days of ICU admission
- Serial measurements can track the trajectory of muscle loss and response to nutrition/rehabilitation
- No universally established cut-off values for sarcopenia by ICU ultrasound yet exist

### 4.3 CT-Based Body Composition at L3

Cross-sectional imaging at the third lumbar vertebra (L3) on CT scan is the reference standard for body composition analysis in research settings. When CT imaging has been obtained for clinical indications, opportunistic body composition analysis can provide valuable information.[^9]

**Measured compartments:**
- Skeletal muscle area (SMA) — adjusted for height squared to give the skeletal muscle index (SMI)
- Visceral adipose tissue (VAT)
- Subcutaneous adipose tissue (SAT)
- Intramuscular adipose tissue (IMAT) — marker of muscle quality

**Sarcopenia cut-offs at L3 (commonly used thresholds):**

| Sex | SMI Cut-Off for Sarcopenia |
|---|---|
| Male | < 52.4 cm2/m2 |
| Female | < 38.5 cm2/m2 |

**Note:** These thresholds are derived from oncology populations and may not be directly applicable to all ICU patients. However, low skeletal muscle mass at L3 has been independently associated with increased mortality in multiple ICU cohorts.[^9]

### 4.4 Bioelectrical Impedance Analysis (BIA)

BIA estimates fat-free mass and total body water by measuring electrical resistance across body segments. While validated in stable outpatients, BIA is **unreliable in the ICU** due to:[^2]

- Fluid shifts and edema altering impedance measurements
- Variable hydration status
- Inability to standardize patient positioning
- Electrode placement inconsistencies

**Current recommendation:** BIA is **not recommended** for routine body composition assessment in critically ill patients.

### 4.5 Phase Angle

Phase angle, derived from BIA (the arctangent of the reactance-to-resistance ratio), reflects cellular integrity and has been studied as a prognostic marker. Low phase angle (typically < 4-5 degrees) is associated with higher mortality in ICU patients, but it does not directly guide nutritional prescription.[^10]

---

## 5. Energy Requirements

### 5.1 Indirect Calorimetry — The Gold Standard

Indirect calorimetry (IC) is the **gold standard** for determining energy expenditure in critically ill patients and is recommended by all major professional societies when available.[^1] [^2] [^3]

#### Principle

IC measures oxygen consumption (VO2) and carbon dioxide production (VCO2) to calculate resting energy expenditure (REE) using a modified Weir equation:

> **REE (kcal/day) = [3.941 x VO2 (L/min) + 1.106 x VCO2 (L/min)] x 1440**

The respiratory quotient (RQ = VCO2/VO2) provides information about substrate utilization:

| RQ Value | Predominant Substrate | Clinical Significance |
|---|---|---|
| 0.67 | Alcohol oxidation | — |
| 0.70 | Fat oxidation (lipolysis/ketosis) | Starvation or underfeeding |
| 0.80 | Mixed substrate (protein) | Typical ICU patient |
| 0.85 | Mixed substrate (balanced diet) | Usual target range |
| 1.00 | Carbohydrate oxidation | Adequate or excess carbohydrate intake |
| > 1.00 | Lipogenesis (net fat synthesis) | **Overfeeding** — excess calories, particularly carbohydrate |

#### When to Perform Indirect Calorimetry

- Patients with **mNUTRIC >= 5** (high nutritional risk)
- Obesity (BMI >= 30) where predictive equations are particularly inaccurate
- Underweight patients (BMI < 18.5)
- Failure to wean from mechanical ventilation (RQ > 1.0 suggesting overfeeding)
- Patients not progressing as expected despite seemingly adequate nutrition
- Burns > 20% TBSA
- Patients receiving ECMO (requires specialized correction)
- When there is significant discrepancy between predicted and actual energy needs

#### Conditions for Accurate Measurement

- **Steady-state conditions**: VO2 and VCO2 coefficients of variation < 10% over 5 minutes
- **FiO2 < 0.60** (higher FiO2 reduces accuracy with some devices; newer calorimeters may be accurate up to FiO2 0.80-1.0)
- **No air leaks** in the ventilator circuit (cuff leak, chest tube with air leak, bronchopleural fistula)
- Patient should not have received general anesthesia within the preceding 6-8 hours
- No acute hemodynamic instability during measurement
- **CRRT**: Some devices require correction for CO2 removal; consult manufacturer guidelines
- Measurement duration: minimum 20-30 minutes of steady-state recording

#### Equipment

Modern metabolic carts used in ICUs include devices with integrated canopy (for spontaneously breathing patients) or direct ventilator connection modules. Newer devices (e.g., compact indirect calorimeters) have simplified workflow and can be used during mechanical ventilation with reasonable accuracy.[^11]

### 5.2 Predictive Equations

When indirect calorimetry is unavailable, predictive equations are used to estimate energy needs. However, predictive equations are **inaccurate in approximately 40-75% of critically ill patients** (defined as prediction within +/- 10% of measured REE). Among available equations, the following are recommended:[^1] [^2] [^12]

#### Penn State Equation (2003b version — recommended for ventilated ICU patients)

> **REE = Mifflin-St. Jeor (0.96) + Tmax (167) + VE (31) - 6,212**

Where:
- Mifflin-St. Jeor = calculated basal metabolic rate (see below)
- Tmax = maximum body temperature in the preceding 24 hours (degrees Celsius)
- VE = minute ventilation (liters per minute)

**For obese patients (BMI >= 30), the modified Penn State equation (2010) is recommended:**

> **REE = Mifflin-St. Jeor (0.71) + Tmax (85) + VE (64) - 3,085**

#### Mifflin-St. Jeor Equation (used as a component of Penn State)

> **Males: REE (kcal/day) = 10 x weight (kg) + 6.25 x height (cm) - 5 x age (years) + 5**

> **Females: REE (kcal/day) = 10 x weight (kg) + 6.25 x height (cm) - 5 x age (years) - 161**

**Note:** For the Mifflin-St. Jeor equation within the Penn State calculation, use **actual body weight** (not ideal body weight), unless the patient is significantly edematous, in which case use estimated dry weight or usual body weight.[^12]

#### Harris-Benedict Equation (historical reference — less accurate in ICU)

> **Males: REE = 66.5 + 13.75 x weight (kg) + 5.003 x height (cm) - 6.755 x age (years)**

> **Females: REE = 655.1 + 9.563 x weight (kg) + 1.850 x height (cm) - 4.676 x age (years)**

The Harris-Benedict equation was derived from healthy individuals and requires a "stress factor" (1.2 to 2.0) to estimate ICU needs, introducing additional inaccuracy. It is **not recommended** as the primary predictive method in the ICU.[^1]

### 5.3 Weight-Based Caloric Estimates (Simplest Approach)

When neither indirect calorimetry nor predictive equations are practical, weight-based estimates may be used as a starting point:[^1] [^2] [^3]

| Patient Population | Caloric Target | Weight Used |
|---|---|---|
| Non-obese (BMI < 30) | **25-30 kcal/kg/day** | Actual body weight |
| Obesity Class I (BMI 30-39.9) | **11-14 kcal/kg/day** | Actual body weight |
| Obesity Class II-III (BMI >= 40) | **11-14 kcal/kg/day** (or 22-25 kcal/kg IBW/day) | Actual body weight (or IBW) |

#### Ideal Body Weight (IBW) Calculation (Devine Formula)

> **Males: IBW (kg) = 50 + 2.3 x (height in inches - 60)**

> **Females: IBW (kg) = 45.5 + 2.3 x (height in inches - 60)**

#### Adjusted Body Weight (AdjBW) — Sometimes Used in Obesity

> **AdjBW = IBW + 0.25 x (Actual BW - IBW)**

Some clinicians use AdjBW with the 25-30 kcal/kg/day target as an alternative to the actual body weight method in obese patients. The appropriate weight to use remains a subject of ongoing debate.[^1]

### 5.4 Caloric Targets Across the Phases of Critical Illness

| Phase | Timeframe | Caloric Target | Rationale |
|---|---|---|---|
| **Acute early phase** (ebb) | Day 1-2 | Trophic/low-dose EN (10-20 kcal/hr or ~500 kcal/day) | Endogenous substrate mobilization is high; full feeding may worsen hyperglycemia and suppress autophagy |
| **Acute late phase** (flow) | Day 3-7 | Advance toward 70-80% of estimated/measured needs | Gradual increase; avoid overfeeding while meeting increasing demands |
| **Late/chronic phase** | Day 7+ | Target 80-100% of measured needs (or 100% if using predictive equations) | Anabolic potential improves; full nutrition support is beneficial |

**Permissive underfeeding (trophic feeding) in early critical illness:** The EDEN trial demonstrated that trophic EN (accounting for ~25% of caloric target or ~400 kcal/day) for the first 6 days was non-inferior to full EN in patients with acute lung injury with respect to ventilator-free days, 60-day mortality, and infectious complications. The PERMIT trial similarly found no difference in 90-day mortality between permissive underfeeding (~40-60% of caloric target) and standard feeding (~70-100%) in critically ill adults.[^13] [^14]

**Caution against overfeeding:** Providing calories in excess of measured energy expenditure (overfeeding) is associated with hyperglycemia, hepatic steatosis, increased CO2 production (potentially prolonging mechanical ventilation), immune dysfunction, and increased infectious complications. An RQ > 1.0 on indirect calorimetry suggests overfeeding.[^1]

---

## 6. Protein Requirements

### 6.1 General Protein Targets

Protein is the most critical macronutrient in the critically ill patient. Protein delivery is often more important than total caloric delivery for preserving lean body mass, supporting immune function, and promoting wound healing.[^1] [^2] [^3]

**General target: 1.2 to 2.0 g/kg/day** (using actual body weight for non-obese patients)

| Clinical Scenario | Protein Target (g/kg/day) | Weight Used | Notes |
|---|---|---|---|
| General ICU | 1.2-2.0 | Actual BW | Higher end for higher acuity (mNUTRIC >= 5) |
| Burns (> 20% TBSA) | 1.5-2.0 (up to 2.5) | Pre-burn weight | Highest protein demands of any ICU population |
| Trauma / Polytrauma | 1.5-2.0 | Actual BW | Higher targets for polytrauma, TBI |
| CRRT | 1.5-2.5 | Actual BW | To compensate for amino acid losses in effluent (10-15 g/day) |
| Obesity (BMI 30-39.9) | >= 2.0 | IBW | High-protein, hypocaloric strategy |
| Obesity (BMI >= 40) | >= 2.5 | IBW | High-protein, hypocaloric strategy |
| Hepatic encephalopathy | Do NOT restrict protein | Actual or IBW | Protein restriction does not improve encephalopathy and worsens outcomes |
| Acute kidney injury (non-dialysis) | 1.2-2.0 | Actual BW | Do NOT restrict protein to delay dialysis initiation |

### 6.2 Protein Delivery — Practical Considerations

- Standard enteral formulas typically contain protein at a calorie-to-nitrogen ratio that is **insufficient** to meet protein targets of 1.5-2.0 g/kg/day without overfeeding calories. Supplemental protein modules (modular protein powder added to EN) are often necessary.
- **Protein modules:** Commonly available as whey protein isolate, casein, or collagen-based powders; typical dose 1-2 scoops (providing 6-15 g protein each) added per feeding, titrated to goal.
- High-protein enteral formulas (providing >= 25% of calories from protein) may reduce the need for modular protein supplementation.
- In PN, amino acid concentration is adjusted directly in the formulation (standard range 4.25-15% amino acid solutions).

### 6.3 Nitrogen Balance

Nitrogen balance is a traditional method for assessing protein adequacy:

> **Nitrogen balance (g/day) = Nitrogen intake - Nitrogen output**

> **Nitrogen intake (g) = Protein intake (g) / 6.25**

> **Nitrogen output (g) = 24-hour urine urea nitrogen (UUN, g) + insensible losses (typically estimated at 2-4 g/day)**

**Target:** Positive nitrogen balance (intake exceeding output), ideally by +2 to +4 g/day.

**Limitations:** UUN collections are inaccurate in patients with renal failure (non-steady-state urea kinetics), burns (significant wound nitrogen losses), diarrhea, or fistulae. In these settings, nitrogen balance significantly underestimates actual nitrogen losses.[^1]

---

## 7. Obesity-Specific Nutrition Management

### 7.1 Rationale for High-Protein, Hypocaloric Feeding

Obese critically ill patients represent a unique metabolic challenge. Despite excess adipose tissue, these patients often have sarcopenic obesity — excess fat with inadequate lean body mass. The goal of nutritional therapy in the obese critically ill patient is to preserve lean mass while allowing mobilization of endogenous fat stores for energy. This is achieved through a **high-protein, hypocaloric** feeding strategy.[^1] [^2]

### 7.2 Obesity-Specific Caloric and Protein Targets

| BMI Category | Caloric Target | Protein Target |
|---|---|---|
| BMI 30-39.9 (Class I-II obesity) | 11-14 kcal/kg **actual** body weight/day | >= 2.0 g/kg **IBW**/day |
| BMI >= 40 (Class III obesity) | 11-14 kcal/kg **actual** body weight/day (or 22-25 kcal/kg IBW/day) | >= 2.5 g/kg **IBW**/day |

**Example calculation:**

> Patient: Male, 170 cm (67 inches), 130 kg, BMI 45
>
> IBW = 50 + 2.3 x (67 - 60) = 50 + 16.1 = **66.1 kg**
>
> Caloric target: 130 kg x 11-14 = **1,430 - 1,820 kcal/day**
>
> Protein target: 66.1 kg x 2.5 = **165 g protein/day**
>
> Protein calories: 165 x 4 = 660 kcal from protein
>
> Non-protein calories: 770 - 1,160 kcal/day

### 7.3 Monitoring in Obese Patients

- Monitor nitrogen balance weekly if feasible
- Indirect calorimetry is particularly valuable in this population due to the high inaccuracy of predictive equations in obesity
- Monitor for refeeding syndrome (may be malnourished despite high BMI)
- Monitor prealbumin during recovery phase only (when CRP is trending down)

---

## 8. Metabolic Phases of Critical Illness — Implications for Nutrition

### 8.1 Ebb Phase (0-24 hours)

- Characterized by hemodynamic instability, decreased metabolic rate, and decreased oxygen consumption
- Endogenous glucose production is elevated; insulin resistance is marked
- Full nutrition support is generally not initiated during this phase
- Focus on hemodynamic resuscitation; prepare for EN access

### 8.2 Catabolic Flow Phase (Day 1-7)

- Hypermetabolic state with elevated REE (typically 110-150% of predicted basal)
- Accelerated proteolysis (skeletal muscle can lose 1-2% of total mass per day)
- Marked insulin resistance and stress hyperglycemia
- Endogenous substrate production is high — supplemental overfeeding is harmful
- Trophic/low-dose EN is acceptable in the first 48-72 hours; advance toward target over 3-7 days
- Protein delivery should be prioritized even when caloric targets are not yet reached

### 8.3 Anabolic Recovery Phase (Day 7+)

- Metabolic rate may remain elevated or normalize
- Anabolic potential improves — full-dose nutrition (calories and protein) is appropriate
- Consider advancing to 100% of measured (by IC) or estimated caloric target
- Physical rehabilitation and mobilization synergize with nutrition to rebuild lean mass
- This is the phase where supplemental PN may be most beneficial if EN is insufficient

---

## 9. Summary of Key Recommendations

| Domain | Recommendation | Evidence Level |
|---|---|---|
| Screening tool | Use mNUTRIC score (without IL-6) for all ICU patients within 24-48 hours | Moderate |
| Albumin/prealbumin | Do NOT use to assess nutritional status in acute critical illness | Strong |
| Energy assessment | Indirect calorimetry preferred; Penn State equation if IC unavailable | Moderate |
| Caloric target (non-obese) | 25-30 kcal/kg/day (actual BW); advance gradually over first week | Low-Moderate |
| Caloric target (obese) | 11-14 kcal/kg actual BW/day (hypocaloric) | Moderate |
| Protein target (general) | 1.2-2.0 g/kg/day actual BW | Moderate |
| Protein target (obese) | >= 2.0 g/kg IBW (BMI 30-39.9); >= 2.5 g/kg IBW (BMI >= 40) | Moderate |
| Protein target (burns) | 1.5-2.5 g/kg pre-burn weight/day | Moderate |
| Protein target (CRRT) | 1.5-2.5 g/kg/day (compensate for dialysate losses) | Low-Moderate |
| Phase-based feeding | Trophic EN days 1-2; advance to target by day 5-7; full dose by day 7+ | Moderate |

---

## References

[^1]: McClave SA, Taylor BE, Martindale RG, et al. "Guidelines for the Provision and Assessment of Nutrition Support Therapy in the Adult Critically Ill Patient: Society of Critical Care Medicine (SCCM) and American Society for Parenteral and Enteral Nutrition (A.S.P.E.N.)." *JPEN J Parenter Enteral Nutr*. 2016;40(2):159-211. DOI: [10.1177/0148607115621863](https://doi.org/10.1177/0148607115621863)

[^2]: Compher C, Bingham AL, McCall M, et al. "Guidelines for the Provision of Nutrition Support Therapy in the Adult Critically Ill Patient: The American Society for Parenteral and Enteral Nutrition." *JPEN J Parenter Enteral Nutr*. 2022;46(1):12-41. DOI: [10.1002/jpen.2267](https://doi.org/10.1002/jpen.2267)

[^3]: Singer P, Blaser AR, Berger MM, et al. "ESPEN guideline on clinical nutrition in the intensive care unit." *Clin Nutr*. 2019;38(1):48-79. DOI: [10.1016/j.clnu.2018.08.037](https://doi.org/10.1016/j.clnu.2018.08.037)

[^4]: Heyland DK, Dhaliwal R, Jiang X, Day AG. "Identifying critically ill patients who benefit the most from nutrition therapy: the development and initial validation of a novel risk assessment tool." *Crit Care*. 2011;15(6):R268. DOI: [10.1186/cc10546](https://doi.org/10.1186/cc10546)

[^5]: Rahman A, Hasan RM, Agarwala R, Martin C, Day AG, Heyland DK. "Identifying critically-ill patients who will benefit most from nutritional therapy: further validation of the 'modified NUTRIC' nutritional risk assessment tool." *Clin Nutr*. 2016;35(1):158-162. DOI: [10.1016/j.clnu.2015.01.015](https://doi.org/10.1016/j.clnu.2015.01.015)

[^6]: Kondrup J, Rasmussen HH, Hamberg O, Stanga Z; Ad Hoc ESPEN Working Group. "Nutritional risk screening (NRS 2002): a new method based on an analysis of controlled clinical trials." *Clin Nutr*. 2003;22(3):321-336. DOI: [10.1016/S0261-5614(02)00214-5](https://doi.org/10.1016/S0261-5614(02)00214-5)

[^7]: Nicolo M, Heyland DK, Chittams J, Sammarco T, Compher C. "Clinical Outcomes Related to Protein Delivery in a Critically Ill Population: A Multicenter, Multinational Observation Study." *JPEN J Parenter Enteral Nutr*. 2016;40(1):45-51. DOI: [10.1177/0148607115583675](https://doi.org/10.1177/0148607115583675)

[^8]: Parry SM, El-Ansary D, Cartwright MS, et al. "Ultrasonography in the intensive care setting can be used to detect changes in the quality and quantity of muscle and is related to muscle strength and function." *J Crit Care*. 2015;30(5):1151.e9-1151.e14. DOI: [10.1016/j.jcrc.2015.05.024](https://doi.org/10.1016/j.jcrc.2015.05.024)

[^9]: Prado CM, Lieffers JR, McCargar LJ, et al. "Prevalence and clinical implications of sarcopenic obesity in patients with solid tumours of the respiratory and gastrointestinal tracts: a population-based study." *Lancet Oncol*. 2008;9(7):629-635. DOI: [10.1016/S1470-2045(08)70153-0](https://doi.org/10.1016/S1470-2045(08)70153-0)

[^10]: Thibault R, Makhlouf AM, Mulliez A, et al. "Fat-free mass at admission predicts 28-day mortality in intensive care unit patients: the international prospective observational study Phase Angle Project." *Intensive Care Med*. 2016;42(9):1445-1453. DOI: [10.1007/s00134-016-4468-3](https://doi.org/10.1007/s00134-016-4468-3)

[^11]: Oshima T, Berger MM, De Waele E, et al. "Indirect calorimetry in nutritional therapy. A position paper by the ICALIC study group." *Clin Nutr*. 2017;36(3):651-662. DOI: [10.1016/j.clnu.2016.06.010](https://doi.org/10.1016/j.clnu.2016.06.010)

[^12]: Frankenfield DC, Coleman A, Alam S, Cooney RN. "Analysis of estimation methods for resting metabolic rate in critically ill adults." *JPEN J Parenter Enteral Nutr*. 2009;33(1):27-36. DOI: [10.1177/0148607108322399](https://doi.org/10.1177/0148607108322399)

[^13]: Rice TW, Wheeler AP, Thompson BT, et al. "Initial trophic vs full enteral feeding in patients with acute lung injury: the EDEN randomized trial." *JAMA*. 2012;307(8):795-803. DOI: [10.1001/jama.2012.137](https://doi.org/10.1001/jama.2012.137)

[^14]: Arabi YM, Aldawood AS, Haddad SH, et al. "Permissive Underfeeding or Standard Enteral Feeding in Critically Ill Adults." *N Engl J Med*. 2015;372(25):2398-2408. DOI: [10.1056/NEJMoa1502826](https://doi.org/10.1056/NEJMoa1502826)
