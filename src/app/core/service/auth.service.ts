import { Injectable } from '@angular/core';
import { of, Observable, throwError, BehaviorSubject } from 'rxjs';
import { AuthUser } from '../model/auth_user';
import { HttpClient } from '@angular/common/http';


interface LoginContextInterface {
  username: string;
  password: string;
  token: string;
}

const defaultUser = {
  username: 'demo',
  password: 'demo',
  token: 'password'
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;
  private redirectUrl: string = '/';
  private loggedInSubject: BehaviorSubject<boolean>;

  constructor(private http: HttpClient) {
    this.loggedInSubject = new BehaviorSubject<boolean>(false);
  }

  login(loginContext: LoginContextInterface): Observable<AuthUser> {
    if (
      loginContext.username === defaultUser.username &&
      loginContext.password === defaultUser.password
    ) {
      this.loggedInSubject.next(true);
      return of(defaultUser);
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