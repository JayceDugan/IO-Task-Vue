<template>
  <v-card outlined rounded>
      <section class="pa-4">
        <slot>
        <div class="flex justify-between">
          <v-card-title class="primaryDark--text pa-0 text-h5">
            {{ task.title }}
          </v-card-title>
        </div>
        <div class="flex mt-4 justify-between items-center">
          <span class="text-sm blueGreyAlt--text body-1">{{ task.date }}</span>
        </div>
        </slot>
      </section>
      <v-progress-linear v-if="showProgress" :value="80" color="orange" />
  </v-card>
</template>
<script>
export default {
  props: {
    task: {
      type: Object,
      default: () => ({}),
    },
    showProgress: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  computed: {
    badgeColor() {
      const mappings = {
        Design: 'purple',
        'Feature Request': 'teal',
        Backend: 'blue',
        QA: 'green',
        default: 'teal',
      };
      return mappings[this.task.type] || mappings.default;
    },
  },
};
</script>
