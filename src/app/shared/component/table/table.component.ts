import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { User } from 'src/app/core/model/user';
import { DataService } from 'src/app/core/service/data.service';
import { faPencilAlt, faTrash, faSave, faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { findIndex } from 'lodash';
import { Subscription } from 'rxjs';

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
  faPlus = faPlus;
  usersForm: FormGroup;
  submitted = false;
  showModal: boolean;
  showAddform: boolean;
  subscription: Subscription;

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
  }

  @Input()
  startIndex: number;

  @Input()
  endIndex: number;

  @Input()
  data: User[];

  deletedUser: any;
  updatedUser: User;
  rowId: any = '';


  constructor(private dataService: DataService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.usersForm = this.fb.group({
      usersDetails: this.fb.array([])
    })

    this.createFormArray();
  }

  initUserRow(id: number): FormGroup {
    return this.fb.group({
      id: [this.data[id].id],
      name: [this.data[id].name, Validators.required],
      username: [this.data[id].username, Validators.required],
      email: [this.data[id].email, Validators.required],
      street: [this.data[id].address.street] ,
      suite: [this.data[id].address.suite],
      city: [this.data[id].address.city],
      zipcode: [this.data[id].address.zipcode],
      phone: [this.data[id].phone],
      website: [this.data[id].website],
    });
  }

  createFormArray() {
    const control: FormArray = this.usersForm.get(`usersDetails`) as FormArray;
    for (let i = 0; i < this.data.length; i++) {
      control.push(this.initUserRow(i));
    }
    console.log(this.data);

  }

  editRow(rowId: number) {
    this.rowId = rowId;
  }

  addUser() {
    this.showAddform = true;
  }

  saveRow(id) {
    this.showModal = true;
    this.submitted = true;
    if (this.usersForm.invalid) {
      return;
    }
    this.updatedUser = this.usersForm.value;

    console.log(this.usersForm.get(`usersDetails`).value);
    let index = findIndex(this.usersForm.get(`usersDetails`).value, (p: User) => {
      return p.id === id;
    });

    this.dataService.updateUser(this.usersForm.get(`usersDetails`).value[index]).subscribe(
      (res) => {
        
        this.usersForm.patchValue(this.usersForm.get(`usersDetails`).value[index]);
        this.usersForm.patchValue({
          user:'lachu@gmail.com',
          username:['data']  
          
        });
      },
      (error: any) => console.error(error)
    );
    

    this.rowId = "";
  }

  cancelRow(id) {
    this.rowId = "";
    this.data[id] = this.data[id];
  }

  
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
