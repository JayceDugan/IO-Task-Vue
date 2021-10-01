<template>
  <v-card
    class="text-center css-transition"
    :class="{
      'cursor--pointer': hover
    }"
    :elevation="hover ? 4 : 2"
    :to="$_project_url"
  >
    <section class="pa-8">
      <component
        :is="view"
        :project="project"
        :hover="hover"
      />
    </section>

    <project-card-linear-progress :project="project"/>
  </v-card>
</template>

<script>
import ProjectCardListView from './ProjectCardListView.vue';
import ProjectCardGridView from './ProjectCardGridView.vue';
import ProjectCardLinearProgress from './ProjectCardLinearProgress.vue';
import projectMixin from '@/mixins/project';

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
    hover: {
      type: Boolean,
      required: true,
    },
  },
  mixins: [projectMixin],
  components: {
    ProjectCardListView,
    ProjectCardGridView,
    ProjectCardLinearProgress,
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
