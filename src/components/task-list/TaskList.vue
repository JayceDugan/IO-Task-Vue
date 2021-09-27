<template>
  <section>
    <v-list v-if="tasks.length > 0" class="pa-3" dense>
      <template v-for="task in tasks">
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
                  color="purple"
                  text-color="white"
                  label
                >
                  {{ task.category }}
                </v-chip>
              </section>
            </v-list-item-content>
          </v-list-item>
          <v-divider />
        </section>
      </template>
    </v-list>
    <slot name="empty" v-else></slot>
  </section>
</template>

<script>
export default {
  name: 'TaskList',
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
};
</script>
