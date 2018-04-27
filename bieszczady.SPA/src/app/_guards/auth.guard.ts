import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Injectable()
export class AuthGuard implements CanActivate {

constructor(private authService: AuthService , private router: Router , private aletrtify: AlertifyService) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.loggedin()) {
      return true;
    }

    this.aletrtify.error('You must to me logged in to be in this area');
    this.router.navigate(['/home']);
    return false;

  }
}

