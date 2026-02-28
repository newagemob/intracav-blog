+++
title = "Vascular Access Quality Metrics: Key Performance Indicators and Benchmarking"
date = 2026-02-25T00:00:00-05:00
lastmod = 2026-02-25T00:00:00-05:00
content_type = "guide"
audience = "clinician"
category = ["VAT Models", "Quality Improvement", "Metrics"]
tags = ["vascular access quality metrics", "CLABSI KPI", "vascular access KPI", "first-attempt success rate", "IV therapy quality indicators", "PICC quality metrics", "vascular access benchmarking", "NHSN benchmarking"]
author = ["Dennis Woo", "Dr. Mike Stern", "I.M. Wright"]
description = "Comprehensive guide to vascular access quality metrics: CLABSI rates and SIR benchmarking, first-attempt success rates, phlebitis rates, catheter utilization ratios, PICC appropriateness tracking, dwell time management, and building a vascular access quality dashboard."
slug = "vascular-access-quality-metrics"
keywords = ["vascular access quality metrics", "CLABSI rate benchmarking", "NHSN SIR vascular access", "first attempt success rate IV", "phlebitis rate benchmark", "PICC appropriateness rate", "catheter utilization ratio", "vascular access quality dashboard"]
+++

# Vascular Access Quality Metrics: Key Performance Indicators and Benchmarking

Vascular access quality improvement begins with measurement. Without valid, consistently collected metrics, VATs and nursing leadership cannot identify problems, demonstrate improvement, or make evidence-based decisions about resource allocation. The vascular access quality measurement framework spans infection prevention outcomes, procedural success metrics, device appropriateness, and complication surveillance — each requiring specific measurement methodology and benchmarking standards.

**Parent guide:** [Vascular Access Team Models: Complete Reference](/guides/vascular-access-team-models/)

---

## The Core Vascular Access Quality Metric Set

An effective vascular access quality program monitors metrics across four domains:

| Domain | Metric Category | Primary Audience |
|---|---|---|
| Infection prevention | CLABSI rate, SIR, bundle compliance | Hospital leadership, infection control |
| Procedural outcomes | First-attempt success, insertion failure rate | VAT leadership, nursing |
| Device management | Catheter utilization, appropriateness, dwell time | VAT, nursing informatics |
| Complication surveillance | Phlebitis, infiltration, DVT, malposition rates | VAT, risk management |

---

## Domain 1: Infection Prevention Metrics

### CLABSI Rate

**Definition:** Number of CLABSIs per 1,000 central line-days.

**Formula:**
```
CLABSI rate = (Number of CLABSI events / Number of central line-days) × 1,000
```

**What counts as a CLABSI event:** Infections meeting NHSN LCBI criteria (see [CLABSI Definition and Epidemiology](/guides/clabsi-prevention/clabsi-definition-epidemiology/)).

**What counts as a central line-day:** Each day a patient has any central line at any point during the calendar day counts as one central line-day. Collected daily in NHSN.

**Benchmark:** NHSN publishes annual pooled mean rates by unit type. ICU-specific benchmarks are published separately from non-ICU wards. Facilities should target **SIR <1.0** (below national average) and actively work toward **zero or near-zero** CLABSI rates, which are demonstrably achievable per the Keystone ICU project and multiple facility reports.

**Stratification:** CLABSI rates should be reported separately by unit type (ICU vs non-ICU), by device type (PICC vs non-tunneled CVC vs port), and by device location (IJ vs subclavian vs femoral for CVC) to identify specific high-risk areas.

### Standardized Infection Ratio (SIR)

**Definition:** The ratio of observed CLABSIs to predicted CLABSIs based on national baseline data.

**Formula:**
```
SIR = Observed CLABSIs / Predicted CLABSIs
```

Predicted CLABSIs are calculated by NHSN based on risk-adjusted national baseline rates for each facility's patient population and unit types.

**Interpretation:**
- SIR = 1.0: Equal to national average
- SIR < 1.0: Better than national average (target)
- SIR > 1.0: Worse than national average (needs improvement)
- SIR = 0: No CLABSIs observed (best possible outcome)

**Why SIR matters:** Raw CLABSI rates favor facilities with shorter catheter dwell times or healthier patient populations. SIR risk-adjusts for these differences, allowing fair comparison across facility types. CMS uses SIR for HAI benchmarking in public reporting and value-based purchasing.

### Catheter Utilization Ratio (CUR)

**Definition:** Proportion of patient-days on which a central line was present.

**Formula:**
```
CUR = Central line-days / Patient-days
```

**Benchmark:** NHSN publishes unit-specific CUR benchmarks. ICU CUR typically ranges 0.40–0.70; non-ICU CUR 0.10–0.25.

**Why CUR matters:** CLABSI rate measures the risk per catheter-day (a measure of infection control quality). CUR measures how often patients have central lines at all (a measure of appropriateness). High CUR in non-ICU settings may signal inappropriate catheter use. Facilities with high CUR and high CLABSI rates should address both denominators simultaneously.

**Reduction strategy:** Daily necessity review is the primary CUR-reduction intervention — removing CVADs on the first day they are no longer clinically required.

### Bundle Compliance Rates

**Insertion bundle compliance:** Percentage of CVC/PICC insertions where all 5 insertion bundle elements were documented as completed (hand hygiene, MSB, CHG antisepsis, optimal site, daily necessity review planning).

**Maintenance bundle compliance:** Typically assessed by audit — percentage of CVADs that have current CHG dressing intact, scrub-the-hub documentation, and daily necessity review completed.

**Benchmark:** Most institutions target **≥95% bundle compliance** for both insertion and maintenance elements. Below 90% compliance indicates a process problem requiring investigation.

**Measurement challenge:** Insertion bundle compliance requires real-time documentation (checklist completed at time of insertion); retrospective chart audits consistently undercount compliance because undocumented ≠ not done — but undocumented = unverifiable.

---

## Domain 2: Procedural Outcome Metrics

### First-Attempt Success Rate (FASR)

**Definition:** Percentage of vascular access insertions achieved on the first attempt.

**Formula:**
```
FASR = (Insertions successful on first attempt / Total insertions) × 100
```

**Benchmarks by device type:**
- **Peripheral IV (all patients):** Target ≥80%; specialist inserters should achieve ≥85–90%
- **Peripheral IV (DIVA patients, DIVA score ≥4):** Target ≥80% with ultrasound guidance
- **PICC (ultrasound-guided):** Target ≥90%; most specialized inserters achieve 90–98%
- **Ultrasound-guided peripheral IV:** Target ≥80%; experienced inserters 85–95%

**Why FASR matters:** Each failed insertion attempt represents clinician time, supply cost, patient pain, and vein damage. Low FASR is also a training signal — new inserters or those who have been away from the procedure require additional proctoring.

**FASR calculation nuance:** Define "attempt" clearly before tracking. An attempt should be defined as: needle breaks skin contact. A catheter flush or position adjustment with the same access site does not constitute a new attempt.

### Insertion Failure Rate

**Definition:** Percentage of intended insertions that did not achieve successful catheter placement by any inserter on that session.

This differs from first-attempt success: a patient may require 2 attempts to get a PICC (FASR = 50% for that case), but the insertion was ultimately successful (failure rate = 0% for that case).

**Insertion failure should trigger:**
- Documentation of reason for failure
- Escalation to higher-complexity access if peripheral options exhausted
- Review if failure rate by individual inserter exceeds peer benchmark

### Procedure Time

Median and 90th percentile insertion times by device type. Long insertion times indicate technical difficulty, patient anatomic challenges, or operator inexperience. High 90th percentile times (outlier cases) may indicate cases requiring additional training or team support.

---

## Domain 3: Device Management Metrics

### PICC Appropriateness Rate

**Definition:** Percentage of PICC insertions that meet one or more MAGIC criteria (Michigan Appropriateness Guide for Intravenous Catheters) for appropriate PICC indication.

**MAGIC appropriate PICC indications include:**
- Therapy duration >5–7 days anticipated
- Medications requiring central access (osmolarity, vesicant, pH)
- Documented poor peripheral venous access
- Multiple simultaneous access needs
- Parenteral nutrition
- Continuous infusion

**Target:** 95–100% of PICCs should meet at least one appropriate indication per MAGIC. Insertion without appropriate indication is measurable inappropriate use.

**How to track:** Require clinical indication documentation at the time of PICC order. VAT can review orders before insertion against appropriateness criteria. Facilities with structured PICC appropriateness review programs reduce PICC volumes 20–35% without adverse patient outcomes.

### Catheter Dwell Time

**Definition:** Median number of days a PICC or CVC remains in place per insertion.

**Tracking approach:** EHR data extraction: insertion date/time vs. removal date/time for all CVADs; calculate median dwell.

**Why dwell time matters:** CLABSI risk increases with dwell time. A PICC dwelling for 30 days carries more total CLABSI risk than one dwelling for 10 days. Reducing median dwell (by removing catheters when no longer needed) directly reduces total CLABSI exposure.

**Dwell time alert:** If median PICC dwell time at your facility exceeds 14–21 days for acute care patients, investigate whether appropriate transition planning (oral medications, peripheral access, catheter removal on discharge) is occurring.

### Device Escalation Rate

**Definition:** Rate at which patients receiving peripheral IVs require escalation to a midline or PICC due to IV failure, difficult access, or therapy duration extension.

High device escalation rates may indicate:
- Underuse of VAT consultation for difficult-access patients
- Failure to plan for therapy duration at initial device selection
- Inadequate peripheral IV technique leading to premature device failure

---

## Domain 4: Complication Surveillance Metrics

### Phlebitis Rate

**Definition:** Number of peripheral phlebitis events per 1,000 peripheral IV catheter-days.

**Benchmark:** <5% phlebitis rate for peripheral IV therapy; more precisely, Current evidence recommends reporting as rate per 1,000 PIV-days to allow meaningful comparison.

**Phlebitis grading:** Use the VIP Scale (Grades 0–5) to standardize documentation. Only Grade 2+ events should be counted in the reported phlebitis rate (Grade 1 is pain at site only — below clinical threshold for intervention at most institutions).

**High phlebitis rate investigation:** Examine by medication (which infusates are associated with most phlebitis events?), by gauge (is 18G being used where 20G would suffice?), by site (antecubital phlebitis from positional irritation?), and by inserter (one clinician's insertions producing disproportionate phlebitis?).

### Infiltration and Extravasation Rate

**Definition:** Number of confirmed infiltration/extravasation events per 1,000 PIV-catheter-days.

**Grade tracking:** Document severity using the infiltration staging scale (Grades 0–4). Report Grade 3–4 events separately as sentinel events requiring individual case review.

**Extravasation of vesicant:** Any extravasation of a vesicant agent (Grade 2 or higher) should trigger an incident report and root-cause review regardless of outcome. Even if tissue injury does not occur, the near-miss represents a system failure.

### PICC-Associated DVT Rate

**Definition:** Symptomatic upper-extremity DVT attributable to PICC per 1,000 PICC-days.

**Tracking:** Requires linking PICC insertion records to DVT diagnosis codes (ICD-10: I82.4xx for upper extremity DVT) within a defined time window after PICC insertion.

**Benchmark:** Overall symptomatic PICC-associated DVT rate is typically 1–5% in published studies; oncology populations have higher rates (5–10%). Facilities should track their own rate and compare to published benchmarks.

**Modifiable risk factors to monitor:** Catheter-to-vein ratio (document at each PICC insertion), single-lumen vs. multi-lumen (reduce multi-lumen PICCs when single-lumen suffices), tip position documentation.

### Catheter Malposition Rate

**Definition:** Percentage of PICC/CVC insertions where tip position required repositioning or removal due to non-CAJ tip location at time of initial confirmation.

**Benchmark:** Malposition rate for ultrasound-guided PICC with ECG guidance should be <5%; with CXR-only confirmation, higher malposition rates are expected (tip confirmation is less precise).

**Track separately:** Primary malposition (identified at initial insertion tip confirmation) vs. secondary malposition (tip migration identified on subsequent imaging during dwell).

---

## Building a Vascular Access Quality Dashboard

### Recommended Dashboard Structure

**Monthly reporting (to nursing leadership and infection control):**
- CLABSI count, rate per 1,000 central line-days, and SIR by unit
- Central line utilization ratio by unit
- Bundle compliance rates (insertion and maintenance)
- Total PICC insertions and PICC appropriateness rate

**Quarterly reporting (to VAT program leadership):**
- First-attempt success rate by device type and inserter
- Phlebitis rate by unit and medication category
- Infiltration/extravasation events with grade distribution
- PICC-associated DVT rate
- Catheter malposition rate
- Median dwell time by device type

**Annual reporting (to hospital leadership and governing board):**
- Year-over-year CLABSI rate trend
- SIR trend vs. national NHSN benchmarks
- ROI calculation: CLABSIs prevented × cost per CLABSI
- VAT volume and productivity data
- Credentialing/competency status for all VAT members

### Data Sources

| Metric | Primary Data Source |
|---|---|
| CLABSI rate, SIR | NHSN (submitted by infection control) |
| Central line-days | NHSN daily surveillance; EHR device tracking |
| Bundle compliance | Electronic insertion checklists; audit data |
| PICC insertion volume | Procedure documentation database |
| First-attempt success | Insertion documentation (requires structured data field) |
| Phlebitis rate | Nursing documentation audit |
| DVT rate | ICD-10 diagnosis codes linked to PICC records |

**Critical data gap:** Most EHRs do not automatically capture first-attempt success, phlebitis grade, or insertion attempts. These must be added as structured data fields in the insertion documentation template. Ad hoc chart audits are an alternative but resource-intensive.

---

## Process Metrics vs. Outcome Metrics

A complete quality program measures both:

**Process metrics** (did we do the right things?):
- Bundle compliance rates (insertion, maintenance)
- Dressing change interval compliance
- PICC appropriateness rate
- Daily necessity review documentation rate

**Outcome metrics** (did the right things produce good results?):
- CLABSI rate
- First-attempt success rate
- Phlebitis rate
- DVT rate

**Both are required.** High process compliance with poor outcomes indicates a process that does not work (or is not being followed faithfully). Good outcomes without process measurement creates vulnerability — when outcomes worsen, you won't know why or where to intervene.

---

## Related Resources

**Related guides:**
- [Vascular Access Team Evidence and ROI](/guides/vascular-access-team-models/vascular-access-team-evidence-roi/)
- [CLABSI Definition and Epidemiology](/guides/clabsi-prevention/clabsi-definition-epidemiology/)
- [CLABSI Maintenance Bundle](/guides/clabsi-prevention/clabsi-maintenance-bundle/)
- [Vascular Access Team Models: Complete Reference](/guides/vascular-access-team-models/)

---

## References

2. Dudeck MA, et al. (2015). National Healthcare Safety Network report, data summary for 2013. *Am J Infect Control*, 43(3):206–221.
3. Chopra V, et al. (2015). The Michigan Appropriateness Guide for Intravenous Catheters (MAGIC). *Ann Intern Med*, 163(6 Suppl):S1–S40.
4. Alexandrou E, et al. (2015). International prevalence of the use of peripheral intravenous catheters. *J Hosp Med*, 10(8):530–533.
5. Maki DG, et al. (2006). The risk of bloodstream infection in adults with different intravascular devices: a systematic review of 200 published prospective studies. *Mayo Clin Proc*, 81(9):1159–1171.
6. CVAA. (2021). Quality Indicators for Infusion Therapy. Supplement to *J Infus Nurs*, 44(Suppl 1).
