import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/model/user';
import { DataService } from 'src/app/core/service/data.service';
import { Observable, Subscription } from 'rxjs';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  faUser = faUser;
  user$: Observable<any>;
  startIndex = 0;
  endIndex = 4;
  users: User[];
  subscription: Subscription;
  newUser: User;

  constructor(private dataService: DataService) {
    this.subscription = this.dataService.newUserIn.subscribe(res => {
      this.newUser = <User>res;
      this.updateTable(this.newUser);
    });
  }

  ngOnInit() {
    this.load_data();
  }

  load_data() {
    this.dataService.getUsers().subscribe(
      (res) => {
        this.users = res;
      },
      (error: any) => console.error(error)
    );
  }

  updateTable(user: User) {
    if (this.users) {
      this.users.push(user);
    }
  }

  updateIndex(pageIndex) {
    this.startIndex = pageIndex * 4;
    this.endIndex = this.startIndex + 4
  }

}
