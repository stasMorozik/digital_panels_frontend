import { Component } from '@angular/core';

@Component({
  selector: 'not-found',
  template: `
    <div class="container-2xl p-4">
      <div class="flex justify-between content-center mt-4 mb-4">
        <h1 class="text-2xl font-semibold">Страница не найдена</h1>
      </div>
    </div>
  `,
  standalone: true,
})
export class NotFoundComponent {}