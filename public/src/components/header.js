import store from '../store.js';

const Header = () => `
  <header>
    <div class="header-wrap">
      <h1 class="logo">
        <a href="">ZUM 허브</a>
      </h1>
      <div class="service-wrap">
        <input type="text" class="search" placeholder="허브글, 채널 검색" />
        ${ZumService()}
      </div>
    </div>
  </header>
`;

const ZumService = () => `
  <ul class="service-menu">
    ${store.state.serviceItems.map(ServiceItem).join('')}
  </ul>
  <div class="login">로그인</div>
`;

const ServiceItem = ({ link, content }) => `
  <li>
    <a href=${link}>${content}</a>
  </li>
`;

export default Header;
