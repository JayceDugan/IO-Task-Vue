import createVuexStrapiContentModule from '@/store/generators/vuexStrapiContentType';

export default createVuexStrapiContentModule({
  strapiKey: 'tasks',
  state: {
    sort: 'A-Z',
  },
});
