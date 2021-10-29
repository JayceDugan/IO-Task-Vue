<template>
  <section class="notifications-manager">
    <v-scroll-x-transition appear group>
      <v-alert
        v-for="alert in alerts"
        :key="alert.id"
        :type="alert.type"
        border="right"
        colored-border
        elevation="2"
        class="subtitle-2"
      >
        {{ alert.text }}
      </v-alert>
    </v-scroll-x-transition>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'NotificationsManager',
  computed: {
    ...mapGetters({
      alerts: 'alerts/all',
    }),
  },
};
</script>

<style lang="scss" scoped>
  .notifications-manager {
    position: fixed;
    bottom: 25px;
    right: 25px;
    width: 400px;
    max-width: 100%;
    z-index: 999999;
  }
</style>
