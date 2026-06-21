import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },

  {
    path: 'welcome',
    loadComponent: () =>
      import('./pages/welcome/welcome.page').then((m) => m.WelcomePage),
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then((m) => m.LoginPage),
  },

  {
    path: 'register-step1',
    loadComponent: () =>
      import('./pages/register-step1/register-step1.page').then(
        (m) => m.RegisterStep1Page,
      ),
  },

  {
    path: 'register-step2',
    loadComponent: () =>
      import('./pages/register-step2/register-step2.page').then(
        (m) => m.RegisterStep2Page,
      ),
  },

  {
    path: 'register-step3',
    loadComponent: () =>
      import('./pages/register-step3/register-step3.page').then(
        (m) => m.RegisterStep3Page,
      ),
  },

  {
    path: 'tabs',
    loadChildren: () =>
      import('./tabs/tabs.routes').then((m) => m.routes),
  },
];