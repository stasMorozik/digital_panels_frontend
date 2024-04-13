import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from 'src/app/state/app.types';
import { CommonButtonComponent } from 'src/app/ui/buttons/common-button/common-button.component';
import { CommonInputComponent } from 'src/app/ui/inputs/common-input/common-input.component';
import { CommonLinkComponent } from 'src/app/ui/links/common-link/common-link.component';
import { UderlineLinkComponent } from 'src/app/ui/links/uderline-link/uderline-link.component';
import { CommonCollapseComponent } from 'src/app/ui/collapses/common-collapse/common-collapse.component';
import { fileListSelector } from 'src/app/state/file/file.selectors';
import { fileListLoadAction } from 'src/app/state/file/file.actions';

@Component({
  selector: 'file-list',
  templateUrl: './file-list.component.html',
  styleUrl: './file-list.component.css',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive,
    CommonLinkComponent,
    CommonButtonComponent,
    UderlineLinkComponent,
    CommonInputComponent,
    CommonCollapseComponent
  ],
})
export class FileListComponent {
  filterForm: FormGroup;
  isFilterOpen = 'HIDING';
  list$ = this.store.select(fileListSelector);

  constructor(
    private store: Store<State>
  ) {
    this.filterForm = new FormGroup({
      url: new FormControl(''),
      created_f: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.store.dispatch(fileListLoadAction({
      pagi: {
        page: 1,
        limit: 25
      },
      filter: {
        
      },
      sort: {
        
      }
    }));
  }

  onOpenCloseFilter() {
    this.isFilterOpen = this.isFilterOpen == 'SHOWN' ? 'HIDING' : 'SHOWN';
  }
}