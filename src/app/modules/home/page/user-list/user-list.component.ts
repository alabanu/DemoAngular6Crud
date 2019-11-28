import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/model/user';
import { DataService } from 'src/app/core/service/data.service';
import { Observable } from 'rxjs';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  faUser = faUser;
  user$:Observable<any>;
  startIndex = 0;
  endIndex = 5;
  users: User[];

  constructor(private dataService: DataService) { }

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

  updateIndex(pageIndex){
    console.log(pageIndex);

    this.startIndex = pageIndex * 5;
    this.endIndex = this.startIndex + 5
  }

}
