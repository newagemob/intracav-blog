+++
title = "Acute Kidney Injury — Part 4: Renal Replacement Therapy — Modalities, Timing & Prescription"
description = "RRT modalities comparison (IHD, CRRT, SLED/PIRRT), timing evidence (STARRT-AKI, AKIKI, IDEAL-ICU, ELAIN), CRRT prescription and dose, citrate and heparin anticoagulation protocols, vascular access, troubleshooting, and discontinuation criteria."
date = 2026-03-15T00:00:00-05:00
lastmod = 2026-03-15T00:00:00-05:00
draft = false
weight = 4
source_org = "icu_aki"
guideline_set = "icu_aki_guideline_2026"
departments = ["icu", "nephrology"]
category = ["guidelines", "icu", "nephrology", "critical-care", "AKI", "renal-replacement-therapy"]
audience = "clinician"
content_type = "guidelines"
aliases = ["/guidelines/icu/acute-kidney-injury-rrt/part-4-renal-replacement-therapy/"]
+++

## 1. Renal Replacement Therapy Modalities

### 1.1 Overview

Three broad categories of RRT are used in the ICU setting: intermittent hemodialysis (IHD), continuous renal replacement therapy (CRRT), and hybrid therapies (SLED/PIRRT). The choice of modality is determined by hemodynamic stability, the primary indication for RRT, institutional expertise, and resource availability.[^1] [^2]

### 1.2 CRRT Submodes

| Submode | Abbreviation | Mechanism | Solute Removal | Fluid Used |
|---|---|---|---|---|
| **Continuous Venovenous Hemofiltration** | CVVH | Convection (ultrafiltration through semi-permeable membrane; solute dragged with solvent) | Small and middle molecules effectively removed | Replacement fluid (pre- and/or post-filter) |
| **Continuous Venovenous Hemodialysis** | CVVHD | Diffusion (solute moves down concentration gradient across membrane) | Primarily small molecules (urea, creatinine, potassium) | Dialysate fluid (countercurrent flow) |
| **Continuous Venovenous Hemodiafiltration** | CVVHDF | Combined convection + diffusion | Best overall solute clearance (small and middle molecules) | Both replacement fluid AND dialysate |
| **Slow Continuous Ultrafiltration** | SCUF | Ultrafiltration only (fluid removal without significant solute clearance) | Minimal solute removal | None — isolated fluid removal |

### 1.3 Comprehensive Modality Comparison

| Feature | IHD | CRRT | SLED / PIRRT |
|---|---|---|---|
| **Duration** | 3-5 hours per session | 24 hours/day (continuous) | 6-12 hours per session |
| **Blood flow rate** | 200-400 mL/min | 100-250 mL/min | 100-300 mL/min |
| **Dialysate flow rate** | 500-800 mL/min | 1000-2500 mL/hr (17-42 mL/min) | 100-300 mL/min |
| **Ultrafiltration rate** | 1-4 L over 3-5 hours | 100-300 mL/hr (up to 2-3 L/day net) | Variable; typically 2-4 L over session |
| **Hemodynamic tolerance** | Poor — rapid fluid and solute shifts | **Best** — gradual, continuous removal | Intermediate — better than IHD |
| **Solute clearance** | Most efficient per unit time (high diffusive clearance) | Moderate, but continuous → equivalent total daily clearance | Intermediate |
| **Anticoagulation** | Systemic heparin or none | Regional citrate (preferred), systemic heparin, or none | Regional citrate or systemic heparin |
| **Nursing intensity** | Low (dialysis nurse present during session) | **High** — requires continuous ICU nursing attention; frequent bag changes, monitoring | Moderate |
| **Cost** | Lower (uses standard HD machine) | Higher (specialized machine, disposables, replacement fluid) | Intermediate (uses modified IHD machine) |
| **Patient mobility** | Mobile between sessions | **Immobilized** during therapy | Mobile between sessions |
| **Drug clearance** | High intermittent clearance → dose after session | Moderate continuous clearance → steady-state dosing | Intermediate |
| **Ideal patient** | Hemodynamically stable; outpatient transition; hyperkalemia emergency | Hemodynamically unstable; cerebral edema; fluid overload with instability; liver failure | Resource-limited settings; when IHD too aggressive but CRRT unavailable or impractical |
| **Intracranial pressure effect** | Risk of ICP elevation (rapid osmolality shifts — dialysis disequilibrium) | Minimal ICP effect (gradual solute clearance) | Intermediate |

### 1.4 SLED / PIRRT — Hybrid Therapy

Sustained low-efficiency dialysis (SLED), also known as prolonged intermittent renal replacement therapy (PIRRT), uses a conventional IHD machine at reduced blood flow and dialysate flow rates for an extended duration (typically 6-12 hours). It offers a practical compromise between IHD and CRRT:[^3]

- Provides hemodynamic stability approaching CRRT
- Uses existing IHD infrastructure (no dedicated CRRT machine required)
- Allows daily patient mobility, imaging, and procedures during the off-therapy period
- Increasingly used in resource-limited settings and as a transition from CRRT to IHD

---

## 2. Indications for RRT Initiation

### 2.1 Absolute (Emergent) Indications

The following conditions represent absolute indications for urgent RRT initiation, regardless of AKI stage or other clinical factors. These are life-threatening complications of AKI that cannot be managed with conservative measures alone:[^1] [^2]

| Indication | Details |
|---|---|
| **Refractory hyperkalemia** | Serum potassium > 6.5 mEq/L (or any level with ECG changes) not responding to medical management (insulin/dextrose, albuterol, calcium, potassium binders) |
| **Severe metabolic acidosis** | pH < 7.1 or bicarbonate < 10 mEq/L refractory to sodium bicarbonate therapy; particularly if concurrent fluid overload prevents further bicarbonate infusion |
| **Refractory fluid overload** | Pulmonary edema or severe volume overload not responding to diuretic therapy (including high-dose loop diuretics and combination therapy) |
| **Uremic complications** | Uremic encephalopathy (confusion, asterixis, seizures); uremic pericarditis (hemorrhagic — avoid heparin); uremic bleeding |
| **Dialyzable toxin/ingestion** | Methanol, ethylene glycol, lithium, salicylate, metformin (severe lactic acidosis), theophylline, valproic acid — in context of toxic levels with clinical effects |

### 2.2 Timing of RRT Initiation — Evidence from Landmark Trials

The optimal timing of RRT initiation in AKI without absolute indications has been one of the most debated questions in critical care nephrology. Four landmark randomized controlled trials have addressed this question:[^4] [^5] [^6] [^7]

#### ELAIN Trial (2016)

| Parameter | Details |
|---|---|
| **Design** | Single-center RCT; n = 231; surgical/medical ICU patients |
| **Population** | Stage 2 AKI (by creatinine) + at least one additional indication (sepsis, fluid overload, non-renal organ failure, refractory fluid overload) |
| **Early strategy** | RRT within 8 hours of Stage 2 AKI diagnosis |
| **Delayed strategy** | RRT within 12 hours of Stage 3 AKI diagnosis or absolute indication |
| **Primary outcome** | 90-day all-cause mortality: **Early 39.3% vs. Delayed 54.7% (p = 0.03)** — favoring early |
| **Secondary outcomes** | Earlier renal recovery (median 9 vs. 25 days, p < 0.001); shorter hospital LOS; no difference in RRT dependence at 90 days |
| **Key limitations** | Single-center; predominantly post-surgical population; small sample size; high crossover rate in the delayed group |
| **Interpretation** | The only major trial to show a mortality benefit for early RRT; results have not been replicated in larger, multicenter trials |

#### AKIKI Trial (2016)

| Parameter | Details |
|---|---|
| **Design** | Multicenter RCT; n = 620; 31 French ICUs |
| **Population** | Stage 3 AKI (by creatinine or urine output) + mechanical ventilation and/or vasopressor support |
| **Early strategy** | RRT initiated within 6 hours of meeting Stage 3 criteria |
| **Delayed strategy** | RRT initiated only for absolute indications (refractory hyperkalemia, metabolic acidosis, pulmonary edema, BUN > 112 mg/dL, oliguria > 72 hours) |
| **Primary outcome** | 60-day all-cause mortality: **Early 48.5% vs. Delayed 49.7% (p = 0.79)** — no difference |
| **Key secondary outcomes** | **49% of delayed group never received RRT**; catheter-related bloodstream infection higher in early group (10% vs. 5%); RRT dependence at day 60 similar |
| **Key implications** | In patients with Stage 3 AKI, a "watchful waiting" approach is safe; many patients recover renal function and never require RRT; early RRT exposes patients unnecessarily to RRT-related complications |

#### IDEAL-ICU Trial (2018)

| Parameter | Details |
|---|---|
| **Design** | Multicenter RCT; n = 488 (stopped early for futility at planned interim analysis); 29 French ICUs |
| **Population** | Septic shock + Failure-stage AKI (RIFLE criteria) |
| **Early strategy** | RRT within 12 hours of Failure-stage AKI diagnosis |
| **Delayed strategy** | RRT after 48 hours if renal recovery had not occurred, or earlier for absolute indications |
| **Primary outcome** | 90-day all-cause mortality: **Early 58% vs. Delayed 54% (p = 0.38)** — no difference; stopped early for futility |
| **Key findings** | **38% of delayed group never received RRT** (spontaneous recovery); similar ICU and hospital LOS |
| **Key implications** | In septic shock with severe AKI, a 48-hour observation period is safe; early RRT does not improve outcomes and prevents many patients from avoiding RRT altogether |

#### STARRT-AKI Trial (2020)

| Parameter | Details |
|---|---|
| **Design** | Multinational RCT; **n = 2,927** (largest trial); 168 sites across 15 countries |
| **Population** | Stage 2 or 3 AKI + at least one indication for RRT in the judgment of the treating team (but no absolute emergent indication) |
| **Early (accelerated) strategy** | RRT within 12 hours of randomization |
| **Delayed (standard) strategy** | RRT deferred unless: absolute indication (potassium > 6.0 despite medical therapy, pH < 7.20, PaO2/FiO2 < 200 with fluid overload, BUN > 112 mg/dL) or clinical judgment that further delay would be harmful |
| **Primary outcome** | 90-day all-cause mortality: **Accelerated 43.9% vs. Standard 43.7% (RR 1.00; 95% CI 0.93-1.09, p = 0.92)** — no difference |
| **Key secondary outcomes** | **61.8% of standard group received RRT** (38.2% never required RRT); accelerated group had higher rates of RRT dependence at 90 days (10.4% vs. 6.0%, RR 1.74, p < 0.001); accelerated group had more adverse events related to RRT |
| **Key implications** | **Definitive evidence against routine early RRT.** No mortality benefit and potential harm (increased RRT dependence) with accelerated strategy. A "wait-and-watch" approach, initiating RRT for clinical deterioration or absolute indications, is the evidence-based standard |

#### Summary: Timing of RRT — What the Evidence Tells Us

| Trial | Year | n | Population | Mortality Difference | Proportion of Delayed Group Avoiding RRT | Conclusion |
|---|---|---|---|---|---|---|
| **ELAIN** | 2016 | 231 | Surgical, Stage 2 | Early better (39% vs. 55%) | ~10% | Early benefit (but single-center, small) |
| **AKIKI** | 2016 | 620 | MV/vasopressors, Stage 3 | No difference (49% vs. 50%) | **49%** | Watchful waiting safe |
| **IDEAL-ICU** | 2018 | 488 | Septic shock, RIFLE-F | No difference (58% vs. 54%) | **38%** | Futility; early not beneficial |
| **STARRT-AKI** | 2020 | 2,927 | Stage 2-3, broad ICU | No difference (44% vs. 44%) | **38%** | Definitive: no early benefit; possible harm (RRT dependence) |

> **Current Recommendation:** For patients with AKI who do not have absolute/emergent indications for RRT, a **watchful waiting strategy** is recommended. RRT should be initiated when absolute indications arise or when clinical trajectory suggests inevitable need. Routine early initiation of RRT does not improve survival and may increase RRT dependence and RRT-related complications.[^2]

---

## 3. CRRT Prescription

### 3.1 Dose — Effluent Rate

The prescribed CRRT dose is measured as the effluent flow rate (the sum of dialysate, replacement fluid, and net ultrafiltration) normalized to patient body weight. Two landmark trials established the current dosing standard:[^8] [^9]

#### ATN Trial (2008)

| Parameter | Details |
|---|---|
| **Design** | Multicenter RCT (US VA/NIH); n = 1,124 |
| **Comparison** | Intensive (35 mL/kg/hr effluent for CRRT; daily IHD) vs. Less-intensive (20 mL/kg/hr effluent for CRRT; thrice-weekly IHD) |
| **Primary outcome** | 60-day all-cause mortality: Intensive 53.6% vs. Less-intensive 51.5% (p = 0.47) — **no difference** |
| **Conclusions** | Higher-intensity RRT did not improve outcomes; 20 mL/kg/hr is adequate |

#### RENAL Trial (2009)

| Parameter | Details |
|---|---|
| **Design** | Multicenter RCT (Australia/New Zealand); n = 1,508 |
| **Comparison** | Higher-intensity CRRT (40 mL/kg/hr effluent) vs. Lower-intensity (25 mL/kg/hr effluent) |
| **Primary outcome** | 90-day all-cause mortality: Higher 44.7% vs. Lower 44.7% (p = 0.99) — **no difference** |
| **Conclusions** | No benefit to effluent rates above 25 mL/kg/hr |

#### Current Dosing Recommendations

| Parameter | Recommendation | Rationale |
|---|---|---|
| **Prescribed effluent rate** | **25-30 mL/kg/hr** | Prescribed dose should be 25-30 mL/kg/hr to ensure a **delivered** dose of 20-25 mL/kg/hr (accounting for downtime due to filter changes, procedures, imaging, etc.) |
| **Delivered dose** | **≥ 20 mL/kg/hr** (minimum target) | The effectively delivered dose is typically 10-20% less than the prescribed dose due to circuit downtime |
| **Weight used** | Actual body weight (some centers use adjusted body weight for obese patients — no consensus) | Dosing based on actual weight is consistent with trial methodology |
| **Higher doses** | Not routinely recommended | No benefit in ATN or RENAL trial; may be considered in specific situations (severe sepsis, poisoning) but without strong evidence |

### 3.2 CRRT Prescription Parameters — Complete Reference

| Parameter | CVVH | CVVHD | CVVHDF | Notes |
|---|---|---|---|---|
| **Blood flow rate (Qb)** | 150-250 mL/min | 150-250 mL/min | 150-250 mL/min | Higher blood flow reduces hemoconcentration and filter clotting risk |
| **Replacement fluid rate** | 25-30 mL/kg/hr (= effluent target) | — | 10-15 mL/kg/hr (convective portion) | Pre-dilution reduces filter clotting but reduces solute clearance by ~15%; post-dilution maximizes clearance but increases clotting risk |
| **Dialysate flow rate** | — | 25-30 mL/kg/hr (= effluent target) | 10-15 mL/kg/hr (diffusive portion) | Countercurrent to blood flow |
| **Net ultrafiltration rate** | 0-300 mL/hr (based on fluid balance target) | 0-300 mL/hr | 0-300 mL/hr | Determines net fluid removal; adjusted to target fluid balance |
| **Pre-dilution fraction** | 20-33% of total replacement fluid | — | Variable | Pre-dilution improves filter life but requires higher total effluent to maintain delivered dose |
| **Temperature** | 35-37°C (fluid warmer) | 35-37°C | 35-37°C | Hypothermia is common with CRRT; adjust warmer settings; some centers allow mild hypothermia (35-36°C) |
| **Filter membrane** | AN69, polysulfone, polyethersulfone, PMMA | Same | Same | See Section 3.3 |

### 3.3 Filter (Membrane) Selection

| Membrane Type | Characteristics | Considerations |
|---|---|---|
| **Polysulfone** | Most widely used; biocompatible; good solute clearance; available in multiple surface areas | Standard choice for most CRRT applications |
| **Polyethersulfone** | Similar to polysulfone; high hydraulic permeability; good biocompatibility | Often interchangeable with polysulfone |
| **AN69 (acrylonitrile)** | High adsorption capacity (removes cytokines); negatively charged membrane | Can cause bradykinin release (anaphylactoid reactions) in patients on ACE inhibitors — **avoid in ACE inhibitor patients**; good for sepsis (cytokine adsorption) |
| **PMMA (polymethyl methacrylate)** | High cytokine adsorption; used primarily in Japan | Less widely available; studied for sepsis-associated AKI |

**Surface area selection:**

| Patient Weight | Recommended Surface Area |
|---|---|
| < 60 kg | 0.6-1.0 m² |
| 60-90 kg | 1.0-1.5 m² |
| > 90 kg | 1.5-2.0 m² |

### 3.4 Dialysate and Replacement Fluid Composition

Standard commercially available CRRT solutions have the following composition (approximate — varies by manufacturer):[^1]

| Component | Typical Concentration | Notes |
|---|---|---|
| **Sodium** | 140 mEq/L | Can be customized for hyper- or hyponatremia management |
| **Potassium** | 0 or 4 mEq/L | Use K+ = 0 solution for hyperkalemia; K+ = 4 for normokalemia; may need to add KCl to bags for hypokalemia |
| **Calcium** | 0 (if citrate anticoagulation) or 3.0-3.5 mEq/L (if non-citrate) | Calcium-free solutions required for citrate anticoagulation (see Section 4.1) |
| **Magnesium** | 1.0-1.5 mEq/L | Monitor closely; supplementation often needed |
| **Chloride** | 108-113 mEq/L | — |
| **Bicarbonate** | 22-35 mEq/L | Primary buffer in most solutions; can be customized to correct acidosis |
| **Lactate** | 0-40 mEq/L (some solutions use lactate instead of bicarbonate) | Lactate is metabolized to bicarbonate; **avoid lactate-buffered solutions in liver failure** (impaired lactate clearance → lactic acidosis confusion) |
| **Glucose** | 0-110 mg/dL | Glucose-free solutions may cause hypoglycemia; monitor glucose q4-6h |
| **Phosphate** | 0 (most solutions) or 1.0-1.2 mmol/L (phosphate-containing solutions) | Hypophosphatemia is extremely common with CRRT (> 60% of patients); phosphate-containing solutions reduce this complication; otherwise, IV phosphate supplementation is required |

---

## 4. Anticoagulation for CRRT

### 4.1 Regional Citrate Anticoagulation (RCA) — Preferred Method

Regional citrate anticoagulation is the recommended first-line anticoagulation method for CRRT based on superior filter life and lower bleeding risk compared to systemic heparin.[^1] [^10] [^11]

#### Mechanism

Citrate (as trisodium citrate or anticoagulant citrate dextrose — ACD-A) is infused into the CRRT circuit pre-filter, where it chelates ionized calcium. Since calcium (Factor IV) is an essential cofactor in the coagulation cascade, reducing ionized calcium in the circuit to < 0.35 mmol/L effectively prevents clotting within the filter. The citrate-calcium complex is partially removed by the filter (dialysate/effluent). The remaining citrate enters the patient's systemic circulation, where it is rapidly metabolized by the liver and muscle (Krebs cycle) to bicarbonate. Systemic calcium is maintained by a separate calcium chloride or calcium gluconate infusion.

#### Citrate Anticoagulation Protocol

| Parameter | Target / Dose | Monitoring |
|---|---|---|
| **Citrate solution** | ACD-A (2.2% citrate) or 4% trisodium citrate | Flow rate titrated to circuit ionized calcium target |
| **Citrate infusion rate** | Initial: 1.5-2.5 mmol citrate per liter of blood flow (adjust based on circuit iCa) | — |
| **Circuit (post-filter) ionized calcium** | **0.25-0.35 mmol/L** | Measure q2-4 hours from post-filter port; adjust citrate dose up/down |
| **Systemic ionized calcium** | **1.0-1.2 mmol/L** (normal range) | Measure q4-6 hours from patient's arterial line or venous blood; adjust calcium replacement infusion |
| **Calcium replacement infusion** | Calcium chloride 10% at 1-4 mL/hr via central line **OR** calcium gluconate 10% at 3-12 mL/hr via central or peripheral line | Titrate to systemic iCa target |
| **Dialysate/replacement fluid** | Must be **calcium-free** (0 Ca²⁺) | Standard citrate-compatible solutions |
| **Total calcium : ionized calcium ratio** | < 2.5 | If ratio > 2.5, suspect citrate accumulation (see below) |

#### Citrate Accumulation — Recognition and Management

Citrate accumulation occurs when the liver or muscle cannot metabolize citrate adequately (liver failure, shock with tissue hypoperfusion, massive transfusion). The accumulated citrate continues to chelate calcium, producing a characteristic pattern:[^11]

| Sign | Explanation |
|---|---|
| **Falling systemic ionized calcium** (despite increasing calcium replacement) | Citrate chelates calcium; unmetabolized citrate continues to bind calcium |
| **Rising total calcium** | Citrate-calcium complexes are measured as "total calcium" |
| **Total calcium : ionized calcium ratio > 2.5** | **Hallmark** of citrate accumulation; "calcium gap" |
| **Metabolic acidosis** (sometimes with elevated anion gap) | Failure to metabolize citrate to bicarbonate; citrate itself is an unmeasured anion |
| **Worsening metabolic alkalosis** (paradoxically, if partial metabolism occurs) | Each citrate molecule metabolized generates 3 bicarbonate molecules; in partial accumulation, enough citrate is metabolized to cause alkalosis |

**Management of citrate accumulation:**

1. **Reduce citrate infusion rate** by 25-50%
2. **Increase calcium replacement infusion** to maintain systemic iCa > 1.0 mmol/L
3. **If severe** (total:ionized Ca ratio > 2.5 with clinical instability): switch to heparin anticoagulation or no anticoagulation
4. **Consider reducing CRRT blood flow rate** (which proportionally reduces citrate delivery to the patient)

#### Contraindications to Citrate Anticoagulation

| Contraindication | Reason |
|---|---|
| **Severe liver failure** (acute or decompensated cirrhosis) | Impaired citrate metabolism → accumulation risk |
| **Severe shock with lactic acidosis** (lactate > 4-6 mmol/L persistently) | Impaired tissue perfusion → reduced citrate metabolism |
| **Massive transfusion** (citrate in blood products adds to citrate load) | Combined citrate load may overwhelm metabolic capacity |

> **Note:** Relative contraindications require careful clinical judgment. Many centers successfully use citrate anticoagulation in patients with moderate liver dysfunction with close monitoring of the total:ionized calcium ratio.

### 4.2 Systemic Heparin Anticoagulation

Systemic unfractionated heparin (UFH) is the alternative when citrate is contraindicated or unavailable.[^1]

| Parameter | Protocol |
|---|---|
| **Loading dose** | 1,000-2,000 units IV bolus into circuit (or no bolus if high bleeding risk) |
| **Maintenance** | 5-15 units/kg/hr (typically 500-1,500 units/hr) via infusion pump into arterial limb of circuit |
| **Monitoring** | aPTT q4-6 hours (target 45-60 seconds, or 1.5-2x control); or anti-Xa level (target 0.3-0.5 IU/mL) |
| **Advantages** | Simple; no specialized solutions required; familiar to all staff |
| **Disadvantages** | Systemic anticoagulation → increased bleeding risk; shorter filter life compared to citrate (median 17-24 hrs vs. 40-70 hrs with citrate); HIT risk |

### 4.3 No Anticoagulation

Running CRRT without anticoagulation is appropriate in selected situations:[^1]

| Indication for No Anticoagulation | Strategy |
|---|---|
| **Active bleeding** | No anticoagulation; accept shorter filter life; use pre-dilution (30-50% of replacement fluid) to reduce hemoconcentration; higher blood flow rates (200-250 mL/min) |
| **Coagulopathy** (INR > 2.0, platelets < 50,000) | Endogenous coagulopathy provides some anticoagulation; pre-dilution helpful |
| **Uremic pericarditis** | Heparin contraindicated (hemorrhagic pericarditis risk); citrate preferred if available; otherwise no anticoagulation |
| **Post-operative with high bleeding risk** | Assess risk-benefit; pre-dilution and intermittent saline flushes (100-200 mL q30-60min) may extend filter life |

> **Practical Tip:** When running without anticoagulation, periodic saline flushes (100-200 mL of normal saline pushed through the circuit every 30-60 minutes) and pre-dilution replacement fluid can extend filter life to 12-24 hours in many cases.

---

## 5. Vascular Access for RRT

### 5.1 Catheter Selection

Non-tunneled, dual-lumen hemodialysis catheters are used for acute RRT in the ICU. Catheter choice and insertion site significantly affect RRT efficacy and complication rates.[^1] [^12]

| Insertion Site | Catheter Length | Blood Flow Rate | Advantages | Disadvantages |
|---|---|---|---|---|
| **Right internal jugular vein** (preferred) | 15 cm (13.5-16 cm) | 250-400 mL/min | Straight path to SVC-RA junction; best flow rates; lowest malposition rate; lowest recirculation | Neck movement may be restricted; risk of carotid puncture |
| **Left internal jugular vein** | 20 cm (19-24 cm) | 200-350 mL/min | Acceptable alternative | Longer catheter → more resistance; higher malposition rate; must cross brachiocephalic vein → higher risk of stenosis |
| **Femoral vein** | 24 cm (20-25 cm minimum) | 200-350 mL/min | No pneumothorax risk; easy insertion; no interference with TTE/TEE | Higher infection rate; immobilizes patient; tip must reach IVC (short catheters have high recirculation); thrombosis risk |
| **Subclavian vein** | 15-20 cm (right), 20 cm (left) | 200-350 mL/min | Most comfortable for patient; lowest infection rate | **Highest risk of subclavian stenosis** — may preclude future AV fistula creation; pneumothorax risk; difficult to compress if bleeding |

> **Key Recommendation:** The right internal jugular vein is the preferred site for RRT catheter placement. **Avoid subclavian vein catheterization** in patients with AKI who may progress to CKD and eventually require permanent dialysis access — subclavian stenosis can preclude ipsilateral AV fistula or graft creation.[^12]

### 5.2 Catheter Specifications

| Parameter | Recommendation |
|---|---|
| **Lumen size** | 12-14 French (dual lumen) for adequate flow |
| **Tip design** | Split-tip (Ash Split Cath) or staggered-tip designs may reduce recirculation |
| **Confirmation** | CXR for IJ and subclavian (confirm tip at SVC-RA junction, rule out pneumothorax); ultrasound-guided insertion reduces complications |
| **Locking solution** | Heparin (1,000-5,000 units/mL) or 4% citrate in each lumen when not in use |

---

## 6. CRRT Troubleshooting

### 6.1 Filter Clotting

Filter clotting is the most common reason for CRRT circuit interruption, reducing delivered dose and increasing costs.[^1]

| Cause | Identification | Solution |
|---|---|---|
| **Inadequate anticoagulation** | Rising transmembrane pressure (TMP); dark blood in filter | Increase citrate dose (target circuit iCa 0.25-0.35); increase heparin dose; consider pre-dilution |
| **Hemoconcentration** (filtration fraction > 20-25%) | High filtration fraction = (ultrafiltration rate + replacement fluid rate) / (plasma flow rate) | Increase blood flow rate; add pre-dilution; reduce net ultrafiltration rate |
| **Low blood flow rate** | Qb < 150 mL/min consistently | Check catheter function; reposition patient; assess for catheter malposition or thrombus; consider catheter exchange |
| **Catheter dysfunction** | Frequent access and return pressure alarms; inability to achieve target Qb | TPA lock (2 mg per lumen, dwell 30-60 min); consider catheter exchange over wire or at new site |
| **Blood product administration through circuit** | Platelets and RBCs activate coagulation in circuit | Administer blood products through a separate IV line, not the CRRT circuit |

**Filtration fraction calculation and target:**

**FF = (Quf + Qreplacement_post) / (Qplasma) × 100**

Where Qplasma = Qb × (1 - Hct)

**Target: FF < 20-25%** — higher filtration fractions increase hemoconcentration and clotting risk.

### 6.2 Hemodynamic Instability During CRRT

| Cause | Management |
|---|---|
| **Excessive ultrafiltration rate** | Reduce net UF rate; reassess fluid removal goals |
| **Rapid solute shifts** (uncommon with CRRT, more with IHD) | Reduce dialysate flow rate |
| **Blood loss into circuit** (with each filter change, 150-250 mL of blood is lost if not returned) | Return blood in circuit before filter change when possible; monitor hemoglobin |
| **Hypothermia** | Increase fluid warmer temperature; consider heated blankets |
| **Membrane bioincompatibility** | Rare; consider alternative membrane type |

### 6.3 Electrolyte Derangements During CRRT

| Derangement | Cause | Prevention / Management |
|---|---|---|
| **Hypophosphatemia** | CRRT efficiently clears phosphate; most standard CRRT solutions contain no phosphate | Use phosphate-containing CRRT solutions; IV sodium/potassium phosphate supplementation (20-40 mmol/day); monitor phosphate q6-8h; the most common electrolyte complication of CRRT |
| **Hypokalemia** | Efficient potassium clearance; especially with K+ = 0 solutions | Switch to K+ = 4 mEq/L solutions when potassium normalized; IV KCl supplementation; monitor q4-6h |
| **Hypomagnesemia** | Magnesium cleared by CRRT | IV magnesium supplementation (2-4 g/day); monitor q8-12h |
| **Hypocalcemia** | Citrate anticoagulation; CRRT clearance | Calcium replacement infusion (with citrate); monitor iCa q4-6h |
| **Metabolic alkalosis** | Excessive bicarbonate delivery from CRRT solutions; citrate metabolism generates bicarbonate | Reduce bicarbonate concentration in solutions; reduce citrate dose if able; consider switching to lower-bicarbonate solutions |
| **Hypothermia** | Heat loss from extracorporeal circuit | Fluid warmer; heated blankets; monitor core temperature |

### 6.4 Drug Clearance by CRRT

Drugs are removed by CRRT based on molecular weight, protein binding, and volume of distribution:[^13]

| Factor | Effect on CRRT Clearance | Examples |
|---|---|---|
| **Low molecular weight** (< 500 Da) | High clearance | Vancomycin, aminoglycosides, beta-lactams |
| **Low protein binding** (< 80%) | High clearance | Aminoglycosides, fluconazole, acyclovir |
| **Small volume of distribution** (< 1 L/kg) | Higher drug concentration in blood → more removed | Aminoglycosides |
| **High molecular weight** (> 20,000 Da) | Minimal clearance | Daptomycin (partially), heparin |
| **High protein binding** (> 80%) | Minimal clearance | Ceftriaxone, phenytoin, warfarin |
| **Large volume of distribution** (> 2 L/kg) | Minimal impact of CRRT clearance | Digoxin, amiodarone |

---

## 7. IHD Prescription in the ICU

### 7.1 When to Prefer IHD Over CRRT

| Indication | Rationale |
|---|---|
| **Hemodynamically stable patient** | IHD is more efficient and less resource-intensive |
| **Life-threatening hyperkalemia** (requiring emergent potassium removal) | IHD provides more rapid potassium clearance than CRRT |
| **Dialyzable poisoning** (methanol, ethylene glycol, lithium, salicylate) | High blood and dialysate flow rates maximize toxin removal; may require extended IHD (8-12 hours) |
| **Transition from CRRT** (improving hemodynamics) | Step-down from CRRT to IHD as patient stabilizes |
| **Resource constraints** | IHD requires less nursing intensity and lower consumable costs |

### 7.2 IHD Prescription Parameters

| Parameter | Recommended Range |
|---|---|
| **Blood flow rate (Qb)** | 200-300 mL/min (start lower in hemodynamically fragile patients; 150-200 mL/min) |
| **Dialysate flow rate (Qd)** | 500-800 mL/min |
| **Session duration** | 3-4 hours (first session: 2 hours to avoid dialysis disequilibrium; extend gradually) |
| **Frequency** | Daily or alternate-day, based on clinical needs |
| **Ultrafiltration** | Limit to ≤ 10-13 mL/kg/hr to minimize hemodynamic instability; total UF based on fluid overload and hemodynamic tolerance |
| **Dialysate composition** | Sodium 140 mEq/L, potassium 2-4 mEq/L, calcium 2.5-3.0 mEq/L, bicarbonate 35-40 mEq/L |
| **Dialyzer** | High-flux polysulfone membrane; appropriate surface area for patient size |
| **Anticoagulation** | Systemic heparin (1,000-2,000 units bolus, then 500-1,000 units/hr); or no anticoagulation if bleeding risk |

---

## 8. RRT Discontinuation Criteria

### 8.1 When to Attempt Discontinuation

There is no universally accepted protocol for RRT discontinuation. The decision is guided by evidence of renal recovery:[^1] [^2] [^14]

| Criterion | Threshold Suggesting Recovery |
|---|---|
| **Spontaneous urine output** | ≥ 400-500 mL/24 hours (without diuretics) OR ≥ 1,000-2,000 mL/24 hours (with diuretics) |
| **Creatinine clearance** | Measured 6- or 24-hour creatinine clearance > 15-20 mL/min |
| **Resolution of indication** | Hyperkalemia controlled; acidosis corrected; fluid balance manageable without RRT |
| **Furosemide stress test response** | Urine output > 200 mL in 2 hours after 1.0-1.5 mg/kg furosemide |
| **Negative fluid balance achievable** | Able to achieve target fluid balance with diuretics alone |

### 8.2 Practical Approach

1. **Assess daily** whether RRT can be discontinued
2. **Reduce CRRT dose** before stopping (some centers reduce effluent rate to 15 mL/kg/hr for 6-12 hours as a "wean")
3. **Monitor closely** for 48-72 hours after discontinuation: electrolytes q6-8h, urine output hourly, creatinine daily
4. **Restart RRT** if absolute indications recur or if creatinine rises rapidly without adequate urine output
5. **Expect:** 10-20% of patients who discontinue RRT will need to be restarted within 72 hours

---

## References

[^1]: Kidney Disease: Improving Global Outcomes (KDIGO) Acute Kidney Injury Work Group. "KDIGO Clinical Practice Guideline for Acute Kidney Injury." *Kidney Int Suppl*. 2012;2(1):1-138. DOI: [10.1038/kisup.2012.1](https://doi.org/10.1038/kisup.2012.1)

[^2]: Ostermann M, Bellomo R, Burdmann EA, et al. "Controversies in Acute Kidney Injury: Conclusions from a Kidney Disease: Improving Global Outcomes (KDIGO) Conference." *Kidney Int*. 2020;98(2):294-309. DOI: [10.1016/j.kint.2020.04.020](https://doi.org/10.1016/j.kint.2020.04.020)

[^3]: Marshall MR, Ma T, Galler D, et al. "Sustained Low-Efficiency Dialysis for Critically Ill Patients Requiring Renal Replacement Therapy." *Kidney Int*. 2001;60(2):777-785. DOI: [10.1046/j.1523-1755.2001.060002777.x](https://doi.org/10.1046/j.1523-1755.2001.060002777.x)

[^4]: Bagshaw SM, Wald R, Adhikari NKJ, et al. "Timing of Initiation of Renal-Replacement Therapy in Acute Kidney Injury (STARRT-AKI)." *N Engl J Med*. 2020;383(3):240-251. DOI: [10.1056/NEJMoa2000741](https://doi.org/10.1056/NEJMoa2000741)

[^5]: Gaudry S, Hajage D, Schortgen F, et al. "Initiation Strategies for Renal-Replacement Therapy in the Intensive Care Unit (AKIKI)." *N Engl J Med*. 2016;375(2):122-133. DOI: [10.1056/NEJMoa1603017](https://doi.org/10.1056/NEJMoa1603017)

[^6]: Barbar SD, Clere-Jehl R, Bourredjem A, et al. "Timing of Renal-Replacement Therapy in Patients with Acute Kidney Injury and Sepsis (IDEAL-ICU)." *N Engl J Med*. 2018;379(15):1431-1442. DOI: [10.1056/NEJMoa1803213](https://doi.org/10.1056/NEJMoa1803213)

[^7]: Zarbock A, Kellum JA, Schmidt C, et al. "Effect of Early vs Delayed Initiation of Renal Replacement Therapy on Mortality in Critically Ill Patients With Acute Kidney Injury: The ELAIN Randomized Clinical Trial." *JAMA*. 2016;315(20):2190-2199. DOI: [10.1001/jama.2016.5828](https://doi.org/10.1001/jama.2016.5828)

[^8]: VA/NIH Acute Renal Failure Trial Network; Palevsky PM, Zhang JH, O'Connor TZ, et al. "Intensity of Renal Support in Critically Ill Patients with Acute Kidney Injury." *N Engl J Med*. 2008;359(1):7-20. DOI: [10.1056/NEJMoa0802639](https://doi.org/10.1056/NEJMoa0802639)

[^9]: RENAL Replacement Therapy Study Investigators; Bellomo R, Cass A, Cole L, et al. "Intensity of Continuous Renal-Replacement Therapy in Critically Ill Patients." *N Engl J Med*. 2009;361(17):1627-1638. DOI: [10.1056/NEJMoa0902413](https://doi.org/10.1056/NEJMoa0902413)

[^10]: Oudemans-van Straaten HM, Bosman RJ, Koopmans M, et al. "Citrate Anticoagulation for Continuous Venovenous Hemofiltration." *Crit Care Med*. 2009;37(2):545-552. DOI: [10.1097/CCM.0b013e3181953c5e](https://doi.org/10.1097/CCM.0b013e3181953c5e)

[^11]: Slowinski T, Morgera S, Joannidis M, et al. "Safety and Efficacy of Regional Citrate Anticoagulation in Continuous Venovenous Hemodialysis in the Presence of Liver Failure: The Liver Citrate Anticoagulation Threshold (L-CAT) Observational Study." *Crit Care*. 2015;19(1):349. DOI: [10.1186/s13054-015-1066-7](https://doi.org/10.1186/s13054-015-1066-7)

[^12]: Vascular Access Work Group. "Clinical Practice Guidelines for Vascular Access." *Am J Kidney Dis*. 2006;48(Suppl 1):S176-S247. DOI: [10.1053/j.ajkd.2006.04.029](https://doi.org/10.1053/j.ajkd.2006.04.029)

[^13]: Seyler L, Cotton F, Taccone FS, et al. "Recommended Beta-Lactam Regimens Are Inadequate in Septic Patients Treated with Continuous Renal Replacement Therapy." *Crit Care*. 2011;15(3):R137. DOI: [10.1186/cc10257](https://doi.org/10.1186/cc10257)

[^14]: Uchino S, Bellomo R, Morimatsu H, et al. "Discontinuation of Continuous Renal Replacement Therapy: A Post Hoc Analysis of a Prospective Multicenter Observational Study." *Crit Care Med*. 2009;37(9):2576-2582. DOI: [10.1097/CCM.0b013e3181a38241](https://doi.org/10.1097/CCM.0b013e3181a38241)
