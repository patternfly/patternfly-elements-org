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

We've created a palette of six abstract color swatches for you to plug in your brand colors. Many of the components have basic theming options such as type or variant that will utilize these colors in some way. But beyond that, you may also apply a `pfe-color` attribute if you choose to add further customizations. The abstract naming conventions allow you to evolve your colors over time, without trapping your color choices in the code, such as `<pfe-card pfe-color="red">`.

#### Swatches:
- Base
    - Choose your most neutral color to go here. Note that some container components (i.e. band and card) will automatically use this color. 
- Lightest / Darker / Darkest
    - Ideally these swatches should build a spectrum of shades from the base color, but you may add more hue if desired. The general intent is that these swatches will be applied to container components, to visually group related content. 
- Accent 
    - This should be the brightest and boldest color in your palette.
- Complement
    - Choose a softer, secondary color which can also be used to draw attention or convey state change.

*Note*: If you deviate from the general convention of the original color and you need the text to change to light, dark, or desaturated, you can also change the theme along with it. For example:

```
--pfe-theme--color--surface--accent: lightyellow;
--pfe-theme--color--surface--accent--theme: light;

--pfe-theme--color--surface--base: navy;
--pfe-theme--color--surface--accent--theme: saturated;
```


Often components will make decisions about how to best utilize those colors, which is “baked in”. For example, a standard CTA, or [call-to-action component](/components/call-to-action), uses the standard link color in its default state. But, if you set the `priority` attribute value to `primary`, the CTA will make use of the accent color from the palette.

<pfe-cta >
  <a href="#">Call to action link</a>
</pfe-cta>

<pfe-cta pfe-priority="primary">
  <a href="#">Call to action link (Type: Primary)</a>
</pfe-cta>

```html
<pfe-cta >
  <a href="#">Call to action link</a>
</pfe-cta>

<pfe-cta pfe-priority="primary">
  <a href="#">Call to action link (Type: Primary)</a>
</pfe-cta>
```

Note the correlation here between the priority level of the CTA and the color choice. Because the priority level should be the most prominent call-to-action in the viewport, it uses the bright, attention-grabbing accent color. The CTA type "secondary" and the default CTA command less attention.

In addition, each component comes equipped to adjust its colors depending on where its placed on the page. For example, should you need to put a default CTA (which is a blue on a dark blue card, the color of the text will need to adapt. This happens via a behind-the-scenes custom property and attribute combo, which inform the component of the current context (on a saturated background) by giving the on attribute the value of saturated.

<div class="pfe-l-grid pfe-m-gutters">
  <pfe-card class="pfe-l-grid__item pfe-m-3-col pfe-m-6-col" pfe-color="complement">
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

Should you have custom theming needs for a particular use case, you may set individual CTAs to both a priority level to change the style and also apply a particular color from the palette. For example, you can pass a value of `complement` into the `pfe-color` attribute like this:

<pfe-cta pfe-priority="primary" pfe-color="complement">
  <a href="#">Primary</a>
</pfe-cta>

```html
<pfe-cta pfe-priority="primary" pfe-color="complement">
  <a href="#">Primary</a>
</pfe-cta>
```

Please note that if you are opting to override colors of components, they will not automatically respond to the theme context.
:::
