import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import decode from 'jwt-decode';
import * as jwt_decode from 'jwt-decode';
import { JwtHelper } from 'angular2-jwt';
import { User } from '../_models/User';


@Injectable()
export class AuthRoleGuard implements CanActivate {

constructor(private authService: AuthService , private router: Router) {}
  jwtHelper: JwtHelper = new JwtHelper();
  model: any;
  user: User;
  canActivate( route: ActivatedRouteSnapshot , state: RouterStateSnapshot): boolean {

    const roles = route.data.roles;
    const rolesstring = roles.toString();

    const token = localStorage.getItem('token');
    const jwtData = token.split('.')[1];



   const decoddedToken = this.jwtHelper.decodeToken(token);
   const Decode = JSON.stringify(decoddedToken);

     const decodedata = JSON.parse(Decode);
     const daras = JSON.parse(Decode);

    const isAdmin = daras.role;


    if (!this.authService.loggedin() || isAdmin !== rolesstring) {
      this.router.navigate(['/home']);
      return false;
    }
    return true;
}
}
