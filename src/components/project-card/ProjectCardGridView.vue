<template>
  <section>
    <v-avatar
      size="80"
      color="grey"
    >
      <v-img
        v-if="project.Cover"
        :src="config.baseDomain.concat(project.Cover.formats.thumbnail.url)"
        :lazy-src="config.baseDomain.concat(project.Cover.formats.thumbnail.url)"
        :alt="project.Cover.alternativeText"
        width="50"
        height="100"
      />
      <span v-else>
        {{ projectAcronym }}
      </span>
    </v-avatar>

    <v-card-title class="justify-center text-h3">
      {{ project.Name }}
    </v-card-title>
    <v-card-subtitle class="blueGreyAlt--text mb-8">
      Due to: {{ project.Due | projectDate }}
    </v-card-subtitle>

    <v-card-text>
      <v-btn
        v-for="(category, index) in project.Categories"
        :key="category.Key"
        color="grey"
        class="text-capitalize mb-9"
        :class="{
          'mr-3': (index !== project.Categories.length - 1)
        }"
        disabled
      >
        {{ category.Label }}
      </v-btn>
    </v-card-text>

    <overlapping-avatar-list :avatars="projectUserAvatars" class="justify-center" />
  </section>
</template>

<script>
import dayjs from 'dayjs';
import config from '@/lib/strapi/utils/config';
import OverlappingAvatarList from '@/components/overlapping-avatar-list/OverlappingAvatarList.vue';

export default {
  name: 'ProjectCardGridView',
  components: { OverlappingAvatarList },
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  filters: {
    projectDate: (val) => {
      if (!val) return '';

      return dayjs(val).format('DD MMM YYYY');
    },
  },
  data: () => ({
    config,
  }),
  computed: {
    projectAcronym() {
      return this.project.Name !== null
        ? this.project.Name.match(/\b\w/g).join('')
        : '';
    },
    projectUserAvatars() {
      if (this.project.users.length <= 0) return [];

      return this.project.users.map((user) => config.baseDomain.concat(
        user?.Avatar?.formats?.thumbnail?.url,
      ));
    },
  },
};
</script>
