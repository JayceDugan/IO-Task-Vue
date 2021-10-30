<template>
  <div class="d-flex justify-center">
    <div class="min-h-screen d-flex overflow-x-scroll py-12 w-100">
      <div
        v-for="column in columns"
        :key="column.title"
        class="white rounded pa-3 mr-4 grow pb-8"
      >
        <p class="primaryDark--text text-h3 font-weight-medium body-1">
          {{ column.title }}
        </p>
        <draggable
          :animation="200"
          :list="column.tasks"
          ghost-class="ghost-card"
          group="tasks"
        >
          <kanban-task-card
            v-for="(task) in column.tasks"
            :key="task.id"
            :task="task"
            class="mt-3 cursor-move"
          ></kanban-task-card>
        </draggable>
        <kanban-task-card
          :show-progress="false"
          class="mt-3 blueGrey--text cursor-click"
        >
          + Add A Card
        </kanban-task-card>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import KanbanTaskCard from './KanbanTaskCard.vue';

export default {
  name: 'KanbanBoard',
  components: {
    KanbanTaskCard,
    draggable,
  },
  data() {
    return {
      columns: [
        {
          title: 'To Do',
          tasks: [
            {
              id: 1,
              title: 'Add discount code to checkout page',
              date: 'Sep 14',
              type: 'Feature Request',
            },
            {
              id: 2,
              title: 'Provide documentation on integrations',
              date: 'Sep 12',
            },
            {
              id: 3,
              title: 'Design shopping cart dropdown',
              date: 'Sep 9',
              type: 'Design',
            },
            {
              id: 4,
              title: 'Add discount code to checkout page',
              date: 'Sep 14',
              type: 'Feature Request',
            },
            {
              id: 5,
              title: 'Test checkout flow',
              date: 'Sep 15',
              type: 'QA',
            },
          ],
        },
        {
          title: 'In Progress',
          tasks: [
            {
              id: 6,
              title: 'Design shopping cart dropdown',
              date: 'Sep 9',
              type: 'Design',
            },
            {
              id: 7,
              title: 'Add discount code to checkout page',
              date: 'Sep 14',
              type: 'Feature Request',
            },
            {
              id: 8,
              title: 'Provide documentation on integrations',
              date: 'Sep 12',
              type: 'Backend',
            },
          ],
        },
        {
          title: 'Done',
          tasks: [
            {
              id: 14,
              title: 'Add discount code to checkout page',
              date: 'Sep 14',
              type: 'Feature Request',
            },
            {
              id: 15,
              title: 'Design shopping cart dropdown',
              date: 'Sep 9',
              type: 'Design',
            },
            {
              id: 16,
              title: 'Add discount code to checkout page',
              date: 'Sep 14',
              type: 'Feature Request',
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.column-width {
  min-width: 320px;
  width: 320px;
}

/* Unfortunately @apply cannot be setup in codesandbox,
but you'd use "@apply border opacity-50 border-blue-500 bg-gray-200" here */
.ghost-card {
  opacity: 0.5;
  background: #F7FAFC;
  border: 1px solid #4299e1;
}
</style>
