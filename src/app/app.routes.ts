import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { StudentRecordsComponent } from './student-records/student-records.component';
import { LoginComponent } from './auth/login/login.component';
import { authGuardGuard } from './auth/auth-guard.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'landing',
    component: LandingComponent,
    canMatch: [authGuardGuard]
  },
  {
    path: 'student',
    component: StudentRecordsComponent,
    canMatch: [authGuardGuard]
  }
];
