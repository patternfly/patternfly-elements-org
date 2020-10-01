---
layout: layout-basic.html
title: Icon
package: pfe-icon
tags:
  - component
---
<script type="module" src="/node_modules/@patternfly/{{ package }}/dist/{{ package }}.min.js"></script>
<style>
  main.basic pfe-icon {
    font-size: 4rem;
  }

  main.basic pfe-icon[pfe-circled] {
    margin-right: 8px;
    margin-bottom: 8px;
  }
</style>

::: section header
# {{ title }}
:::

::: section
## Overview

Icon delivers icon elements that can be sized, colored, and circled. Other icon sets can also be registered and added for use.

<pfe-icon icon="rh-leaf"></pfe-icon>
<pfe-icon icon="rh-protected" pfe-color="complement"></pfe-icon>
<pfe-icon icon="rh-code" pfe-color="accent"></pfe-icon>
<pfe-icon icon="rh-cloud" pfe-color="darkest"></pfe-icon>

### Circled
<pfe-icon icon="rh-sports-play" pfe-circled></pfe-icon>
<pfe-icon icon="rh-fast-jet" pfe-circled pfe-color="complement"></pfe-icon>
<pfe-icon icon="rh-shopping-cart" pfe-circled pfe-color="accent"></pfe-icon>
<pfe-icon icon="rh-server-stack" pfe-circled pfe-color="darkest"></pfe-icon>
:::

::: section
## Installation

```shell
npm install @patternfly/{{ package }}
```
:::

::: section
## Usage

### Default
<pfe-icon icon="rh-leaf"></pfe-icon>
<pfe-icon icon="rh-protected"></pfe-icon>
<pfe-icon icon="rh-code"></pfe-icon>
<pfe-icon icon="rh-cloud"></pfe-icon>
```html
<pfe-icon icon="rh-leaf"></pfe-icon>
<pfe-icon icon="rh-protected"></pfe-icon>
<pfe-icon icon="rh-code"></pfe-icon>
<pfe-icon icon="rh-cloud"></pfe-icon>
```

### Size
The default size is 1em, so icon size matches text size.  `2x`, etc, are multiples of font size.  `sm`, `md`, etc are fixed pixel-based sizes.

<pfe-icon icon="rh-leaf" pfe-size="sm"></pfe-icon>
<pfe-icon icon="rh-leaf" pfe-size="md"></pfe-icon>
<pfe-icon icon="rh-leaf" pfe-size="lg"></pfe-icon>
<pfe-icon icon="rh-leaf" pfe-size="xl"></pfe-icon>
<pfe-icon icon="rh-leaf" pfe-size="2x"></pfe-icon>
<pfe-icon icon="rh-leaf" pfe-size="3x"></pfe-icon>
<pfe-icon icon="rh-leaf" pfe-size="4x"></pfe-icon>

```html
<pfe-icon icon="rh-leaf" pfe-size="sm"></pfe-icon>
<pfe-icon icon="rh-leaf" pfe-size="md"></pfe-icon>
<pfe-icon icon="rh-leaf" pfe-size="lg"></pfe-icon>
<pfe-icon icon="rh-leaf" pfe-size="xl"></pfe-icon>
<pfe-icon icon="rh-leaf" pfe-size="2x"></pfe-icon>
<pfe-icon icon="rh-leaf" pfe-size="3x"></pfe-icon>
<pfe-icon icon="rh-leaf" pfe-size="4x"></pfe-icon>
```

### Circled
<pfe-icon icon="rh-leaf" pfe-circled></pfe-icon>
<pfe-icon icon="rh-leaf" pfe-circled pfe-color="darkest"></pfe-icon>

```html
<pfe-icon icon="rh-leaf" pfe-circled></pfe-icon>
<pfe-icon icon="rh-leaf" pfe-circled pfe-color="darkest"></pfe-icon>
```

### Colored
Supported color variants are:
- `base`
- `lightest`
- `lighter`
- `darker`
- `darkest`
- `complement`
- `accent`
- `critical`
- `important`
- `moderate`
- `success`
- `info`
- `default`

This draws from your theming layer to color the icon.  This will set icon color or background color (if `pfe-circled` is true).

<pfe-icon icon="rh-leaf" pfe-color="base"></pfe-icon>
<pfe-icon icon="rh-leaf" pfe-color="lightest"></pfe-icon>
<pfe-icon icon="rh-leaf" pfe-color="lighter"></pfe-icon>
<pfe-icon icon="rh-leaf" pfe-color="darker"></pfe-icon>
<pfe-icon icon="rh-leaf" pfe-color="darkest"></pfe-icon>
<pfe-icon icon="rh-leaf" pfe-color="complement"></pfe-icon>
<pfe-icon icon="rh-leaf" pfe-color="accent"></pfe-icon>
<pfe-icon icon="rh-leaf" pfe-color="critical"></pfe-icon>
<pfe-icon icon="rh-leaf" pfe-color="important"></pfe-icon>
<pfe-icon icon="rh-leaf" pfe-color="moderate"></pfe-icon>
<pfe-icon icon="rh-leaf" pfe-color="success"></pfe-icon>
<pfe-icon icon="rh-leaf" pfe-color="info"></pfe-icon>
<pfe-icon icon="rh-leaf" pfe-color="default"></pfe-icon>

```html
<pfe-icon icon="rh-leaf" pfe-color="base"></pfe-icon>
<pfe-icon icon="rh-leaf" pfe-color="lightest"></pfe-icon>
<pfe-icon icon="rh-leaf" pfe-color="lighter"></pfe-icon>
<pfe-icon icon="rh-leaf" pfe-color="darker"></pfe-icon>
<pfe-icon icon="rh-leaf" pfe-color="darkest"></pfe-icon>
<pfe-icon icon="rh-leaf" pfe-color="complement"></pfe-icon>
<pfe-icon icon="rh-leaf" pfe-color="accent"></pfe-icon>
<pfe-icon icon="rh-leaf" pfe-color="critical"></pfe-icon>
<pfe-icon icon="rh-leaf" pfe-color="important"></pfe-icon>
<pfe-icon icon="rh-leaf" pfe-color="moderate"></pfe-icon>
<pfe-icon icon="rh-leaf" pfe-color="success"></pfe-icon>
<pfe-icon icon="rh-leaf" pfe-color="info"></pfe-icon>
<pfe-icon icon="rh-leaf" pfe-color="default"></pfe-icon>
```
:::

::: section
## Slots
There are no slots, but if you wish to display some text when JS is disabled, you can put some text inside the pfe-icon tag.  For instance, when using a checkmark icon in a server status table, you may wish to display "success" if JS is disabled.
:::

::: section
## Attributes

### icon
For example, `rh-leaf` loads a leaf icon from an icon set named "rh".

Values
- `iconSet-iconName`

### pfe-size
The default size is 1em, so icon size matches text size. `2x`, etc, are multiples of font size. `sm`, `md`, etc are fixed pixel-based sizes.

Values
- sm
- md
- lg
- xl
- 2x
- 3x
- 4x

### pfe-color
The color variant to use. This draws from your theming layer to color the icon. This will set icon color or background color (if pfe-circled is true).

Values
- base
- lightest
- lighter
- darker
- darkest
- complement
- accent
- critical
- important
- moderate 
- success
- info 
- default

### pfe-circled
Whether to draw a circular background behind the icon.
:::

::: section
## Icon sets

Icon sets are defined in detail in [this blog post](https://clayto.com/2019/07/web-component-icons/index.html#icon-sets).

### Register a new icon set

To register a new icon set, choose a global namespace for that set and identify the path at which the SVGs for that set will be hosted.  Consider also the function needed to convert the icon name into the filename on that hosted location.  The `addIconSet` call accepts the namespace (as a string), the path to the SVGs (as a string), and a function for parsing the icon name into the filename.

```javascript
PfeIcon.addIconSet("local", "./", function(name, iconSetName, iconSetPath) {
  var regex = new RegExp("^" + iconSetName + "-(.*)");
  var match = regex.exec(name);
  return iconSetPath + match[1] + ".svg";
});
```

### Updating an existing icon set

To updating an existing icon set, you use the same `addIconSet` function.  The first input which is the icon set namespace is required, as is the new path.  You can optionally pass in a new function for parsing the icon names into filenames.

```javascript
PfeIcon.addIconSet("local", "https://hosted-icons.com/");
```
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
### Color
The `color` attribute is available to pull icon color from your theming layer.  For more fine-grained control, `--pfe-icon--color` is available to override the color of a specific icon or sets of icons and will be applied to either the SVG lines or the background of the circle (if circled). [Examples](https://clayto.com/2019/07/web-component-icons/index.html#setting-icon-colors)

### Background color
The `color` attribute is available to pull background color from your theming layer.  For more fine-grained control, `--pfe-icon--BackgroundColor` is available to override the background color of a specific icon or sets of icons.  Be sure to set `--pfe-icon--theme` to the appropriate theme if you are setting the background-color.
:::