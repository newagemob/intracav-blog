+++
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
date = {{ .Date }}
content_type = "policies"  # Required: "policies" or "blog"
audience = "clinician"     # Required: "clinician" or "patient"
category = []              # Array of categories
tags = []                  # Array of tags (for internal use)
author = []                # Array of author names
description = ""           # Optional description for listings
+++
