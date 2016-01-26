# Overview

vue-swipe is a touch slider for vue.js.

# Install

```bash
$ npm install vue-swipe
```

# Usage

Import components to your project.

```JavaScript
// in ES6 modules
import { Swipe, SwipeItem } from 'vue-swipe';

// in CommonJS
const { Swipe, SwipeItem } = require('vue-swipe');

// in Global variable
const { Swipe, SwipeItem } = VueSwipe;
```

And register components.

```javascript
Vue.component('swipe', Swipe);
Vue.component('swipe-item', SwipeItem);
```

Work on a Vue instance.

```HTML
<swipe>
  <swipe-item class="page1"></swipe-item>
  <swipe-item class="page2"></swipe-item>
  <swipe-item class="page3"></swipe-item>
</swipe>
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
