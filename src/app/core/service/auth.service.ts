import { Injectable } from '@angular/core';
import { of, Observable, throwError, BehaviorSubject } from 'rxjs';
import { AuthUser } from '../model/auth_user';
import { HttpClient } from '@angular/common/http';

const demotUser = {
  username: 'demo',
  password: 'demo',
  token: 'password'
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private redirectUrl: string;
  private loggedInSubject: BehaviorSubject<boolean>;

  constructor(private http: HttpClient) {
    this.loggedInSubject = new BehaviorSubject<boolean>(false);
  }

  login(user: AuthUser): Observable<AuthUser> {
    if (user.username === demotUser.username && user.password === demotUser.password) {
      this.loggedInSubject.next(true);
      return of(demotUser);
    }

    return throwError('Invalid username or password');
  }

  logout() {
    this.loggedInSubject.next(false);
    localStorage.clear();
  }

  get isLoggedIn() {
    return this.loggedInSubject.asObservable();
  }

  getToken() {
    return this.getToken;
  }

  setRedirectUrl(url: string): void {
    this.redirectUrl = url;
  }


}