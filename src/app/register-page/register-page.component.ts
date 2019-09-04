import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { Account, State } from '../../share/data-type';
import { STATES } from '../../share/state-list';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  states: State[] = STATES;
  tabLabel = 'signIn';
  loading = false;
  userExist = true;

  profileForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  accountForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    zip: new FormControl('', [Validators.required, Validators.minLength(5)]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
    bod: new FormControl('', [Validators.required])
  });

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

  updateUserInfo() {
    this.loading = true;
    const value = this.accountForm.value;
    const date = new Date(value.bod);
    const userInfo: Account = {
      email: value.email,
      password: value.password,
      firstName: value.firstName,
      lastName: value.lastName,
      country: value.country,
      address: value.address,
      city: value.city,
      state: value.state,
      zip: value.zip,
      phone: value.phone,
      bod: date.getTime()
    };
    setTimeout(() => {
      this.userService.addUser(value.email, userInfo).subscribe(resp => {
        localStorage.setItem('mm-user', JSON.stringify(value.email));
        this.loading = false;
        this.router.navigate(['/userinfo']);
      }, error => {
        console.log(error);
      });
    }, 2000);

  }
}
