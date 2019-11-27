import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  navItems = [
    { link: '/dashboard/home', title: 'Home' },
    { link: '/contact', title: 'Contact Me' }
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