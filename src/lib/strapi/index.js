import config from '@/lib/strapi/utils/config';
import api from '@/lib/strapi/api-modules';

export default (store) => ({
  config,
  api: api(store),
});
