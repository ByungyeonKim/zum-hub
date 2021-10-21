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

const category = ['life', 'food', 'trip', 'culture'];
const contents = new Contents();

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
