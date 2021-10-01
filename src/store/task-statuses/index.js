import { SET_STATUSES } from './mutation-types';
import TaskStatus from '@/interfaces/TaskStatus';

export default {
  namespaced: true,
  state: {
    statuses: [],
  },
  actions: {
    list({ commit, rootGetters }) {
      return new Promise((resolve, reject) => rootGetters.strapi.api.taskStatus.list()
        .then((response) => resolve(commit(
          SET_STATUSES,
          response.map((taskStatus) => new TaskStatus(taskStatus)),
        )))
        .catch((err) => reject(err)));
    },
  },
  mutations: {
    [SET_STATUSES]: (state, payload) => {
      state.statuses = payload;
    },
  },
  getters: {
    list: (state) => state.statuses,
    findByID: (state) => (payload) => state.statuses.find((status) => status.id === payload),
  },
};
