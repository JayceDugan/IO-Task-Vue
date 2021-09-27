<template>
  <inner-dashboard-view>
    <template v-slot:titlebar>
      <projects-titlebar />
    </template>
    <template v-slot:main>
      <projects-list>
        <template v-slot:empty>
          <v-sheet
            width="460"
            class="mx-auto text-center"
            elevation="0"
            color="transparent"
          >
            <v-img
              :src="require('@/assets/illustrations/undraw_preferences_uuo2.svg')"
              max-width="100%"
              class="mb-5"
            />
            <h3 class="text-h3 mb-1 text-center">No projects found?</h3>
            <p class="blueGrey--text text-center text-h4 font-weight-light">
              Try to assign more tasks to your employees or create a new project from scratch
            </p>
            <v-btn
              color="primary"
              class="mx-auto"
              small
              @click="drawer = !drawer"
            >
              Add New Project
            </v-btn>

            <create-new-project-drawer v-model="drawer" />
          </v-sheet>
        </template>
      </projects-list>
    </template>
  </inner-dashboard-view>
</template>

<script>
import createNewProjectDrawer from '@/components/drawers/createNewProjectDrawer.vue';
import ProjectsTitlebar from '@/components/generic/ProjectsTitlebar.vue';
import ProjectsList from '@/components/projects-list/ProjectsList.vue';
import InnerDashboardView from '@/layouts/InnerDashboardView.vue';

export default {
  name: 'Projects',
  components: {
    InnerDashboardView,
    createNewProjectDrawer,
    ProjectsTitlebar,
    ProjectsList,
  },
  data: () => ({
    drawer: false,
  }),
};
</script>
