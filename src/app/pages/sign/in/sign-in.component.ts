import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonInputComponent } from '../../../ui/inputs/common-input/common-input.component';
import { CommonButtonComponent } from '../../../ui/buttons/common-button/common-button.component';
import { UderlineLinkComponent } from '../../../ui/links/uderline-link/uderline-link.component';

type State = 'GET_CODE' | 'SEND_CODE';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonInputComponent,
    CommonButtonComponent,
    UderlineLinkComponent
  ]
})
export class SignInComponent {
  state: State = 'GET_CODE';

  getCodeForm = new FormGroup({
    email: new FormControl('')
  });

  signInForm = new FormGroup({
    email: new FormControl(''),
    code: new FormControl('')
  });

  getCode() {
    console.log(this.getCodeForm.value.email);
    this.signInForm.setValue({email: this.getCodeForm.value.email!, code: ''});
    this.state = 'SEND_CODE';
  }

  signIn() {

  }
}