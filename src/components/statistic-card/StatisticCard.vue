<template>
  <v-card elevation="0">
    <v-card-title>{{ number }}</v-card-title>
    <v-card-subtitle class="blueGrey--text">{{ subtitle }}</v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  name: 'StatisticCard',
  props: {
    number: {
      type: [String, Number],
      required: true,
    },
    subtitle: {
      type: String,
      required: false,
      default: '',
    },
  },
};
</script>
