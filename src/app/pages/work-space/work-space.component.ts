import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { RouterOutlet, RouterLink, RouterLinkActive, Data } from '@angular/router';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { CommonLinkComponent } from '../../ui/links/common-link/common-link.component';
import { CommonButtonComponent } from 'src/app/ui/buttons/common-button/common-button.component';

@Component({
  selector: 'work-space',
  templateUrl: './work-space.component.html',
  styleUrl: './work-space.component.css',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive,
    CommonLinkComponent,
    CommonButtonComponent
  ],
})
export class WorkSpaceComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  subs: Subscription[] = [];
  title = null;

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