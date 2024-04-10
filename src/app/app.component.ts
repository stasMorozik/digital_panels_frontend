import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
})
export class AppComponent {
  constructor() {}

  ngOnInit() {}
}
