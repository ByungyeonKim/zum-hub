import Contents from './src/service/contents.js';

let state = {
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
  life: [],
  food: [],
  trip: [],
  culture: [],
  best: [],
};

const setState = (newState) => {
  state = { ...state, ...newState };
  render(state);
};

const ZumService = () => `
  <ul class="service-menu">
    ${state.serviceItems.map(ServiceItem).join('')}
  </ul>
  <div class="login">로그인</div>
`;

const ServiceItem = ({ link, content }) => `
  <li>
    <a href=${link}>${content}</a>
  </li>
`;

const MenuList = () => `
  <ul class="menu-list">
    ${state.menuItems.map(MenuItem).join('')}
  </ul>
`;

const MenuItem = ({ title }) => `
  <li class="menu-item">${title}</li>
`;

const Life = () => `
  <section class="contents-section">
    <h2 class="tag-title">#라이프</h2>
    <div class="contents-wrap">
      ${state.life.slice(0, 4).map(Article).join('')}
    </div>
  </section>
`;

const Food = () => `
  <section class="contents-section">
    <h2 class="tag-title">#푸드</h2>
    <div class="contents-wrap">
      ${state.food.slice(0, 4).map(Article).join('')}
    </div>
  </section>
`;

const Trip = () => `
  <section class="contents-section">
    <h2 class="tag-title">#여행</h2>
    <div class="contents-wrap">
      ${state.trip.slice(0, 4).map(Article).join('')}
    </div>
  </section>
`;

const Culture = () => `
  <section class="contents-section">
    <h2 class="tag-title">#문화</h2>
    <div class="contents-wrap">
      ${state.culture.slice(0, 4).map(Article).join('')}
    </div>
  </section>
`;

const Article = ({ title, imageUrl, mediaName, summaryContent }) => `
  <article class="content">
    <h3 class="blind">${title}</h3>
    <img
      class="thumbnail"
      src="${imageUrl}"
      alt="${mediaName} 기사"
    />
    <strong class="title">${title}</strong>
    <p class="description">${summaryContent}</p>
    <span class="author">by ${mediaName}</span>
  </article>
`;

const Best = () => `
  <section class="best-section">
    <h2 class="tag-title">#실시간 TOP 12</h2>
    <ul class="best-list">
      ${state.best.map(BestArticle).join('')}
    </ul>
  </section>
`;

const BestArticle = ({ title, mediaName, url }, lank) => `
  <li class="best-item">
    <span class="lank">${lank + 1}</span>
    <div class="title-box">
      <strong class="title">${title}</strong>
      <span class="author">by ${mediaName}</span>
    </div>
  </li>
`;

const render = () => {
  const app = document.querySelector('#app');
  app.innerHTML = `
    <header>
      <div class="header-wrap">
        <h1 class="logo">
          <a href="">ZUM 허브</a>
        </h1>
        <div class="service-wrap">
          <input type="text" class="search" placeholder="허브글, 채널 검색" />
          ${ZumService()}
        </div>
      </div>
    </header>
    <main class="home">
      <h1 class="blind">줌 허브 홈</h1>
      <nav class="nav-menu">
        <h2 class="blind">전체 메뉴</h2>
        ${MenuList()}
      </nav>
      ${Life()}
      ${Food()}
      ${Trip()}
      ${Culture()}
      ${Best()}
    </main>
    <footer>
      <ul class="stacks-list">
        <li class="stacks-item">Vanilla JS</li>
        <li class="stacks-item">Node.js v14.18.1</li>
        <li class="stacks-item">Express.js v4.17.1</li>
        <li class="stacks-item">Nodemon v2.0.13</li>
        <li class="stacks-item">HTML5, CSS3</li>
      </ul>
    </footer>
  `;
};

render();

const contents = new Contents();

contents //
  .life()
  .then((articles) => {
    setState({ life: articles });
  });

contents //
  .food()
  .then((articles) => {
    setState({ food: articles });
  });

contents //
  .trip()
  .then((articles) => {
    setState({ trip: articles });
  });

contents //
  .culture()
  .then((articles) => {
    setState({ culture: articles });
  });

contents //
  .best()
  .then((articles) => {
    setState({ best: articles });
  });
