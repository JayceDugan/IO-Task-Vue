<template>
  <inner-dashboard-view>
    <template v-slot:titlebar>
      <projects-titlebar />
    </template>
    <template v-slot:main>
      <contacts-list>
        <template v-slot:empty>
          <empty-dashboard-view
            title="No contacts found?"
            message="Try to add more contacts from your personal
account or invite your friends"
          >
            <template v-slot:illustration>
              <v-img
                :src="require('@/assets/illustrations/undraw_setup_wizard_r6mr.svg')"
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
              Add New Contact
            </v-btn>

            <create-new-project-drawer v-model="drawer" />
          </empty-dashboard-view>
        </template>
      </contacts-list>
    </template>
  </inner-dashboard-view>
</template>

<script>
import createNewProjectDrawer from '@/components/drawers/createNewProjectDrawer.vue';
import ProjectsTitlebar from '@/components/generic/ProjectsTitlebar.vue';
import ContactsList from '@/components/contacts-list/ContactsList.vue';
import InnerDashboardView from '@/layouts/InnerDashboardView.vue';
import EmptyDashboardView from '@/layouts/EmptyDashboardView.vue';

export default {
  name: 'Projects',
  components: {
    InnerDashboardView,
    EmptyDashboardView,
    createNewProjectDrawer,
    ProjectsTitlebar,
    ContactsList,
  },
  data: () => ({
    drawer: false,
  }),
};
</script>
