import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./landing-page/landing-page').then(m => m.LandingPage)
  },
  {
    path: 'category/:categoryName',
    loadComponent: () => import('./category/category').then(m => m.Category)
  },
  {
    path: 'joke/:category/:index',
    loadComponent: () => import('./joke/joke').then(m => m.JokeComponent)
  }
];
