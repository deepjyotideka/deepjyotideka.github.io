---
layout: page
title: research
permalink: /research/
description: current research projects
nav: true
nav_order: 3
horizontal: false
---

<!-- pages/projects.md -->
My current research projects are in the following areas:

1. **Monitoring and estimation in power grids**  
Development of learning and inference methods that integrate power system physics with statistical machine learning to enable reliable topology and state estimation, as well as fault detection.

2. **Machine learning–augmented optimization of power systems**  
Development of surrogate models, including deep neural networks and Gaussian processes, to enable computationally efficient and feasible solutions for optimal power flow problems.

3. **Integration of datacenters in power system operations**  
Modeling, planning, and operation of data centers to support grid reliability while respecting workload constraints and infrastructure limits.

4. **Coordination of flexible resources at grid edge**  
Development of scalable coordination algorithms for distributed energy resources, including storage and responsive loads, under operational and user-level constraints.

<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
