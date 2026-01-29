+++
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
date = {{ .Date }}
lastmod = {{ .Date }}
content_type = "policies"  # Required: "policies" or "blog"
audience = "clinician"     # Required: "clinician" or "patient"
category = []              # Array of categories for SEO and navigation
tags = []                  # Array of tags (for internal use and SEO)
author = []                # Array of author names
description = ""           # SEO meta description (150-160 characters recommended)
summary = ""               # Short summary for listings and social sharing
slug = ""                  # URL slug (optional, defaults to filename)
image = ""                 # Featured image for social sharing (Open Graph)
keywords = []              # Additional SEO keywords beyond categories/tags
draft = false              # Set to true to prevent publishing
+++

# {{ replace .File.ContentBaseName "-" " " | title }}

Write your content here...
