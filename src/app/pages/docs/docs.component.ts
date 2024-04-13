import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { RouterOutlet, RouterLink, RouterLinkActive, Data } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CommonLinkComponent } from 'src/app/ui/links/common-link/common-link.component';

@Component({
  selector: 'docs',
  templateUrl: './docs.component.html',
  styleUrl: './docs.component.css',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive,
    CommonLinkComponent
  ],
})
export class DocsComponent {
  constructor(
    private route: ActivatedRoute
  ) {}

  sub: Subscription | null = null;
  title = null;

  ngOnInit() {
    this.sub = this.route.url.subscribe(() => {
      const data: Data = this.route.snapshot.firstChild!.data;

      this.title = (data as any).title;
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}