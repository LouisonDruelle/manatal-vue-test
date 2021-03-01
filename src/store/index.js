import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const API_URL = process.env.VUE_APP_API_URL;
const API_KEY = process.env.VUE_APP_API_KEY;

export default new Vuex.Store({
  state: {
    headlines: [],
    history: [],
    sources: [],
  },

  mutations: {
    SET_HEADLINES(state, headlines) {
      state.headlines = headlines;
    },
    ADD_TO_HISTORY(state, headline) {
      state.history.push(headline);
    },
    SET_SOURCES(state, sources) {
      state.sources = sources;
    },
  },
  actions: {
    async getHeadlines({ commit }) {
      const response = await axios.get(`${API_URL}top-headlines?country=us&apiKey=${API_KEY}`);
      const headlines = response.data.articles;
      commit('SET_HEADLINES', headlines);
    },
    async getSources({ commit }) {
      const response = await axios.get(`${API_URL}sources?apiKey=${API_KEY}`);
      const { sources } = response.data;
      commit('SET_SOURCES', sources);
    },
    async addHeadlineToHistory({ commit }, { headline }) {
      commit('ADD_TO_HISTORY', { headline });
    },
    async searchHeadlines({ commit }, { keyword }) {
      const response = await axios.get(`${API_URL}top-headlines?q=${keyword}&apiKey=${API_KEY}`);
      const headlines = response.data.articles;
      commit('SET_HEADLINES', headlines);
    },
    async getError({ commit }) {
      const response = await axios.get('https://newsapi.org/v2/sources?apiKey');
      const nodes = response.data;
      commit('SET_SOURCES', nodes);
    },
  },
});
