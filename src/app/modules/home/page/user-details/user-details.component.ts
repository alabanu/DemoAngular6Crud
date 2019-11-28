import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/core/model/user';
import { DataService } from 'src/app/core/service/data.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  selectedUser: User;
  cardImage: string =  "https://clasificados.laopinionaustral.com.ar/wp-content/uploads/2019/09/login-icono.png";
  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      var id = params['id'];
      this.getUser(id);
    });
  }

  getUser(id) {
    // this.selectedUser = this.customerList.filter(x=>x.id == id);  
    this.dataService.getUser(id).subscribe(
      (res) => {
        this.selectedUser = res;
      },
      (error: any) => console.error(error)
    );
  }

}
