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
  overflow-y: hidden;
}

.v-application--wrap {
  max-height: 100vh;
}

.v-main {
  height: 100%;
}

.v-main__wrap {
  overflow-y: auto;
  overflow-x: hidden;
}

.cursor--pointer {
  cursor: pointer;
}

.css-transition {
  transition: all 250ms ease-in-out;
}

</style>
