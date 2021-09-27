<template>
  <v-app>
    <Header v-if="isLoggedIn" />
    <sidebar v-if="isLoggedIn" />
    <v-main>
      <v-fade-transition mode="out-in" appear>
        <router-view />
      </v-fade-transition>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import eventHub, { UNAUTHORIZED_EVENT } from './plugins/eventHub';
import Sidebar from '@/components/sidebar/Sidebar.vue';
import Header from '@/components/header/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
    Sidebar,
  },
  computed: {
    ...mapGetters({
      isLoggedIn: 'user/isLoggedIn',
    }),
  },
  mounted() {
    this.setEventHubListeners();
  },
  methods: {
    ...mapActions({
      unauthorizedHandler: 'user/logout',
    }),
    setEventHubListeners() {
      eventHub.$on(UNAUTHORIZED_EVENT, this.unauthorizedHandler);
    },
  },
};
</script>

<style lang="scss">
html,
body {
  overflow: hidden;
}

.v-application {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}

.v-main__wrap {
  overflow-y: auto;
  overflow-x: hidden;
}

.container.fill-height > .row {
  max-width: initial;
  width: 100%;
}

.container.fill-height {
  flex-direction: column !important;
  align-items: initial !important;
}

.container.fill-height > .row {
  flex: 1 1 auto !important;

  &.flex-grow-0 { flex-grow: 0 !important; }
}
</style>
