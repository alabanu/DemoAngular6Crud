import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _url = "http://jsonplaceholder.typicode.com/users";
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this._url);
  }

  getUserUrl(id) {
    return this._url + "/" + id;
  }

  getUser(id): Observable<User>  {
    return this.http.get<User>(this.getUserUrl(id));
  }

  addUser(user: User) {
    return this.http.post(this._url, JSON.stringify(user));
  }

  updateUser(user: User) {
    return this.http.put(this.getUserUrl(user.id), JSON.stringify(user))
  }

  deleteUser(userId) {
    return this.http.delete(this.getUserUrl(userId));
  }

}
