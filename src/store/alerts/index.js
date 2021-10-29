import { v4 as uuidv4 } from 'uuid';

export default {
  namespaced: true,
  state: {
    alerts: [],
  },
  getters: {
    all: (state) => state.alerts,
  },
  mutations: {
    display(state, payload) {
      state.alerts = [...state.alerts, { ...payload, id: uuidv4() }];
    },
    remove(state) {
      const alerts = [...state.alerts];
      alerts.shift();
      state.alerts = [...alerts];
    },
  },
  actions: {
    async display({ dispatch, commit }, payload) {
      commit('display', payload);
      await new Promise((resolve) => setTimeout(() => resolve(), 4000));
      dispatch('remove');
    },
    remove({ commit }) {
      commit('remove');
    },
  },
};
