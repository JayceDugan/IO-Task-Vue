<template>
  <inner-dashboard-view>
    <template v-slot:main>
      <kanban-board />
    </template>
  </inner-dashboard-view>
</template>

<script>
import InnerDashboardView from '@/layouts/InnerDashboardView.vue';
import KanbanBoard from '@/components/kanban-board/KanbanBoard.vue';

export default {
  components: {
    InnerDashboardView,
    KanbanBoard,
  },
  data() {
    return {};
  },
  methods: {
    handleDateClick: (arg) => alert(`date click! ${arg.dateStr}`),
  },
};
</script>
