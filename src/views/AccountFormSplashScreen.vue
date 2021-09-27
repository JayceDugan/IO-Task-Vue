<template>
  <v-container
    fill-height
    align-start
    justify-center
    fluid
    class="greyAlt pt-15"
  >
    <!-- // Images -->
    <v-img :src="require('@/assets/account-splash-screens/Rectangle.svg')" class="rectangle" />
    <v-img :src="require('@/assets/account-splash-screens/Oval.svg')" class="oval-1" />
    <v-img :src="require('@/assets/account-splash-screens/Oval Copy.svg')" class="oval-2" />
    <v-img :src="require('@/assets/account-splash-screens/Oval Copy 2.svg')" class="oval-3" />
    <v-img :src="require('@/assets/account-splash-screens/Oval Copy 3.svg')" class="oval-4" />
    <!-- // Images -->
    <v-row justify-content="start">
      <v-col>
        <router-link to="/" class="d-inline">
          <v-img :src="require('@/assets/logo.svg')" width="107" class="mx-auto mb-15"  />
        </router-link>
      </v-col>
    </v-row>
    <v-row>
      <v-slide-y-transition mode="out-in">
        <component
          :key="form"
          :is="form"
          @stepUpdate="checkProgress"
        />
      </v-slide-y-transition>
    </v-row>
    <v-row >
      <v-col>
        <v-sheet width="270" class="mx-auto">
          <v-fade-transition mode="out-in">
            <v-progress-linear
              v-if="form === 'create-account-wizard'"
              :value="progress"
              rounded
              :color="color"
              height="6"
            />
          </v-fade-transition>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CreateAccountWizard from '@/components/create-account/CreateAccountWizard.vue';
import SignInForm from '@/components/sign-in-form/SignInForm.vue';
import PasswordRecoveryForm from '@/components/password-recovery-form/PasswordRecoveryForm.vue';

export default {
  name: 'AccountFormSplashScreen',
  props: {
    form: {
      type: String,
      required: true,
    },
  },
  components: {
    CreateAccountWizard,
    SignInForm,
    PasswordRecoveryForm,
  },
  data: () => ({
    progress: 0,
    color: 'error',
  }),
  methods: {
    checkProgress(val) {
      try {
        const progress = {
          1: 33.33,
          2: 66.66,
          3: 99.99,
        };

        const color = {
          1: 'error',
          2: 'warning',
          3: 'success',
        };

        this.progress = progress[val];
        this.color = color[val];
      } catch {
        this.progress = 0;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.rectangle {
  position: absolute;
  top: 0;
  right: 0;
  width: 30vw;
}

.oval-1,
.oval-2,
.oval-3,
.oval-4 {
  position: absolute;
}

.oval-1 {
  bottom: 20%;
  height: 36px;
  width: 36px;
  left: 20%;
}

.oval-2 {
  bottom: 16%;
  height: 64px;
  width: 64px;
  left: 21.5%;
}

.oval-3 {
  right: 19.5%;
  bottom: 50%;
  height: 46px;
  width: 46px;
}

.oval-4 {
  right: 21.5%;
  bottom: 45%;
  height: 100px;
  width: 100px;
}
</style>
