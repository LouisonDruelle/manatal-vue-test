import axios from 'axios';

const API_URL = 'https://newsapi.org/v2/';
const API_KEY = '099148be22804e849a0c6fe022b7cf5e';

export const getHeadlines = ({ commit }) => {
  axios.get(`${API_URL}top-headlines?country=us&apiKey=${API_KEY}`)
    .then((response) => {
      commit('SET_HEADLINES', response.data.articles);
    });
};

export const getSources = ({ commit }) => {
  axios.get(`${API_URL}sources?apiKey=${API_KEY}`)
    .then((response) => {
      commit('SET_SOURCES', response.data.sources);
    });
};

export const addHeadlineToHistory = ({ commit }, { headline }) => {
  commit('ADD_TO_HISTORY', { headline });
};
