import axios from 'axios';

const API_URL = process.env.VUE_APP_API_URL;
const API_KEY = process.env.VUE_APP_API_KEY;

const headlineModule = {
  state: {
    headlines: [],
  },
  mutations: {
    SET_HEADLINES(state, headlines) {
      state.headlines = headlines;
    },
    UPDATE_HEADLINE_TITLE(state, headline) {
      const index = state.headlines.findIndex((h) => h.url === headline.url);
      state.headlines[index].title = headline.title;
    },
  },
  actions: {
    async getHeadlines({ commit }) {
      const response = await axios.get(`${API_URL}top-headlines?country=us&apiKey=${API_KEY}`);
      const headlines = response.data.articles;
      commit('SET_HEADLINES', headlines);
      commit('SET_SOURCES', headlines);
    },
    async searchHeadlines({ commit }, { keyword }) {
      const response = await axios.get(`${API_URL}top-headlines?q=${keyword}&apiKey=${API_KEY}`);
      const headlines = response.data.articles;
      commit('SET_HEADLINES', headlines);
    },
    async updateHeadlineTitle({ commit }, { title, url }) {
      commit('UPDATE_HEADLINE_TITLE', { title, url });
    },
  },
};

export default headlineModule;
