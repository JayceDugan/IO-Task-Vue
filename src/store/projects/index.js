import { SET_LAYOUT } from './mutation-types';
import createVuexStrapiContentModule from '@/store/generators/vuexStrapiContentType';

export default createVuexStrapiContentModule({
  strapiKey: 'projects',
  state: {
    layout: 'grid',
    sort: 'A-Z',
  },
  mutations: {
    [SET_LAYOUT]: (state, payload) => {
      state.layout = payload;
    },
  },
  getters: {
    layout: (state) => state.layout,
  },
});
