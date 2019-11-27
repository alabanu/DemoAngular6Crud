import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/model/user';
import { DataService } from 'src/app/core/service/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
