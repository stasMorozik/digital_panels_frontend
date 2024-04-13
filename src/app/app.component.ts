import { filter } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from 'src/app/state/app.types';
import { hideNotificationAction } from './state/shared/shared.actions';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private store: Store<State>
  ) {}

  ngOnInit() {
    this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd)  
    ).subscribe(() => {
      this.store.dispatch(hideNotificationAction());
    });
  }
}
