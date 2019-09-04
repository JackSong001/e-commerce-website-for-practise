import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { Account, State } from '../../share/data-type';
import { STATES } from '../../share/state-list';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  profileForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  userExist = true;
  constructor(private router: Router, private userService: UserServiceService) { }


  ngOnInit() {
  }

  logIn(form: NgForm) {
    this.userExist = true;
    const email = form.value.email;
    const password = form.value.password;
    this.userService.getAccount(email, password).subscribe(result => {
      localStorage.setItem('mm-user', JSON.stringify(result.email));
      this.router.navigate(['/userinfo']);
    }, error => {
      this.userExist = false;
      console.log(error);
    });
  }
}
