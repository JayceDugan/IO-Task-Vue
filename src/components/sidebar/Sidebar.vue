<template>
  <v-navigation-drawer
    app
    class="py-6"
  >
    <router-link to="/" class="d-inline">
      <v-img :src="require('@/assets/logo.svg')" width="107" class="mx-auto mb-15"  />
    </router-link>

    <v-list>
      <v-list-item
        v-for="n in links"
        :to="n.path"
        :key="n.path"
        class="px-7"
        color="blueGrey"
      >
        <v-list-item-icon>
          <v-icon>
            {{ n.icon }}
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ n.label }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      projectsForbidden: 'projects/isForbidden',
      tasksForbidden: 'tasks/isForbidden',
      eventsForbidden: 'events/isForbidden',
    }),
    links() {
      return [
        {
          label: 'Dashboard',
          path: '/',
          icon: 'mdi-desktop-mac-dashboard',
        },
        ...(!this.projectsForbidden ? [{
          label: 'Projects',
          path: '/projects',
          icon: 'mdi-briefcase-clock-outline',
        }] : []),
        ...(!this.tasksForbidden ? [
          {
            label: 'Tasks',
            path: '/tasks',
            icon: 'mdi-list-status',
          },
          {
            label: 'Kanban Desk',
            path: '/kanban-desk',
            icon: 'mdi-view-list-outline',
          },
        ] : []),
        ...(!this.eventsForbidden ? [{
          label: 'Calendar',
          path: '/calendar',
          icon: 'mdi-calendar-month-outline',
        }] : []),
        {
          label: 'Contacts',
          path: '/contacts',
          icon: 'mdi-account-group-outline',
        },
      ];
    },
  },
};
</script>
