import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { EmployeeComponent } from './main/employee/employee.component';
import { EmployeeDataListComponent } from './main/employee-data-list/employee-data-list.component';

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
  },
  {
    path:"Employee-Data-List",
    component:EmployeeDataListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
