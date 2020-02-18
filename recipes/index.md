---
title: Recipes
layout: page
permalink: '/recipes'
---

These are some recipes that I like. I don't normally cook with exact measures,
so apply common sense and taste as you go to make these work!


<ul>
  {% for page in site.pages %}
  {% if page.category == 'recipe' %}
    <li><a href="{{ page.url }}">{{ page.title }}</a></li>
  {% endif %}
  {% endfor %}
</ul>
