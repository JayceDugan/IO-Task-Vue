<template>
  <v-stepper
    v-model="formStep"
    class="pa-16 mx-auto"
    width="555"
    elevation="0"
    rounded
  >
    <v-stepper-items>
      <v-stepper-content step="1">
        <form-step-header tag="h1" label="Create Account" />
        <p v-if="form.error" class="text-center error--text">
          Oops! An error occurred while attempting to create that account,
          please review entered details and try again.
        </p>

        <personal-details-form :form.sync="form" @next="formStep += 1"/>

        <p
          class="mx-auto d-block text-center mt-16 blueGrey--text"
        >
          Already have an account?

          <router-link to="/login">Login Here</router-link>
        </p>
      </v-stepper-content>
      <v-stepper-content step="2">
        <form-step-header label="Confirm your email" />

        <p>Enter 6 digits code</p>

        <v-form class="mb-7">
          <section class="d-flex">
            <v-text-field
              v-for="index in 6"
              :key="index"
              required
              simple
              hide-details="auto"
              flat
              single-line
              width="60"
              outlined
              class="text-center mb-0"
            >
              <template v-slot:label="slotProps" class="text-center">
                {{ slotProps }}
              </template>
            </v-text-field>
          </section>
        </v-form>

        <section class="d-flex justify-space-between align-center mb-16">
          <v-btn
            color="greyAlt"
            elevation="0"
            text-color="primary"
            @click="formStep -= 1"
          >
              <span class="primary--text">
                Back
              </span>
          </v-btn>
          <v-btn
            color="greyAlt"
            elevation="0"
            text-color="primary"
            @click="formStep += 1"
          >
            <span class="primary--text">
              Next
            </span>
          </v-btn>
        </section>

        <p
          class="mx-auto d-block text-center mt-16 blueGrey--text"
        >
          Already have an account?

          <router-link to="/login">Login Here</router-link>
        </p>

      </v-stepper-content>
      <v-stepper-content step="3">
        <form-step-header label="Enter Project Details" />

        <project-details-form :form="form" />
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import PersonalDetailsForm from './PersonalDetailsForm.vue';
import ProjectDetailsForm from './ProjectDetailsForm.vue';
import FormStepHeader from './FormStepHeader.vue';

export default {
  name: 'CreateAccountWizard',
  components: {
    PersonalDetailsForm,
    ProjectDetailsForm,
    FormStepHeader,
  },
  data: () => ({
    formStep: 1,
    form: {
      error: false,
      fullname: '',
      projectname: '',
      email: '',
      password: '',
      invites: '',
    },
  }),
  watch: {
    formStep: {
      handler: function checkStepUpdate(val) {
        this.$emit('stepUpdate', val);
      },
      immediate: true,
    },
    'form.error': {
      handler: function notifyFailed(failed) {
        if (failed) this.formStep = 1;
      },
    },
  },
};
</script>
