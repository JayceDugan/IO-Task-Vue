<template>
  <swiper
    ref="slider"
    :options="options"
    class="mb-9"
    @ready="(payload) => $emit('ready', payload)"
    @slideChange="() => $emit('slideChange')"
  >
    <swiper-slide
      v-for="(item, idx) in items"
      :key="`swiper-item--${idx}`"
    >
      <slot name="slide" :item="item" />
    </swiper-slide>
  </swiper>
</template>

<script>
export default {
  name: 'Slider',
  props: {
    options: {
      type: Object,
      required: true,
      default: () => ({}),
    },
    items: {
      type: Array,
      required: false,
      default: () => ([]),
    },
  },
};
</script>
