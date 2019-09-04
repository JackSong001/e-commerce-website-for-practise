import { Injectable } from '@angular/core';
import { Account } from '../share/data-type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  getAccount(email: string, password: string): Observable<Account> {
    return this.http.get<Account>(`/api/login/${email}/${password}`);
  }

  addUser(email: string, userInfo: Account): Observable<Account> {
    return this.http.put<Account>(`/api/register/${email}`, userInfo);
  }

  getUserInfo(email: string): Observable<Account> {
    return this.http.get<Account>(`/api/account/${email}`);
  }

  addNewUser(userInfo: Account): Observable<Account> {
    return this.http.post<Account>('/api/register', userInfo);
  }
}
