import Queue from '@/lib/data-structures/queue';
import request from '@/lib/utils/request';
import config from '@/lib/strapi/utils/config';

const contentAPIGenerator = (endpoint, vuexStore) => {
  const authHeaders = {
    headers: {
      Authorization: vuexStore.getters['auth/bearerJWT'],
    },
  };

  return {
    // Get a list of {content-type} entries
    list() {
      let results = [];
      let start = 0;
      const limit = 50;
      const requestQueue = new Queue();

      const createRequest = (startParam, limitParam) => () => request.get(
        config.baseDomain.concat(endpoint, '?_start=', startParam, '&_limit=', limitParam),
        authHeaders,
      );

      const addRequest = () => {
        requestQueue.enqueue(createRequest(start, limit));
        start += limit;
      };

      const loadData = () => {
        addRequest();

        return requestQueue.process()
          .then((returnedResults) => {
            results = [...results, ...returnedResults.data];

            if (returnedResults.errors.length) returnedResults.errors.map((err) => { throw err; });
            if (returnedResults.data.length < limit) return results;

            return loadData();
          });
      };

      return loadData();
    },
    // Count {content-type} entries
    count() {
      return request.get(config.baseDomain.concat(endpoint, '/count'), authHeaders);
    },
    // Find a {content-type} entry
    find(payload) {
      return request.get(config.baseDomain.concat(endpoint, '/', payload), authHeaders);
    },
    // Create a {content-type} entry
    create(payload) {
      return request.post(config.baseDomain.concat(endpoint, '/'), payload, authHeaders);
    },
    // Update a {content-type} entry
    update(payload) {
      return request.put(config.baseDomain.concat(endpoint, '/', payload.id), payload.value, authHeaders);
    },
    // Delete a {content-type} entry
    delete(payload) {
      return request.post(config.baseDomain.concat(endpoint, '/', payload), authHeaders);
    },
  };
};

export default contentAPIGenerator;
