import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'uderline-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './uderline-link.component.html',
  styleUrl: './uderline-link.component.css',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
})
export class UderlineLinkComponent {
  @Input({required: true}) link = '';
}