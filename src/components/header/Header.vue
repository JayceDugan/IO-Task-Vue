<template>
  <v-app-bar
    app
    outlined
    elevation="1"
    color="white"
  >
    <v-btn plain>
      <v-icon color="blueGrey">mdi-menu</v-icon>
    </v-btn>
    <v-slide-x-transition mode="out-in">
      <h1 class="text-h3" :key="$route.name">{{ $route.name }}</h1>
    </v-slide-x-transition>

    <v-spacer />

    <v-sheet width="192">
      <v-text-field
        color="blueGrey"
        label="Search for task and etc."
        hide-details="auto"
        prepend-inner-icon="mdi-magnify"
        solo
        flat
        plain
      />
    </v-sheet>

    <v-btn
      plain
    >
      <v-icon color="blueGrey">mdi-forum-outline</v-icon>
    </v-btn>
    <v-btn
      plain
    >
      <v-icon color="blueGrey">mdi-bell-outline</v-icon>
    </v-btn>
    <v-btn
      plain
    >
      <v-icon color="blueGrey">mdi-dots-grid</v-icon>
    </v-btn>

    <v-btn plain @click="logoutAndRedirect">
      <v-avatar
        size="36px"
      >
        <img
          alt="Avatar"
          src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
        />
      </v-avatar>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions({
      logout: 'user/logout',
    }),
    logoutAndRedirect() {
      return this.logout()
        .then(() => this.$router.push('/login'));
    },
  },
};
</script>
