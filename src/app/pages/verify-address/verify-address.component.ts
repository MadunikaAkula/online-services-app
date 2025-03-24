import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-verify-address',
  imports: [CommonModule, FormsModule],
  templateUrl: './verify-address.component.html',
  styleUrl: './verify-address.component.css',
})
export class VerifyAddressComponent {
  constructor(private router: Router) {}

  userPincode: string = '';
  availability: boolean | null = null;
  loading: boolean = false;
  verifyAddress(event: Event): void {
    event.preventDefault();

    if (!this.userPincode) {
      alert('Please enter a valid pincode.');
      return;
    }

    this.loading = true;

    // Simulated API call
    setTimeout(() => {
      this.loading = false;

      // Mock response: service available for pincode 500001, unavailable for others
      if (this.userPincode === '500001') {
        this.availability = true;
      } else {
        this.availability = false;
      }
    }, 1500);
  }

  // Navigate to booking page if available
  proceedToBooking(): void {
    if (this.availability) {
      this.router.navigate(['/confirm-booking'], {
        queryParams: {
          pincode: this.userPincode,
        },
      });
    }
  }
}
