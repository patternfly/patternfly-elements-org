---
layout: layout-basic.html
title: Button
tags:
  - component
---
<script type="module" src="/node_modules/@patternfly/pfe-button/dist/pfe-button.min.js"></script>

::: section header
# Button
:::

::: section
## Overview 
Buttons allow users to perform an action when triggered. They feature a text label, a background or a border, and icons.

<div>
  <pfe-button>
    <button>Primary</button>
  </pfe-button>
  <pfe-button pfe-variant="secondary">
    <button>Secondary</button>
  </pfe-button>
  <pfe-button pfe-variant="tertiary">
    <button>Tertiary</button>
  </pfe-button>
  <pfe-button pfe-variant="danger">
    <button>Danger</button>
  </pfe-button>
  <pfe-button pfe-variant="control">
    <button>Control</button>
  </pfe-button>
</div>
:::

:::section
## Installation
```shell
npm install @patternfly/pfe-button
```
:::

::: section
## Usage
When using this component, you must provide a standard HTML Button Element as the only light DOM child of `pfe-button`.
```html
<pfe-button>
  <button>My Button</button>
</pfe-button>
```
:::

::: section
## Slots
None
:::

::: section
## Attributes
`disabled` (observed): Disables the button

`pfe-variant`: Changes the style of the button. Possible values are
- primary (default)
- secondary
- tertiary
- danger
- control
:::

::: section
## Methods
None
:::

::: section
## Events
### pfe-button:click
This event is fired when `<pfe-button>` is clicked and serves as a way to
capture click events if necessary.
:::

::: section
## Styling hooks
None
:::