<template>
  <v-progress-linear
    :value="value"
    :color="color"
  />
</template>

<script>
/* eslint-disable */
import { mapGetters } from 'vuex';
import projectMixin from '@/mixins/project';

export default {
  name: 'ProjectCardLinearProgress',
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  mixins: [projectMixin],
  computed: {
    ...mapGetters({
      findTaskStatusById: 'taskStatuses/findByID',
    }),
    value() {
      // Can't determine progression
      if (!this.$_project_tasks.length) return 0;

      const incomplete_tasks_count = this.$_project_tasks.reduce((acc, task) => {
        const taskStatus = this.findTaskStatusById(task.task_status)

        return (taskStatus.isInProgress || taskStatus.isNotStarted)
          ? acc + 1
          : acc
      }, 0)

      if (incomplete_tasks_count === 0 || incomplete_tasks_count == this.$_project_tasks.length) return 0

      return Number((this.$_project_tasks.length / incomplete_tasks_count) * 100)
    },
    color() {
      if (this.$_project_is_complete) return 'success';
      if (this.$_project_is_in_progress) {
        if (this.value >= 75) return 'success lighten-2'
        if (this.value <= 50) return 'error'
        else return 'warning'
      };
      if (this.$_project_not_started) return 'blueGrey';

      return 'blueGrey'
    }
  },
};
</script>
