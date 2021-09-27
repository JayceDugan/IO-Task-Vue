<template>
  <v-sheet elevation="0" class="mx-auto pa-15" width="555" rounded>
    <form-step-header label="Password Recovery" />
    <v-form
      ref="form"
      v-model="valid"
    >
      <v-container fluid>
        <v-row hide-gutters>
          <v-col cols="12">
            <input-label :loading="loading">Your Email</input-label>
            <v-text-field
              v-model="form.email"
              :rules="rules.email"
              :disabled="loading"
              label="Enter your email"
              hide-details="auto"
              outlined
              flat
              solo
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-btn
              color="primary"
              elevation="0"
              :disabled="!valid || loading"
              :loading="loading"
              block
              @click="submit"
            >
              Send Confirmation
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <p
      class="mx-auto d-block text-center mt-16 blueGrey--text"
    >
      Don't have an account?

      <router-link to="/create-account" :disabled="loading" >Sign Up Here</router-link>
    </p>
  </v-sheet>
</template>

<script>
import FormStepHeader from '@/components/create-account/FormStepHeader.vue';
import InputLabel from '@/components/generic/InputLabel.vue';

export default {
  name: 'SignInForm',
  data: () => ({
    valid: true,
    loading: false,
    form: {
      email: '',
      password: '',
      remember: false,
    },
    rules: {
      email: [
        (v) => !!v || 'E-mail is required',
      ],
      password: [
        (v) => !!v || 'Password is required',
      ],
    },
  }),
  components: {
    FormStepHeader,
    InputLabel,
  },
  methods: {
    submit() {
      this.loading = true;
    },
  },
};
</script>
