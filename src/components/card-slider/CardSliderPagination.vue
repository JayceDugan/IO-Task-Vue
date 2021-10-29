<template>
  <section class="d-flex align-center">
    <v-btn
      :disabled="index === 1"
      class="pa-0 m-0"
      icon
      small
      text
      @click="() => $emit('prev')"
    >
      <v-icon>
        mdi-chevron-left
      </v-icon>
    </v-btn>
    <v-btn
      :disabled="index === total"
      icon
      small
      text
      @click="() => $emit('next')"
    >
      <v-icon>
        mdi-chevron-right
      </v-icon>
    </v-btn>

    <span class="blueGrey--text ml-3">
      {{ index }}/{{ total }} {{ paginationSuffix }}
    </span>
  </section>
</template>

<script>
export default {
  name: 'SliderCardPagination',
  props: {
    index: {
      type: [Number, String],
      required: true,
      default: 1,
    },
    total: {
      type: [Number, String],
      required: true,
      default: 1,
    },
    paginationSuffix: {
      type: String,
      required: false,
      default: 'Items',
    },
  },
};
</script>
