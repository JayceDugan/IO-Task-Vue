<template>
  <v-card
    class="mb-3"
    elevation="0"
  >
    <v-card-text>
      <section class="d-flex flex-row">
        <v-avatar size="36" class="mr-4">
          <v-img :src="src">
            <template v-slot:placeholder>
              <v-skeleton-loader type="avatar" />
            </template>
          </v-img>
        </v-avatar>
        <div>
          <div class="d-flex flex-row align-center">
            <v-card-title class="pa-0">
              {{ name }}
            </v-card-title>
            <v-card-subtitle class="primary--text pa-0 ml-2 mb-0 mt-0">
              {{ action }}
            </v-card-subtitle>
          </div>
          <v-card-subtitle class="blueGrey--text pa-0">{{ time }}</v-card-subtitle>
        </div>
      </section>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'ActivityCard',
  props: {
    src: {
      type: String,
      required: true,
      default: '',
    },
    name: {
      type: String,
      required: true,
      default: '',
    },
    action: {
      type: String,
      required: true,
      default: '',
    },
    time: {
      type: String,
      required: true,
      default: '',
    },
  },
  data: () => ({
    imageLoaded: false,
    imageLoadError: false,
  }),
};
</script>
