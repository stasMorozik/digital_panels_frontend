import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonButtonComponent } from 'src/app/ui/buttons/common-button/common-button.component';
import { CommonLinkComponent } from 'src/app/ui/links/common-link/common-link.component';

@Component({
  selector: 'playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrl: './playlist-list.component.css',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive,
    CommonLinkComponent,
    CommonButtonComponent
  ],
})
export class PlaylistListComponent {}