import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'common-link',
  templateUrl: './common-link.component.html',
  styleUrl: './common-link.component.css',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
})
export class CommonLinkComponent {
  @Input({required: true}) link = '';
}