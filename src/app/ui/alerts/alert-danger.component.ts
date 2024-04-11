import { Component } from '@angular/core';

@Component({
  selector: 'alert-danger',
  template: `
    <div class="p-4 mb-4 text-md border text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400">
      <span class="font-medium">
        <ng-content></ng-content>  
      </span>
    </div>
  `,
  standalone: true,
  imports: []
})
export class AlertDangerComponent {}