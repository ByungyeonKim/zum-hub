import store from '../store.js';

const Detail = () => `
  <div class="article-title">
    <h2 class="main-title">${store.state.selectedPage.title}</h2>
    <span class="author">by ${store.state.selectedPage.mediaName}</span>
  </div>
  <section class="contents-section">
    <article class="article-body">${store.state.selectedPage.mainContents}</article>
  </section>
`;

export default Detail;
