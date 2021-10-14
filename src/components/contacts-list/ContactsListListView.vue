<template>
  <v-container
    fluid
    class="greyAlt pa-0 project-card"
  >
    <v-slide-x-transition mode="out-in" appear>
      <v-row v-if="loading">
        <v-col
          v-for="n in 6"
          :key="n"
          cols="12"
          md="4"
          lg="3"
        >
          <v-skeleton-loader type="image@2" />
        </v-col>
      </v-row>
      <v-row v-else-if="projects.length > 0">
        <v-col
          v-for="project in projects"
          :key="project.UUID"
          cols="12"
          md="4"
          lg="3"
        >
          <v-hover v-slot="{ hover }">
            <project-card
              :project="project"
              :hover="hover"
              viewType="grid"
            />
          </v-hover>
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col cols="12">
          <slot name="empty" />
        </v-col>
      </v-row>
    </v-slide-x-transition>
  </v-container>
</template>

<script>
import ProjectCard from '@/components/project-card/ProjectCard.vue';

export default {
  name: 'projectsListGridView',
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
