<template>
  <section>
    <component
      v-if="loading || users.length"
      :is="activeLayout"
      :users="users"
      :loading="loading"
      :errors="errors"
    />
    <slot v-else name="empty" />
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import GridView from './ContactsListGridView.vue';
import ListView from './ContactsListListView.vue';

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
      users: 'users/all',
      usersLayout: 'users/layout',
    }),
    activeLayout() {
      const map = {
        grid: 'gridView',
        list: 'listView',
      };

      return map[this.usersLayout];
    },
  },
  methods: {
    ...mapActions({
      listUsers: 'users/list',
    }),
    loadProjects() {
      this.loading = true;

      this.listUsers()
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
