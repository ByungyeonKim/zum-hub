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

const LifeContents = () => `
  <section class="contants-wrap">
    <h2 class="tag-title"># 라이프</h2>
    ${state.life.slice(0, 4).map(Article).join('')}
  </section>
`;

const FoodContents = () => `
  <section class="contants-wrap">
    <h2 class="tag-title"># 푸드</h2>
    ${state.food.slice(0, 4).map(Article).join('')}
  </section>
`;

const TripContents = () => `
  <section class="contants-wrap">
    <h2 class="tag-title"># 여행</h2>
    ${state.trip.slice(0, 4).map(Article).join('')}
  </section>
`;

const CultureContents = () => `
  <section class="contants-wrap">
    <h2 class="tag-title"># 문화</h2>
    ${state.culture.slice(0, 4).map(Article).join('')}
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
    <span class="author">${mediaName}</span>
  </article>
`;

const render = () => {
  const app = document.querySelector('#app');
  app.innerHTML = `
    <header>
      <h1>
        <a href="">ZUM 허브</a>
      </h1>
      <div class="service-wrap">
        <label for="search"></label>
        <input type="text" id="search" placeholder="허브글, 채널 검색" />
        ${ZumService()}
      </div>
    </header>
    <main class="home">
      <h1 class="blind">줌 허브 홈</h1>
      <nav class="nav-menu">
        <h2 class="blind">전체 메뉴</h2>
        ${MenuList()}
      </nav>
      ${LifeContents()}
      ${FoodContents()}
      ${TripContents()}
      ${CultureContents()}
      <div class="best-wrap">
        <h2>실시간 TOP 12</h2>
        <ul class="best-box">
          <li class="best-item">
            <span class="lank">랭크</span>
            <div class="title-box">
              <strong class="title">제목</strong>
              <span class="author">저자</span>
            </div>
          </li>
        </ul>
      </div>
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
