import { STORE_JWT } from './mutation-types';

export default {
  namespaced: true,
  state: {
    jwt: localStorage.getItem('jwt') ?? '',
  },
  actions: {
    storeJWT({ commit }, payload) {
      commit(STORE_JWT, payload);
      localStorage.setItem('jwt', payload);
    },
    reset({ commit }) {
      commit(STORE_JWT, {});
      localStorage.removeItem('jwt');
    },
  },
  mutations: {
    [STORE_JWT]: (state, payload) => {
      state.jwt = payload;
    },
  },
  getters: {
    jwt: (state) => state.jwt,
    bearerJWT: (_, getters) => `Bearer ${getters.jwt}`,
    isAuthenticated: (_, getters) => JSON.stringify(getters.jwt) !== '',
  },
};
