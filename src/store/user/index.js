import { UPDATE_USER_DATA } from './mutations-types';

export default {
  namespaced: true,
  state: {
    user: localStorage.getItem('user') ?? {},
  },
  actions: {
    create({ dispatch, rootGetters }, payload) {
      return new Promise((resolve, reject) => rootGetters.strapi.api.auth.create(payload)
        .then((response) => resolve(dispatch('storeUserData', response)))
        .catch((err) => reject(err)));
    },
    login({ dispatch, rootGetters }, payload) {
      return new Promise((resolve, reject) => rootGetters.strapi.api.auth.login(payload)
        .then((response) => resolve(dispatch('storeUserData', response)))
        .catch((err) => reject(err)));
    },
    logout({ dispatch }) {
      return Promise.all([dispatch('reset'), dispatch('auth/reset', null, { root: true })]);
    },
    reset({ commit }) {
      commit(UPDATE_USER_DATA, {});
      localStorage.removeItem('user');
    },
    storeUserData({ dispatch, commit }, payload) {
      dispatch('auth/storeJWT', payload.jwt, { root: true });
      commit(UPDATE_USER_DATA, payload.user);
      localStorage.setItem('user', payload.user);
      return payload;
    },
  },
  mutations: {
    [UPDATE_USER_DATA]: (state, payload) => {
      state.user = payload;
    },
  },
  getters: {
    isLoggedIn: (state, getters, rootState, rootGetters) => (JSON.stringify(state.user) !== '{}' && rootGetters['auth/isAuthenticated']),
  },
};
