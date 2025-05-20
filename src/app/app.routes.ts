import { Routes } from '@angular/router';
import { calculatorPageRoutes } from './pages/calculatorPage/calculatorPage.routes';
import { homeRoutes } from './pages/home/home.routes';

export const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.routes').then(m => m.homeRoutes) },
  { path: 'calculator', loadChildren: () => import('./pages/calculatorPage/calculatorPage.routes').then(m => m.calculatorPageRoutes) },
];

