import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { AllemployeesdetailsComponent } from './allemployeesdetails/allemployeesdetails.component';
import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [
{path:'login',component:LoginComponent},
{path:'dashboard',canActivate:[AuthenticationGuard],component:DashboardComponent,children:[
  {path:'home',canActivate:[AuthenticationGuard],component:HomeComponent},
  {path:'all-employees',canActivate:[AuthenticationGuard],component:AllEmployeesComponent},
  {path:'create-employees',canActivate:[AuthenticationGuard],component:CreateEmployeeComponent},
  {path:'allemployeesdetails/:id',canActivate:[AuthenticationGuard],component:AllemployeesdetailsComponent},
  {path:'edit-details/:id',canActivate:[AuthenticationGuard],component:CreateEmployeeComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
