import request from '@/lib/utils/request';
import config from '@/lib/strapi/utils/config';

const endpoint = '/auth/local';

export default {
  create(payload) {
    return request.post(config.baseDomain.concat(endpoint, '/register'), payload);
  },
  login(payload) {
    return request.post(config.baseDomain.concat(endpoint), payload);
  },
};
