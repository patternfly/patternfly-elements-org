---
layout: layout-basic.html
title: Colors
tags:
  - theming
---

::: section header
# {{ title }}
:::

::: section
## Color theory
### Text and links

Text and links, being fundamental pieces of any web property, have their own set of variables. These variables assume a light background by default, assigning typography colors that pass accessibility when placed on white or very light gray contexts. In addition, we provide contextual variables for these typographical elements for when they exist inside a dark or saturated context. Text in a black card for example would need to flip to white to pass accessibility standards while links on a blue or red shade would need to update to white in order to be visible.

You can set the value of these typography color variables to something in your brand palette but be sure to validate them against a [contrast checker](https://webaim.org/resources/contrastchecker/) to ensure they continue to pass accessibility standards when set against your surface or UI palettes. Aim for AAA status if you can! ⭐

Here are a few examples:

```css
--pfe-theme--color--text: #151515;
--pfe-theme--color--text--on-saturated: #eee;
--pfe-theme--color--link: #0066cc;
--pfe-theme--color--link--hover: #004080;
--pfe-theme--color--link--focus--on-dark: #2b9af3;
--pfe-theme--color--link--visited--on-saturated: #ffffff;
```
:::

::: section
## UI Colors

A user interface uses color to convey:

 - **Feedback**: Error and success states
 - **Information**: Charts, graphs, and wayfinding elements
 - **Hierarchy**: Showing structured order through color and typography

We've exposed 2 UI color variants for the UI elements in the design system to represent your brand:

 - Base
 - Accent

These colors are used throughout PatternFly Elements. **Accent** is the color which should stand out the most. For example, if your brand colors are orange and gray, we recommend you set orange as the accent color.  In doing this, that orange will now appear on primary level call-to-action buttons and other elements that need to have more weight in the visual hierarchy of the page. 

UI colors are meant to provide basic colors for other page elements besides links and body text. 

If you are overriding these colors, you can do so by setting the CSS variables to have new values in the stylesheet of your page or app. You'll want to override the color itself, but also the corresponding hover variant and text color (that would be used if there was text on top of this color, like a button):

```css
:root {
  --pfe-color--ui-base:               #030070;
  --pfe-color--ui-base--hover:        #010047;
  --pfe-color--ui-base--text:         #ffffff;
  --pfe-color--ui-base--text--hover:  #eeeeee;
}
```
:::

::: section
## Surface Colors

It's also a good idea to choose some neutral colors for general UI backgrounds and borders—usually grays. Surface color encompass any "surface" that are typically part of container-type elements, like cards or bands. These colors should be harmonious with your corporate style guide (if you have one), but they may not necessarily be your company’s primary brand colors. 

We've exposed 7 color variants for this design system to represent your brand:

 - Lightest
 - Base
 - Darker
 - Darkest
 - Complement
 - Accent

All components automatically observe and react to the attribute `on` which can equal 1 of 3 possible contexts:

- `light`
- `dark`
- `saturated`

This can be overriden by manually applying the `pfe-theme` attribute with one of the following values:

- `light`
- `dark`
- `saturated`


*Note*: If you deviate from the general convention of the original color and you need the text to change to light, dark, or desaturated, you can also change the theme along with it. For example:

```
--pfe-theme--color--surface--accent: lightyellow;
--pfe-theme--color--surface--accent--theme: light;

--pfe-theme--color--surface--base: navy;
--pfe-theme--color--surface--accent--theme: saturated;
```

:::