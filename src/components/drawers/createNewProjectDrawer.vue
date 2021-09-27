<template>
  <v-navigation-drawer
    :value="value"
    fixed
    temporary
    right
    width="524px"
    class="pa-7 text-left"
    elevation="3"
    persistent
    hide-overlay
    @input="handleInput"
  >
    <template v-slot:prepend>
      <h3 class="text-h3 mb-9">
        Add new project
      </h3>
    </template>

    <create-new-project-form @saved="$emit('input', false)" @cancel="$emit('input', false)" />

<!--    <forms-->
<!--    />-->
  </v-navigation-drawer>
</template>

<script>
import createNewProjectForm from '../forms/createNewProject.vue';

export default {
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    createNewProjectForm,
  },
  methods: {
    handleInput(val) {
      if (this.value !== val) this.$emit('input', val);
    },
  },
};
</script>
