<template>
  <section class="d-flex flex-row align-center justify-space-between">
    <v-avatar
      size="80"
      color="grey"
      class="ma-0"
    >
      <v-img v-if="project.Cover" src="project.Cover" />
      <span v-else>{{ projectAcronym }}</span>
    </v-avatar>

    <v-card-title class="justify-center text-h3 mb-0">
      {{ project.Name }}
    </v-card-title>

    <v-card-subtitle class="text--grey mb-0">Due to: {{ project.Due }}</v-card-subtitle>

    <section>
      <v-card-text>
        <v-btn
          color="grey"
          disabled
          class="mb-0"
        >
          {{ project.Category }}
        </v-btn>
      </v-card-text>
    </section>
  </section>
</template>

<script>
export default {
  name: 'ProjectCardListView',
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  computed: {
    projectAcronym() {
      return this.project.Name !== null
        ? this.project.Name.match(/\b\w/g).join('')
        : '';
    },
  },
};
</script>
