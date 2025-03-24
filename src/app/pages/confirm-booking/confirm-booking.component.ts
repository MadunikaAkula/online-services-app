import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-confirm-booking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './confirm-booking.component.html',
  styleUrls: ['./confirm-booking.component.css'],
})
export class ConfirmBookingComponent {
  selectedService = {
    image:
      'https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/how-to-mount-a-flat-screen-TV-on-a-wall-step-8.jpg',
    title: 'Premium Cleaning Service',
    price: 1500,
    date: '2025-03-25',
    description: 'Professional cleaning service with guaranteed satisfaction.',
  };

  // Form Fields
  fullName: string = '';
  email: string = '';
  mobile: string = '';
  address: string = '';
  pincode: string = '';
  bookingSuccess: boolean = false;

  constructor(private router: Router) {}

  submitBooking(event: Event) {
    event.preventDefault();

    // Simulate successful booking
    this.bookingSuccess = true;

    // Clear the form fields after successful booking
    this.fullName = '';
    this.email = '';
    this.mobile = '';
    this.address = '';
    this.pincode = '';

    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Automatically close alert after 5 seconds and navigate to home
    setTimeout(() => {
      this.bookingSuccess = false;
      this.router.navigate(['/']); // Navigate to home after successful booking
    }, 5000);
  }

  closeAlert() {
    this.bookingSuccess = false;
  }
}
