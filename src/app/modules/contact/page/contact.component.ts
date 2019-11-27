import { Component, OnInit } from '@angular/core';
import { faMap, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  faMap = faMap;
  faEnvelope = faEnvelope;
  faPhone = faPhone;

  constructor() { }

  ngOnInit() {
  }

}
