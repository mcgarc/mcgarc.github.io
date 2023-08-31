---
title: Research output
layout: page
permalink: '/research'
---

<!-- Add talks when I have some-->
This is just a list of my research output, including poster presentations and
papers.

<ul>
  {% for page in site.pages %}
  {% if page.category == 'research' %}
    <li><a href="{{ page.url }}">{{ page.title }}</a></li>
  {% endif %}
  {% endfor %}
</ul>
