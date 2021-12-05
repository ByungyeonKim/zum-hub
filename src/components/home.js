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
  const content = ['라이프', '푸드', '여행', '컬쳐'];
  const hubContent = store.state.hubContent;

  const items = Object.values(hubContent);
  const category = Object.keys(hubContent);

  return items
    .map(
      (item, i) => `
      <section class="contents-section">
        <h2 class="title"># ${content[i]}</h2>
        <div class="contents-wrap">
          ${item
            .slice(0, 4)
            .map((value) => ContentItem(value, i, category))
            .join('')}
        </div>
      </section>
      `
    )
    .join('');
};

const ContentItem = (value, i, category) => `
  <article class="content" data-url="${value.url}">
    <a href="${category[i]}/${value.idx}">
      <h3 class="blind">${value.title}</h3>
      <img
        class="thumbnail"
        src="${value.imageUrl}"
        alt="${value.mediaName} 기사"
      />
      <strong class="title">${value.title}</strong>
      <p class="description">${value.summaryContent}</p>
      <span class="author">by ${value.mediaName}</span>
    </a>
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
