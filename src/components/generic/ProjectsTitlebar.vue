<template>
  <section class="d-flex justify-space-between">
    <v-spacer />
    <v-hover v-slot="{ hover }">
      <v-btn
        :color="(hover || layout === 'list') ? 'primary' : 'blueGrey'"
        :disabled="noProjects"
        plain
        :class="{
          'v-btn--active': layout === 'list'
        }"
        @click="setLayout('list')"
      >
        <v-icon left>
          mdi-format-list-bulleted-square
        </v-icon>
        List
      </v-btn>
    </v-hover>
    <v-hover v-slot="{ hover }">
      <v-btn
        :color="(hover || layout === 'grid') ? 'primary' : 'blueGrey'"
        plain
        :disabled="noProjects"
        :class="{
          'v-btn--active': layout === 'grid'
        }"
        @click="setLayout('grid')"
      >
        <v-icon left>
          mdi-view-grid
        </v-icon>
        Grid
      </v-btn>
    </v-hover>
    <v-btn
      color="primary"
      plain
      @click="drawers.createNew = true"
    >
      <v-icon left>mdi-plus-circle-outline</v-icon>
      New Project
    </v-btn>

    <create-new-project-drawer v-model="drawers.createNew" />
  </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import createNewProjectDrawer from '../drawers/createNewProjectDrawer.vue';

export default {
  name: 'ProjectsTitlebar',
  data: () => ({
    drawers: {
      createNew: false,
    },
  }),
  components: {
    createNewProjectDrawer,
  },
  computed: {
    ...mapGetters({
      projects: 'projects/data',
      layout: 'projects/layout',
    }),
    noProjects() {
      return !Array.isArray(this.projects) || this.projects.length <= 0;
    },
  },
  methods: {
    ...mapMutations({
      setLayout: 'projects/SET_LAYOUT',
    }),
  },
};
</script>
