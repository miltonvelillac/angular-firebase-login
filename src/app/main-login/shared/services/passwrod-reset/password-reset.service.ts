import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PasswordResetComponent } from '../../components/password-reset/password-reset.component';

@Injectable({
  providedIn: 'root'
})
export class PasswordResetService {

  response: any;

  constructor(
    public dialog: MatDialog
  ) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(PasswordResetComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.response = result;
    });
  }
}
