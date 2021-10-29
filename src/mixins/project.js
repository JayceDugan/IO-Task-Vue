import config from '@/lib/strapi/utils/config';

export default {
  computed: {
    $_project_id() {
      return this.project.id;
    },
    $_project_uuid() {
      return this.project.UUID;
    },
    $_project_name() {
      return this.project.Name;
    },
    $_project_status() {
      return this.project.project_status;
    },
    $_project_is_in_progress() {
      return ['in-progress', 'under-review', 'ready-for-review'].includes(this.$_project_status);
    },
    $_project_not_started() {
      return ['to-do'].includes(this.$_project_status);
    },
    $_project_is_complete() {
      return ['complete'].includes(this.$_project_status);
    },
    $_project_tasks() {
      return this.project.tasks ?? [];
    },
    $_project_budget() {
      return this.project.Budget;
    },
    $_project_acronym() {
      return this.$_project_name !== null
        ? this.$_project_name.match(/\b\w/g).join('')
        : '';
    },
    $_project_due() {
      return this.project.Due;
    },
    $_project_categories() {
      return this.project.Categories;
    },
    $_project_cover() {
      return this.project.Cover;
    },
    $_project_cover_src() {
      return config.baseDomain.concat(this.$_project_cover.formats.thumbnail.url);
    },
    $_project_cover_lazy_src() {
      return config.baseDomain.concat(this.$_project_cover.formats.thumbnail.url);
    },
    $_project_cover_alt_text() {
      return this.$_project_cover.alternativeText;
    },
    $_project_created_at() {
      return this.project.created_at;
    },
    $_project_created_by() {
      return this.project.created_by;
    },
    $_project_updated_at() {
      return this.project.updated_at;
    },
    $_project_updated_by() {
      return this.project.updated_by;
    },
    $_project_users() {
      return this.project.users;
    },
    $_project_users_images_arr() {
      if (this.$_project_users.length <= 0) return [];

      return this.$_project_users.map((user) => config.baseDomain.concat(
        user?.Avatar?.formats?.thumbnail?.url,
      ));
    },
    $_project_url() {
      return '/projects/'.concat(this.$_project_uuid);
    },
  },
};
