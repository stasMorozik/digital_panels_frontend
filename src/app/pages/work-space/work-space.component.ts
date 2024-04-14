import { Component } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from 'src/app/state/app.types';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { CommonLinkComponent } from '../../ui/links/common-link/common-link.component';
import { CommonButtonComponent } from 'src/app/ui/buttons/common-button/common-button.component';
import { PreLoaderComponent } from 'src/app/ui/preloader/preloader.component';
import { dataProgessSelector, notificationObjectSelector } from 'src/app/state/shared/shared.selectors';
import { Progress } from 'src/app/state/shared/shared.types';
import { Notification } from 'src/app/state/shared/shared.types';
import { NotificationComponent } from 'src/app/ui/notification/notification.component';

@Component({
  selector: 'work-space',
  templateUrl: './work-space.component.html',
  styleUrl: './work-space.component.css',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive,
    CommonLinkComponent,
    CommonButtonComponent,
    PreLoaderComponent,
    NotificationComponent
  ],
})
export class WorkSpaceComponent {
  subs: Subscription[] = [];
  title = null;
  isLoading$: Observable<Progress>;
  notification$: Observable<Notification>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<State>
  ) {
    this.isLoading$ = this.store.select(dataProgessSelector);
    this.notification$ = this.store.select(notificationObjectSelector);
  }

  ngOnInit() {
    const s_0 = this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.route.snapshot),
      map((route) => route.firstChild!.data)
    )
    .subscribe((data) => this.title = (data as any).title);
    
    const s_1 = this.route.url.pipe(
      map(() => this.route.snapshot.firstChild!.data),
    ).subscribe((data) => this.title = (data as any).title);

    this.subs = [s_0, s_1];
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
  } 
}