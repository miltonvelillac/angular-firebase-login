import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  openSnackBar(message: string, action: string, duration: number, cssClass: string) {
    this.snackBar.open(message, action, {
      duration,
      panelClass: [cssClass]
    });
  }

  openSnackBarSuccess(message: string, action = 'Ok', duration = 5000) {
    this.openSnackBar(message, action, duration, 'snackbar--success');
  }

  openSnackBarFail(message: string, action = 'Close', duration = 10000) {
    this.openSnackBar(message, action, duration, 'snackbar--fail');
  }
}
