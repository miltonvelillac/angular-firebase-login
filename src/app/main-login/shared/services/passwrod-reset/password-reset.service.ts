import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { PasswordResetComponent } from '../../components/password-reset/password-reset.component';

@Injectable({
  providedIn: 'root'
})
export class PasswordResetService {

  constructor(
    public dialog: MatDialog
  ) { }

  openDialog(): Observable<any> {
    const dialogRef = this.dialog.open(PasswordResetComponent, {
      width: '450px'
    });

    return dialogRef.afterClosed();
  }
}
