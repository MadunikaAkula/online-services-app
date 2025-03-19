import { Routes } from '@angular/router';

export const routes: Routes = [
  // Root route (home page)
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },

  // Explicit home route (optional, redirects to root)
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full',
  },

  // Contact route
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(
        (m) => m.ContactComponent
      ),
  },
];
