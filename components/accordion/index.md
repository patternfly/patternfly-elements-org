---
layout: layout-basic.html
title: Accordion
description: Toggle the visibility of sections of content
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

::: section
## Installation

```shell
npm install @patternfly/pfe-accordion
```
:::

::: section
## Usage

```html
<pfe-accordion>
  <pfe-accordion-header>
    <h2>Why do wizards need money if they could just create it?</h2>
  </pfe-accordion-header>
  <pfe-accordion-panel>
    <p>There is legislation that decides what you can conjure and what you can not. Because things that you conjure out of thin air will not last, it is illegal in the wizarding world.</p>
  </pfe-accordion-panel>
  <pfe-accordion-header>
    <h2>Why doesn't Harry have a portrait of his parents?</h2>
  </pfe-accordion-header>
  <pfe-accordion-panel>
    <p>The characters in the portraits are not actually ghosts. They mainly are there just to repeat common phrases or serve as a general representation of the individual they depict. A portrait of his parents would not be of much help to Harry.</p>
  </pfe-accordion-panel>
</pfe-accordion>
```
:::

::: section
## Slots

### Default slot in pfe-accordion

Place the `pfe-accordion-header` and `pfe-accordion-panel` elements here.

### Default slot in pfe-accordion-header

We expect the light DOM of the `pfe-accordion-header` to be a heading level tag
(h1, h2, h3, h4, h5, h6)

### Default slot in pfe-accordion-panel

Add the content for your accordion panel here.
:::

::: section
## Attributes

**`context`**
Changes the context of the accordion to one of 3 possible themes:
- `light` (default)
- `dark`
- `saturated`

This will override any context being passed from a parent component and will add a style attribute setting the `--theme` variable.

**`disclosure`**
If `pfe-accordion` has one `pfe-accordion-header`, it will get tagged with `disclosure="true"`. This applies a slightly different set of styles: chevron appears on the left side, the header has a single border on all four sides. Applying `disclosure="false"` to a `pfe-accordion` element containing only one header/panel pairing will set the element to display as a standard accordion.
:::

::: section
## Methods
None
:::

::: section
## Events
### pfe-accordion:change

Fires when an pfe-accordion-header is activated. The detail object contains the
following

```javascript
detail: {
  expanded: Boolean
}
```
:::

::: section
## Styling hooks
None
:::