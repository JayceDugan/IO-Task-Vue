import Vue from 'vue';
import Vuex from 'vuex';
import user from '@/store/user';
import auth from '@/store/auth';
import projects from '@/store/projects';
import taskStatuses from '@/store/task-statuses';
import strapi from '@/lib/strapi';

Vue.use(Vuex);

const store = new Vuex.Store({
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
    taskStatuses,
  },
});

store.subscribeAction((action) => {
  if (action.type === 'projects/list') store.dispatch('taskStatuses/list');
});

export default store;
