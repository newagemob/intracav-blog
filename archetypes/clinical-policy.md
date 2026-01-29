+++
# ========================================
# CLINICAL POLICY ARCHETYPE
# Medical-grade policy documentation
# ========================================

# Document Identity
document_id = "XX-XX-000"  # e.g., IC-CP-001
document_type = "clinical_policy"
title = "{{ replace .Name "-" " " | title }}"

# Versioning
version = "1.0.0"
effective_date = "{{ .Date.Format "2006-01-02" }}"
revision_date = "{{ .Date.Format "2006-01-02" }}"
next_review = ""  # YYYY-MM-DD
supersedes = ""   # Previous version reference

# Authority
author = [""]
approver = ""
authority = ""

# Classification (Hugo Taxonomies)
content_type = "policies"
category = [""]
audience = "clinician"
clinical_domain = [""]

# Status
status = "draft"  # draft | review | active | superseded | archived
regulatory_refs = [""]

# Hugo Metadata
date = {{ .Date }}
lastmod = {{ .Date }}
description = ""           # SEO meta description (150-160 characters)
summary = ""               # Short summary for listings and social sharing
slug = ""                  # URL slug (optional)
image = ""                 # Featured image URL for Open Graph
keywords = []              # Additional SEO keywords
draft = true
+++

## Executive Summary

Brief overview of the policy purpose and scope.

## Scope

Who this policy applies to and under what circumstances.

## Definitions

Key terms used in this policy.

## Policy Statement

The normative requirements of this policy.

## Procedure

1. First step description...
2. Second step description...

## Regulatory Compliance

List any regulatory requirements here.

## References

1. Citation here...

---

**Document Classification:** Clinical Policy  
**Version:** 1.0.0  
**Effective Date:** {{ .Date.Format "January 2, 2006" }}
