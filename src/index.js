import './index.css';

import store from './store.js';
import Header from './components/header.js';
import Home from './components/home.js';
import Contents from './service/contents.js';
import Footer from './components/footer.js';
import Detail from './components/detail.js';

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

const fetchDetail = async (url) => {
  const detail = await contents.detail(url);

  store.setState({ selectedPage: detail });
};

const navigateTo = (selector) => {
  const navigation = document.querySelector(selector);

  navigation.addEventListener('click', (e) => {
    const target = e.target.closest('a');
    if (!target) return;

    e.preventDefault();

    const path = target.getAttribute('href');

    window.history.pushState({ path }, null, path);
    render(path).then(() => useLazyLoading());
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

const router = (path) => {
  const routes = [
    { path: '/', view: Home() },
    { path: '/:category', view: 'Category' },
    { path: '/:category/:idx', view: 'Detail' },
  ];

  let params = path.match(/\w+/g);

  if (params === null) {
    params = '/';
  } else if (params.length === 1) {
    routes[1].path = `/${params[0]}`;
  } else if (params.length === 2) {
    routes[2].path = `/${params[0]}/${params[1]}`;
  }

  const isMatched = routes.map((route) => {
    return {
      route,
      result: location.pathname === route.path,
    };
  });

  let matched = isMatched.find((match) => {
    return match.result === true;
  });

  // 매치된게 없으면 Home 컴포넌트 반환
  if (!matched) {
    matched = routes[0].view;
  }

  return matched.route.view;
};

const render = async (path) => {
  const app = document.getElementById('app');

  try {
    await fetchContents();

    app.innerHTML = `
        ${Header()}
        ${router(path)}
        ${Footer()}
      `;
  } catch (error) {
    console.error(error);
  }
};

function init() {
  render('/');
  // 셀렉터를 #app으로 했기 때문에 함수 순서가 바뀌어도 동작한다.
  navigateTo('#app');
  console.log('init 완료 🚀');
}

init();
