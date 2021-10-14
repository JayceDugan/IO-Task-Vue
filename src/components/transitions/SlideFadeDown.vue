<template>
  <transition name="slide-fade-down" :appear="appear" mode="out-in">
    <slot />
  </transition>
</template>

<script>
export default {
  name: 'SlideFadeDown',
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
.slide-fade-down-enter-active {
  transition: all .3s ease;
}
.slide-fade-down-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-down-enter, .slide-fade-up-leave-to
  /* .slide-fade-down-leave-active below version 2.1.8 */ {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
