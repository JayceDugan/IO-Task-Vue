<template>
  <section class="d-flex flex-row align-center justify-space-between">
    <section class="d-flex align-center flex-row">
      <v-avatar
        size="80"
        color="grey"
        class="ma-0 mr-3"
      >
        <v-img v-if="project.Cover" src="project.Cover" />
        <span v-else>{{ $_project_acronym }}</span>
      </v-avatar>

      <v-card-title
        class="justify-center text-h3 mb-0 mr-10"
        :class="{ 'primary--text': hover }"
      >
        {{ project.Name }}
      </v-card-title>
    </section>

    <section class="d-flex flex-row align-center justify-center grow">
      <section class="px-16">
        <p class="text-h5 mb-0">32 / 100</p>
        <p class="body-1 blueGreyAlt--text mb-0">Tasks</p>
      </section>

      <section class="px-16">
        <p class="text-h5 mb-0">{{ $_project_due | projectDate }}</p>
        <p class="body-1 blueGreyAlt--text mb-0">Due Date</p>
      </section>

      <section class="px-16">
        <overlapping-avatar-list :avatars="$_project_users_images_arr" class="justify-center" />
      </section>
    </section>

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

    <section>
      <v-icon color="blueGreyAlt">mdi-dots-horizontal</v-icon>
    </section>
  </section>
</template>

<script>
import projectMixin from '@/mixins/project';
import OverlappingAvatarList from '@/components/overlapping-avatar-list/OverlappingAvatarList.vue';

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
  components: {
    OverlappingAvatarList,
  },
  mixins: [projectMixin],
  computed: {
    projectAcronym() {
      return this.project.Name !== null
        ? this.project.Name.match(/\b\w/g).join('')
        : '';
    },
  },
};
</script>
