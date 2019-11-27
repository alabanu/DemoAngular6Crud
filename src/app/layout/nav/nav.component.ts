import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';
import { faPowerOff, faHome, faInfo } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  faPowerOff = faPowerOff;
  faHome = faHome;
  faInfo = faInfo;

  navItems = [
    { link: '/dashboard/home', title: 'Home', icons: faHome },
    { link: '/contact', title: 'Contact Me', icons: faInfo }
  ];

  constructor(private router: Router, private auth: AuthService) {
  }

  ngOnInit() {
  }

  logout() {
    localStorage.clear();
    this.auth.logout();
    this.router.navigate(['auth/login']);
  }
}