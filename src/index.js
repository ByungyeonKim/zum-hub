import './index.css';

import store from './store.js';
import Header from './components/header.js';
import Contents from './service/contents.js';
import Footer from './components/footer.js';

import router from './service/router';
import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'http://localhost:8080/api',
});
const contents = new Contents(httpClient);

const fetchContents = async () => {
  const life = await contents.content('life');
  const food = await contents.content('food');
  const trip = await contents.content('trip');
  const culture = await contents.content('culture');
  const best = await contents.best();

  store.setState({
    hubContent: { life, food, trip, culture },
    rankingContent: best,
  });
};

const onClickContent = (selector) => {
  const navigation = document.querySelector(selector);

  navigation.addEventListener('click', (e) => {
    const target = e.target.closest('a');
    if (!target) return;

    e.preventDefault();
    const path = target.getAttribute('href');

    window.history.pushState({ path }, null, path);

    const detail = async () => {
      const url = path.replace(/\//g, ' ');
      const detail = await contents.detail(url);

      store.setState({ selectedPage: detail });
      render(path);
      useLazyLoading();
    };

    return detail();
  });

  window.addEventListener('popstate', (e) => {
    render(e.state ? e.state.path : '/');
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

const render = (path) => {
  const app = document.getElementById('app');

  app.innerHTML = `
    ${Header()}
    ${router(path)}
    ${Footer()}
  `;

  console.log('render!');
};

const init = async () => {
  await fetchContents();
  render('/');
  // ???????????? #app?????? ?????? ????????? ?????? ????????? ???????????? ????????????.
  onClickContent('#app');
  console.log('init ?????? ????');
};

try {
  init();
} catch (err) {
  console.error(err);
}
