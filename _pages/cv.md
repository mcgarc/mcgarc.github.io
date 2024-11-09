---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

You can also [download my CV](/files/cameron_mcgarry_cv.pdf) as a PDF. This is generated with my LaTeX class, [Resumay](https://github.com/mcgarc/Resumay).

Employment
=====

* Research Associate, Quantum Control Laboratory, University of Sydney
* Research Associate, Quantum Photonics Group, University of Bath

Education
======
* PhD in Controlled Quantum Dynamics, Centre for Cold Matter, 2022 
* MPhys in Physics, Corpus Christi College, The University of Oxford, 2017

  
Skills
======
* Quantum physics, especially:
  * Ion trapping
  * Atomic physics
  * Quantum optics
  * Laser science
* Computational skills:
  * Python
  * Artiq
* Microfabrication
* Optical fibre fabrication
* Management



Publications
======
  <ul>{% for post in site.publications reversed %}
    {% if post.category != 'thesis' %}
    {% include archive-single-cv.html %}
    {% endif %}
  {% endfor %}</ul>
  
Conference presentations
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>

Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
