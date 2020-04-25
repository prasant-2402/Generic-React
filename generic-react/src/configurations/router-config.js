import Home from "../components/home";
import Users from "../components/users";

export const ROUTE_CONFIG = [
  { path: '/', component: Home, displayName: 'Home', PageHeader: 'Home Page' },
  { path: '/users', component: Users, displayName: 'User Details', PageHeader: 'User Details Page' }
];
