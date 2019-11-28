import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/core/model/user';
import { DataService } from 'src/app/core/service/data.service';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  faEdit = faEdit;
  faTrash = faTrash;

  actions = [
    { icon: faEdit, title: 'Edit' },
    { icon: faTrash, title: 'Delete' }
  ];

  headers = [
    { title: 'Id' },
    { title: 'Name' },
    { title: 'Username' },
    { title: 'Email' },
    { title: 'Street' },
    { title: 'Suite' },
    { title: 'City' },
    { title: 'Zipcode' },
    { title: 'Phone' },
    { title: 'Website' }
  ];

  @Input('users') users: User[];

  ngDoCheck() {
    console.log(this.data.length)
  }

  @Input()
  startIndex: number;

  @Input()
  endIndex: number;

  @Input()
  data: User[];


  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    console.log(this.data);
    console.log(this.data[0]);
  }

  returnZero() {
    return 0
  }

  getKeys(obj) {
    return Object.keys(obj)
  }
}
