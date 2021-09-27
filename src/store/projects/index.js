import {
  SET_PROJECTS,
  SET_LAYOUT,
  ADD_PROJECT,
} from './mutation-types';

export default {
  namespaced: true,
  state: {
    projects: [],
    layout: 'grid',
    sort: 'A-Z',
  },
  actions: {
    list({ commit, rootGetters }) {
      return new Promise((resolve, reject) => rootGetters.strapi.api.projects.list()
        .then((response) => resolve(commit(SET_PROJECTS, response)))
        .catch((err) => reject(err)));
    },
    create({ commit, rootGetters }, payload) {
      return new Promise((resolve, reject) => rootGetters.strapi.api.projects.create(payload)
        .then((response) => resolve(commit(ADD_PROJECT, response)))
        .catch((err) => reject(err)));
    },
    reset({ commit }) {
      commit(SET_PROJECTS, []);
      commit(SET_LAYOUT, 'grid');
    },
  },
  mutations: {
    [SET_PROJECTS]: (state, payload) => {
      state.projects = payload;
    },
    [SET_LAYOUT]: (state, payload) => {
      state.layout = payload;
    },
    [ADD_PROJECT]: (state, payload) => {
      state.projects = [...state.projects, payload];
    },
  },
  getters: {
    all: (state) => state.projects,
    layout: (state) => state.layout,
  },
};
