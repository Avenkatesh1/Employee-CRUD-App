import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import * as _ from  'lodash';


@Injectable({
  providedIn: 'root'
})
export class EmployeService {

   employeeList!: AngularFireList<any>; 

  constructor(public fireBase:AngularFireDatabase, public datePipe:DatePipe, private http:HttpClient) { }
  form: FormGroup = new FormGroup(
    {
      $key: new FormControl(null),
      fullName: new FormControl('',Validators.required),
      email: new FormControl('',Validators.email),
      mobile: new FormControl('',[Validators.required,Validators.minLength(10)]),
      city: new FormControl(''),
      gender: new FormControl('1'),
      department: new FormControl(0),
      hireDate: new FormControl(''),
      isPermanent: new FormControl(false)
    }
  )
  initializeFormGroup(){
    this.form.setValue(
      {
        $key:null,
        fullName:"",
        email:"",
        mobile :"",
        city :"",
        gender :"1",
        department:0,
        hireDate :"",
        isPermanent:false

    })
  }

  getEmployees(){
    this.employeeList = this.fireBase.list('employees');
    return this.employeeList.snapshotChanges();
  }

  insertEmployee(emp:any){
    this.employeeList.push({
      fullName: emp.fullName,
      email: emp.email,
      mobile: emp.mobile,
      city: emp.city,
      gender: emp.gender,
      department: emp.department,
      hireDate: emp.hireDate == "" ? ""  :this.datePipe.transform(emp.hireDate,'mm-dd-yyyy'),
      isPermanent: emp.isPermanent
    })
  }

  updateEmployee(emp:any){
     this.employeeList.update(emp.$key,{
      fullName: emp.fullName,
      email: emp.email,
      mobile: emp.mobile,
      city: emp.city,
      gender: emp.gender,
      department: emp.department,
      hireDate: emp.hireDate == "" ? ""  :this.datePipe.transform(emp.hireDate,'mm-dd-yyyy'),
      isPermanent: emp.isPermanent
     })
  }

  deleteEmployee($key:string){
    this.employeeList.remove($key);
  }

  papulateForm(emp:any){
     this.form.setValue(_.omit(emp,'departmentName'))
  }
}
