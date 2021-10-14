<template>
  <v-container
    fluid
    fill-height
    class="pa-6 align-start"
  >
    <v-row class="flex-grow-0">
      <v-col cols="12">
        <slot name="titlebar" />
      </v-col>
    </v-row>
    <v-row class="flex-grow-1">
      <v-col cols="12">
        <slot name="main" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'InnerDashboardView',
};
</script>

<style lang="scss" scoped>
.container.fill-height > .row {
  max-width: initial;
  width: 100%;
}

.container.fill-height {
  flex-direction: column !important;
  align-items: initial !important;
  flex-wrap: nowrap !important;
}

.container.fill-height > .row {
  flex: 1 1 auto !important;

  &.flex-grow-0 { flex-grow: 0 !important; }
}
</style>
