import './index.css';

import Header from './components/header.js';
import store from './store.js';
import Home from './components/home.js';
import Contents from './service/contents.js';
import Footer from './components/footer.js';
import Detail from './components/detail.js';

import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'http://localhost:8080/api',
});
const contents = new Contents(httpClient);

async function fetchContents() {
  const life = await contents.content('life');
  const food = await contents.content('food');
  const trip = await contents.content('trip');
  const culture = await contents.content('culture');
  const best = await contents.best();

  store.setState({
    hubContent: { life, food, trip, culture },
    rankingContent: best,
  });

  return render();
}

const goToDetailPage = () => {
  const contentsWrap = document.querySelectorAll('.contents-wrap');

  contentsWrap.forEach((content) => {
    content.addEventListener('click', (event) => {
      const content = event.target.closest('.content');

      if (!content) {
        return;
      }

      const url = content.dataset.url
        .replace(/https:\/\/hub.zum.com\//g, '')
        .replace(/\//g, ' ');

      contents //
        .detail(url)
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
  const app = document.getElementById('app');
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

try {
  fetchContents();
} catch (error) {
  console.error(error);
}
