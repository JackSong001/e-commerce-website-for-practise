import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../user-service.service';
import { Account } from '../../share/data-type';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  tabName = 'dashboard';
  userEmail = JSON.parse(localStorage.getItem('mm-user'));
  user: Account;

  constructor(private userService: UserServiceService) { }


  ngOnInit() {
    this.userService.getUserInfo(this.userEmail).subscribe( resp => {
      this.user = resp;
    })
  }

  setTabName(name: string) {
    this.tabName = name;
  }

}
