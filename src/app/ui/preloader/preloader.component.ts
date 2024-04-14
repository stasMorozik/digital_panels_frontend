import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'preloader',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if(state == 'LOADING') {
      <div 
        [@showHide]="state == 'LOADING' ? 'show' : 'hide'"
        class="z-10 absolute right-0 left-0 top-0 bottom-0"
      >
        <div class="bg-white w-full h-full flex items-center justify-center">
          <svg width="50px" height="50px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><style>.spinner_OSmW{transform-origin:center;animation:spinner_T6mA .75s step-end infinite}@keyframes spinner_T6mA{8.3%{transform:rotate(30deg)}16.6%{transform:rotate(60deg)}25%{transform:rotate(90deg)}33.3%{transform:rotate(120deg)}41.6%{transform:rotate(150deg)}50%{transform:rotate(180deg)}58.3%{transform:rotate(210deg)}66.6%{transform:rotate(240deg)}75%{transform:rotate(270deg)}83.3%{transform:rotate(300deg)}91.6%{transform:rotate(330deg)}100%{transform:rotate(360deg)}}</style><g class="spinner_OSmW"><rect x="11" y="1" width="2" height="5" opacity=".14"/><rect x="11" y="1" width="2" height="5" transform="rotate(30 12 12)" opacity=".29"/><rect x="11" y="1" width="2" height="5" transform="rotate(60 12 12)" opacity=".43"/><rect x="11" y="1" width="2" height="5" transform="rotate(90 12 12)" opacity=".57"/><rect x="11" y="1" width="2" height="5" transform="rotate(120 12 12)" opacity=".71"/><rect x="11" y="1" width="2" height="5" transform="rotate(150 12 12)" opacity=".86"/><rect x="11" y="1" width="2" height="5" transform="rotate(180 12 12)"/></g></svg>
        </div>
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
      transition('show => hide', [animate('2s')]),
      transition('hide => show', [animate('1s')]),
    ]),
  ]
})
export class PreLoaderComponent {
  @Input() state = 'NONE';
}