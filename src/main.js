// Base Imports ----------------------------------
import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';

// Misc Imports ----------------------------------
import router from './router';
import store from './store';

// Plugin Imports --------------------------------
import vuex from './plugins/vuex';
import vuetify from './plugins/vuetify';
import './plugins/vueAwesomeSwiper';
import './plugins/filters';

// Font Imports ----------------------------------
import '@fontsource/rubik';

// Config Settings -------------------------------
Vue.config.productionTip = false;

// Prototype Registrations -----------------------
if (!Object.prototype.hasOwnProperty.call(Vue, '$bus')) Vue.prototype.$bus = new Vue({});

new Vue({
  router,
  store,
  vuetify,
  vuex,
  render: (h) => h(App),
}).$mount('#app');
