+++
title = "Ventilator-Associated Pneumonia — Part 4: Specific Pathogens, Surveillance & Quality Metrics"
description = "Pathogen-directed therapy for MRSA, Pseudomonas aeruginosa, Acinetobacter baumannii, ESBL-producing Enterobacterales, and Stenotrophomonas maltophilia with dosing tables, VAE versus traditional VAP surveillance reporting, NHSN definitions and algorithms, quality metrics including VAE rates and bundle compliance, and antibiotic stewardship considerations."
date = 2026-03-15T00:00:00-05:00
lastmod = 2026-03-15T00:00:00-05:00
draft = false
weight = 4
source_org = "icu_vap"
guideline_set = "icu_vap_guideline_2026"
departments = ["icu", "infection-prevention"]
category = ["guidelines", "icu", "infection-prevention", "critical-care", "pulmonary", "VAP", "antimicrobial-stewardship"]
audience = "clinician"
content_type = "guidelines"
+++

## 16. Pathogen-Directed Therapy

Once culture and susceptibility data are available (typically at 48–72 hours), empiric therapy should be de-escalated to targeted, pathogen-directed treatment. The following sections provide comprehensive guidance for the most important VAP pathogens.[^1][^2]

### 16.1 Methicillin-Resistant *Staphylococcus aureus* (MRSA)

MRSA is responsible for 10–30% of VAP episodes in units with endemic MRSA. MRSA VAP carries a crude mortality rate of 30–60%, though attributable mortality over MSSA VAP is debated.[^1][^3]

#### Preferred Treatment Options

| Agent | Dose | Duration | Key Considerations |
|---|---|---|---|
| **Vancomycin** | LD: 25–30 mg/kg IV x 1; MD: 15–20 mg/kg IV q8–12h | 7–14 days | Target AUC/MIC 400–600 (using Bayesian dosing software); 2020 consensus guidelines recommend AUC-guided dosing over trough-based monitoring; trough 15–20 mg/L if AUC monitoring unavailable; monitor renal function closely |
| **Linezolid** | 600 mg IV or PO q12h | 7–14 days | No renal dose adjustment; excellent lung penetration (ELF concentrations exceed serum); monitor platelets weekly; avoid if concurrent serotonergic agents; may be preferred when vancomycin AUC targets are difficult to achieve or nephrotoxicity is a concern |

#### Alternative Agents (Consult Infectious Disease)

| Agent | Dose | Role | Notes |
|---|---|---|---|
| **Trimethoprim-sulfamethoxazole** | 15–20 mg/kg/day (TMP component) IV divided q6–8h | Alternative for MRSA VAP when vancomycin and linezolid cannot be used | Good lung penetration; limited clinical data in VAP; monitor for hyperkalemia and myelosuppression |
| **Ceftaroline** | 600 mg IV q8h (off-label dose for MRSA pneumonia) | Salvage therapy or treatment failure | Anti-MRSA cephalosporin; approved for CAP but used off-label in HAP/VAP; consider for vancomycin MIC ≥ 2 mg/L |
| **Daptomycin** | **NOT recommended** for pneumonia | — | Inactivated by pulmonary surfactant; do not use for any pulmonary infection |

#### Vancomycin AUC-Guided Dosing

| Parameter | Target |
|---|---|
| **AUC/MIC ratio** | 400–600 (assuming MIC of 1 mg/L by broth microdilution) |
| **Bayesian dosing software** | Recommended for AUC estimation using 1–2 trough levels or trough + peak |
| **If Bayesian software unavailable** | Target trough 15–20 mg/L as a surrogate (less precise) |
| **Vancomycin MIC ≥ 2 mg/L** | Consider alternative agent (linezolid, ceftaroline); vancomycin clinical failure rates increase significantly at MIC ≥ 2 |
| **Nephrotoxicity monitoring** | Serum creatinine every 24–48 hours; concurrent nephrotoxins (piperacillin-tazobactam, aminoglycosides, vasopressors) increase risk |
| **Loading dose** | 25–30 mg/kg IV (based on actual body weight, capped at 3,000 mg) infused over 2 hours |

### 16.2 *Pseudomonas aeruginosa*

*Pseudomonas aeruginosa* is responsible for 15–25% of VAP episodes and is associated with high morbidity and treatment failure due to intrinsic and acquired resistance mechanisms.[^1][^2][^4]

#### Preferred Treatment — Based on Susceptibility

| Susceptibility Pattern | Preferred Agent(s) | Dose | Notes |
|---|---|---|---|
| **Susceptible to piperacillin-tazobactam** | Piperacillin-tazobactam | 4.5 g IV q6h (extended infusion 3–4h) | De-escalate to monotherapy if susceptible |
| **Susceptible to cefepime** | Cefepime | 2 g IV q8h (extended infusion 3–4h) | Preferred by many experts for Pseudomonas |
| **Susceptible to ceftazidime** | Ceftazidime | 2 g IV q8h | Extended infusion preferred |
| **Susceptible to meropenem** | Meropenem | 1–2 g IV q8h (extended infusion 3h) | Use 2 g if MIC ≥ 2 mg/L |
| **Susceptible to ciprofloxacin only (among beta-lactams resistant)** | Ciprofloxacin | 400 mg IV q8h | Monotherapy acceptable if susceptible; conversion to PO (750 mg q12h) when tolerating enteral |
| **MDR Pseudomonas (resistant to ≥ 3 classes)** | Ceftolozane-tazobactam | 3 g (2 g / 1 g) IV q8h (1-hour infusion) | Novel beta-lactam/BLI with excellent anti-pseudomonal activity; CrCl 30–50: 1.5 g q8h; CrCl 15–29: 750 mg q8h |
| **MDR Pseudomonas** | Ceftazidime-avibactam | 2.5 g IV q8h (2-hour infusion) | Active against many ceftazidime-resistant Pseudomonas; also covers KPC-producing Enterobacterales |
| **MDR Pseudomonas (metallo-beta-lactamase negative)** | Imipenem-cilastatin-relebactam | 1.25 g IV q6h (30-minute infusion) | Restores imipenem activity against many imipenem-resistant Pseudomonas |
| **XDR Pseudomonas (susceptible only to polymyxins)** | Colistin LD: 300 mg CBA IV, MD: 150 mg CBA IV q12h ± inhaled colistin 75–150 mg CBA q8–12h | — | Consider combination with IV + inhaled colistin; add rifampin or fosfomycin in select cases; ID consultation essential |

#### Key Principles for Pseudomonas VAP

- **Always use anti-pseudomonal susceptibility testing** — do not assume susceptibility based on drug class
- **Extended infusion beta-lactams** are preferred for optimizing PK-PD targets against Pseudomonas
- **De-escalate to monotherapy** once susceptibilities are confirmed — dual therapy for the full treatment course is not recommended for susceptible Pseudomonas
- **Duration:** 7 days for susceptible Pseudomonas with clinical response; consider extending to 10–14 days for MDR/XDR strains or slow clinical improvement
- **Recurrence:** Monitor for recurrence within 2 weeks of treatment completion (occurs in 20–40% of Pseudomonas VAP cases); repeat cultures if clinical deterioration

### 16.3 *Acinetobacter baumannii*

*Acinetobacter baumannii* is an increasingly important VAP pathogen in some ICU settings, notable for its ability to survive on environmental surfaces and develop extensive drug resistance.[^1][^2][^5]

#### Treatment — Based on Susceptibility

| Susceptibility Pattern | Preferred Agent(s) | Dose | Notes |
|---|---|---|---|
| **Carbapenem-susceptible** | Meropenem | 2 g IV q8h (extended infusion 3h) | Preferred over imipenem due to better in vitro activity for many strains |
| **Carbapenem-susceptible** | Imipenem-cilastatin | 500 mg IV q6h | Alternative; adequate for MIC ≤ 2 mg/L |
| **Ampicillin-sulbactam susceptible** | Ampicillin-sulbactam | 3 g (2 g/1 g) IV q4h or 9 g q8h (high-dose extended infusion) | Sulbactam has intrinsic activity against Acinetobacter (unique among BLIs); high-dose sulbactam (total daily sulbactam dose ≥ 6–9 g) is increasingly used |
| **Carbapenem-resistant (CRAB)** | Colistin LD: 300 mg CBA IV, MD: 150 mg CBA IV q12h | Plus ampicillin-sulbactam 9 g IV q8h (extended infusion) | Combination therapy preferred for CRAB; colistin monotherapy associated with high treatment failure |
| **CRAB** | Polymyxin B LD: 2.5 mg/kg IV, MD: 1.25–1.5 mg/kg IV q12h | Plus high-dose ampicillin-sulbactam or meropenem (if MIC ≤ 8, high-dose extended infusion) | Polymyxin B preferred over colistin by some experts due to more predictable PK; no renal dose adjustment |
| **CRAB (all options)** | Add inhaled colistin 75–150 mg CBA q8–12h | As adjunctive therapy to IV regimen | Improves local drug delivery to lungs |

#### Emerging Therapies for CRAB

| Agent | Status | Mechanism |
|---|---|---|
| **Sulbactam-durlobactam (Xacduro)** | FDA-approved 2023 for CRAB HAP/VAP | Novel BLI combination; sulbactam provides anti-Acinetobacter activity; durlobactam enhances spectrum and protects against degradation |
| **Cefiderocol** | FDA-approved for complicated UTI; used off-label for CRAB | Siderophore cephalosporin; penetrates via iron transport; active against many CRAB strains; concerning signal of increased mortality in CRAB in the CREDIBLE-CR trial |

**Sulbactam-durlobactam dosing:**

| Parameter | Details |
|---|---|
| **Dose** | Sulbactam 1 g / durlobactam 1 g IV every 6 hours |
| **Infusion** | Over 3 hours |
| **Duration** | 7–14 days |
| **Renal adjustment (CrCl 30–59)** | 0.75 g / 0.75 g IV q6h |
| **Renal adjustment (CrCl 15–29)** | 0.5 g / 0.5 g IV q6h |
| **Hemodialysis** | 0.5 g / 0.5 g IV q6h; give after HD on dialysis days |
| **Must be combined with** | Imipenem-cilastatin (for breadth of coverage beyond Acinetobacter) |

### 16.4 ESBL-Producing Enterobacterales

Extended-spectrum beta-lactamase (ESBL)-producing organisms (commonly *Klebsiella pneumoniae*, *Escherichia coli*, *Enterobacter* spp.) produce enzymes that hydrolyze third-generation cephalosporins and aztreonam but are inhibited by carbapenems.[^1][^6]

#### Treatment

| Susceptibility | Preferred Agent | Dose | Notes |
|---|---|---|---|
| **ESBL-producing (confirmed)** | Meropenem | 1 g IV q8h (extended infusion 3h) | First-line for ESBL VAP; carbapenems are the standard of care |
| **ESBL-producing** | Imipenem-cilastatin | 500 mg IV q6h | Alternative to meropenem |
| **ESBL-producing (MIC testing shows susceptibility to pip-tazo)** | Piperacillin-tazobactam | 4.5 g IV q6h (extended infusion) | The MERINO trial (2018) demonstrated inferiority of piperacillin-tazobactam to meropenem for ESBL bloodstream infections; many experts avoid pip-tazo for ESBL VAP despite in vitro susceptibility |
| **CRE (carbapenem-resistant Enterobacterales) — KPC-producing** | Ceftazidime-avibactam | 2.5 g IV q8h | First-line for KPC-producing CRE; not active against MBL |
| **CRE — MBL-producing (NDM, VIM, IMP)** | Ceftazidime-avibactam + aztreonam | CAZ-AVI 2.5 g IV q8h + aztreonam 2 g IV q8h | Synergistic combination; avibactam protects aztreonam from MBL degradation |
| **CRE — MBL-producing** | Cefiderocol | 2 g IV q8h (3-hour infusion) | Siderophore cephalosporin; stable to all beta-lactamases including MBL; CrCl > 120: 2 g IV q6h; CrCl 30–59: 1.5 g IV q8h; CrCl 15–29: 1 g IV q8h |

### 16.5 *Stenotrophomonas maltophilia*

*Stenotrophomonas maltophilia* is an intrinsically multidrug-resistant, non-fermenting gram-negative organism that causes 3–5% of VAP episodes. It is inherently resistant to carbapenems (via the L1 metallo-beta-lactamase and L2 cephalosporinase) and aminoglycosides.[^1][^7]

#### Treatment

| Agent | Dose | Notes |
|---|---|---|
| **Trimethoprim-sulfamethoxazole (first-line)** | 15 mg/kg/day (TMP component) IV divided q6–8h | Standard first-line therapy; resistance is increasing in some regions |
| **Levofloxacin** | 750 mg IV/PO q24h | Alternative first-line; active against most strains; consider in sulfonamide allergy |
| **Ceftazidime** | 2 g IV q8h | Active against some strains; check susceptibility; use as alternative |
| **Minocycline** | 200 mg IV/PO x 1, then 100 mg IV/PO q12h | Good in vitro activity; limited clinical data for VAP; consider for TMP-SMX and fluoroquinolone-resistant strains |
| **Tigecycline** | LD 200 mg IV x 1, then 100 mg IV q12h (high-dose) | Active against most strains; FDA black box warning for increased mortality in pooled analysis; reserve for MDR Stenotrophomonas when other options are limited; use high-dose regimen for pneumonia |
| **Colistin** | Generally NOT active | Stenotrophomonas is intrinsically resistant to polymyxins |

### 16.6 Pathogen-Specific Treatment Duration Summary

| Pathogen | Recommended Duration | Notes |
|---|---|---|
| **MSSA** | 7 days | Standard short-course |
| **MRSA** | 7–14 days | 7 days if rapid clinical response; up to 14 days for complicated or slow-responding cases |
| **Susceptible Pseudomonas** | 7 days | Monitor for recurrence |
| **MDR/XDR Pseudomonas** | 7–14 days | Individualize based on clinical response |
| **Carbapenem-susceptible Acinetobacter** | 7 days | Standard short-course |
| **CRAB** | 7–14 days | Longer duration for XDR strains with slow clinical response |
| **ESBL Enterobacterales** | 7 days | Standard short-course |
| **CRE** | 7–14 days | Individualize; ID consultation recommended |
| **Stenotrophomonas** | 7–14 days | Ensure adequate source control; may require longer for immunocompromised |
| **Polymicrobial** | 7 days | Treat the most resistant organism identified; de-escalate based on susceptibilities |

---

## 17. VAE vs VAP Surveillance Reporting

### 17.1 Current Surveillance Landscape

The national healthcare safety surveillance network transitioned from traditional VAP surveillance to the VAE framework in January 2013 for adult inpatient locations. This transition addressed several fundamental limitations of traditional VAP surveillance.[^8][^9]

| Feature | Traditional VAP Surveillance | VAE Surveillance |
|---|---|---|
| **Data source** | Chart review, radiology interpretation, clinical assessment | Electronic medical record (EMR) data extraction |
| **Objectivity** | Subjective; requires interpretation of CXR and clinical findings | Objective; uses discrete data fields (FiO2, PEEP, temperature, WBC, antimicrobial days) |
| **Inter-rater reliability** | Poor (kappa 0.2–0.4) | Good (kappa 0.6–0.8) |
| **Resources required** | Infection preventionist chart review (15–30 min per case) | Automated or semi-automated EMR extraction |
| **Gaming potential** | High (avoidance of chest X-rays, avoidance of quantitative cultures, documentation practices) | Lower (based on ventilator parameters that are routinely documented) |
| **Captures pneumonia specifically** | Yes (by definition) | No — VAC captures all causes of respiratory deterioration; PVAP attempts to identify pneumonia within VAE |
| **Suitable for benchmarking** | No (due to inter-rater variability) | Yes (recommended for inter-facility comparison) |
| **Suitable for clinical diagnosis** | Yes | No (surveillance tool only) |
| **Reporting requirement** | No longer required by CMS for most facilities (replaced by VAE) | Required for CMS quality reporting (IPPS hospitals) |

### 17.2 NHSN VAE Reporting Requirements

| Element | Requirement |
|---|---|
| **Eligible units** | All adult ICU and other critical care locations reporting to NHSN |
| **Eligible patients** | Patients mechanically ventilated through an ETT or tracheostomy for ≥ 2 calendar days (day of intubation = day 1) |
| **Reporting frequency** | Monthly denominator data (ventilator-days, patient-days); event-level data for each VAE identified |
| **Denominator** | Ventilator-days (number of patients on mechanical ventilation at the same time each day, summed for the month) |
| **Rate calculation** | VAE events per 1,000 ventilator-days |
| **Risk adjustment** | NHSN provides standardized infection ratios (SIRs) adjusted for facility type, bed size, and teaching status |

### 17.3 NHSN Pooled Mean VAE Rates (Reference Data)

The following represent approximate NHSN pooled mean rates for benchmarking purposes:[^9]

| ICU Type | VAC Rate (per 1,000 ventilator-days) | IVAC Rate (per 1,000 ventilator-days) | PVAP Rate (per 1,000 ventilator-days) |
|---|---|---|---|
| **Medical ICU** | 5.0–8.0 | 2.0–4.0 | 0.5–2.0 |
| **Surgical ICU** | 6.0–10.0 | 2.5–5.0 | 1.0–2.5 |
| **Medical-surgical ICU** | 5.0–8.0 | 2.0–4.0 | 0.5–2.0 |
| **Trauma ICU** | 8.0–12.0 | 3.0–6.0 | 1.5–3.0 |
| **Neuro ICU** | 5.0–9.0 | 2.0–4.5 | 0.5–2.0 |
| **Cardiac ICU** | 4.0–7.0 | 1.5–3.5 | 0.5–1.5 |
| **Long-term acute care** | 3.0–6.0 | 1.5–3.0 | 0.5–1.5 |

> **Note:** Actual NHSN pooled mean data are updated annually. Facilities should refer to the most current NHSN annual report for precise benchmarking values. The figures above are approximate ranges for general reference.

---

## 18. Quality Metrics and Performance Improvement

### 18.1 Process Metrics (Bundle Compliance)

| Metric | Definition | Target | Measurement Method |
|---|---|---|---|
| **HOB elevation compliance** | % of ventilated patients with documented HOB ≥ 30° at time of audit | ≥ 95% | Daily audit (bedside observation + documentation review) |
| **SAT/SBT compliance** | % of eligible ventilated patients who received SAT and SBT assessment daily | ≥ 90% | Daily checklist on rounds; EMR documentation |
| **Oral care compliance** | % of ventilated patients receiving tooth brushing per protocol | ≥ 95% | Nursing documentation audit |
| **SSD utilization** | % of patients intubated with SSD-capable ETT (when expected ventilation > 48h) | ≥ 80% | Supply chain data + chart review |
| **Cuff pressure compliance** | % of measurements within 20–30 cmH2O | ≥ 90% | RT documentation audit |
| **All-or-none bundle compliance** | % of ventilated patients meeting ALL bundle components simultaneously | ≥ 85% | Daily audit |
| **DVT prophylaxis compliance** | % of eligible patients receiving appropriate DVT prophylaxis | ≥ 95% | EMR review |
| **SUP appropriateness** | % of patients receiving SUP only when indicated; % of patients with timely discontinuation | ≥ 90% | Pharmacy review |

### 18.2 Outcome Metrics

| Metric | Definition | Target | Reporting |
|---|---|---|---|
| **VAE rate** | VAE events per 1,000 ventilator-days | At or below NHSN SIR of 1.0 | Quarterly to infection prevention committee |
| **VAP rate (clinical)** | Clinically diagnosed VAP per 1,000 ventilator-days (for internal QI only) | Trending toward zero; not for inter-facility comparison | Monthly (internal only) |
| **Ventilator utilization ratio** | Ventilator-days / patient-days | Lower is better; benchmark against NHSN unit type | Monthly |
| **Mean duration of mechanical ventilation** | Average days on ventilator per ICU admission | Trend reduction | Monthly |
| **Reintubation rate** | % of extubated patients requiring reintubation within 48 hours | < 10% | Monthly |
| **Antibiotic days** | Total antibiotic days per 1,000 patient-days | Benchmark against institution-specific targets | Monthly; report to antimicrobial stewardship |

### 18.3 Antibiotic Stewardship in VAP

Antibiotic stewardship is integral to VAP management, encompassing both prevention of unnecessary antibiotic use and optimization of necessary therapy.[^1][^10]

#### Key Stewardship Strategies

| Strategy | Implementation |
|---|---|
| **Avoid empiric antibiotics when VAP is unlikely** | If clinical suspicion is low (CPIS < 6, alternative diagnosis identified), withhold antibiotics and observe with serial assessments at 48–72 hours |
| **Obtain cultures before antibiotics** | Lower respiratory tract cultures and blood cultures before starting empiric therapy; results guide de-escalation |
| **Active de-escalation at 48–72 hours** | Review culture results daily; narrow spectrum as soon as susceptibility data are available; discontinue MRSA coverage if cultures and nasal screen are negative |
| **Short-course therapy (7 days)** | Default duration for VAP; resist pressure to continue antibiotics beyond 7 days without clear indication |
| **Procalcitonin-guided discontinuation** | Use serial PCT measurements to support early antibiotic discontinuation in clinically improving patients |
| **Antibiotic timeout** | Structured reassessment of all antibiotics at 48–72 hours by the primary team ± antimicrobial stewardship program |
| **Distinguish VAP from VAT** | Ventilator-associated tracheobronchitis (purulent secretions + positive culture WITHOUT new radiographic infiltrate) may not require antibiotics in all cases; a 2015 RCT suggested possible benefit of treatment for VAT, but routine antibiotic treatment of VAT is not endorsed by the 2016 guidelines |
| **Local antibiogram integration** | Review and update unit-specific antibiograms annually; incorporate into empiric therapy guidelines |
| **Audit of empiric appropriateness** | Monthly review of empiric regimens for concordance with local antibiogram and guideline recommendations |

### 18.4 Performance Improvement Framework

| Phase | Activities |
|---|---|
| **Assess** | Determine current VAE rates, bundle compliance, and antibiotic use patterns; identify gaps |
| **Design** | Develop or update VAP bundle order sets, checklists, and protocols; engage frontline staff |
| **Implement** | Launch bundle with education; designate unit champions (nurse, RT, physician) |
| **Monitor** | Daily compliance audits; monthly outcome data collection; feedback to frontline teams |
| **Sustain** | Integrate into EMR (automated reminders, hard stops); leadership rounding on compliance; recognize and celebrate high-performing units |

---

## 19. Special Considerations

### 19.1 VAP in Tracheostomy Patients

- Tracheostomy patients remain at risk for VAP and should continue to receive applicable prevention measures (oral care, HOB elevation, mobility, cuff management)
- SSD is not applicable after tracheostomy (the subglottic space is bypassed)
- The same diagnostic and treatment principles apply as for ETT-associated VAP
- Tracheostomy colonization is common; culture results should be interpreted in clinical context

### 19.2 VAP in Immunocompromised Patients

- Broader differential diagnosis: consider *Pneumocystis jirovecii*, invasive aspergillosis, cytomegalovirus, *Nocardia*, and atypical mycobacteria
- BAL is preferred over ETA for diagnosis (allows cytology, galactomannan testing, and viral PCR panels)
- Empiric regimens may need to include antifungal and antiviral coverage depending on the type and depth of immunosuppression
- Treatment duration is typically longer (14+ days for bacterial VAP; pathogen-specific for opportunistic infections)
- Infectious disease consultation recommended for all immunocompromised patients with VAP

### 19.3 VAP in Patients with Structural Lung Disease

- Patients with bronchiectasis, cystic fibrosis, or lung transplant are at higher risk for MDR organisms (especially *Pseudomonas* and *Stenotrophomonas*)
- Prior respiratory cultures should guide empiric therapy
- Consider broader initial coverage regardless of other MDR risk factors

### 19.4 Ventilator-Associated Tracheobronchitis (VAT)

VAT represents infection of the tracheobronchial tree without parenchymal involvement:[^11]

| Feature | VAT | VAP |
|---|---|---|
| **Purulent secretions** | Present | Present |
| **Positive respiratory cultures** | Present | Present |
| **New radiographic infiltrate** | Absent | Present |
| **Fever / leukocytosis** | May be present | Typically present |
| **Treatment with antibiotics** | Controversial; 2016 guidelines do not endorse routine treatment | Recommended |

A 2015 RCT (n = 118) by Palmer et al. found that aerosolized antibiotics for VAT reduced the rate of subsequent VAP (13% vs 47%, p < 0.001) and ICU days, but the study was small and unblinded. The 2016 guidelines state that "the committee was unable to recommend for or against antibiotic treatment of VAT."[^11]

---

## 20. Cross-References to Related Guidelines

| Topic | Guideline Link |
|---|---|
| **Sedation, analgesia, and delirium management** | [PADIS Management](/guidelines/icu/sedation-analgesia-delirium/) |
| **Mechanical ventilation and ARDS** | [Mechanical Ventilation & ARDS](/guidelines/icu/mechanical-ventilation-ards/) |
| **VTE prophylaxis in critically ill patients** | [VTE Prophylaxis in Critical Care](/guidelines/icu/vte-prophylaxis-critical-care/) |
| **Sepsis and septic shock management** | [Sepsis & Septic Shock](/guidelines/icu/sepsis-septic-shock/) |
| **CLABSI prevention** | [CLABSI Prevention](/guidelines/icu/clabsi-prevention/) |
| **Nutrition in critical illness** | [Nutrition in Critical Illness](/guidelines/icu/nutrition-critical-illness/) |

---

[^1]: Kalil AC, Metersky ML, Klompas M, et al. "Management of adults with hospital-acquired and ventilator-associated pneumonia: 2016 clinical practice guidelines by the Infectious Diseases Society of America and the American Thoracic Society." *Clin Infect Dis*. 2016;63(5):e61-e111. ATS/IDSA. DOI: [10.1093/cid/ciw353](https://doi.org/10.1093/cid/ciw353)

[^2]: Torres A, Niederman MS, Chastre J, et al. "International ERS/ESICM/ESCMID/ALAT guidelines for the management of hospital-acquired pneumonia and ventilator-associated pneumonia." *Eur Respir J*. 2017;50(3):1700582. ERS/ESICM/ESCMID/ALAT. DOI: [10.1183/13993003.00582-2017](https://doi.org/10.1183/13993003.00582-2017)

[^3]: Rello J, Torres A, Ricart M, et al. "Ventilator-associated pneumonia by *Staphylococcus aureus*: comparison of methicillin-resistant and methicillin-sensitive episodes." *Am J Respir Crit Care Med*. 1994;150(6 Pt 1):1545-1549. DOI: [10.1164/ajrccm.150.6.7952612](https://doi.org/10.1164/ajrccm.150.6.7952612)

[^4]: Bassetti M, Vena A, Croxatto A, Righi E, Guery B. "How to manage *Pseudomonas aeruginosa* infections." *Drugs Context*. 2018;7:212527. DOI: [10.7573/dic.212527](https://doi.org/10.7573/dic.212527)

[^5]: Tsuji BT, Pogue JM, Zavascki AP, et al. "International consensus guidelines for the optimal use of the polymyxins: endorsed by the American College of Clinical Pharmacy (ACCP), European Society of Clinical Microbiology and Infectious Diseases (ESCMID), Infectious Diseases Society of America (IDSA), International Society for Anti-infective Pharmacology (ISAP), Society of Critical Care Medicine (SCCM), and Society of Infectious Diseases Pharmacists (SIDP)." *Pharmacotherapy*. 2019;39(1):10-39. DOI: [10.1002/phar.2209](https://doi.org/10.1002/phar.2209)

[^6]: Harris PNA, Tambyah PA, Lye DC, et al. "Effect of piperacillin-tazobactam vs meropenem on 30-day mortality for patients with *E. coli* or *Klebsiella pneumoniae* bloodstream infection and ceftriaxone resistance: a randomized clinical trial." *JAMA*. 2018;320(10):984-994. MERINO Trial. DOI: [10.1001/jama.2018.12163](https://doi.org/10.1001/jama.2018.12163)

[^7]: Chang YT, Lin CY, Chen YH, Hsueh PR. "Update on infections caused by *Stenotrophomonas maltophilia* with particular attention to resistance mechanisms and therapeutic options." *Front Microbiol*. 2015;6:893. DOI: [10.3389/fmicb.2015.00893](https://doi.org/10.3389/fmicb.2015.00893)

[^8]: Magill SS, Klompas M, Balk R, et al. "Developing a new, national approach to surveillance for ventilator-associated events." *Crit Care Med*. 2013;41(11):2467-2475. CDC/NHSN. DOI: [10.1097/CCM.0b013e3182a262db](https://doi.org/10.1097/CCM.0b013e3182a262db)

[^9]: Centers for Disease Control and Prevention. "Ventilator-Associated Event (VAE) Protocol." *National Healthcare Safety Network (NHSN) Patient Safety Component Manual*. January 2024. URL: [https://www.cdc.gov/nhsn/pdfs/pscmanual/10-vae_final.pdf](https://www.cdc.gov/nhsn/pdfs/pscmanual/10-vae_final.pdf)

[^10]: Klompas M, Branson R, Cawcutt K, et al. "Strategies to prevent ventilator-associated pneumonia, ventilator-associated conditions, and nonventilator hospital-acquired pneumonia in acute-care hospitals: 2022 update." *Infect Control Hosp Epidemiol*. 2022;43(6):687-713. SHEA/IDSA. DOI: [10.1017/ice.2022.13](https://doi.org/10.1017/ice.2022.13)

[^11]: Palmer LB, Smaldone GC, Chen JJ, et al. "Aerosolized antibiotics and ventilator-associated tracheobronchitis in the intensive care unit." *Crit Care Med*. 2008;36(7):2008-2013. DOI: [10.1097/CCM.0b013e31817c0f18](https://doi.org/10.1097/CCM.0b013e31817c0f18)
