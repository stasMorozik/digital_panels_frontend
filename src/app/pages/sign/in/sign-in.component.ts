import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CommonInputComponent } from 'src/app/ui/inputs/common-input/common-input.component';
import { CommonButtonComponent } from 'src/app/ui/buttons/common-button/common-button.component';
import { UderlineLinkComponent } from 'src/app/ui/links/uderline-link/uderline-link.component';
import { userGetCodeAction, userSingInAction } from 'src/app/state/user/user.actions';
import { State } from 'src/app/state/app.types';
import { Notification } from 'src/app/state/shared/shared.types';
import { Approval } from 'src/app/state/user/user.types';
import { userIsAuthenticatedSelector } from 'src/app/state/user/user.selectors';
import { notificationObjectSelector } from 'src/app/state/shared/shared.selectors';
import { NotificationComponent } from 'src/app/ui/notification/notification.component';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CommonInputComponent,
    CommonButtonComponent,
    UderlineLinkComponent,
    NotificationComponent
  ]
})
export class SignInComponent {
  getCodeForm: FormGroup;
  signInForm: FormGroup;
  isAuthenticated$: Observable<Approval>;
  notification$: Observable<Notification>;

  constructor(
    private store: Store<State>
  ) {
    this.getCodeForm = new FormGroup({
      email: new FormControl('')
    });

    this.signInForm = new FormGroup({
      email: new FormControl(''),
      code: new FormControl('')
    });

    this.isAuthenticated$ = this.store.select(userIsAuthenticatedSelector);
    this.notification$ = this.store.select(notificationObjectSelector);
  }

  getCode() {
    this.store.dispatch(userGetCodeAction({email: this.getCodeForm.value.email}));
    this.signInForm.setValue({email: this.getCodeForm.value.email, code: ''});
  }

  signIn() {
    this.store.dispatch(userSingInAction({
      email: this.signInForm.value.email, 
      code: this.signInForm.value.code
    }));
  }
}