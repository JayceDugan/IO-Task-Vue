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

    <v-card-title
      class="justify-center text-h3 mb-0"
      :class="{ 'primary--text': hover }"
    >
      {{ project.Name }}
    </v-card-title>

    <v-card-subtitle class="text--grey mb-0">Due to: {{ project.Due }}</v-card-subtitle>

    <section>
      <v-card-text>
        <v-btn
          v-for="(category, index) in project.Categories"
          :key="category.Key"
          color="grey"
          class="text-capitalize my-0"
          :class="{
          'mr-3': (index !== project.Categories.length - 1)
        }"
        >
          {{ category.Label }}
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
    hover: {
      type: Boolean,
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
