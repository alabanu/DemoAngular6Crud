import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/model/user';
import { Address } from 'src/app/core/model/address';
import { Geo } from 'src/app/core/model/geo';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  userme = new User;
  address = new Address;
  geo = new Geo;
  
  cardImage: string = "https://www.alloy-software.com/wp-content/uploads/2019/09/contacts-hero.svg";

  constructor() {
    
   }

  ngOnInit() {
    this.userme.id = 0;
    this.userme.name ="Angeliki Alampanou";
    this.userme.username ="alabanu";
    this.userme.email ="alampanoua@gmail.com";
    this.userme.phone ="6972753434";
    this.address.street = "Georgiou Kafantari";
    this.address.suite = "8";
    this.address.city ="Athens";
    this.address.zipcode ="17343";
    this.userme.address = this.address;
    this.geo.lat ="37.940600";
    this.geo.lng ="23.738250";
    this.userme.address.geo = this.geo;
    this.userme.website = "alabanu@github";
  }

}
