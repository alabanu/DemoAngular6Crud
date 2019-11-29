import { Injectable } from '@angular/core';
import { CanActivate, Router, Route } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private auth: AuthService) {
  }

  canLoad(route: Route): boolean {
    let url: string = route.path;

    if (this.auth.isLoggedIn) {
      return true;
    }
    
    this.auth.setRedirectUrl(url);
    this.router.navigate(['/auth/login']);
    return false;
  }

  canActivate(): boolean {
    return true;
  }
}
