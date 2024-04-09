import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SignComponent } from './pages/sign/sign.component';
import { SignInComponent } from './pages/sign/in/sign-in.component';
import { SignUpComponent } from './pages/sign/up/sign-up.component';
import { UserAgreementComponent } from './pages/user-agreement/user-agreement.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';

export const routes: Routes = [
  {
    path: 'sign',
    component: SignComponent,
    children: [
      {
        path: 'in',
        title: 'Вход', 
        component: SignInComponent
      },
      {
        path: 'up',
        title: 'Получение доступа', 
        component: SignUpComponent
      },
    ]
  },
  {
    path: 'user-agreement',
    component: UserAgreementComponent
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent
  },
  { 
    path: '**', 
    component: NotFoundComponent 
  }
];
