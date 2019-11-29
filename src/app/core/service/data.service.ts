import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = "http://jsonplaceholder.typicode.com/users";
  private addeduserSubject: BehaviorSubject<User>;

  constructor(private http: HttpClient) {
    this.addeduserSubject = new BehaviorSubject<User>(null);
  }

  get newUserIn() {
    return this.addeduserSubject.asObservable();
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  getUserUrl(id) {
    return this.url + "/" + id;
  }

  getUser(id): Observable<User> {
    return this.http.get<User>(this.getUserUrl(id));
  }

  addUser(user: User): Observable<User> {
    this.addeduserSubject.next(user);
    return this.http.post<User>(this.url, JSON.stringify(user));
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(this.getUserUrl(user.id), JSON.stringify(user))
  }

  deleteUser(userId) {
    return this.http.delete(this.getUserUrl(userId));
  }

}
