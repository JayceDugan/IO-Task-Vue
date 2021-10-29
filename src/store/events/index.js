import createVuexStrapiContentModule from '@/store/generators/vuexStrapiContentType';

export default createVuexStrapiContentModule({
  strapiKey: 'events',
  state: {
    sort: 'A-Z',
  },
});
