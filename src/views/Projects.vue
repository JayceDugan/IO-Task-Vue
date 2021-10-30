<template>
  <inner-dashboard-view>
    <template v-slot:titlebar>
      <projects-titlebar />
    </template>
    <template v-slot:main>
      <projects-list>
        <template v-slot:empty>
          <empty-dashboard-view
            title="No projects found?"
            message="Try to assign more tasks to
            your employees or create a new project from scratch"
          >
            <template v-slot:illustration>
              <v-img
                :src="require('@/assets/illustrations/undraw_preferences_uuo2.svg')"
                max-width="100%"
                class="mb-5"
              />
            </template>
            <v-btn
              color="primary"
              class="mx-auto"
              small
              @click="drawer = !drawer"
            >
              Add New Project
            </v-btn>

            <create-new-project-drawer v-model="drawer" />
          </empty-dashboard-view>
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
import EmptyDashboardView from '@/layouts/EmptyDashboardView.vue';

export default {
  name: 'Projects',
  components: {
    InnerDashboardView,
    EmptyDashboardView,
    createNewProjectDrawer,
    ProjectsTitlebar,
    ProjectsList,
  },
  data: () => ({
    drawer: false,
  }),
};
</script>
