import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { STATES } from '../../share/state-list';
import { Account, Order, OrderList, State} from '../../share/data-type';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  states: State[] = STATES;
  loading = false;
  tabName = 'dashboard';
  userEmail = JSON.parse(localStorage.getItem('mm-user'));
  user = '';
  email = '';
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
    bod: new FormControl('', [Validators.required]),
  });

  constructor(private userService: UserServiceService, private router: Router) { }


  ngOnInit() {
    if (localStorage.getItem('mm-user')) {
      this.email = JSON.parse(localStorage.getItem('mm-user'));
      this.userService.getUserInfo(this.email).subscribe(resp => {
        this.user = resp.firstName;
        this.setForm(resp);
      });
    }
  }

  setTabName(name: string) {
    this.tabName = name;
  }

  private setForm(data: Account) {
    this.accountForm.setValue({
      email: data.email,
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
      country: data.country,
      address: data.address,
      city: data.city,
      state: data.state,
      zip: data.zip,
      phone: data.phone,
      bod: (new Date(data.bod)).toISOString()
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
        if (resp) {
          localStorage.setItem('mm-user', JSON.stringify(resp.email));
        }
        this.loading = false;
        this.ngOnInit();
      }, error => {
        console.log(error);
      });
    }, 1000);
  }

  signOut() {
    localStorage.removeItem('mm-user');
    this.router.navigate(['/register']);
  }
}
