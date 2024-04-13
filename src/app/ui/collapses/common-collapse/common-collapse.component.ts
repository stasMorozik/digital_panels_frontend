import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'common-collapse',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if(state == 'SHOWN' || state == 'HIDING') {
      <div 
        [@showHide]="state == 'SHOWN' ? 'show' : 'hide'"
        class="border-t border-b overflow-hidden pt-2 pb-2"
      >
        <ng-content></ng-content>  
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
          'max-height': 500,
          opacity: 1
        }),
      ),
      state(
        'hide',
        style({
          'max-height': 0,
          opacity: 0
        }),
      ),
      transition('show => hide', [animate('.4s')]),
      transition('hide => show', [animate('.5s')]),
    ]),
  ]
})
export class CommonCollapseComponent {
  @Input() state = 'HIDING';
}