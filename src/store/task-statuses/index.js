import { SET_DATA } from '../generators/mutation-types';
import createVuexStrapiContentModule from '@/store/generators/vuexStrapiContentType';
import TaskStatus from '@/interfaces/TaskStatus';

export default createVuexStrapiContentModule({
  strapiKey: 'taskStatus',
  actions: {
    list({ commit, rootGetters }) {
      return new Promise((resolve, reject) => rootGetters.strapi.api[this.strapiKey].list()
        .then((response) => resolve(commit(
          SET_DATA,
          response.map((taskStatus) => new TaskStatus(taskStatus)),
        )))
        .catch((err) => reject(err)));
    },
  },
  getters: {
    findByID: (state) => (payload) => state.data.find((status) => status.id === payload),
  },
});
