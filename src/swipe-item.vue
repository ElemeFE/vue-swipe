<template>
  <div class="swipe-item">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'mt-swipe-item',

    ready() {
      this.$dispatch('swipeItemCreated', this);
    },

    detached() {
      this.$dispatch('swipeItemDestroyed', this);
    },

    destroyed() {
      this.$dispatch('swipeItemDestroyed', this);
    }
  };
</script>
