---
layout: layout-basic.html
title: Badge
package: pfe-badge
tags:
  - component
---
<script type="module" src="/node_modules/@patternfly/{{ package }}/dist/{{ package }}.min.js"></script>

::: section header
# {{ title }}
:::

::: section
## Overview
The badge component provides a way to have small numerical descriptors for UI elements.

<pfe-badge number="17">17</pfe-badge>
<pfe-badge number="900" pfe-threshold="100">900</pfe-badge> 
<pfe-badge pfe-state="info" number="10">10</pfe-badge>
<pfe-badge pfe-state="success" number="20">20</pfe-badge>
<pfe-badge pfe-state="moderate" number="30">30</pfe-badge>
<pfe-badge pfe-state="important" number="40">40</pfe-badge>
<pfe-badge pfe-state="critical" number="50">50</pfe-badge>
:::

::: section
## Installation

```shell
npm install @patternfly/{{ package }}
```
:::

::: section
## Usage
To provide context to your badge, it is highly encouraged that you also include an `aria-label` attribute in your markup.

### Default
<pfe-badge aria-label="2 unread messages" number="2">2</pfe-badge>
```html
<pfe-badge aria-label="2 unread messages" number="2">2</pfe-badge>
```

### With a threshold
This adds a "+" next to the number once the threshold value has been passed.

<pfe-badge aria-label="2 unread messages" number="20" pfe-threshold="10">20</pfe-badge>

```html
<pfe-badge aria-label="2 unread messages" number="20" pfe-threshold="10">20</pfe-badge>
```

### With a state
This adds a background color to the badge based on the state.

<pfe-badge pfe-state="info" number="10">10</pfe-badge>
<pfe-badge pfe-state="success" number="20">20</pfe-badge>
<pfe-badge pfe-state="moderate" number="30">30</pfe-badge>
<pfe-badge pfe-state="important" number="40">40</pfe-badge>
<pfe-badge pfe-state="critical" number="50">50</pfe-badge>

```html
<pfe-badge pfe-state="info" number="10">10</pfe-badge>
<pfe-badge pfe-state="success" number="20">20</pfe-badge>
<pfe-badge pfe-state="moderate" number="30">30</pfe-badge>
<pfe-badge pfe-state="important" number="40">40</pfe-badge>
<pfe-badge pfe-state="critical" number="50">50</pfe-badge>
```
:::

::: section
## Slots
None
:::

::: section
## Attributes
### number
Sets a numeric value for a badge. You can pair it with `pfe-threshold` attribute to add a `+` sign if the number exceeds the threshold value.

### pfe-threshold
Sets a threshold for the numeric value and adds `+` sign if the numeric value exceeds the threshold value.

### pfe-state
Options include moderate, important, critical, success, info. 
:::

::: section
## Methods
None
:::

::: section
## Events
None
:::

::: section
## Styling hooks
None
:::