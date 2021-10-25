import store from '../store.js';

const Home = () => `
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
    ${RealTimeBest()}
  </main>
`;

const MenuList = () => `
  <ul class="menu-list">
    ${store.state.menuItems.map(MenuItem).join('')}
  </ul>
`;

const MenuItem = ({ title }) => `
  <li class="menu-item">${title}</li>
`;

const Life = () => `
  <section class="contents-section">
    <h2 class="tag-title">#라이프</h2>
    <div class="contents-wrap">
      ${store.state.life.slice(0, 4).map(Article).join('')}
    </div>
  </section>
`;

const Food = () => `
  <section class="contents-section">
    <h2 class="tag-title">#푸드</h2>
    <div class="contents-wrap">
      ${store.state.food.slice(0, 4).map(Article).join('')}
    </div>
  </section>
`;

const Trip = () => `
  <section class="contents-section">
    <h2 class="tag-title">#여행</h2>
    <div class="contents-wrap">
      ${store.state.trip.slice(0, 4).map(Article).join('')}
    </div>
  </section>
`;

const Culture = () => `
  <section class="contents-section">
    <h2 class="tag-title">#문화</h2>
    <div class="contents-wrap">
      ${store.state.culture.slice(0, 4).map(Article).join('')}
    </div>
  </section>
`;

const Article = ({ title, imageUrl, mediaName, summaryContent, url }) => `
  <article class="content" data-url="${url}">
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

const RealTimeBest = () => `
  <section class="best-section">
    <h2 class="tag-title">#실시간 TOP 12</h2>
    <ul class="best-list">
      ${store.state.realTimeBest.map(BestArticle).join('')}
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

export default Home;
