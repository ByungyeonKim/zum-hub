import Home from '../components/home';
import Detail from '../components/detail';

const router = (path) => {
  const routes = [
    { path: '/', view: 'Home' },
    { path: '/:category', view: 'Category' },
    { path: '/:category/:idx', view: 'Detail' },
  ];

  let params = path.match(/\w+/g);

  if (params === null) {
    params = '/';
    routes[0].view = Home();
  } else if (params.length === 1) {
    routes[1].path = `/${params[0]}`;
    routes[1].view = 'Category';
  } else if (params.length === 2) {
    routes[2].path = `/${params[0]}/${params[1]}`;
    routes[2].view = Detail();
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

export default router;
