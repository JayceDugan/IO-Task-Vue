import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import vuex from './plugins/vuex';
import '@fontsource/rubik';

Vue.config.productionTip = false;

Vue.prototype.$bus = new Vue({});

new Vue({
  router,
  store,
  vuetify,
  vuex,
  render: (h) => h(App),
}).$mount('#app');
