import Account from '../pages/Account';
import Campaign from '../pages/Campaign';
import Dashboard from '../pages/Dashboard';

// Public Routes
const publicRoutes = [
  { path: '/', component: Dashboard },
  // {path: '/login', component: Login},
  { path: '/campaign', component: Campaign },
  { path: '/account', component: Account },
  { path: '/profile', component: Campaign },
  { path: '/display-ads', component: Account },
];

// Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
