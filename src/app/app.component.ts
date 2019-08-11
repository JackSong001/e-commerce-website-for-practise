import { Component } from '@angular/core';
import { CartDialogComponent } from './cart-dialog/cart-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mmfront';
  userName = '';

  constructor(
    public dialog: MatDialog, public router: Router) {
    }

  openDialog(): void {
    const dialogRef = this.dialog.open(CartDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  signUp() {
    if (localStorage.getItem('mm-user')) {
      this.router.navigate(['userinfo']);
    } else {
      this.router.navigate(['register']);
    }
  }

  logined() {
    if (localStorage.getItem('mm-user')) {
      return false;
    } else {
      return true;
    }
  }

}
