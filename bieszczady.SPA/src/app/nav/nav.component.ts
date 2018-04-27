import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../_models/User';
import { UserService } from '../_services/User.service';
import { RoomService } from '../_services/room.service';
import { Room } from '../_models/Room';
import { AuthRoleGuard } from '../_guards/authRole.guard';
import { JwtHelper } from 'angular2-jwt';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(private authService: AuthService , private alertify: AlertifyService ,
     private router: Router , private userService: UserService
    , private route1: ActivatedRoute  , private roomService: RoomService , private guard: AuthRoleGuard ) { }

  ngOnInit() {
    this.chceckUser();
  }

  login() {
  this.authService.login(this.model).subscribe(date => {
   this.alertify.success('logged in succesfully');
  }, error => {
    this.alertify.error(error);
  }, () => {
    this.router.navigate(['/reservation']);
  });
}
loggedIn() {
  return this.authService.loggedin();
}
chceckUser() {
  const token = localStorage.getItem('token');
 // const jwtData = token.split('.')[1];



 const decoddedToken = this.jwtHelper.decodeToken(token);
 const Decode = JSON.stringify(decoddedToken);

   const decodedata = JSON.parse(Decode);
   const daras = JSON.parse(Decode);

  const isAdmin = daras.role;

  if (isAdmin === 'Admin') {
    return true ;
  } else {
  return false;
  }
}

loguot() {
  this.authService.userToken = null;
  localStorage.removeItem('token');
  this.alertify.message('logged out');
  this.router.navigate(['/home']);
}

}
