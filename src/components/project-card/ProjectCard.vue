<template>
  <v-card
    class="pa-4 text-center"
  >
    <component
      :is="view"
      :project="project"
    />
  </v-card>
</template>

<script>
import ProjectCardListView from './ProjectCardListView.vue';
import ProjectCardGridView from './ProjectCardGridView.vue';

export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
    viewType: {
      type: String,
      required: true,
      default: 'grid',
      validator: (val) => ['grid', 'list'].includes(val),
    },
  },
  components: {
    ProjectCardListView,
    ProjectCardGridView,
  },
  data: () => ({
    selection: 1,
  }),
  computed: {
    view() {
      return `project-card-${this.viewType}-view`;
    },
  },
};
</script>
