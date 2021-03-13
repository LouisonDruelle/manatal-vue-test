const sourceModule = {
  state: {
    sources: [],
  },
  mutations: {
    SET_SOURCES(state, headlines) {
      const sources = [];
      headlines.map((h) => sources.push(h.source.name));
      state.sources = sources;
    },
  },
  actions: {
    async addHeadlineToHistory({ commit }, { headline }) {
      commit('ADD_TO_HISTORY', { headline });
    },
  },
};

export default sourceModule;
