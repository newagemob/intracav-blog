+++
title = "Transfusion in Critical Care — Part 3: Massive Transfusion & Hemorrhage Management"
description = "Massive transfusion protocol activation, fixed-ratio transfusion (1:1:1 per PROPPR), TEG/ROTEM viscoelastic testing and interpretation, damage control resuscitation, TXA (CRASH-2), calcium replacement, permissive hypotension, and hemorrhage management in trauma, obstetric, and GI bleeding."
date = 2026-03-15T00:00:00-05:00
lastmod = 2026-03-15T00:00:00-05:00
draft = false
weight = 3
source_org = "icu_transfusion"
guideline_set = "icu_transfusion_guideline_2026"
departments = ["icu"]
category = ["guidelines", "icu", "critical-care", "transfusion"]
audience = "clinician"
content_type = "guidelines"
aliases = ["/guidelines/icu/transfusion-critical-care/part-3-massive-transfusion-hemorrhage/"]
+++

## 1. Definition and Scope

### 1.1 Definitions of Massive Transfusion

| Definition | Criteria | Notes |
|---|---|---|
| **Classic definition** | ≥ 10 units pRBC in 24 hours | Most commonly cited; identifies patients retrospectively |
| **Alternative (time-sensitive)** | ≥ 4 units pRBC in 1 hour with ongoing bleeding anticipated | More clinically useful for prospective MTP activation |
| **Critical administration threshold (CAT)** | ≥ 3 units pRBC in 1 hour | Used in some trauma systems as an early activation trigger |
| **Replacement of entire blood volume** | Replacement of ≥ 1 blood volume (approximately 70 mL/kg) in 24 hours | Physiologic definition |
| **Pediatric definition** | ≥ 40 mL/kg of all blood products in 24 hours, or replacement of > 50% blood volume in 3 hours | Weight-based for children |

### 1.2 Epidemiology

- Massive transfusion is required in approximately 3–5% of civilian trauma admissions and 8–10% of military trauma casualties
- Uncontrolled hemorrhage accounts for 30–40% of trauma deaths and is the leading preventable cause of death after injury
- Non-trauma causes of massive hemorrhage include obstetric hemorrhage, gastrointestinal bleeding, ruptured aortic aneurysm, and intraoperative/postoperative surgical bleeding

---

## 2. Massive Transfusion Protocol (MTP) Activation

### 2.1 Activation Criteria

The MTP should be activated based on clinical assessment of hemorrhage severity, not laboratory values (which lag behind the clinical picture in acute hemorrhage). Validated scoring systems can assist with the decision to activate.[^1]

#### Assessment of Blood Consumption (ABC) Score

| Component | Criteria | Points |
|---|---|---|
| **Penetrating mechanism** | Yes | 1 |
| **Systolic BP in ED** | ≤ 90 mmHg | 1 |
| **Heart rate in ED** | ≥ 120 bpm | 1 |
| **Positive FAST exam** | Free fluid on bedside ultrasound | 1 |

**Interpretation:** ABC Score ≥ 2 predicts need for massive transfusion with sensitivity ~75% and specificity ~85%.[^1]

#### Shock Index

| Parameter | Definition | Interpretation |
|---|---|---|
| **Shock Index (SI)** | Heart Rate ÷ Systolic Blood Pressure | Normal: 0.5–0.7 |
| | | SI > 0.9: Suggests significant hemorrhage |
| | | SI > 1.0: Strongly associated with need for massive transfusion |
| | | SI > 1.4: Predictive of massive transfusion and high mortality |

#### Additional Clinical Triggers for MTP Activation

- Hemodynamic instability (SBP < 90 mmHg) with suspected hemorrhagic etiology that is refractory to initial crystalloid bolus
- Estimated blood loss > 1,500 mL (Class III hemorrhage)
- Clinical gestalt of the trauma team leader or attending physician
- Ongoing hemorrhage requiring surgical or interventional radiology control

### 2.2 MTP Component Delivery — Fixed-Ratio Strategy

The landmark Pragmatic Randomized Optimal Platelet and Plasma Ratios (PROPPR) trial established the evidence base for balanced-ratio massive transfusion.[^2]

#### PROPPR Trial Summary

| Parameter | 1:1:1 Group | 1:1:2 Group |
|---|---|---|
| **Ratio** (Plasma : Platelets : RBC) | 1 unit plasma : 1 dose platelets : 1 unit RBC | 1 unit plasma : 1 dose platelets : 2 units RBC |
| **24-hour mortality** | 12.7% | 17.0% (p = 0.12) |
| **30-day mortality** | 22.4% | 26.1% (p = 0.26) |
| **Hemostasis achieved at 24 hours** | **86%** | **78%** (p = 0.006) |
| **Exsanguination within 24 hours** | 9.2% | 14.6% (p = 0.03) |

**Key findings:** The 1:1:1 ratio resulted in significantly more patients achieving hemostasis and fewer deaths due to exsanguination at 24 hours. While 24-hour and 30-day all-cause mortality differences did not reach statistical significance, the trend favored 1:1:1. There was no increase in complications (ARDS, VTE, sepsis) with higher plasma and platelet ratios.[^2]

#### Standard MTP Pack Contents

Most institutions deliver blood products in standardized MTP packs ("coolers") at predefined intervals. The following represents a common MTP delivery structure:

| MTP Pack | Contents | Notes |
|---|---|---|
| **Pack 1 (Immediate)** | 6 units pRBC (uncrossmatched O-neg or O-pos) + 4 units thawed plasma (AB or type-specific if available) | Issued immediately upon MTP activation; some centers include TXA with first pack |
| **Pack 2 (15–30 min)** | 6 units pRBC + 4 units plasma + 1 dose apheresis platelets | Type-specific blood once available |
| **Pack 3 and subsequent** | 6 units pRBC + 4 units plasma + 1 dose platelets + 10 units cryoprecipitate | Continue until MTP deactivated; adjust based on labs and POC testing |

**Approximate ratio:** This delivers components in approximately a **1:1:1 ratio** by therapeutic dose (not by volume):
- 6 units RBC ≈ 1,800 mL
- 4 units plasma ≈ 800–1,000 mL
- 1 dose platelets ≈ 250–300 mL
- 10 units cryoprecipitate ≈ 100–150 mL

### 2.3 MTP Laboratory Monitoring

During active massive transfusion, laboratory values should be obtained at defined intervals to guide ongoing component therapy:

| Test | Frequency During MTP | Target |
|---|---|---|
| **CBC (hemoglobin, platelets)** | Every 30–60 minutes (or after every MTP pack) | Hb > 7 g/dL; Platelets > 50,000/μL (> 100,000/μL in TBI) |
| **PT/INR** | Every 30–60 minutes | INR < 1.5 |
| **Fibrinogen** | Every 30–60 minutes | > 150–200 mg/dL |
| **Ionized calcium** | Every 30–60 minutes | ≥ 1.1 mmol/L (4.4 mg/dL) |
| **Arterial blood gas** (pH, base deficit, lactate) | Every 30–60 minutes | pH > 7.2; Base deficit < −6; Lactate trending down |
| **TEG/ROTEM** (if available) | At MTP activation and every 30–60 minutes | See Section 3 for interpretation |

---

## 3. Point-of-Care Viscoelastic Testing — TEG and ROTEM

Thromboelastography (TEG) and rotational thromboelastometry (ROTEM) are point-of-care (POC) viscoelastic hemostatic assays that provide a real-time, comprehensive assessment of the entire coagulation cascade — from initial clot formation through fibrinolysis — in whole blood. These tests enable goal-directed transfusion therapy, reducing empiric blood product administration and improving patient outcomes in hemorrhage management.[^3] [^4]

### 3.1 TEG and ROTEM — Parameter Comparison

| Property Measured | TEG Parameter | ROTEM Parameter | Normal Range (TEG) | Normal Range (ROTEM) | Clinical Interpretation |
|---|---|---|---|---|---|
| **Time to initial clot formation** (coagulation factor activity) | R (Reaction time) | CT (Clotting time) | 5–10 min | EXTEM CT: 38–79 s; INTEM CT: 100–240 s | Prolonged → Factor deficiency or anticoagulant effect → Give **FFP/plasma** or **PCC** |
| **Clot kinetics** (fibrinogen and platelet interaction, initial clot strengthening) | K (Kinetics time) | CFT (Clot formation time) | 1–3 min | EXTEM CFT: 34–159 s | Prolonged → Low fibrinogen or platelet dysfunction → Give **cryoprecipitate** or **platelets** |
| **Rate of clot strengthening** | α-angle (Alpha angle) | α-angle | 53–72° | EXTEM α: 63–83° | Decreased → Low fibrinogen or platelet dysfunction → Give **cryoprecipitate** or **platelets** |
| **Maximum clot strength** (platelet function and fibrinogen) | MA (Maximum amplitude) | MCF (Maximum clot firmness) | 50–70 mm | EXTEM MCF: 50–72 mm | Decreased → Platelet dysfunction or low fibrinogen → Give **platelets** (if FIBTEM MCF normal, platelet dysfunction is cause) |
| **Fibrinogen contribution to clot strength** | Functional Fibrinogen (FF) – TEG-FF MA | FIBTEM MCF (A5 or A10 for rapid assessment) | FF MA: 15–32 mm | FIBTEM MCF: 9–25 mm; FIBTEM A5: 6–21 mm | Decreased → Fibrinogen deficiency → Give **cryoprecipitate** or **fibrinogen concentrate** |
| **Clot stability / Fibrinolysis** | LY30 (Lysis at 30 min) | ML (Maximum lysis); LI30 (Lysis index at 30 min) | LY30: 0–7.5% | EXTEM ML < 15%; EXTEM LI30 > 94% | Increased lysis → Hyperfibrinolysis → Give **TXA** |

### 3.2 ROTEM-Specific Assays

| ROTEM Assay | Activator | What It Measures | Clinical Use |
|---|---|---|---|
| **EXTEM** | Tissue factor (extrinsic pathway) | Overall extrinsic coagulation pathway; clot formation and firmness | Screening test; prolonged CT → factor deficiency; low MCF → platelet or fibrinogen problem |
| **INTEM** | Ellagic acid (intrinsic pathway) | Intrinsic pathway activation | Evaluates heparin effect (compare with HEPTEM) |
| **FIBTEM** | Tissue factor + cytochalasin D (platelet inhibitor) | Fibrinogen contribution to clot strength (isolates fibrinogen by inhibiting platelets) | Low FIBTEM MCF/A5 → fibrinogen deficiency → give cryoprecipitate/fibrinogen concentrate |
| **HEPTEM** | Ellagic acid + heparinase | Intrinsic pathway with heparin neutralization | Compare with INTEM: if INTEM CT prolonged but HEPTEM CT normal → heparin effect confirmed; give protamine |
| **APTEM** | Tissue factor + aprotinin (antifibrinolytic) | Extrinsic pathway with fibrinolysis inhibition | Compare with EXTEM: if EXTEM shows lysis but APTEM does not → hyperfibrinolysis confirmed; give TXA |

### 3.3 TEG/ROTEM-Guided Transfusion Algorithm

The following algorithm provides a systematic approach to goal-directed transfusion based on viscoelastic testing results:[^3] [^4]

**Step 1 — Is there hyperfibrinolysis?**
- TEG: LY30 > 7.5% → **Give TXA** (1 g IV bolus)
- ROTEM: EXTEM ML > 15% or EXTEM LI30 < 94% → **Give TXA** (1 g IV bolus)
- Confirm with APTEM (ROTEM): if APTEM normalizes compared to EXTEM → fibrinolysis confirmed

**Step 2 — Is clot initiation adequate? (Coagulation factor assessment)**
- TEG: R > 10 min → **Give FFP** 10–15 mL/kg (or PCC if warfarin-related)
- ROTEM: EXTEM CT > 79 s → **Give FFP** 10–15 mL/kg
- ROTEM: INTEM CT prolonged but HEPTEM CT normal → **Give protamine** (heparin effect)

**Step 3 — Is fibrinogen adequate?**
- TEG: FF MA < 15 mm → **Give cryoprecipitate** 10 units or **fibrinogen concentrate** 2–4 g
- ROTEM: FIBTEM A5 < 6 mm or FIBTEM MCF < 9 mm → **Give cryoprecipitate** 10 units or **fibrinogen concentrate** 2–4 g
- Target: FIBTEM A5 ≥ 8–12 mm (some cardiac surgery protocols use higher targets)

**Step 4 — Is platelet function/contribution adequate?**
- TEG: MA < 50 mm (with adequate FF) → **Give platelets** 1 apheresis dose
- ROTEM: EXTEM MCF < 50 mm (with FIBTEM MCF ≥ 9 mm) → **Give platelets** 1 apheresis dose
- The difference between EXTEM MCF and FIBTEM MCF reflects the platelet contribution to clot strength

**Step 5 — Reassess**
- Repeat TEG/ROTEM after intervention (typically 15–30 minutes)
- Continue algorithm until hemostasis achieved or MTP deactivated

### 3.4 Advantages of POC Viscoelastic Testing Over Conventional Labs

| Feature | TEG/ROTEM | Conventional Labs (PT/INR, aPTT, Fibrinogen, Platelet Count) |
|---|---|---|
| **Turnaround time** | 10–20 minutes (some parameters available at 5 min) | 30–60 minutes |
| **Whole blood testing** | Yes — reflects in vivo hemostasis more accurately | No — performed on plasma (PT, aPTT) or whole blood (platelet count) |
| **Detects fibrinolysis** | Yes — LY30 (TEG), ML/LI30 (ROTEM) | No — standard labs do not detect fibrinolysis |
| **Identifies platelet dysfunction** | Yes — MA/MCF reflects functional platelet contribution | No — platelet count does not assess function |
| **Identifies fibrinogen deficiency specifically** | Yes — FF (TEG), FIBTEM (ROTEM) isolate fibrinogen contribution | Partially — Clauss fibrinogen assay provides a quantitative level but not functional contribution |
| **Identifies heparin effect** | Yes — HEPTEM vs INTEM comparison (ROTEM) | Partially — aPTT prolongation suggests heparin but not specific |
| **Goal-directed transfusion** | Enables algorithm-driven component therapy | Empiric transfusion based on lab values |

---

## 4. Damage Control Resuscitation (DCR)

Damage control resuscitation is an integrated approach to the management of hemorrhagic shock that combines hemostatic resuscitation, permissive hypotension, avoidance of crystalloid-mediated hemodilution, and early definitive hemorrhage control. DCR addresses the "lethal triad" of trauma — hypothermia, acidosis, and coagulopathy — which together create a self-reinforcing cycle of worsening hemorrhage.[^5]

### 4.1 Principles of Damage Control Resuscitation

| Principle | Implementation | Rationale |
|---|---|---|
| **Permissive hypotension** | Target SBP 80–90 mmHg (MAP 50–60 mmHg) until surgical hemorrhage control achieved | Avoids disruption of nascent clot formation by excessive blood pressure; reduces ongoing hemorrhage; demonstrated mortality benefit in penetrating trauma |
| **Limit crystalloid** | Minimize crystalloid infusion (avoid > 1–1.5 L in the first hour); use blood products for volume resuscitation | Crystalloid causes dilutional coagulopathy, hypothermia, and acidosis; contributes to "resuscitation injury" |
| **Balanced-ratio transfusion** | 1:1:1 ratio (RBC : Plasma : Platelets) per PROPPR trial | Prevents dilutional coagulopathy; replaces consumed factors and platelets in proportion to blood loss |
| **Early TXA** | Tranexamic acid 1 g IV bolus + 1 g IV over 8 hours; administer within 3 hours of injury | Reduces mortality from hemorrhage by 15–20% (CRASH-2); most effective when given early; DO NOT give > 3 hours post-injury |
| **Calcium replacement** | Monitor ionized calcium every 30–60 minutes; replace to maintain iCa ≥ 1.1 mmol/L | Citrate in blood products chelates calcium; hypocalcemia impairs coagulation cascade and cardiac contractility |
| **Temperature management** | Active warming: forced-air warming blankets, fluid warmers, increase ambient temperature | Hypothermia impairs coagulation enzyme function and platelet aggregation; coagulation is essentially non-functional below 34°C |
| **Damage control surgery** | Abbreviated initial surgery focused on hemorrhage control and contamination containment → ICU resuscitation → planned return to OR | Avoids prolonged initial surgery in physiologically depleted patients |

### 4.2 Permissive Hypotension — Detailed Guidance

| Population | Target SBP | Notes |
|---|---|---|
| **Penetrating trauma** | 60–70 mmHg (or palpable radial pulse) | Strongest evidence for permissive hypotension; Bickell et al. demonstrated mortality benefit[^6] |
| **Blunt trauma** (without TBI) | 80–90 mmHg | Less robust evidence than penetrating trauma; some guidelines recommend conventional targets |
| **Traumatic brain injury** | **SBP ≥ 100–110 mmHg** (avoid hypotension) | Permissive hypotension is **contraindicated** in TBI — even a single episode of SBP < 90 mmHg doubles mortality in TBI; maintain cerebral perfusion pressure (CPP) ≥ 60 mmHg |
| **Spinal cord injury** | MAP ≥ 85 mmHg | Maintain spinal cord perfusion pressure |
| **Elderly (age > 65)** | Consider higher targets (SBP ≥ 100 mmHg) | Reduced physiologic reserve; chronic hypertension shifts autoregulation curve |

### 4.3 Tranexamic Acid (TXA) — CRASH-2 Trial and Clinical Application

#### CRASH-2 Trial Summary[^7]

| Parameter | Value |
|---|---|
| **Design** | Multicenter (274 hospitals, 40 countries), randomized, double-blind, placebo-controlled |
| **Population** | 20,211 adult trauma patients with significant hemorrhage or at risk of significant hemorrhage, within 8 hours of injury |
| **Intervention** | TXA 1 g IV bolus over 10 min + 1 g IV infusion over 8 hours vs placebo |
| **Primary outcome** | All-cause 28-day mortality |
| **Results — All-cause mortality** | 14.5% (TXA) vs 16.0% (placebo); RR 0.91 (95% CI, 0.85–0.97; p = 0.0035) |
| **Results — Death due to bleeding** | 4.9% (TXA) vs 5.7% (placebo); RR 0.85 (95% CI, 0.76–0.96; p = 0.0077) |
| **Time-dependent effect** | Treatment within 1 hour: RR 0.68; within 1–3 hours: RR 0.79; **after 3 hours: RR 1.44** (increased mortality — harm) |
| **Thrombotic events** | No increase in VTE, PE, MI, or stroke with TXA |
| **Seizures** | Not significantly increased in CRASH-2 (but high-dose TXA in cardiac surgery has been associated with seizures) |

#### TXA Dosing Protocol

| Indication | Dose | Timing | Notes |
|---|---|---|---|
| **Trauma with significant hemorrhage** | **1 g IV bolus** over 10 min + **1 g IV infusion** over 8 hours | Within **3 hours** of injury; ideally within 1 hour | Do NOT administer > 3 hours post-injury (associated with increased mortality) |
| **Massive transfusion (non-trauma)** | 1 g IV bolus + 1 g over 8 hours | As early as possible | Extrapolated from CRASH-2; less robust evidence in non-trauma massive hemorrhage |
| **Postpartum hemorrhage** | **1 g IV bolus** over 10 min; second dose of 1 g if bleeding continues after 30 min or recurs within 24 hours | Within **3 hours** of delivery | WOMAN trial: reduced death due to bleeding (1.5% vs 1.9%; p = 0.045)[^8] |
| **Cardiac surgery (prophylactic)** | Loading dose: 10–30 mg/kg IV before incision; Maintenance: 1–16 mg/kg/h intraoperatively; Additional dose into CPB circuit | Before incision | Reduces bleeding and transfusion requirements by 30–40%; seizure risk increases at higher doses (> 100 mg/kg cumulative) |
| **Orthopedic surgery** | 1 g IV before incision; optional second 1 g dose 3–6 hours later | Before tourniquet release or incision | Well-established benefit in hip and knee arthroplasty |

### 4.4 Calcium Replacement During Massive Transfusion

Citrate anticoagulant in stored blood products binds ionized calcium. During massive transfusion, the citrate load overwhelms hepatic metabolism, causing progressive hypocalcemia. Ionized calcium is essential for coagulation factor enzymatic activity and cardiac contractility.[^9]

| Parameter | Guideline |
|---|---|
| **Monitoring frequency** | Every 30–60 minutes during MTP (or with each ABG) |
| **Target ionized calcium** | **≥ 1.1 mmol/L (4.4 mg/dL)** |
| **Critical threshold** | < 0.9 mmol/L — associated with cardiovascular collapse and coagulopathy |
| **Replacement — Calcium chloride (CaCl₂ 10%)** | **1 g (10 mL of 10% solution) IV** over 10 min via central line; may repeat every 15–30 min as needed |
| **Replacement — Calcium gluconate (10%)** | **3 g (30 mL of 10% solution) IV** over 10–20 min; may give peripherally (less caustic) |
| **Calcium chloride vs gluconate** | CaCl₂ provides 3× the elemental calcium per gram (272 mg vs 93 mg); CaCl₂ preferred in emergencies but requires central line (vesicant); calcium gluconate is safer peripherally |
| **Rate of citrate metabolism** | Healthy liver metabolizes ~3 g citrate per 5 minutes; impaired in liver disease, hypothermia, and shock |

**Clinical pearl:** A practical approach is to administer **1 g calcium chloride IV for every 4 units of blood products** transfused, with adjustments based on ionized calcium levels.

### 4.5 Temperature Management — Prevention of Hypothermia

| Intervention | Details |
|---|---|
| **Fluid warmers** | All IV fluids and blood products should be administered through inline fluid warmers set to 37–42°C during MTP |
| **Forced-air warming** | Apply forced-air warming blankets (e.g., Bair Hugger) to all exposed body surfaces |
| **Increase ambient temperature** | Increase OR/trauma bay/ICU room temperature to ≥ 24°C (ideally 28°C) |
| **Remove wet drapes/clothing** | Wet surfaces promote evaporative heat loss |
| **Warm body cavity lavage** | Warmed saline (38–40°C) for thoracic or peritoneal lavage during damage control surgery |
| **Target temperature** | Maintain core temperature ≥ **36°C**; temperatures < 34°C are associated with clinically significant coagulopathy |

---

## 5. Hemorrhage Management by Clinical Context

### 5.1 Trauma Hemorrhage

| Phase | Actions |
|---|---|
| **Prehospital** | Apply direct pressure and tourniquets; minimize crystalloid (may give 250 mL boluses to maintain radial pulse); administer TXA if available (1 g IV bolus); keep patient warm |
| **Emergency department** | Activate MTP if ABC score ≥ 2 or clinical judgment; type and crossmatch; TXA 1 g IV bolus (+ 1 g over 8h); initiate massive transfusion per protocol; permissive hypotension (SBP 80–90 unless TBI); FAST ultrasound; send labs including TEG/ROTEM |
| **Hemorrhage control** | Damage control surgery (abbreviated laparotomy/thoracotomy for hemorrhage and contamination control); interventional radiology for pelvic hemorrhage, solid organ injury, vascular injury; pelvic binder for unstable pelvic fracture |
| **ICU phase** | Continue resuscitation to physiologic endpoints (lactate clearance, base deficit normalization, pH > 7.35); transition from empiric to goal-directed transfusion (lab/TEG/ROTEM-guided); rewarm to normothermia; correct coagulopathy; plan definitive repair at 24–48 hours |

### 5.2 Obstetric Hemorrhage

Postpartum hemorrhage (PPH) is defined as blood loss ≥ 1,000 mL or blood loss accompanied by signs of hypovolemia within 24 hours of delivery.[^8]

| Step | Actions |
|---|---|
| **1. Recognize and quantify** | Quantitative blood loss measurement (QBL) — weigh blood-soaked materials; cumulative QBL > 500 mL (vaginal) or > 1,000 mL (cesarean) → initiate PPH protocol |
| **2. Uterotonic agents** | Oxytocin 40 units in 1 L NS IV; methylergonovine 0.2 mg IM (avoid in hypertension); carboprost (15-methyl PGF₂α) 250 μg IM q15–90 min (avoid in asthma); misoprostol 600–1,000 μg sublingual/rectal |
| **3. TXA** | 1 g IV over 10 min; second 1 g dose if bleeding continues after 30 min (WOMAN trial evidence)[^8] |
| **4. Transfusion** | Activate MTP for ongoing hemorrhage with instability; fixed-ratio transfusion (1:1:1); monitor fibrinogen closely — fibrinogen < 200 mg/dL is a strong predictor of severe PPH; replace aggressively with cryoprecipitate or fibrinogen concentrate |
| **5. Procedures** | Intrauterine balloon tamponade (Bakri balloon); uterine compression sutures (B-Lynch); uterine artery embolization (IR); hysterectomy as last resort |
| **6. Monitor** | Serial CBC, coagulation studies, fibrinogen q30–60 min; ionized calcium; TEG/ROTEM if available |

### 5.3 Gastrointestinal Hemorrhage

| Principle | Recommendation |
|---|---|
| **Transfusion threshold** | Hb ≤ 7 g/dL for hemodynamically stable patients (Villanueva et al.)[^10] |
| **Active hemorrhagic shock** | Do not wait for Hb threshold; resuscitate with MTP and pursue emergent endoscopy or surgery |
| **Restrictive vs liberal evidence** | The Villanueva trial demonstrated that a restrictive threshold (Hb < 7 g/dL) resulted in significantly lower 45-day mortality (5% vs 9%) and lower rebleeding rates compared to a liberal threshold (Hb < 9 g/dL) in acute upper GI bleeding |
| **Variceal bleeding** | Restrictive transfusion is particularly important — overtransfusion increases portal pressures and may worsen variceal bleeding; target Hb 7–8 g/dL |
| **Coagulopathy correction** | In patients on anticoagulants: reverse anticoagulation per agent-specific protocols; FFP or PCC for warfarin; idarucizumab for dabigatran; andexanet alfa or PCC for factor Xa inhibitors |
| **Platelet transfusion** | Transfuse if platelet count < 50,000/μL with active bleeding |
| **Proton pump inhibitor** | High-dose PPI (esomeprazole or pantoprazole 80 mg IV bolus + 8 mg/h infusion) for suspected peptic ulcer hemorrhage (post-endoscopic confirmation) |

---

## 6. MTP Deactivation Criteria

The MTP should be deactivated when the following criteria are met:

| Criterion | Details |
|---|---|
| **Hemorrhage controlled** | Surgical, endoscopic, or interventional hemorrhage control achieved; no ongoing active bleeding |
| **Hemodynamic stability restored** | SBP > 100 mmHg (or patient's baseline); MAP > 65 mmHg without escalating vasopressor doses; heart rate < 100 bpm |
| **Metabolic parameters improving** | Lactate trending downward; base deficit improving; pH > 7.25 and trending toward normal |
| **Laboratory values stabilizing** | Hemoglobin stable without ongoing transfusion; platelets > 50,000/μL; INR < 1.5; Fibrinogen > 150 mg/dL; ionized calcium ≥ 1.1 mmol/L |
| **Clinical assessment** | Attending physician/trauma team leader determines that massive hemorrhage phase has concluded |

**Process:** Communicate MTP deactivation to the blood bank clearly and promptly. Return all unused blood products to the blood bank. Transition to standard (non-MTP) ordering for any ongoing transfusion needs.

---

## References

[^1]: Nunez TC, Voskresensky IV, Dossett LA, et al. "Early Prediction of Massive Transfusion in Trauma: Simple as ABC (Assessment of Blood Consumption)?" *J Trauma*. 2009;66(2):346-352. DOI: [10.1097/TA.0b013e3181961c35](https://doi.org/10.1097/TA.0b013e3181961c35)

[^2]: Holcomb JB, Tilley BC, Baraniuk S, et al. "Transfusion of Plasma, Platelets, and Red Blood Cells in a 1:1:1 vs a 1:1:2 Ratio and Mortality in Patients with Severe Trauma: The PROPPR Randomized Clinical Trial." *JAMA*. 2015;313(5):471-482. DOI: [10.1001/jama.2015.12](https://doi.org/10.1001/jama.2015.12)

[^3]: Gonzalez E, Moore EE, Moore HB, et al. "Goal-Directed Hemostatic Resuscitation of Trauma-Induced Coagulopathy: A Pragmatic Randomized Clinical Trial Comparing a Viscoelastic Assay to Conventional Coagulation Assays." *Ann Surg*. 2016;263(6):1051-1059. DOI: [10.1097/SLA.0000000000001608](https://doi.org/10.1097/SLA.0000000000001608)

[^4]: Whiting P, Al M, Westwood M, et al. "Viscoelastic Point-of-Care Testing to Assist with the Diagnosis, Management and Monitoring of Haemostasis: A Systematic Review and Cost-Effectiveness Analysis." *Health Technol Assess*. 2015;19(58):1-228. DOI: [10.3310/hta19580](https://doi.org/10.3310/hta19580)

[^5]: Holcomb JB, Jenkins D, Rhee P, et al. "Damage Control Resuscitation: Directly Addressing the Early Coagulopathy of Trauma." *J Trauma*. 2007;62(2):307-310. DOI: [10.1097/TA.0b013e3180324124](https://doi.org/10.1097/TA.0b013e3180324124)

[^6]: Bickell WH, Wall MJ Jr, Pepe PE, et al. "Immediate versus Delayed Fluid Resuscitation for Hypotensive Patients with Penetrating Torso Injuries." *N Engl J Med*. 1994;331(17):1105-1109. DOI: [10.1056/NEJM199410273311701](https://doi.org/10.1056/NEJM199410273311701)

[^7]: CRASH-2 trial collaborators. "Effects of Tranexamic Acid on Death, Vascular Occlusive Events and Blood Transfusion in Trauma Patients with Significant Haemorrhage (CRASH-2): A Randomised, Placebo-Controlled Trial." *Lancet*. 2010;376(9734):23-32. DOI: [10.1016/S0140-6736(10)60835-5](https://doi.org/10.1016/S0140-6736(10)60835-5)

[^8]: WOMAN Trial Collaborators. "Effect of Early Tranexamic Acid Administration on Mortality, Hysterectomy, and Other Morbidities in Women with Post-Partum Haemorrhage (WOMAN): An International, Randomised, Double-Blind, Placebo-Controlled Trial." *Lancet*. 2017;389(10084):2105-2116. DOI: [10.1016/S0140-6736(17)30638-4](https://doi.org/10.1016/S0140-6736(17)30638-4)

[^9]: Ho KM, Leonard AD. "Concentration-Dependent Effect of Hypocalcaemia on Mortality of Patients with Critical Bleeding Requiring Massive Transfusion: A Cohort Study." *Anaesth Intensive Care*. 2011;39(1):46-54. DOI: [10.1177/0310057X1103900107](https://doi.org/10.1177/0310057X1103900107)

[^10]: Villanueva C, Colomo A, Bosch A, et al. "Transfusion Strategies for Acute Upper Gastrointestinal Bleeding." *N Engl J Med*. 2013;368(1):11-21. DOI: [10.1056/NEJMoa1211801](https://doi.org/10.1056/NEJMoa1211801)
