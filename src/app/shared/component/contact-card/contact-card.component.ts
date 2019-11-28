import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/core/model/user';
import { faMap, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent implements OnInit {
  @Input()
  user: User;
  faMap = faMap;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  imageAlt = 'iPhone'

  @Input()
  cardImage: string;



  constructor() {
  }

  ngOnInit() {
  }

}
