---
layout: page
title: Research
permalink: /research/
description:
nav: true
nav_order: 3
horizontal: false
---

<!-- pages/projects.md -->
My current research projects are in the following areas:

1. **Monitoring and estimation in power grids and dynamical systems**  
Development of learning and inference methods that integrate conservation laws and flow physics with statistical machine learning to enable reliable topology and state estimation, as well as fault detection.

Recent papers:
- *[Adaptive voltage control under topology changes](https://doi.org/10.1016/j.epsr.2026.113622)*, EPSR, 2026.
- *[Tutorial on statistical methods for topology learning](https://doi.org/10.1109/tsg.2023.3271902)*, IEEE Transactions on Smart Grid, 2022.
- *[Learning networks from wide-sense stationary processes](https://doi.org/10.1109/tsipn.2025.3583488)*, IEEE Transactions on Signal and Information Processing, 2025.

2. **Machine learning–augmented optimization of power systems**  
Development of surrogate models, including deep neural networks and Gaussian processes, to enable computationally efficient and feasible solutions for optimal power flow and stability problems.

Recent papers:
- *[Gaussian process for stability-constrained OPF](https://doi.org/10.1016/j.segan.2026.102300)*, EPSR, 2026.
- *[Bayesian neural network for optimization with limited labeled data](https://proceedings.mlr.press/v267/pareek25a.html)*, ICML, 2025.
- *[Machine learning for global optimization of nonconvex QCQP](https://doi.org/10.1287/ijoc.2023.0424)*, INFORMS Journal on Computing, 2025.

3. **Reliable grid integration of data centers**  
Modeling, planning, and operation of data centers to support grid reliability while respecting workload constraints and infrastructure limits.

Recent papers:
- *[Turning data centers into grid assets via storage-compute co-optimization](https://arxiv.org/abs/2605.16190)*, arXiv, 2026.

4. **Coordination of flexible energy resources**  
Development of scalable coordination algorithms for distributed energy resources at the grid edge such as storage and responsive loads, under operational and user-level constraints.

Recent papers:
- *[Coordinated dynamic operating envelopes for flexibility at grid edge](http://arxiv.org/abs/2604.17081)*, arXiv, 2026.
- *[Equitable budget allocation for household energy-efficient retrofitting](https://doi.org/10.1093/pnasnexus/pgag162)*, PNAS Nexus, 2026.

These research efforts are supported in part by the U.S. Department of Energy, Los Alamos National Laboratory, MIT Energy Initiative (MITEI) member companies, and the GE Vernova–MIT Alliance.

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
