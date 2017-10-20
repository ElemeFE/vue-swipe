# Overview

vue-swipe is a touch slider for vue.js.

# Install

```bash
$ npm install vue-swipe
```

# Install

## Import using module
Import components to your project:

```JavaScript
require('vue-swipe/dist/vue-swipe.css');

// in ES6 modules
import { Swipe, SwipeItem } from 'vue-swipe';

// in CommonJS
const { Swipe, SwipeItem } = require('vue-swipe');

// in Global variable
const { Swipe, SwipeItem } = VueSwipe;
```

And register components:

```javascript
Vue.component('swipe', Swipe);
Vue.component('swipe-item', SwipeItem);
```

## Import using script tag

``` HTML
<link rel="stylesheet" href="../node-modules/vue-swipe/dist/vue-swipe.css" charset="utf-8">
<script src="../node-modules/vue-swipe/dist/vue-swipe.js"></script>
```

```JavaScript
const vueSwipe = VueSwipe.Swipe;
const vueSwipeItem = VueSwipe.SwipeItem;

new Vue({
  el: 'body',
  components: {
    'swipe': vueSwipe,
    'swipe-item': vueSwipeItem
  }
});
```

# Usage

Work on a Vue instance:

```HTML
<swipe class="my-swipe">
  <swipe-item class="slide1"></swipe-item>
  <swipe-item class="slide2"></swipe-item>
  <swipe-item class="slide3"></swipe-item>
</swipe>
```

```CSS
.my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.slide1 {
  background-color: #0089dc;
  color: #fff;
}

.slide2 {
  background-color: #ffd705;
  color: #000;
}

.slide3 {
  background-color: #ff2d4b;
  color: #fff;
}
```

# Options
## Attributes
Here list Props on swipe component

| Option | Description |
| ----- | ----- |
| speed | Number(default: 300) speed of animation. |
| defaultIndex |  Number(default: 0) the start swipe item index |
| disabled | Boolean(defalut: false) disable user drag swipe item |
| auto | Number(default: 3000) delay of auto slide. |
| continuous | Boolean (default:true) - creates an infinite slider without endpoints |
| showIndicators | Boolean (default:true) - show indicators on slider bottom. |
| noDragWhenSingle | Boolean (default: true) - do not drag when there is only one swipe-item
| prevent | Boolean (default:false) - preventDefault when touch start, useful for some lower version Android Browser(4.2 etc). |
| propagation | Boolean (default:false) - solve nesting. |
| disabled | Boolean (default:false) - disabled user swipe item |

## Events

| Event Name | Description | params |
| ----- | ----- | ----- |
| change | triggers when current swipe-item change | new swipe item Index, old swipe item Index |

How to change swipe?
Just use ref and call goto method like `this.$refs.swipe.goto(newIndex)` to change swipe item, see example code.

# Develop

Coding with watching and hot-reload.

```bash
$ npm run dev
```

Develop on real remote device.

```bash
$ npm run remote-dev {{ YOUR IP ADDRESS }}
```

# License
MIT
