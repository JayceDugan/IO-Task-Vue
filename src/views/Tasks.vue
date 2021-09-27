<template>
  <inner-dashboard-view>
    <template v-slot:main>
      <task-list :tasks="tasks">
        <template v-slot:empty>
          <v-sheet
            width="460"
            class="mx-auto text-center"
            elevation="0"
            color="transparent"
          >
            <v-img
              :src="require('@/assets/illustrations/undraw_schedule_pnbk.svg')"
              max-width="100%"
              class="mb-5"
            />
            <h3 class="text-h3 mb-1 text-center">No tasks found?</h3>
            <p class="blueGrey--text text-center text-h4 font-weight-light">
              Try to assign more tasks to your employees or create a new project from scratch
            </p>
            <v-btn
              color="primary"
              class="mx-auto"
              small
            >
              Add New Task
            </v-btn>
          </v-sheet>
        </template>
      </task-list>
    </template>
  </inner-dashboard-view>
</template>

<script>
import TaskList from '@/components/task-list/TaskList.vue';
import InnerDashboardView from '@/layouts/InnerDashboardView.vue';

export default {
  name: 'Tasks',
  components: {
    InnerDashboardView,
    TaskList,
  },
  data: () => ({
    tasks: [],
    // tasks: [
    //   {
    //     title: 'Template description',
    //     complete: false,
    //     subtasksCount: 2,
    //     subtasksComplete: 3,
    //     commentsCount: 5,
    //     category: 'Sketch',
    //   },
    //   {
    //     title: 'Budget and Contract',
    //     complete: false,
    //     subtasksCount: 2,
    //     subtasksComplete: 3,
    //     commentsCount: 5,
    //     category: 'Sketch',
    //   },
    //   {
    //     title: 'Search for a UI Kit',
    //     complete: false,
    //     subtasksCount: 2,
    //     subtasksComplete: 3,
    //     commentsCount: 5,
    //     category: 'Sketch',
    //   },
    //   {
    //     title: 'Template description',
    //     complete: false,
    //     subtasksCount: 2,
    //     subtasksComplete: 3,
    //     commentsCount: 5,
    //     category: 'Sketch',
    //   },
    //   {
    //     title: 'Template description',
    //     complete: false,
    //     subtasksCount: 2,
    //     subtasksComplete: 3,
    //     commentsCount: 5,
    //     category: 'Sketch',
    //   },
    //   {
    //     title: 'Template description',
    //     complete: false,
    //     subtasksCount: 2,
    //     subtasksComplete: 3,
    //     commentsCount: 5,
    //     category: 'Sketch',
    //   },
    //   {
    //     title: 'Template description',
    //     complete: false,
    //     subtasksCount: 2,
    //     subtasksComplete: 3,
    //     commentsCount: 5,
    //     category: 'Sketch',
    //   },
    //   {
    //     title: 'Template description',
    //     complete: false,
    //     subtasksCount: 2,
    //     subtasksComplete: 3,
    //     commentsCount: 5,
    //     category: 'Sketch',
    //   },
    //   {
    //     title: 'Template description',
    //     complete: false,
    //     subtasksCount: 2,
    //     subtasksComplete: 3,
    //     commentsCount: 5,
    //     category: 'Sketch',
    //   },
    //   {
    //     title: 'Template description',
    //     complete: false,
    //     subtasksCount: 2,
    //     subtasksComplete: 3,
    //     commentsCount: 5,
    //     category: 'Sketch',
    //   },
    //   {
    //     title: 'Template description',
    //     complete: false,
    //     subtasksCount: 2,
    //     subtasksComplete: 3,
    //     commentsCount: 5,
    //     category: 'Sketch',
    //   },
    //   {
    //     title: 'Template description',
    //     complete: false,
    //     subtasksCount: 2,
    //     subtasksComplete: 3,
    //     commentsCount: 5,
    //     category: 'Sketch',
    //   },
    // ],
  }),
};
</script>
