import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'notification',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if(state == 'SHOWN' || state == 'HIDING') {
      <div 
        [@showHide]="state == 'SHOWN' ? 'show' : 'hide'"
        [class]="computedClasses()"
        class="p-4 mb-4 text-md border rounded-lg dark:bg-gray-800"
      >
        <span class="font-medium">
          <ng-content></ng-content>  
        </span>
      </div>
    }
  `,
  standalone: true,
  imports: [],
  animations: [
    trigger('showHide', [
      state(
        'show',
        style({
          opacity: 1
        }),
      ),
      state(
        'hide',
        style({
          opacity: 0
        }),
      ),
      transition('show => hide', [animate('6s')]),
      transition('hide => show', [animate('1s')]),
    ]),
  ]
})
export class NotificationComponent {
  @Input() state = 'HIDDEN';
  @Input() type = 'INFO';

  dangerClasses = 'text-red-800 bg-red-50';
  warningClass = 'text-yellow-800 bg-yellow-50';
  infoClasses = 'text-blue-800 bg-blue-50';

  computedClasses() {
    switch (this.type) {
      case 'DANGER':
        return this.dangerClasses;
      case 'WARNING':
        return this.warningClass;
      default:
        return this.infoClasses;
    }
  }
}