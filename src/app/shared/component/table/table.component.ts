import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/core/model/user';
import { DataService } from 'src/app/core/service/data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input('users') users: User[];
 
  ngDoCheck(){
    console.log(this.data.length)
  }

  @Input()
  startIndex:number;


  @Input()
  endIndex:number;
  
  @Input()
  data:User[];


  constructor(private dataService: DataService) { 
    
  }

  ngOnInit() {
    console.log(this.data);
    console.log(this.data[0]);
  }

   returnZero() {
    return 0
    }
 
}
