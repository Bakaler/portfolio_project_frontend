import { Routes } from '@angular/router';
// import { calculatorPageRoutes } from './pages/calculatorPage/calculatorPage.routes';
// import { comicPageRoutes } from './pages/comicPage/comicPage.routes';
import { homeRoutes } from './pages/home/home.routes';

export const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.routes').then(m => m.homeRoutes) },
  { path: 'calculator', loadChildren: () => import('./pages/calculatorPage/calculatorPage.routes').then(m => m.calculatorPageRoutes) },
  { path: 'comics', loadChildren: () => import('./pages/comicPage/comicPage.routes').then(m => m.comicPageRoutes) },

  { path: 'starcraft', loadChildren: () => import('./pages/starcraftPage/starcraftPage.routes').then(m => m.starcraftPage) },
  { path: 'mob', loadChildren: () => import('./pages/mobPage/mobPage.routes').then(m => m.mobPageRoutes) },

  // { path: 'about', loadChildren: () => import('./pages/aboutPage/aboutPage.routes').then(m => m.aboutPageRoutes) },
];

