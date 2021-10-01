<template>
  <v-form class="fill-height">
    <v-container
      class="fill-height align-start"
      fluid
    >
      <v-row>
        <v-col cols="12">
          <h4
            :class="state.loading ? 'text--disabled' : ''"
            class="text-h5"
          >
            <v-icon
              color="blueGrey"
              left
            >
              mdi-image-outline
            </v-icon>

            Upload Cover
          </h4>

          <v-file-input
            v-model="form.Cover"
            :disabled="state.loading"
            placeholder="Select or drag image"
            prepend-icon=""
          />
        </v-col>
        <v-col cols="12">
          <h4
            :class="state.loading ? 'text--disabled' : ''"
            class="text-h5"
          >
            <v-icon
              color="blueGrey"
              left
            >
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
            :disabled="state.loading"
            :rules="rules.name"
            flat
            hide-details="auto"
            label="Enter project name"
            outlined
            required
            solo
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <input-label
            :class="state.loading ? 'text--disabled' : ''"
          >
            Project UUID
          </input-label>
          <v-text-field
            v-model="form.UUID"
            :disabled="state.loading"
            flat
            hide-details="auto"
            label="Enter project uuid"
            outlined
            required
            solo
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <input-label>Category</input-label>
          <v-select
            v-model="form.Category"
            :disabled="state.loading"
            :items="categoryOptions"
            :menu-props="{ bottom: true, offsetY: true }"
            flat
            hide-details="auto"
            label="Please select category"
            outlined
            required
            solo
          ></v-select>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <input-label
            :class="state.loading ? 'text--disabled' : ''"
          >
            Due Date
          </input-label>
          <v-menu
            v-model="menus.Due"
            :close-on-content-click="false"
            :nudge-right="0"
            min-width="auto"
            offset-y
            transition="scale-transition"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-bind="attrs"
                v-on="on"
                :disabled="state.loading"
                :value="form.Due"
                append-icon="mdi-calendar"
                flat
                hide-details="auto"
                label="Please Select Date"
                outlined
                readonly
                solo
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="form.Due"
              :disabled="state.loading"
              @input="menus.dueDate = false"
            />
          </v-menu>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <input-label
            :class="state.loading ? 'text--disabled' : ''"
          >
            Budget (AUD)
          </input-label>
          <v-text-field
            v-model.number="form.Budget"
            :disabled="state.loading"
            :rules="rules.budget"
            flat
            hide-details="auto"
            label="Please set budget"
            outlined
            required
            solo
            type="number"
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
            flat
            hide-details="auto"
            label="Invite Members"
            multiple
            outlined
            required
            small-chips
            solo
          />
        </v-col>
      </v-row>
      <v-row class="mt-auto">
        <v-col cols="12">
          <v-slide-x-transition
            appear
            mode="out-in"
          >
            <p
              v-if="state.error"
              class="error--text"
            >
              A problem occurred while creating this project, please try again.
            </p>
          </v-slide-x-transition>
          <section class="d-flex align-center justify-space-between">
            <v-btn
              :disabled="!form.Name || state.loading"
              :loading="state.loading"
              color="primary"
              @click="createProjectHandler"
            >
              Create Project
            </v-btn>
            <v-btn
              :disabled="state.loading"
              color="grey"
              @click="cancelHandler"
            >Cancel
            </v-btn>
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
      UUID: '',
      Category: '',
      Due: '',
      Cover: {},
      Budget: '',
      project_members: ['john.doe@gmail.com', 'lally.smith@gmail.com', 'tommy.montana@gmail.com'],
    },
    categoryOptions: ['Category A'],
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
