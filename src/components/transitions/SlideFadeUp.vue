<template>
  <transition name="slide-fade-up" :appear="appear">
    <slot />
  </transition>
</template>

<script>
export default {
  name: 'SlideFadeUp',
  props: {
    appear: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-up-enter-active {
  transition: all .3s ease;
}
.slide-fade-up-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-up-enter, .slide-fade-up-leave-to
  /* .slide-fade-up-leave-active below version 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}
</style>
