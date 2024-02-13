import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { EmployeeComponent } from './main/employee/employee.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"main",
    pathMatch:"full"
  },
  {
    path:"main",
    component:MainComponent
  },
  {
    path:"employee",
    component:EmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
