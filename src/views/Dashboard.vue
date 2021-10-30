<template>
  <div>
    <v-container>
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
                title="Due Tasks"
                :items="tasks"
                pagination-suffix="Tasks"
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
                title="Upcoming Events"
                :items="events"
                pagination-suffix="Events"
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
              <section class="d-flex justify-space-between align-center">
                <h4 class="blueGrey--text text-h4">Activity</h4>
                <p class="blueGrey--text body-2 mb-0">All Projects</p>
              </section>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CardSlider from '@/components/card-slider/CardSlider.vue';
import StatisticCard from '@/components/statistic-card/StatisticCard.vue';

export default {
  name: 'Dashboard',
  components: {
    StatisticCard,
    CardSlider,
  },
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
};
</script>
