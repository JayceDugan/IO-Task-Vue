<template>
  <v-container
    fluid
    class="greyAlt pa-0"
  >
    <v-slide-x-transition mode="out-in" appear>
      <v-row v-if="loading">
        <v-col
          v-for="n in 6"
          :key="n"
          cols="12"
        >
          <v-skeleton-loader type="image@2" />
        </v-col>
      </v-row>
      <v-row v-else-if="projects.length > 0">
        <v-col
          v-for="project in projects"
          :key="project.id"
          cols="12"
        >
          <project-card :project="project" view-type="list"/>
        </v-col>
      </v-row>
    </v-slide-x-transition>
  </v-container>
</template>

<script>
import ProjectCard from '@/components/project-card/ProjectCard.vue';

export default {
  name: 'projectsListListView',
  props: {
    loading: {
      type: Boolean,
      required: true,
    },
    errors: {
      type: Object,
      required: true,
    },
    projects: {
      type: Array,
      required: true,
    },
  },
  components: {
    ProjectCard,
  },
};
</script>
