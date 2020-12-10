---
layout: layout-basic.html
title: React
# tags:
#   - frameworkIntegration
---

::: section header
# {{ title }}
:::

::: section
## Using PatternFly Elements in your React app
To get web components to work with React it’s pretty easy and straightforward. If you’d like to follow along, go ahead and [create a new React CodeSandbox on codesandbox.io](https://codesandbox.io/s/new). The React sandbox uses [create-react-app](https://github.com/facebook/create-react-app) to scaffold an app and you can view your changes in real-time right in the web app. With CodeSandbox, you can also add any npm dependency with just a few button clicks.

“Using PatternFly Elements in your React App” is broken down into four sections:
- Initial setup
- Adding PatternFly Elements (web components)
- Interacting with our web components API
- Adding icing on the cake

Each section will show you exactly what you need to do with code snippets and an accompanying CodeSandbox that you can edit or fork.
:::

::: section
## Initial setup

First, we need to add the web component polyfills so we can support IE11 and Edge. If we were building this app locally, we’d want to install the web components polyfills from npm using yarn.

```bash
yarn add @webcomponents/webcomponentsjs
```

But if you’re using CodeSandbox, you can just expand the dependencies menu in the Explorer region on the left side of the page, click “Add Dependency”, search for “@webcomponents/webcomponentsjs”, and click on the result of the search. After the dependency is installed, add these two lines at the top of the index.js file in the /src/ directory.

```js
import React from 'react';
import ReactDOM from 'react-dom';
import "@webcomponents/webcomponentsjs/custom-elements-es5-adapter";
import "@webcomponents/webcomponentsjs/webcomponents-bundle";
```
:::

::: section
## Adding PatternFly Elements

With the setup complete, let’s add a couple of PatternFly Elements web components to our application to make sure everything is hooked up properly. We’re going to add a card ([pfe-card](/components/card)) and a call-to-action button ([pfe-cta](/components/call-to-action)). Later, we’ll add an accordion ([pfe-accordion](/components/accordion)) and some CSS to help with our layout ([pfe-layouts](/layout)).

Once again, if we were building this app locally, we’d install our dependencies from npm using yarn.

```bash
yarn add @patternfly/pfe-card @patternfly/pfe-cta
```
:::