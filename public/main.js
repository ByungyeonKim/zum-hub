import Contents from './src/service/contents.js';
import Header from './src/components/header.js';
import Home from './src/components/home.js';
import Footer from './src/components/footer.js';
import store from './src/store.js';

const render = () => {
  const app = document.querySelector('#app');
  app.innerHTML = `
    ${Header()}
    ${Home()}
    ${Footer()}
  `;
};

const contents = new Contents();

contents //
  .life()
  .then((articles) => {
    store.setState({ life: articles });
    render();
  });

contents //
  .food()
  .then((articles) => {
    store.setState({ food: articles });
    render();
  });

contents //
  .trip()
  .then((articles) => {
    store.setState({ trip: articles });
    render();
  });

contents //
  .culture()
  .then((articles) => {
    store.setState({ culture: articles });
    render();
  });

contents //
  .best()
  .then((articles) => {
    store.setState({ best: articles });
    render();
  });
