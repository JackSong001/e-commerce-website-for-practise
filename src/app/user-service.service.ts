import { Injectable } from '@angular/core';
import { Account } from '../share/data-type';
import { Accounts } from '../share/mock-data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  accounts: Account[] = Accounts.slice();
  constructor() { }

  getAccount(email: string, password: string): Observable<Account> {
    const account = this.accounts.filter( acc => (acc.emailAdd === email && acc.password === password))[0];
    return of(account);
  }

  getUserInfo(email: string): Observable<Account> {
    const account = this.accounts.filter( acc => (acc.emailAdd === email))[0];
    return of(account);
  }
}
