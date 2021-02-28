export const SET_HEADLINES = (state, headlines) => {
  state.headlines = headlines;
};

export const ADD_TO_HISTORY = (state, headline) => {
  state.history.push(headline);
};

export const SET_SOURCES = (state, sources) => {
  state.sources = sources;
};
