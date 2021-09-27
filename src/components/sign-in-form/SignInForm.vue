<template>
  <v-sheet elevation="0" class="mx-auto pa-15" width="555" rounded>
    <form-step-header label="Sign In" />
    <p v-if="form.error" class="error--text text-center">
      The provided details were incorrect, please review the entered details and
      try again.</p>
    <v-form
      ref="form"
      v-model="valid"
    >
      <v-container fluid>
        <v-row hide-gutters>
          <v-col cols="12">
            <input-label :loading="loading">Email</input-label>
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
            <input-label :loading="loading">Password</input-label>
            <v-text-field
              v-model="form.password"
              :rules="rules.password"
              type="password"
              label="Enter your password"
              :disabled="loading"
              hide-details="auto"
              outlined
              flat
              solo
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <section class="d-flex justify-space-between align-center">
              <v-checkbox
                v-model="form.remember"
                :disabled="loading"
                label="Remember me"
                hide-details="auto"
                class="mt-0 body-1"
              />
              <router-link to="/password-recovery">Recover Password</router-link>
            </section>
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
              Sign In
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
import { mapActions } from 'vuex';
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
    ...mapActions({
      login: 'user/login',
    }),
    submit() {
      this.loading = true;

      return this.login({ identifier: this.form.email, password: this.form.password })
        .then(() => this.$router.push('/'))
        .catch(() => {
          this.form.error = true;
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>
