import { lazy } from 'ice';

const Home = lazy(() => import('@/pages/Home'));
const List = lazy(() => import('@/pages/List'));
const routerConfig = [
  {
    path: '/home',
    component: Home,
    exact: true
  },
  {
    path: '/list',
    component: List,
    exact: true
  },
  {
    path: '/',
    component: Home,
  },
];
export default routerConfig;
