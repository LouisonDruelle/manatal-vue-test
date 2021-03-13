import axios from 'axios';

const errorModule = {
  actions: {
    async getError() {
      await axios.get('https://newsapi.org/v2/sources?apiKey');
    },
  },
};

export default errorModule;
