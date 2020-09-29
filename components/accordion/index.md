---
layout: layout-basic.html
title: Accordion
tags:
  - component
---
<script type="module" src="/node_modules/@patternfly/pfe-accordion/dist/pfe-accordion.min.js"></script>
<script type="module" src="/node_modules/@patternfly/pfe-cta/dist/pfe-cta.min.js"></script>

::: section header
# {{ title }}
:::

::: section
## Overview
Accordions toggle the visibility of sections of content. They feature panels that consist of a section text label and a caret icon that collapses or expands to reveal more information.

<pfe-accordion>
  <pfe-accordion-header>
    <h3>Why do wizards need money if they could just create it?</h3>
  </pfe-accordion-header>
  <pfe-accordion-panel>
    <p>There is legislation that decides what you can conjure and what you can not. Because things that you conjure out of thin air will not last, it is illegal in the wizarding world.</p>
    <pfe-cta>
      <a href="#">Learn more about legislation in the wizarding world</a>
    </pfe-cta>
  </pfe-accordion-panel>
  <pfe-accordion-header>
    <h3>Why doesn't Harry have a portrait of his parents?</h3>
  </pfe-accordion-header>
  <pfe-accordion-panel>
    <p><a href="#">The characters in the portraits</a> are not actually ghosts. They mainly are there just to repeat common phrases or serve as a general <a href="#">representation of the individual</a> they depict. A portrait of his parents would not be of much help to Harry.</p>
  </pfe-accordion-panel>
  <pfe-accordion-header>
    <h3>Why is Harry considered a half-blood if both of his parents could use magic?</h3>
  </pfe-accordion-header>
  <pfe-accordion-panel>
    <p>Because Harry's grandparents were not able to do magic. This is generally frowned upon by those who consider themselves pure, such as the Malfoy's or other antagonists.</p>
  </pfe-accordion-panel>
  <pfe-accordion-header>
    <h3>Where do the main characters work as adults?</h3>
  </pfe-accordion-header>
  <pfe-accordion-panel>
    <p>Harry and Hermione are at the Ministry: he ends up leading the Auror department. Ron helps George at the joke shop and does very well. Ginny becomes a professional Quidditch player and then sportswriter for the Daily Prophet.</p>
    <pfe-cta>
      <a href="https://www.pottermore.com/collection/characters" target="blank">Read more about the characters</a>
    </pfe-cta>
  </pfe-accordion-panel>
</pfe-accordion>

### Disclosure variation
Accordions need to have at least two section panels. If only one panel is needed, a Disclosure is presented instead. Accordions are used to organize more important information whereas a disclosure is used to store supplementary content that might not be a crucial part of the user experience.

<pfe-accordion>
  <pfe-accordion-header>
    <h3>This is a disclosure</h3>
  </pfe-accordion-header>
  <pfe-accordion-panel>
    <p>A Disclosure toggles the visibility of sections of content. It features one panel that consists of a caret icon and a section text label that collapses or expands to reveal more information.</p>
  </pfe-accordion-panel>
</pfe-accordion>
:::