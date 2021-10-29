import Vue from 'vue';
import Vuex from 'vuex';
import user from '@/store/user';
import auth from '@/store/auth';
import projects from '@/store/projects';
import tasks from '@/store/tasks';
import events from '@/store/events';
import users from '@/store/users';
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
  actions: {
    init({ dispatch, rootGetters }) {
      if (rootGetters['user/isLoggedIn']) ['tasks', 'events'].map((ctype) => dispatch(`${ctype}/load`));
    },
  },
  modules: {
    user,
    auth,
    projects,
    taskStatuses,
    tasks,
    users,
    events,
  },
});

store.subscribeAction((action) => {
  if (action.type === 'projects/list') store.dispatch('taskStatuses/list');
});

export default store;
