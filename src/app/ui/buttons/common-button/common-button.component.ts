import { Component, Input } from '@angular/core';

@Component({
  selector: 'common-button',
  templateUrl: './common-button.component.html',
  styleUrl: './common-button.component.css',
  standalone: true,
  imports: [
    
  ]
})
export class CommonButtonComponent {
  @Input() type = ''
}