import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { User } from 'src/app/core/model/user';
import { DataService } from 'src/app/core/service/data.service';
import { faPencilAlt, faTrash, faSave, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  faPencilAlt = faPencilAlt;
  faTrash = faTrash;
  faSave = faSave;
  faTimes = faTimes;
  usersForm: FormGroup;

  actions = [
    { icon: faPencilAlt, title: 'Edit' },
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
    // console.log(this.data.length)
  }

  @Input()
  startIndex: number;

  @Input()
  endIndex: number;

  @Input()
  data: User[];

  deletedUser: any;
  rowId: any = '';

  constructor(private dataService: DataService, private fb: FormBuilder) {

  }

  ngOnInit() {
    console.log(this.data);
    console.log(this.data[0]);
    this.usersForm = this.fb.group({
      usersDetails: this.fb.array([])
    })

    this.createFormArray();
  }

  initUserRow(id: number): FormGroup {
    return this.fb.group({
      id: [id],
      name: [this.data[id].name, Validators.required],
      username: [this.data[id].username, Validators.required],
      email: [this.data[id].email, Validators.required],
      street: [this.data[id].address.street, Validators.required],
      suite: [this.data[id].address.suite, Validators.required],
      city: [this.data[id].address.city, Validators.required],
      zipcode: [this.data[id].address.zipcode, Validators.required],
      phone: [this.data[id].phone, Validators.required],
      website: [this.data[id].website, Validators.required],
    });
  }

  createFormArray() {
    const control: FormArray = this.usersForm.get(`usersDetails`) as FormArray;
    for (let i = 0; i < this.data.length; i++) {
      control.push(this.initUserRow(i));
    }
  }


  editRow(rowId: number) {
    this.rowId = rowId;

  }

  cancelRow(id) {
    this.rowId = "";
  }

  // addUserRow(rowId: number) {
  //   const usersArray =
  //     <FormArray>this.usersForm.controls['usersDetails'];
  //   usersArray.push(this.initUserRow(rowId));
  // }

  removeRow(rowId: number) {
    const usersArray = <FormArray>this.usersForm.controls['usersDetails'];
    if (usersArray.length > 0) {
      this.dataService.deleteUser(rowId).subscribe(
        (res) => {
          const index = this.data.findIndex(user => user.id === rowId);
          this.data.splice(index, 1);
        },
        (error: any) => console.error(error)
      );
    }

  }



}
