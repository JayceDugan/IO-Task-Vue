<template>
  <v-container
    class="greyAlt pa-0 project-card"
    fluid
  >
    <v-slide-x-transition
      appear
      mode="out-in"
    >
      <v-row v-if="loading">
        <v-col
          v-for="n in 6"
          :key="n"
          cols="12"
          lg="3"
          md="4"
        >
          <v-skeleton-loader type="image@2" />
        </v-col>
      </v-row>
      <v-row v-else-if="users.length > 0">
        <v-col
          v-for="user in users"
          :key="user.UUID"
          cols="12"
          lg="3"
          md="4"
        >
          <v-hover v-slot="{ hover }">
            {{ user }}
            {{  hover  }}
          </v-hover>
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col cols="12">
          <slot name="empty" />
        </v-col>
      </v-row>
    </v-slide-x-transition>
  </v-container>
</template>

<script>

export default {
  name: 'projectsListGridView',
  props: {
    loading: {
      type: Boolean,
      required: true,
    },
    errors: {
      type: Object,
      required: true,
    },
    users: {
      type: Array,
      required: true,
    },
  },
};
</script>
