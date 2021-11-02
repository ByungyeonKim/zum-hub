const store = {
  state: {
    life: [],
    food: [],
    trip: [],
    culture: [],
    realTimeBest: [],
    selectedPage: [],
  },

  setState(newState) {
    this.state = { ...this.state, ...newState };
  },

  setSelectedPage(newState) {
    this.state = { ...this.state, ...newState };
  },
};

export default store;
