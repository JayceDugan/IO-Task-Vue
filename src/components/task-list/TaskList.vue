<template>
  <section>
    <slide-fade-down>
      <v-list v-if="loading" key="loading">
        <div
          v-for="index in 10"
          :key="`task-list-skeleton-loader-${index}`"
        >
          <v-skeleton-loader
            class="mx-auto py-2 white"
            type="list-item"
          />
          <v-divider v-if="index !== 10"/>
        </div>
      </v-list>
      <v-list v-else-if="tasks.length > 0" class="pa-3" dense key="tasks">
        <template v-for="(task, index) in tasks">
          <section :key="task.title">
            <v-list-item>
              <v-list-item-action>
                <v-checkbox v-model="task.complete" />
              </v-list-item-action>
              <v-list-item-content>
                <section class="d-flex flex-row align-center">
              <span>
                {{ task.title }}
              </span>
                  <v-spacer />

                  <v-btn
                    plain
                    color="blueGrey"
                  >
                    <v-icon class="mr-1">mdi-list-status</v-icon>
                    {{ task.subtasksCount }}/{{ task.subtasksComplete }}
                  </v-btn>
                  <v-btn
                    plain
                    color="blueGrey"
                  >
                    <v-icon class="mr-1">mdi-message-text-outline</v-icon>
                    {{ task.commentsCount }}
                  </v-btn>
                  <v-chip
                    :color="`${getChipColor()} lighten-1`"
                    text-color="white"
                    label
                  >
                    {{ task.category }}
                  </v-chip>
                </section>
              </v-list-item-content>
            </v-list-item>
            <v-divider v-if="index !== tasks.length - 1"/>
          </section>
        </template>
      </v-list>
      <slot name="empty" v-else></slot>
    </slide-fade-down>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import SlideFadeDown from '@/components/transitions/SlideFadeDown.vue';

export default {
  name: 'TaskList',
  props: {
    tasks: {
      type: Array,
      required: true,
    },
    loading: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  components: {
    SlideFadeDown,
  },
  created() {
    this.loadTasks();
  },
  data: () => ({
    chipColors: ['purple', 'warning', 'success', 'primary'],
  }),
  computed: {
    ...mapGetters({
      loading: 'tasks/loading',
    }),
  },
  methods: {
    ...mapActions({
      loadTasks: 'tasks/load',
    }),
    getChipColor() {
      return this.chipColors[Math.floor(Math.random() * this.chipColors.length)];
    },
  },
};
</script>
