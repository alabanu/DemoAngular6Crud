import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/core/service/data.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  @Input()
  showAddform: boolean;
  userForm: FormGroup;
  private fb: FormBuilder;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(''),
      username: new FormControl(''),
      email: new FormControl(''),
      address: new FormGroup({
        street: new FormControl(''),
        suite: new FormControl(''),
        city: new FormControl(''),
        zipcode: new FormControl('')
      }),
      phone:new FormControl(''),
      website:new FormControl('')
    });
   
  }

  saveUser() {
    if (this.userForm) {
      this.dataService.addUser(this.userForm.value).subscribe(
        (res) => {
          console.log("The user was succesfully created");
        },
        (error: any) => console.error(error)
      );
    }
  }

  closeForm() {
    // this.showAddform = false;
  }


}
