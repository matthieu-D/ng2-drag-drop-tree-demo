import { RouterConfig } from '@angular/router';
import { Home } from './home';

export const routes: RouterConfig = [
  { path: '',      component: Home },
  { path: 'home',  component: Home }
];
