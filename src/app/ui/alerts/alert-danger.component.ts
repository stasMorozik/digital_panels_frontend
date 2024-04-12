import { Component, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'alert-danger',
  template: `
    @if(state == 'SHOWN' || state == 'HIDING') {
      <div [@showHide]="state == 'SHOWN' ? 'show' : 'hide'" class="p-4 mb-4 text-md border text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400">
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
      transition('show => hide', [animate('3s')]),
      transition('hide => show', [animate('1s')]),
    ]),
  ]
})
export class AlertDangerComponent {
  @Input() state = 'HIDDEN';
}