<template>
  <section>
    <component
      v-if="loading || projects.length > 0"
      :is="activeLayout"
      :projects="projects"
      :loading="loading"
      :errors="errors"
    />
    <slot v-else name="empty" />
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import GridView from './ProjectsListGridView.vue';
import ListView from './ProjectsListListView.vue';

export default {
  components: {
    GridView,
    ListView,
  },
  data: () => ({
    loading: true,
    errors: {
      loadingProjects: false,
    },
  }),
  created() {
    this.loadProjects();
  },
  computed: {
    ...mapGetters({
      projects: 'projects/data',
      projectsLayout: 'projects/layout',
    }),
    activeLayout() {
      const map = {
        grid: 'gridView',
        list: 'listView',
      };

      return map[this.projectsLayout];
    },
  },
  methods: {
    loadProjects() {
      this.loading = true;

      return this.$store.dispatch('projects/load')
        .catch((error) => {
          this.errors.loadingProjects = true;

          console.error(error.statusText);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>
