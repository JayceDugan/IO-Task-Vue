<template>
  <label
    class="mb-3 d-block"
    :class="loading ? 'text--disabled' : ''"
  >
    <slot />
  </label>
</template>

<script>
export default {
  name: 'InputLabel',
  props: {
    loading: {
      type: Boolean,
      required: false,
    },
  },
};
</script>
