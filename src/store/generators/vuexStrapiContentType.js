import {
  SET_DATA,
  SET_FORBIDDEN,
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

import { capitalizeString } from '@/lib/stringHelpers';

const crudVerbs = ['loading', 'creating', 'updating', 'deleting'];

const strapiModuleRequest = ({ commit, rootGetters }, settings) => new Promise(
  (resolve, reject) => Promise.all([
    commit(settings.inProgressMutation, true),
    commit(settings.errorMutation, false),
    rootGetters.strapi.api[settings.strapiKey][settings.moduleAction](settings.modulePayload),
  ])
    .then(([,, response]) => resolve(commit(settings.responseMutation, response)))
    .catch((err) => {
      commit(settings.errorMutation, true);
      if (err.statusText === 403) commit(SET_FORBIDDEN, true);
      reject(err);
    })
    .finally(() => commit(settings.inProgressMutation, false)),
);

const createVuexStrapiContentModule = (options) => ({
  namespaced: true,
  state: {
    data: [],
    forbidden: false,
    ...crudVerbs.reduce((acc, key) => ({
      ...acc,
      [key]: false,
      ['error'.concat(capitalizeString(key))]: false,
    }), {}),
    ...options.state,
  },
  getters: {
    data: (state) => state.data,
    isForbidden: (state) => state.forbidden,
    ...crudVerbs.reduce((acc, key) => ({
      ...acc,
      [key]: (state) => state[key],
      ['error'.concat(capitalizeString(key))]: (state) => state['error'.concat(capitalizeString(key))],
    }), {}),
    ...options.getters,
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
      })
        .catch((err) => console.error(`Error Loading ${options.strapiKey}. ${err.status} (${err.statusText}).`));
    },
    create(vuexInstance, payload) {
      return strapiModuleRequest(vuexInstance, {
        strapiKey: options.strapiKey,
        inProgressMutation: SET_CREATING,
        errorMutation: SET_ERROR_CREATING,
        responseMutation: CREATE_DATA_ITEM,
        moduleAction: 'create',
        modulePayload: payload,
      })
        .catch((err) => console.error(`Error Creating ${options.strapiKey}. ${err.status} (${err.statusText}).`));
    },
    update(vuexInstance, payload) {
      return strapiModuleRequest(vuexInstance, {
        strapiKey: options.strapiKey,
        inProgressMutation: SET_UPDATING,
        errorMutation: SET_ERROR_UPDATING,
        responseMutation: UPDATE_DATA_ITEM,
        moduleAction: 'update',
        modulePayload: payload,
      })
        .catch((err) => console.error(`Error Updating ${options.strapiKey}. ${err.status} (${err.statusText}).`));
    },
    delete(vuexInstance, payload) {
      return strapiModuleRequest(vuexInstance, {
        strapiKey: options.strapiKey,
        inProgressMutation: SET_DELETING,
        errorMutation: SET_ERROR_DELETING,
        responseMutation: DELETE_DATA_ITEM,
        moduleAction: 'delete',
        modulePayload: payload,
      })
        .catch((err) => console.error(`Error Updating ${options.strapiKey}. ${err.status} (${err.statusText}).`));
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
    [SET_FORBIDDEN]: (state, payload) => {
      state.forbidden = payload;
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
});

export default createVuexStrapiContentModule;
