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
        :key="n.path"
        class="px-7"
        :to="n.path"
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
export default {
  data: () => ({
    links: [
      {
        label: 'Dashboard',
        path: '/',
        icon: 'mdi-desktop-mac-dashboard',
      },
      {
        label: 'Projects',
        path: '/projects',
        icon: 'mdi-briefcase-clock-outline',
      },
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
      {
        label: 'Calendar',
        path: '/calendar',
        icon: 'mdi-calendar-month-outline',
      },
      {
        label: 'Contacts',
        path: '/contacts',
        icon: 'mdi-account-group-outline',
      },
      {
        label: 'UI Kit',
        path: '/ui-kit',
        icon: 'mdi-shape',
      },
    ],
  }),
};
</script>
