import {
  SET_DATA,
  CREATE_DATA_ITEM,
  UPDATE_DATA_ITEM,
  DELETE_DATA_ITEM,
  SET_LOADING,
  SET_CREATING,
  SET_UPDATING,
  SET_DELETING,
  SET_ERROR_LOADING,
  SET_ERROR_CREATING,
  SET_ERROR_UPDATING,
  SET_ERROR_DELETING,
} from './mutation-types';

const strapiModuleRequest = ({ commit, rootGetters }, settings) => new Promise(
  (resolve, reject) => Promise.all([
    commit(settings.inProgressMutation, true),
    commit(settings.errorMutation, false),
    rootGetters.strapi.api[settings.strapiKey][settings.moduleAction](settings.modulePayload),
  ])
    .then(([,, response]) => resolve(commit(settings.responseMutation, response)))
    .catch((err) => {
      commit(settings.errorMutation, true);
      reject(err);
    })
    .finally(() => commit(settings.inProgressMutation, false)),
);

const createVuexStrapiContentModule = (options) => ({
  namespaced: true,
  state: {
    data: [],
    loading: false,
    creating: false,
    updating: false,
    deleting: false,
    errorLoading: false,
    errorCreating: false,
    errorUpdating: false,
    errorDeleting: false,
    ...options.state,
  },
  actions: {
    load(vuexInstance) {
      return strapiModuleRequest(vuexInstance, {
        strapiKey: options.strapiKey,
        inProgressMutation: SET_LOADING,
        errorMutation: SET_ERROR_LOADING,
        responseMutation: SET_DATA,
        moduleAction: 'list',
        modulePayload: null,
      });
    },
    create(vuexInstance, payload) {
      return strapiModuleRequest(vuexInstance, {
        strapiKey: options.strapiKey,
        inProgressMutation: SET_CREATING,
        errorMutation: SET_ERROR_CREATING,
        responseMutation: CREATE_DATA_ITEM,
        moduleAction: 'create',
        modulePayload: payload,
      });
    },
    update(vuexInstance, payload) {
      return strapiModuleRequest(vuexInstance, {
        strapiKey: options.strapiKey,
        inProgressMutation: SET_UPDATING,
        errorMutation: SET_ERROR_UPDATING,
        responseMutation: UPDATE_DATA_ITEM,
        moduleAction: 'update',
        modulePayload: payload,
      });
    },
    delete(vuexInstance, payload) {
      return strapiModuleRequest(vuexInstance, {
        strapiKey: options.strapiKey,
        inProgressMutation: SET_DELETING,
        errorMutation: SET_ERROR_DELETING,
        responseMutation: DELETE_DATA_ITEM,
        moduleAction: 'delete',
        modulePayload: payload,
      });
    },
    reset({ commit }) {
      commit(SET_DATA, []);
    },
    ...options.actions,
  },
  mutations: {
    [SET_LOADING]: (state, payload) => {
      state.loading = payload;
    },
    [SET_CREATING]: (state, payload) => {
      state.creating = payload;
    },
    [SET_UPDATING]: (state, payload) => {
      state.updating = payload;
    },
    [SET_DELETING]: (state, payload) => {
      state.updating = payload;
    },
    [SET_ERROR_LOADING]: (state, payload) => {
      state.errorLoading = payload;
    },
    [SET_ERROR_CREATING]: (state, payload) => {
      state.errorLoading = payload;
    },
    [SET_ERROR_UPDATING]: (state, payload) => {
      state.errorLoading = payload;
    },
    [SET_ERROR_DELETING]: (state, payload) => {
      state.errorLoading = payload;
    },
    [SET_DATA]: (state, payload) => {
      state.data = payload;
    },
    [CREATE_DATA_ITEM]: (state, payload) => {
      state.data = [...state.data, payload];
    },
    [UPDATE_DATA_ITEM]: (state, payload) => {
      state.data = [...state.data, payload];
    },
    [DELETE_DATA_ITEM]: (state, payload) => {
      state.data = [...state.data, payload];
    },
    ...options.mutations,
  },
  getters: {
    data: (state) => state.data,
    loading: (state) => state.loading,
    creating: (state) => state.creating,
    updating: (state) => state.updating,
    deleting: (state) => state.deleting,
    errorLoading: (state) => state.errorLoading,
    errorCreating: (state) => state.errorCreating,
    errorUpdating: (state) => state.errorUpdating,
    errorDeleting: (state) => state.errorDeleting,
    ...options.getters,
  },
});

export default createVuexStrapiContentModule;
