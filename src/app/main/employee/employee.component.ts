import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../../shared/employe.service';
import { NotificationService } from '../../shared/notification.service';
import { MatDialogRef } from '@angular/material/dialog';

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

 constructor( public empService:EmployeService, 
              public notification:NotificationService,
              public dialogRef:MatDialogRef<EmployeeComponent>){}

 ngOnInit(){
  this.empService.getEmployees();
   }

   onClear(){
    this.empService.form.reset();
    this.empService.initializeFormGroup();
    this.dialogRef.close();
   }
   onSubmit(){
    if(this.empService.form.valid){
      if(!this.empService.form.get('$key')?.value)
          this.empService.insertEmployee(this.empService.form.value)
        else
       this.empService.updateEmployee(this.empService.form.value)
       this.empService.form.reset();
       this.empService.initializeFormGroup();
       this.notification.success('Record Inserted Successfully')
       this.onClear();
    }
   }
}
