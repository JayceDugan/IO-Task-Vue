<template>
  <v-sheet
    width="460"
    class="mx-auto text-center"
    elevation="0"
    color="transparent"
  >
    <slot name="illustration" />
    <h3 class="text-h3 mb-1 text-center">{{ title }}</h3>
    <p class="blueGrey--text text-center text-h4 font-weight-light">{{ message }}</p>
    <slot />
  </v-sheet>
</template>

<script>
export default {
  name: 'EmptyView',
  props: {
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
};
</script>
