import { Routes } from '@angular/router';
import { calculatorRoutes } from './pages/calculator/calculator.routes';
import { homeRoutes } from './pages/home/home.routes';

export const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.routes').then(m => m.homeRoutes) },
  { path: 'calculator', loadChildren: () => import('./pages/calculator/calculator.routes').then(m => m.calculatorRoutes) },
];

