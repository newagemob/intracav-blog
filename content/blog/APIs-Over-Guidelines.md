+++
title = "APIs Over Guidelines"
date = 2025-05-03T21:36:02-05:00
lastmod = 2025-05-03T21:36:02-05:00
tags = ["Vascular Access", "Policies", "Guidelines", "Human Judgement", "Open Source Healthcare"]
category = ["Healthcare Technology", "Clinical Guidelines", "Open Source"]
content_type = "blog"
audience = "clinician"
author = ["I.M. Wright"]
description = "Clinical guidelines as static PDFs are failing healthcare. Learn why API-first medical knowledge distribution is essential for modern clinical decision support and how open-source approaches can revolutionize healthcare interoperability."
summary = "Why healthcare must move beyond PDF guidelines to API-first medical knowledge: exploring the interoperability crisis and the case for machine-readable clinical protocols."
slug = "apis-over-guidelines"
keywords = ["Healthcare APIs", "Clinical Guidelines", "Medical Interoperability", "FHIR", "Open Source Healthcare", "Clinical Decision Support", "HL7"]
+++

# Clinical Guidelines Are Rotting: The Case for API-First Medical Knowledge

*"All the projects I've had to make, I've made because I couldn't find anything better. I much prefer other people solving my problems. Me having to come up with a project is actually a failure on the world." - Linus Torvalds*

## The Problem: PDFs Aren't Healthcare APIs

Every day, thousands of clinicians make life-altering decisions based on clinical guidelines that exist primarily as static PDF documents or basic web pages. The American College of Cardiology publishes heart failure guidelines as downloadable documents. The Infectious Diseases Society of America distributes antimicrobial recommendations through their website. And countless hospital systems maintain internal protocols as Word documents on SharePoint sites.

This isn't just an aesthetic issue—it's an interoperability crisis.

When guidelines exist only as human-readable documents, they can't be directly integrated into the systems where decisions actually happen. They become reference materials that require manual interpretation and implementation, creating endless opportunities for inconsistency, delay, and error.

Let me be clear: the clinical expertise behind these guidelines is extraordinary. The problem isn't the knowledge itself—it's how we package and distribute it.

## The Consequence: A Fragmented Knowledge Ecosystem

The consequences of this document-centric approach ripple throughout healthcare:

**Guidelines become stale on arrival.** The average clinical guideline takes 17 months to develop and publish. By the time it reaches clinicians, new evidence may already challenge its recommendations. When updates require complete republication, the cycle perpetuates.

**Implementation becomes a secondary translation project.** Each healthcare system must independently interpret guidelines and encode them into order sets, alerts, and documentation templates—duplicating effort across thousands of organizations and introducing inconsistencies in how the same evidence is applied.

**Knowledge becomes fragmented across specialties.** A patient with diabetes, heart failure, and chronic kidney disease is subject to guidelines from three different specialty societies, each with its own publication cycle, terminology, and emphasis. The burden of reconciling these falls on busy clinicians at the point of care.

**Organizations struggle with sustainability.** Guideline developers face a fundamental business challenge: their traditional publication models are increasingly at odds with digital healthcare's need for programmatic access to knowledge.

## The Vision: Guidelines as Infrastructure

Imagine instead if clinical guidelines were built like modern software APIs—programmatically accessible, versioned, and designed for integration:

A hospital's Electronic Health Record could make a simple call like:

```
GET /diabetes/a1c-targets/v2023.4?patient_age=67&renal_function=reduced
```

And receive a structured response:

```json
{
  "target_range": {
    "lower": 7.0,
    "upper": 8.0,
    "unit": "percent"
  },
  "evidence_level": "B",
  "rationale": "Moderate glycemic control is appropriate given age and renal status",
  "references": [
    {
      "id": "pmid:34128996",
      "relevance": "primary"
    }
  ],
  "last_updated": "2025-04-15"
}
```

This isn't science fiction. The financial industry transformed itself through APIs like Stripe and Plaid that make complex operations accessible through simple, standardized interfaces. Climate scientists share models through programmatic interfaces. Even government regulations are increasingly available as machine-readable data.

Yet in healthcare—where precision and timeliness literally save lives—we're stuck with PDFs, Word documents, and manually coded order sets.

## The Architecture: Certified Open Source for Healthcare Knowledge

Traditional open source models won't work for clinical knowledge—healthcare requires higher standards for verification, evidence, and governance. What we need is **certified open source**: a model that combines rigorous clinical oversight with the technical infrastructure of modern collaborative development.

Here's what this would look like:

**Version-controlled knowledge repositories** where guidelines are maintained not as documents but as structured data with complete audit trails. Each recommendation would carry metadata about its evidence basis, approval chain, and relationship to other knowledge.

**Formal governance processes** that verify contributor credentials and maintain appropriate specialty oversight. Unlike traditional open source where anyone can contribute, healthcare repositories would implement verification systems ensuring contributors have relevant clinical expertise.

**Machine-readable formats** designed for implementation, not just reading. Guidelines would be published simultaneously as human-readable documents and as API endpoints with standardized schemas.

**Implementation toolkits** that help systems consume and apply guidelines consistently. Instead of each organization independently translating guidelines into EHR configurations, they could leverage reference implementations.

**Continuous update mechanisms** that allow incremental revisions as new evidence emerges. Rather than waiting for complete guideline rewrites every five years, specific recommendations could be updated as soon as supporting evidence changes.

## Real-World Examples: This Is Already Starting

This isn't purely theoretical. Components of this vision already exist:

**HL7's FHIR Clinical Practice Guidelines** implementation guide provides standardized formats for expressing guidelines in machine-readable form. Though early in adoption, it demonstrates the technical feasibility.

**The COVID-19 pandemic** forced rapid, distributed knowledge development. The NIH's COVID-19 Treatment Guidelines evolved through continuous updates rather than periodic republication, showing the value of incremental knowledge refinement.

**The OpenEHR Foundation** has demonstrated how clinical archetypes can be collaboratively developed and maintained while preserving rigorous clinical governance.

What's missing isn't the technical capability—it's the organizational transformation and standards adoption to make this approach mainstream.

## The Barriers: Why We're Stuck

If this approach is so promising, why hasn't it happened? Several barriers stand in our way:

**Business model challenges.** Organizations whose revenue depends on publishing guidelines face difficult transitions to service-oriented models focused on implementation support rather than content access.

**Technical infrastructure gaps.** Building robust API-driven knowledge systems requires significant investment and expertise that many medical societies lack.

**Governance concerns.** Clinical leaders rightfully worry about quality control in more open systems, requiring thoughtful governance frameworks that maintain appropriate oversight.

**Cultural resistance.** Both guideline developers and healthcare systems are accustomed to document-centric workflows, making change management as important as technical transformation.

**Standards fragmentation.** Despite promising work from HL7 and others, we lack universal standards for encoding clinical knowledge as APIs.



## A Path Forward: What We Must Do

If we're serious about transforming clinical knowledge from static documents to living infrastructure, we need action across the healthcare ecosystem:

**For guideline organizations:** Start developing API-first publishing pipelines alongside traditional documents. Explore service-oriented business models focused on implementation support, certification programs, and integration tools rather than document access alone.

**For EHR vendors:** Build standardized interfaces for consuming structured guidelines from trusted sources. Move beyond proprietary knowledge management toward open standards that enable knowledge sharing across systems.

**For healthcare systems:** Demand machine-readable guidelines from specialty organizations. Prioritize vendors who support automated knowledge integration. Build technical capabilities to consume and implement guideline APIs.

**For standards bodies:** Accelerate development of universal formats for guideline representation. Create certification mechanisms that preserve clinical governance while enabling programmatic access.

**For developers:** Build reference implementations and open-source tools that demonstrate the power of API-driven clinical knowledge. Create bridges between existing guidelines and modern integration patterns.

## Beyond Documents: Clinical Knowledge as Living Infrastructure

We must stop thinking of guidelines as documents to be read and start viewing them as infrastructure to be implemented. This isn't about diminishing clinical expertise—it's about amplifying it through better distribution channels.

The organizations that embrace this transformation won't be threatened by openness—they'll be defined by their ability to make their expertise more accessible, implementable, and impactful than ever before.

Medical knowledge is too important to be trapped in PDFs. It's time we treat clinical guidelines with the same engineering rigor we apply to the systems that deliver medications, process lab results, and monitor vital signs. Our patients deserve nothing less.

---

*This post represents my perspectives as a developer working with healthcare systems. I welcome discussion and feedback, particularly from clinicians and guideline developers, as we collectively work to improve healthcare knowledge distribution and implementation.*
