import { Routes } from '@angular/router';

export const routes: Routes = [
  // Redirect the root to the login page
  {
    path: '',
    redirectTo: '/register',
    pathMatch: 'full',
  },

  // Login Route
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register/register.component').then(
        (m) => m.RegisterComponent
      ),
  },

  // Home Route
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },

  // Contact route
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(
        (m) => m.ContactComponent
      ),
  },

  // Confirm Booking
  {
    path: 'confirm-booking',
    loadComponent: () =>
      import('./pages/confirm-booking/confirm-booking.component').then(
        (m) => m.ConfirmBookingComponent
      ),
  },

  // Service Availability
  {
    path: 'service-availability',
    loadComponent: () =>
      import('./pages/verify-address/verify-address.component').then(
        (m) => m.VerifyAddressComponent
      ),
  },

  // Register Route
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
  },
];
