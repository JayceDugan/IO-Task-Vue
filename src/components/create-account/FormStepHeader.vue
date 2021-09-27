<template>
  <component
    :is="tag"
    class="headings--text mb-12 text-center text-h1"
  >
    {{ label }}
  </component>
</template>

<script>
export default {
  name: 'FormStepHeader',
  props: {
    tag: {
      type: String,
      required: false,
      default: () => ('h2'),
    },
    label: {
      type: String,
      required: true,
    },
  },
};
</script>
