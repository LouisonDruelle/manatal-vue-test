const historyModule = {
  state: {
    history: [],
  },
  mutations: {
    ADD_TO_HISTORY(state, headline) {
      state.history.push(headline);
    },
  },
};

export default historyModule;
