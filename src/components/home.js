import store from '../store.js';

const Home = () => `
  <main class="home">
    <h1 class="blind">줌 허브 홈</h1>
    <nav class="nav-menu">
      <h2 class="blind">전체 메뉴</h2>
      <ul class="menu-list">
        <li class="menu-item">HOME</li>
        <li class="menu-item">라이프</li>
        <li class="menu-item">푸드</li>
        <li class="menu-item">여행</li>
        <li class="menu-item">컬쳐</li>
        <li class="menu-item">즐겨찾기</li>
      </ul>
    </nav>
    ${ContentList()}
    ${BestList()}
  </main>
`;

const ContentList = () => {
  const hubContent = store.state.hubContent;
  const category = ['라이프', '푸드', '여행', '컬쳐'];
  const items = Object.values(hubContent);

  return items.map(
    (item) => `
      <section class="contents-section">
        <h2 class="tag-title"># ${category}</h2>
        <div class="contents-wrap">
          ${item.slice(0, 4).map(ContentItem).join('')}
        </div>
      </section>
    `
  );
};

const ContentItem = (item) => `
  <article class="content" data-url="${item.url}">
    <h3 class="blind">${item.title}</h3>
    <img
      class="thumbnail"
      src="${item.imageUrl}"
      alt="${item.mediaName} 기사"
    />
    <strong class="title">${item.title}</strong>
    <p class="description">${item.summaryContent}</p>
    <span class="author">by ${item.mediaName}</span>
  </article>
`;

const BestList = () => `
  <section class="best-section">
    <h2 class="tag-title">#실시간 TOP 12</h2>
    <ul class="best-list">
      ${store.state.rankingContent.map(BestItem).join('')}
    </ul>
  </section>
`;

const BestItem = ({ title, mediaName }, lank) => `
  <li class="best-item">
    <span class="lank">${lank + 1}</span>
    <div class="title-box">
      <strong class="title">${title}</strong>
      <span class="author">by ${mediaName}</span>
    </div>
  </li>
`;

export default Home;
