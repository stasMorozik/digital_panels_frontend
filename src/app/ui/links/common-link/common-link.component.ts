import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'common-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './common-link.component.html',
  styleUrl: './common-link.component.css',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
})
export class CommonLinkComponent {
  @Input({required: true}) link = '';
}