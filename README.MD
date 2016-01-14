# Overview

vue-swipe is a touch slider for vue.js.

# Usage

Import this component to your project.

```JavaScript
require('vue-swipe')
```

```HTML
<swipe>
  <swipe-item class="page1"></swipe-item>
  <swipe-item class="page2"></swipe-item>
  <swipe-item class="page3"></swipe-item>
</swipe>
```

# Options

| Option | Description |
| ----- | ----- |
| speed | Number(default: 300) speed of animation. |
| auto | Number(default: 3000) delay of auto slide. |
| continuous | Boolean (default:true) - creates an infinite slider without endpoints |
| showIndicators | Boolean (default:true) - show indicators on slider bottom. |
| prevent | Boolean (default:false) - preventDefault when touch start, useful for some lower version Android Browser(4.2 etc). |

# License
MIT
