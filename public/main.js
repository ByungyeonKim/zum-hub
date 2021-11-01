import Contents from './src/service/contents.js';
import Header from './src/components/header.js';
import Home from './src/components/home.js';
import Footer from './src/components/footer.js';
import store from './src/store.js';
import Detail from './src/components/detail.js';

const category = ['life', 'food', 'trip', 'culture'];
const httpClient = axios.create({
  baseURL: 'http://localhost:3000/api',
});
const contents = new Contents(httpClient);

for (const name of category) {
  contents //
    .getContents(name)
    .then((result) => {
      store.setState({ [name]: result });
      render();
    });
}

contents //
  .realTimeBest()
  .then((result) => {
    store.setState({ realTimeBest: result });
    render();
  });

const goToDetailPage = () => {
  const contentsWrap = document.querySelectorAll('.contents-wrap');

  contentsWrap.forEach((content) => {
    content.addEventListener('click', (event) => {
      const content = event.target.closest('.content');
      const url = content.dataset.url.replace(/\//g, ' ');

      if (!content) {
        return;
      }
      contents //
        .detailPage(url)
        .then((result) => {
          history.pushState({ page: 'detail' }, '', '/life');
          store.setSelectedPage({ selectedPage: result });
          render();
          useLazyLoading();
        });
    });
  });
};

const useLazyLoading = () => {
  const imgs = document.querySelectorAll('.article-body img');

  const observerCallback = (entries, observer) => {
    entries.forEach(({ isIntersecting, intersectionRatio, target }) => {
      if (isIntersecting && intersectionRatio > 0) {
        if (target.dataset.src) {
          target.src = target.dataset.src;
        }
        observer.unobserve(target);
      }
    });
  };

  const io = new IntersectionObserver(observerCallback);
  imgs.forEach((img) => io.observe(img));
};

const render = () => {
  const app = document.querySelector('#app');
  app.innerHTML = `
    ${Header()}
    ${history.state ? Detail() : Home()}
    ${Footer()}
  `;
  goToDetailPage();
};

window.onpopstate = () => {
  render();
};
