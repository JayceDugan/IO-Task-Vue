<template>
  <div>
    <inner-dashboard-view>
      <template v-slot:main>
        <v-container fluid>
          <v-row>
            <v-col cols="8">
              <v-row>
                <v-col>
                  <section class="d-flex justify-space-between align-center">
                    <h4 class="blueGrey--text text-h4">Tasks Overview</h4>
                    <p class="blueGrey--text body-2 mb-0">All Tasks</p>
                  </section>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6">
                  <statistic-card
                    :number="345"
                    subtitle="New Tasks"
                  />
                </v-col>
                <v-col cols="6">
                  <statistic-card
                    :number="128"
                    subtitle="Tasks Done"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <section class="d-flex justify-space-between align-center">
                    <h4 class="blueGrey--text text-h4">Tasks and events</h4>
                    <p class="blueGrey--text body-2 mb-0">All Events</p>
                  </section>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6">
                  <card-slider
                    :items="tasks"
                    pagination-suffix="Tasks"
                    title="Due Tasks"
                  >
                    <template v-slot:slide-icon>mdi-calendar</template>
                    <template v-slot:slide-icon-label="{ item }">
                      <template v-if="item.Due">
                        Due by:
                        <span class="primary--text">
                      {{ item.Due | taskDueDate }}
                    </span>
                      </template>
                      <template v-else>
                        No Deadline
                      </template>
                    </template>
                    <template v-slot:slide-title="{ item }">{{ item.Title }}</template>
                    <template v-slot:slide-description="{ item }">{{ item.Description }}</template>
                    <template v-slot:slide-additional>
                      <v-chip
                        color="success"
                        label
                      >
                        Spotify
                      </v-chip>
                    </template>
                  </card-slider>
                </v-col>
                <v-col cols="6">
                  <card-slider
                    :items="events"
                    pagination-suffix="Events"
                    title="Upcoming Events"
                  >
                    <template v-slot:empty>
                      {{
                        eventsForbidden
                          ? 'Events data is not permitted to be viewed by this account.'
                          : 'Lorem Ipsum Dolor Amet'
                      }}
                    </template>
                    <template v-slot:slide-icon>mdi-calendar</template>
                    <template v-slot:slide-icon-label="{ item }">
                      {{ item.Title }}
                    </template>
                    <template v-slot:slide-title="{ item }">{{ item.Title }}</template>
                    <template v-slot:slide-description="{ item }">{{ item.Description }}</template>
                    <template v-slot:slide-additional>
                      <v-chip
                        color="success"
                        label
                      >
                        Spotify
                      </v-chip>
                    </template>
                  </card-slider>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="4">
              <v-row>
                <v-col>
                  <section class="d-flex justify-space-between align-center mb-6">
                    <h4 class="blueGrey--text text-h4">Activity</h4>
                    <p class="blueGrey--text body-2 mb-0">All Projects</p>
                  </section>

                  <v-scroll-y-transition group appear>
                    <activity-card
                      v-for="(item, idx) in activity"
                      :key="`activity-item-${idx}`"
                      v-bind="item"
                    />
                  </v-scroll-y-transition>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </template>
    </inner-dashboard-view>
  </div>
</template>

<script>
import Velocity from 'velocityjs';
import { mapGetters } from 'vuex';
import ActivityCard from '@/components/activity-card/ActivityCard.vue';
import CardSlider from '@/components/card-slider/CardSlider.vue';
import StatisticCard from '@/components/statistic-card/StatisticCard.vue';
import InnerDashboardView from '@/layouts/InnerDashboardView.vue';

export default {
  name: 'Dashboard',
  components: {
    InnerDashboardView,
    ActivityCard,
    StatisticCard,
    CardSlider,
  },
  data: () => ({
    activity: [
      {
        src: 'https://picsum.photos/36/36',
        name: 'Loretta',
        action: 'added 3 subtasks',
        time: '2h ago',
      },
      {
        src: 'https://picsum.photos/37/37',
        name: 'Richard',
        action: 'created a new project',
        time: '2h ago',
      },
      {
        src: 'https://picsum.photos/38/38',
        name: 'Sarah',
        action: 'submitted 5 new tasks',
        time: '2h ago',
      },
      {
        src: 'https://picsum.photos/39/39',
        name: 'Mario',
        action: 'marked a task a complete',
        time: '2h ago',
      },
      {
        src: 'https://picsum.photos/40/40',
        name: 'Jack',
        action: 'added 3 subtasks',
        time: '2h ago',
      },
      {
        src: 'https://picsum.photos/41/41',
        name: 'Elnora',
        action: 'created a new project',
        time: '2h ago',
      },
      {
        src: 'https://picsum.photos/42/42',
        name: 'Tom Byrd',
        action: 'added 3 subtasks',
        time: '2h ago',
      },
      {
        src: 'https://picsum.photos/43/43',
        name: 'Loretta',
        action: 'added 3 subtasks',
        time: '2h ago',
      },
      {
        src: 'https://picsum.photos/44/44',
        name: 'Dale',
        action: 'marked task a complete',
        time: '2h ago',
      },
    ],
  }),
  computed: {
    ...mapGetters({
      tasks: 'tasks/data',
      events: 'events/data',
      eventsForbidden: 'events/isForbidden',
    }),
    swiper() {
      return this.$refs.mySwiper.$refs.slider.$swiper;
    },
  },
  methods: {
    beforeEnter(el) {
      // eslint-disable-next-line no-param-reassign
      el.style.opacity = 0;
      // eslint-disable-next-line no-param-reassign
      el.style.height = 0;
    },
    enter(el, done) {
      const delay = el.dataset.index * 150;
      setTimeout(() => {
        Velocity(
          el,
          { opacity: 1, height: '1.6em' },
          { complete: done },
        );
      }, delay);
    },
    leave(el, done) {
      const delay = el.dataset.index * 150;
      setTimeout(() => {
        Velocity(
          el,
          { opacity: 0, height: 0 },
          { complete: done },
        );
      }, delay);
    },
  },
};
</script>
