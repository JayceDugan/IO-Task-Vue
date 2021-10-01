<template>
  <section>
    <v-avatar
      size="80"
      color="grey"
    >
      <v-img
        v-if="$_project_cover"
        :src="$_project_cover_src"
        :lazy-src="$_project_cover_lazy_src"
        :alt="$_project_cover_alt_text"
        width="50"
        height="100"
      />
      <span v-else>
        {{ $_project_acronym }}
      </span>
    </v-avatar>

    <v-card-title
      class="justify-center text-h3 css-transition"
      :class="{ 'primary--text': hover }"
    >
      {{ $_project_name }}
    </v-card-title>
    <v-card-subtitle class="blueGreyAlt--text mb-8">
      Due to: {{ $_project_due | projectDate }}
    </v-card-subtitle>

    <v-card-text>
      <v-btn
        v-for="(category, index) in $_project_categories"
        :key="category.Key"
        color="grey"
        class="text-capitalize mb-9"
        :class="{
          'mr-3': (index !== $_project_categories.length - 1)
        }"
      >
        {{ category.Label }}
      </v-btn>
    </v-card-text>

    <overlapping-avatar-list :avatars="$_project_users_images_arr" class="justify-center" />
  </section>
</template>

<script>
import OverlappingAvatarList from '@/components/overlapping-avatar-list/OverlappingAvatarList.vue';
import projectMixin from '@/mixins/project';

export default {
  name: 'ProjectCardGridView',
  components: { OverlappingAvatarList },
  mixins: [projectMixin],
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
};
</script>
