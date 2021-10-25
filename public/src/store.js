const store = {
  state: {
    serviceItems: [
      { link: '#', content: '뉴스' },
      { link: '#', content: 'TV' },
      { link: '#', content: '허브' },
      { link: '#', content: '쇼핑' },
    ],
    menuItems: [
      { title: 'HOME' },
      { title: '라이프' },
      { title: '푸드' },
      { title: '여행' },
      { title: '컬쳐' },
      { title: '즐겨찾기' },
    ],
    stacks: [
      { name: 'Vanilla JS', ver: '' },
      { name: 'Node.js', ver: 'v14.18.1' },
      { name: 'Express.js', ver: 'v4.17.1' },
      { name: 'Nodemon', ver: 'v2.0.13' },
      { name: 'HTML5, CSS3', ver: '' },
    ],
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
