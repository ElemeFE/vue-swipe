<template>
  <div>
    <swipe class="my-swipe">
      <swipe-item class="slide1">Slide1</swipe-item>
      <swipe-item class="slide2">Slide2</swipe-item>
      <swipe-item class="slide3">Slide3</swipe-item>
    </swipe>
  
    <br>
  
    <swipe class="my-swipe" :auto="0" :show-indicators="false" @change="changeSwipe">
      <swipe-item class="slide1">Slide1</swipe-item>
      <swipe-item class="slide2">Slide2</swipe-item>
      <swipe-item class="slide3">Slide3</swipe-item>
    </swipe>
  
    <br>
  
    <swipe class="my-swipe" :speed="900" :auto="0" :show-indicators="false" :no-drag-when-single="false">
      <swipe-item class="slide1">SINGLE SLIDE</swipe-item>
    </swipe>
  </div>
</template>

<script>
  import { Swipe, SwipeItem } from '../src';

  export default {
    components: {
      swipe: Swipe,
      swipeItem: SwipeItem
    },

    methods: {
      changeSwipe(newIndex, oldIndex) {
        console.log(`swipe from ${newIndex} to ${oldIndex}`);
      }
    }
  };
</script>

<style scoped>
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
</style>
