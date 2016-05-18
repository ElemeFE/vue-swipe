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

Here list Props on swipe component

| Option | Description |
| ----- | ----- |
| speed | Number(default: 300) speed of animation. |
| auto | Number(default: 3000) delay of auto slide. |
| continuous | Boolean (default:true) - creates an infinite slider without endpoints |
| showIndicators | Boolean (default:true) - show indicators on slider bottom. |
| prevent | Boolean (default:false) - preventDefault when touch start, useful for some lower version Android Browser(4.2 etc). |

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
