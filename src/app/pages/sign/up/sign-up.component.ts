import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonInputComponent } from '../../../ui/inputs/common-input/common-input.component';
import { CommonButtonComponent } from '../../../ui/buttons/common-button/common-button.component';
import { UderlineLinkComponent } from '../../../ui/links/uderline-link/uderline-link.component';

@Component({
  selector: 'sign-up',
  templateUrl: 'sign-up.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonInputComponent,
    CommonButtonComponent,
    UderlineLinkComponent
  ]
})
export class SignUpComponent {
  signUpForm = new FormGroup({
    email: new FormControl(''),
    name: new FormControl('')
  });

  signUp() {
    
  }
}