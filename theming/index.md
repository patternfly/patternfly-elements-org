---
layout: layout-basic.html
title: Theming overview
---

<script type="module" src="/node_modules/@patternfly/pfe-cta/dist/pfe-cta.min.js"></script>
<script type="module" src="/node_modules/@patternfly/pfe-card/dist/pfe-card.min.js"></script>

::: section header
# {{ title }}
<p class="tagline">Use our beautifully designed theme, or modify it to your needs.</p>
:::

::: section
Every PatternFly Element is built to automatically utilize the colors defined in the [palette](/theming/palette), which you control! Generally speaking, the only thing you will need to do is re-define the CSS variables to match your brand and you’re done.

Often components will make decisions about how to best utilize those colors, which is “baked in”. For example, a standard CTA, or [call-to-action component](/components/call-to-action), uses the standard link color in its default state. But, if you set the `priority` attribute value to `primary`, the CTA will make use of the accent color from the palette.

<pfe-cta pfe-priority="primary">
  <a href="#">Primary</a>
</pfe-cta>

```html
<pfe-cta pfe-priority="primary">
  <a href="#">Primary</a>
</pfe-cta>
```

This is because the accent color should be the brightest and boldest, and the primary call-to-action should be the most attention-grabbing item on the page.

@KENDALL: I don't the content below is accurate

Additionally, each component comes equipped to adjust its colors depending on where it’s placed on the page. For example, should you need to put a default CTA (which is blue) on a dark blue card, the CTA will need to adapt. You can do this by informing the component of its context (on a dark background) by giving the on attribute the value of dark.

<div class="pfe-l-grid pfe-m-gutters">
  <pfe-card class="pfe-l-grid__item pfe-m-3-col" pfe-color="complement">
    <pfe-cta>
      <a href="#">Default</a>
    </pfe-cta>
  </pfe-card>
</div>

```html
<pfe-card pfe-color="complement">
  <pfe-cta>
    <a href="#">Default</a>
  </pfe-cta>
</pfe-card>
```

@KENDALL: I don't the content below is accurate

Should you need to deviate from this color usage, and set your primary CTA to use the complement color from the palette, you may also pass a value of `complement` into the `pfe-color` attribute, like this:

<pfe-cta pfe-priority="primary" pfe-color="complement">
  <a href="#">Primary</a>
</pfe-cta>

```html
<pfe-cta pfe-priority="primary" pfe-color="complement">
  <a href="#">Primary</a>
</pfe-cta>
```

Please note that if you are opting to override colors of components, they will not automatically respond to the theme context any longer.
:::