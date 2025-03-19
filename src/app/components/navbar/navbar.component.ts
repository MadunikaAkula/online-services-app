import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  menuOpen: boolean = false;

  constructor(public router: Router) {}

  // Toggle the hamburger menu
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  // Close menu after clicking a link
  closeMenu() {
    this.menuOpen = false;
  }

  // Navigation Methods
  navigateToHome() {
    this.router.navigate(['/']);
    this.closeMenu();
  }

  navigateToContact() {
    this.router.navigate(['/contact']);
    this.closeMenu();
  }
}
