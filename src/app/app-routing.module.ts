import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FloginComponent } from './flogin/flogin.component';
import { AllStudentComponent } from './all-student/all-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
const routes: Routes = [
  { path: 'flogin', component: FloginComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegistrationPageComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', component: AllStudentComponent },
      { path: 'addStudent', component: AddStudentComponent },
    
    ],
  },
  { path: '**', component: PageNotFoundComponent },
  { path: '', redirectTo: '/flogin', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
