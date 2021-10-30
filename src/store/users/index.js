import {
  SET_USERS,
  SET_LOADING,
  ADD_USER,
} from './mutation-types';

export default {
  namespaced: true,
  state: {
    loading: false,
    users: [],
    sort: 'A-Z',
  },
  actions: {
    list({ commit, rootGetters }) {
      commit(SET_LOADING, true);

      return new Promise((resolve, reject) => rootGetters.strapi.api.users.list()
        .then((response) => resolve(commit(SET_USERS, response)))
        .catch((err) => reject(err)))
        .finally(() => commit(SET_LOADING, false));
    },
    create({ commit, rootGetters }, payload) {
      return new Promise((resolve, reject) => rootGetters.strapi.api.users.create(payload)
        .then((response) => resolve(commit(ADD_USER, response)))
        .catch((err) => reject(err)));
    },
    reset({ commit }) {
      commit(SET_USERS, []);
    },
  },
  mutations: {
    [SET_USERS]: (state, payload) => {
      state.users = payload;
    },
    [ADD_USER]: (state, payload) => {
      state.users = [...state.users, payload];
    },
    [SET_LOADING]: (state, payload) => {
      state.loading = payload;
    },
  },
  getters: {
    all: (state) => state.users,
    layout: (state) => state.layout,
    loading: (state) => state.loading,
  },
};
