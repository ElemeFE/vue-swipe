const vueSwipe = VueSwipe.Swipe;
const vueSwipeItem = VueSwipe.SwipeItem;

new Vue({
  el: 'body',
  components: {
    'swipe': vueSwipe,
    'swipe-item': vueSwipeItem
  }
});
