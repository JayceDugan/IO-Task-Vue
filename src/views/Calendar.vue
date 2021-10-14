<template>
  <inner-dashboard-view>
    <template v-slot:main>
      <FullCalendar :options="calendarOptions" />
    </template>
  </inner-dashboard-view>
</template>

<script>
import '@fullcalendar/core/vdom'; // solves problem with Vite
import FullCalendar from '@fullcalendar/vue';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import InnerDashboardView from '@/layouts/InnerDashboardView.vue';

export default {
  components: {
    InnerDashboardView,
    FullCalendar, // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth',
        dateClick: this.handleDateClick,
        events: [
          { title: 'event 1', date: '2019-04-01' },
          { title: 'event 2', date: '2019-04-02' },
        ],
      },
    };
  },
  methods: {
    handleDateClick: (arg) => alert(`date click! ${arg.dateStr}`),
  },
};
</script>
