<template>
  <v-form
    ref="form"
    v-model="valid"
  >
    <v-container fluid>
      <v-row hide-gutters>
        <v-col cols="12">
          <input-label :loading="loading">Project name</input-label>
          <v-text-field
            v-model="formModel.projectname"
            :rules="rules.projectname"
            :disabled="loading"
            label="First project name"
            hide-details="auto"
            outlined
            flat
            solo
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <input-label :loading="loading">Invite members</input-label>
          <v-text-field
            v-model="formModel.invites"
            :disabled="loading"
            label="mail@example.com"
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
            block
            :disabled="!valid || loading"
            :loading="loading"
            @click="submit"
          >
            <span :class="valid ? 'primary--text' : ''">
              Finish
            </span>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { mapActions } from 'vuex';
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
      projectname: [
        (v) => !!v || 'Project name is required',
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
    ...mapActions({
      createUser: 'user/create',
    }),
    submit() {
      this.loading = true;
      this.formModel.error = false;

      return this.createUser({
        username: this.form.fullname.replace(' ', '_'),
        email: this.form.email,
        password: this.form.password,
      })
        .then(() => this.$router.push('/'))
        .catch(() => {
          this.formModel.error = true;
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>
