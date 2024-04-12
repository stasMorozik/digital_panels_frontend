import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CommonInputComponent } from 'src/app/ui/inputs/common-input/common-input.component';
import { CommonButtonComponent } from 'src/app/ui/buttons/common-button/common-button.component';
import { UderlineLinkComponent } from 'src/app/ui/links/uderline-link/uderline-link.component';
import { userGetCodeAction } from 'src/app/state/user/user.actions';
import { State, Approval, Notification } from 'src/app/state/app.state';
import { userIsAuthenticatedSelector } from 'src/app/state/user/user.selectors';
import { notificationObjectSelector } from 'src/app/state/shared/shared.selectors';
import { AlertDangerComponent } from 'src/app/ui/alerts/alert-danger.component';

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
    AlertDangerComponent
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
  }

  signIn() {
    
  }

  ngOnInit() {
    
  }
}