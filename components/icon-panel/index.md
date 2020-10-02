---
layout: layout-basic.html
title: Icon panel
package: pfe-icon-panel
tags:
  - component
---
<script type="module" src="/node_modules/@patternfly/{{ package }}/dist/{{ package }}.min.js"></script>
<script type="module" src="/node_modules/@patternfly/pfe-cta/dist/pfe-cta.min.js"></script>

::: section header
# {{ title }}
:::

::: section
## Overview
<pfe-icon-panel icon="rh-server-stack">
  <h3 slot="pfe-icon-panel--header">This is icon panel</h3>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  <pfe-cta slot="pfe-icon-panel--footer">
    <a href="https://pfelements.github.io">Learn more about PFElements</a>
  </pfe-cta>
</pfe-icon-panel>
:::

::: section
## Installation

```shell
npm install @patternfly/{{ package }}
```
:::

::: section
## Usage

```html

```
:::

::: section
## Slots
:::

::: section
## Attributes
:::

::: section
## Methods
:::

::: section
## Events
:::

::: section
## Styling hooks
:::