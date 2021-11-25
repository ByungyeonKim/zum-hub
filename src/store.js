const store = {
  state: {},

  setState(newState) {
    this.state = { ...this.state, ...newState };
  },
};

export default store;
