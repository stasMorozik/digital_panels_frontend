import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonLinkComponent } from '../../ui/links/common-link/common-link.component';

@Component({
  selector: 'sign',
  templateUrl: './sign.component.html',
  styleUrl: './sign.component.css',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive,
    CommonLinkComponent
  ],
})
export class SignComponent {
  constructor() {}
}