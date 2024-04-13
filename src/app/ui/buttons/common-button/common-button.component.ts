import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'common-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './common-button.component.html',
  styleUrl: './common-button.component.css',
  standalone: true,
  imports: [
    
  ]
})
export class CommonButtonComponent {
  @Input() type = ''
}