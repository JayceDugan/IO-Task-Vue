<template>
  <v-form class="fill-height">
    <v-container fluid class="fill-height align-start">
      <v-row>
        <v-col cols="12">
          <h4
            class="text-h5"
            :class="state.loading ? 'text--disabled' : ''"
          >
            <v-icon left color="blueGrey">
              mdi-image-outline
            </v-icon>

            Upload Cover
          </h4>

          <v-file-input
            v-model="form.Cover"
            prepend-icon=""
            placeholder="Select or drag image"
            :disabled="state.loading"
          />
        </v-col>
        <v-col cols="12">
          <h4
            class="text-h5"
            :class="state.loading ? 'text--disabled' : ''"
          >
            <v-icon left color="blueGrey">
              mdi-information-outline
            </v-icon>

            Project Details
          </h4>
        </v-col>
        <v-col cols="12">
          <input-label
            :class="state.loading ? 'text--disabled' : ''"
          >
            Project name
          </input-label>
          <v-text-field
            v-model="form.Name"
            :rules="rules.name"
            :disabled="state.loading"
            label="Enter project name"
            hide-details="auto"
            outlined
            flat
            solo
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <input-label>Category</input-label>
          <v-select
            v-model="form.Category"
            :items="categoryOptions"
            label="Please select category"
            :menu-props="{ bottom: true, offsetY: true }"
            :disabled="state.loading"
            outlined
            flat
            solo
            required
            hide-details="auto"
          ></v-select>
        </v-col>
        <v-col cols="12" md="6">
          <input-label
            :class="state.loading ? 'text--disabled' : ''"
          >
            Due Date
          </input-label>
          <v-menu
            v-model="menus.Due"
            :close-on-content-click="false"
            :nudge-right="0"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                :value="form.Due"
                :disabled="state.loading"
                label="Please Select Date"
                append-icon="mdi-calendar"
                hide-details="auto"
                outlined
                flat
                solo
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="form.Due"
              @input="menus.dueDate = false"
              :disabled="state.loading"
            />
          </v-menu>
        </v-col>
        <v-col cols="12" md="6">
          <input-label
            :class="state.loading ? 'text--disabled' : ''"
          >
            Budget (AUD)
          </input-label>
          <v-text-field
            v-model.number="form.Budget"
            type="number"
            :rules="rules.budget"
            label="Please set budget"
            hide-details="auto"
            :disabled="state.loading"
            outlined
            flat
            solo
            required
          />
        </v-col>
        <v-col cols="12">
          <input-label
            :class="state.loading ? 'text--disabled' : ''"
          >
            Invite Members
          </input-label>
          <v-combobox
            v-model="form.project_members"
            :disabled="state.loading"
            label="Invite Members"
            hide-details="auto"
            outlined
            flat
            solo
            required
            small-chips
            multiple
          />
        </v-col>
      </v-row>
      <v-row class="mt-auto">
        <v-col cols="12">
          <v-slide-x-transition mode="out-in" appear>
            <p v-if="state.error" class="error--text">
              A problem occurred while creating this project, please try again.
            </p>
          </v-slide-x-transition>
          <section class="d-flex align-center justify-space-between">
            <v-btn
              color="primary"
              :disabled="!form.Name || state.loading"
              :loading="state.loading"
              @click="createProjectHandler"
            >
              Create Project
            </v-btn>
            <v-btn
              color="grey"
              :disabled="state.loading"
              @click="cancelHandler"
            >Cancel</v-btn>
          </section>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { mapActions } from 'vuex';
import InputLabel from '@/components/generic/InputLabel.vue';

export default {
  components: { InputLabel },
  data: () => ({
    drawers: {
      createNew: false,
    },
    menus: {
      dueDate: false,
    },
    state: {
      error: false,
      loading: false,
    },
    form: {
      Name: '',
      Category: '',
      Due: '',
      Cover: {},
      Budget: '',
      project_members: ['john.doe@gmail.com', 'lally.smith@gmail.com', 'tommy.montana@gmail.com'],
    },
    categoryOptions: ['CategoryA'],
    rules: {
      name: [
        (v) => !!v || 'Project name is required',
      ],
    },
  }),
  methods: {
    ...mapActions({
      createProject: 'projects/create',
    }),
    createProjectHandler() {
      this.state.loading = true;

      return this.createProject(this.form)
        .then(() => this.$emit('saved'))
        .catch(() => {
          this.state.error = true;
        })
        .finally(() => {
          this.state.loading = false;
        });
    },
    cancelHandler() {
      this.$emit('cancel');
    },
  },
};
</script>
