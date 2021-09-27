import Vue from 'vue';
import Vuex from 'vuex';
import user from '@/store/user';
import auth from '@/store/auth';
import projects from '@/store/projects';
import strapi from '@/lib/strapi';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  getters: {
    strapi(state, getters, rootState, rootGetters) {
      return strapi({
        state, getters, rootState, rootGetters,
      });
    },
  },
  modules: {
    user,
    auth,
    projects,
  },
});
