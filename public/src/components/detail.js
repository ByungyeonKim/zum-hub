import store from '../store.js';

const Detail = () => `
  <section class="contents-section">
    <div class="article-title">
      <h2 class="main-title">${store.state.selectedPage.title}</h2>
      <span class="author">${store.state.selectedPage.mediaName}</span>
    </div>
    <article class="article-body">${store.state.selectedPage.mainContents}</article>
  </section>
`;

export default Detail;
