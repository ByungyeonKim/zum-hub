import store from '../store.js';

const Footer = () => `
  <footer>
    ${StacksList()}
  </footer>
`;

const StacksList = () => `
  <ul class="stacks-list">
    ${store.state.stacks.map(StacksItem).join('')}
  </ul>
`;

const StacksItem = ({ name, ver }) => `
  <li class="stacks-item">${name} ${ver}</li>
`;

export default Footer;
