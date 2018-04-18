# vue-swipe

vue-swipe is a touch slider for Vue.js.

## Install

```bash
$ npm install vue-swipe
```

## Import

### Import using module

Import components to your project:

``` js
require('vue-swipe/dist/vue-swipe.css');

// in ES6 modules
import { Swipe, SwipeItem } from 'vue-swipe';

// in CommonJS
const { Swipe, SwipeItem } = require('vue-swipe');

// in Global variable
const { Swipe, SwipeItem } = VueSwipe;
```

And register components:

``` js
Vue.component('swipe', Swipe);
Vue.component('swipe-item', SwipeItem);
```

### Import using script tag

``` html
<link rel="stylesheet" href="../node-modules/vue-swipe/dist/vue-swipe.css" charset="utf-8">
<script src="../node-modules/vue-swipe/dist/vue-swipe.js"></script>
```

``` js
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

## Usage

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

## Options

### Props

| Option | Type | Description | Default |
| ----- | ----- | ----- | ----- |
| speed | Number | Speed of animation | 300 |
| defaultIndex | Number | Start swipe item index | 0 |
| disabled | Boolean | Disable user drag swipe item | false |
| auto | Number | Delay of auto slide | 3000 |
| continuous | Boolean | Create an infinite slider without endpoints | true |
| showIndicators | Boolean | Show indicators on slider bottom | true |
| noDragWhenSingle | Boolean | Do not drag when there is only one swipe-item | true |
| prevent | Boolean | `preventDefault` when touch start, useful for some lower version Android Browser (4.2, etc) | false |
| propagation | Boolean | solve nesting | false |
| disabled | Boolean | disabled user swipe item | false |

### Events

| Event Name | Description | params |
| ----- | ----- | ----- |
| change | triggers when current swipe-item change | new swipe item Index, old swipe item Index |

## FAQ

### How to programminly swipe to an item?

Use ref and call `goto()` method.

``` js
this.$refs.swipe.goto(newIndex)
```

For more details, please refer to example code.

## Development

Watching with hot-reload:

```bash
$ npm run dev
```

Develop on real remote device:

```bash
$ npm run remote-dev {{ YOUR IP ADDRESS }}
```

## License

MIT
