import { Component, OnInit, Input, SecurityContext } from '@angular/core';
import { User } from 'src/app/core/model/user';
import { faMap, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

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
  imageAlt = 'alt'
  url: string;
  @Input()
  cardImage: string;
  urlSrc: any;



  constructor(public sanitizer: DomSanitizer) {
  }

  ngOnInit() {

    if (this.user && this.user.address) {
      this.url = "https://maps.google.com/maps?q=" + this.user.address.geo.lat + ',' + this.user.address.geo.lng + "&z=15&output=embed";
      this.urlSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    }

  }

}
