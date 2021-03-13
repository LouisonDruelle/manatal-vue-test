import Vue from 'vue';
import Vuex from 'vuex';
import headline from './headline';
import history from './history';
import source from './source';
import error from './error';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    headline,
    history,
    source,
    error,
  },
});
