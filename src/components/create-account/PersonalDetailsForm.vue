<template>
  <v-form
    ref="form"
    v-model="valid"
  >
    <v-container fluid>
      <v-row hide-gutters>
        <v-col cols="12">
          <input-label>Full name</input-label>
          <v-text-field
            v-model="formModel.fullname"
            :rules="rules.fullname"
            label="Your full name"
            hide-details="auto"
            outlined
            flat
            solo
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <input-label>Email</input-label>
          <v-text-field
            v-model="formModel.email"
            :rules="rules.email"
            label="Your email"
            hide-details="auto"
            outlined
            flat
            solo
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <input-label>Password</input-label>
          <v-text-field
            v-model="formModel.password"
            :rules="rules.password"
            label="Your password"
            hide-details="auto"
            outlined
            flat
            solo
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-btn
            color="greyAlt"
            elevation="0"
            text-color="primary"
            :disabled="!valid || loading"
            :loading="loading"
            block
            @click="notifyStart"
          >
            <span :class="valid ? 'primary--text' : ''">
              Start
            </span>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import InputLabel from '@/components/generic/InputLabel.vue';

export default {
  name: 'PersonalDetailsForm',
  props: {
    form: {
      type: Object,
      required: true,
    },
  },
  components: {
    InputLabel,
  },
  data: () => ({
    valid: true,
    loading: false,
    rules: {
      fullname: [
        (v) => !!v || 'Name is required',
      ],
      email: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      password: [
        (v) => !!v || 'Password is required',
        (v) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(v) || 'Password must be a minimum of 8 characters, and contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character',
      ],
    },
  }),
  computed: {
    formModel: {
      get() {
        return this.form;
      },
      set(val) {
        return this.$emit('update:form', val);
      },
    },
  },
  methods: {
    notifyStart() {
      this.$emit('next');
    },
  },
};
</script>
