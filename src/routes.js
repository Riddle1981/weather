import { lazy } from 'ice';

const Home= lazy(() => import('@/pages/Home'));
const routerConfig = [
  {
    path: '/',
    component: Home,
  },
];
export default routerConfig;
