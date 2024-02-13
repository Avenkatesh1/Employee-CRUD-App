import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../../shared/employe.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit{
  departments = [
    {id:1, name:'Angular'},
    {id:1, name:'React'},
    {id:1, name:'Node'},
    {id:1, name:'Bootstrap'},
    {id:1, name:'Firebase'},
  ]

 constructor( public empService:EmployeService){}

 ngOnInit(): void {
   }

   onClear(){
    this.empService.form.reset();
    this.empService.initializeFormGroup();
   }
}
