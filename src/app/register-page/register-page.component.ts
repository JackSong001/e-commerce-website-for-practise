import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserServiceService} from '../user-service.service';
import { Account } from '../../share/data-type';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  user: Account;
  tabLabel = 'signIn';
  emailAdd = '';
  password = '';
  wrongPsw = false;
  wrongEmail = false;

  constructor(private router: Router, private userService: UserServiceService) { }

  ngOnInit() {
    this.wrongPsw = false;
  }

  logIn() {
    this.userService.getAccount(this.emailAdd, this.password).subscribe(resp => {
      this.user = resp;
      if (!this.user) {
        this.wrongEmail = true;
        this.wrongPsw = true;
        this.emailAdd = '';
        this.password = '';
        return;
      }
      this.wrongEmail = false;
      this.wrongPsw = false;
      localStorage.setItem('mm-user', JSON.stringify(this.user.emailAdd));
      this.router.navigate(['/home']);

    });
  }
}
