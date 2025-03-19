import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  @ViewChild('servicesSection') servicesSection!: ElementRef;

  services = [
    {
      name: 'Software Services',
      description: 'Expert software solutions at your doorstep.',
      image:
        'https://www.openrma.com/wp-content/uploads/2019/11/Mobile-Repair-Shop1.jpg',
    },
    {
      name: 'Maintenance Services',
      description: 'Professional cleaning for homes and offices.',
      image:
        'https://media.istockphoto.com/id/1151744289/photo/office-aircon-servicing.jpg?s=612x612&w=0&k=20&c=ODURl6qMdApyrDXgok4Cb7SiTWadVX3EGs9-a8Upgao=',
    },
    {
      name: 'Installation & Setup',
      description: 'Reliable electrical repair and installation.',
      image:
        'https://c8.alamy.com/comp/2CD64K8/set-of-realistic-wi-fi-routers-and-digital-television-receivers-satellite-receiver-and-tv-remote-control-devices-for-wireless-distribution-of-the-in-2CD64K8.jpg',
    },
  ];

  scrollToServices(): void {
    if (this.servicesSection) {
      this.servicesSection.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
}
