const vueSwipe = VueSwipe.Swipe;
const vueSwipeItem = VueSwipe.SwipeItem;

new Vue({
  el: '#container',
  components: {
    'swipe': vueSwipe,
    'swipe-item': vueSwipeItem
  }
});
