import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(private router: Router) {}

  onSignup() {
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 50); // Slight delay for smoother navigation
  }
  onSignIn() {
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 50); // Slight delay for smoother navigation
  }
}
