import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  config:MatSnackBarConfig ={
    duration:3000,
    horizontalPosition:'right',
    verticalPosition:'top'
  }
  constructor(public snacBar: MatSnackBar) { }

  success(msg:any){
    this.config['panelClass']=['notification', 'success']
    this.snacBar.open(msg, "Done", this.config)
  }

  warn(msg:any){
    this.config['panelClass']=['notification', 'warn']
    this.snacBar.open(msg, "Ok", this.config)
  }
}
