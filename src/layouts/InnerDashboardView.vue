<template>
  <v-container
    fluid
    fill-height
    class="greyAlt pa-6 align-start"
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
