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

  @Input() theme = 'INFO';

  dangerClasses = 'bg-gradient-to-r text-white from-red-400 to-red-700';
  warningClass = 'bg-gradient-to-r text-white from-yellow-400 to-yellow-700';
  successClasses = 'bg-gradient-to-r text-white from-blue-400 to-blue-700';
  infoClasses = 'border text-zinc-800';

  computedClasses() {
    switch (this.theme) {
      case 'DANGER':
        return this.dangerClasses;
      case 'WARNING':
        return this.warningClass;
      case 'INFO':
          return this.infoClasses;
      default:
        return this.successClasses;
    }
  }
}