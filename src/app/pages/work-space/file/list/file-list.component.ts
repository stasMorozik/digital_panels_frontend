import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonButtonComponent } from 'src/app/ui/buttons/common-button/common-button.component';
import { CommonInputComponent } from 'src/app/ui/inputs/common-input/common-input.component';
import { CommonLinkComponent } from 'src/app/ui/links/common-link/common-link.component';
import { UderlineLinkComponent } from 'src/app/ui/links/uderline-link/uderline-link.component';

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
    CommonInputComponent
  ],
})
export class FileListComponent {
  filterForm: FormGroup;

  constructor(
    
  ) {
    this.filterForm = new FormGroup({
      url: new FormControl(''),
      created_f: new FormControl('')
    });
  }
}