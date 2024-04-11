import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonLinkComponent } from '../../ui/links/common-link/common-link.component';

@Component({
  selector: 'work-space',
  templateUrl: './work-space.component.html',
  styleUrl: './work-space.component.css',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive,
    CommonLinkComponent
  ],
})
export class WorkSpaceComponent {}