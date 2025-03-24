import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(public router: Router) {}

  @ViewChild('servicesSection') servicesSection!: ElementRef;
  isModalOpen = false;
  selectedService: any = null;
  services = [
    {
      name: 'Software Services',
      description: 'Expert software solutions at your doorstep.',
      image:
        'https://www.openrma.com/wp-content/uploads/2019/11/Mobile-Repair-Shop1.jpg',
      subServices: [
        {
          title: 'Battery Issue (Tvs, Laptops, Tablets, Remotes)',
          description: 'Fix battery draining and charging issues.',
          price: 3999, // INR
          rating: 4.5,
          image:
            'https://eco-recycle.co.uk/wp-content/uploads/2024/05/Mobile-Phone-Laptop-Battery-Recycling.jpg',
        },
        {
          title: 'Motherboard Repair(Laptops, Mobiles)',
          description: 'Repair or replace faulty motherboard components.',
          price: 8999, // INR
          rating: 4,
          image:
            'https://upload.wikimedia.org/wikipedia/commons/b/b7/Computer-motherboard.jpg',
        },
        {
          title: 'Mobile Repairs',
          description: 'Optimize your device performance.',
          price: 4999, // INR
          rating: 3.8,
          image:
            'https://5.imimg.com/data5/SELLER/Default/2021/9/HR/PW/SE/32162519/vivo-mobile-phone.png',
        },
      ],
    },
    {
      name: 'Maintenance Services',
      description: 'Professional cleaning for homes and offices.',
      image:
        'https://media.istockphoto.com/id/1151744289/photo/office-aircon-servicing.jpg?s=612x612&w=0&k=20&c=ODURl6qMdApyrDXgok4Cb7SiTWadVX3EGs9-a8Upgao=',
      subServices: [
        {
          title: 'Office Cleaning',
          description: 'Deep cleaning for your office space.',
          price: 2499, // INR
          rating: 4.2,
          image:
            'https://media.licdn.com/dms/image/v2/D4D12AQFsFR1uOYcQrA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1677063115880?e=2147483647&v=beta&t=iBOU7nM8gNR7cgiSWZcsJtiDuh3S06x3j51BtVE8824',
        },
        {
          title: 'Home Sanitization',
          description: 'Thorough home sanitization services.',
          price: 3499, // INR
          rating: 4.7,
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIUstwf1Ejny4zHnJqceTCX9AdbxeYf1E9Lg&s',
        },
      ],
    },
    {
      name: 'Installation & Setup',
      description: 'Reliable electrical repair and installation.',
      image:
        'https://c8.alamy.com/comp/2CD64K8/set-of-realistic-wi-fi-routers-and-digital-television-receivers-satellite-receiver-and-tv-remote-control-devices-for-wireless-distribution-of-the-in-2CD64K8.jpg',
      subServices: [
        {
          title: 'Router Installation',
          description: 'Setup and configure new routers.',
          price: 1999, // INR
          rating: 4.1,
          image:
            'https://www.downloads.netgear.com/files/answer_media/daryn_images/R7000v1h2_all_set_up_r1.png',
        },
        {
          title: 'TV Mounting',
          description: 'Professional TV installation and mounting.',
          price: 2999, // INR
          rating: 4.9,
          image:
            'https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/how-to-mount-a-flat-screen-TV-on-a-wall-step-8.jpg',
        },
      ],
    },
  ];

  openModal(service: any) {
    this.selectedService = service;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedService = null;
  }

  scrollToServices() {
    const element = document.querySelector('#services');
    element?.scrollIntoView({ behavior: 'smooth' });
  }

  getStars(rating: number): number[] {
    return Array.from({ length: 5 }, (_, i) => i + 1);
  }
  serviceAvailability() {
    this.router.navigate(['/service-availability']);
  }
}
