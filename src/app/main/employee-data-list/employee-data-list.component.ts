import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeService } from '../../shared/employe.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EmployeeComponent } from '../employee/employee.component';
import { NotificationService } from '../../shared/notification.service';

@Component({
  selector: 'app-employee-data-list',
  templateUrl: './employee-data-list.component.html',
  styleUrl: './employee-data-list.component.css'
})
export class EmployeeDataListComponent implements OnInit {
 listData!: MatTableDataSource<any>;

 displayedColumns : string[] =['fullName','email','mobile','city','gender','department','actions'];

 @ViewChild(MatSort) sort!: MatSort;
 @ViewChild(MatPaginator) paginator!: MatPaginator;

  searchKey: any;

  constructor(public empservice:EmployeService, public dialog:MatDialog,
              public notification:NotificationService){}
  ngOnInit() {
    this.empservice.getEmployees().subscribe(list =>{
      let array = list.map(
        item =>{
          return {
            $key: item.key,
            ...item.payload.val()
          }
        }
      )
      this.listData = new MatTableDataSource(array)
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
    })
  }
  onSearchClear(){
    this.searchKey= "";
    this. applyFilter();
  }

  applyFilter(){
    this.listData.filter = this.searchKey.trim().toLowerCase()
  }
  addEmployees(){
    this.empservice.initializeFormGroup();
     const dialogConfig = new MatDialogConfig();
     dialogConfig.disableClose = true;
     dialogConfig.autoFocus = true;
     dialogConfig.width = "60%"
    this.dialog.open(EmployeeComponent,dialogConfig)
  }


  onEdit(row:any){
    this.empservice.papulateForm(row);
    const dialogConfig = new MatDialogConfig();
     dialogConfig.disableClose = true;
     dialogConfig.autoFocus = true;
     dialogConfig.width = "60%"
    this.dialog.open(EmployeeComponent,dialogConfig)
  }
  onDelete($key:any){
     if(confirm('Are you sure to delete this recored?')){
       this.empservice.deleteEmployee($key);
       this.notification.warn("Record has been Deleted!")
     }
  }
}
