<template>
  <div class="swipe-item">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
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
