import { Component, OnInit } from '@angular/core';
import { User } from '../_models/User';
import { UserService } from '../_services/User.service';
import { AlertifyService } from '../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-UserDetail',
  templateUrl: './UserDetail.component.html',
  styleUrls: ['./UserDetail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User;

  constructor( private userService: UserService , private alertify: AlertifyService,
  private route: ActivatedRoute ) { }

  ngOnInit() {
    this.loadUser();
  }
  deleteuser() {
    if (window.confirm('are u sure  ?')) {
    this.userService.deleteUser(+this.route.snapshot.params['id'])
    .subscribe(response => console.log('ok'));
    }
  }
  loadUser() {
    this.userService.getUser(+this.route.snapshot.params['id']).subscribe((user: User) => {
      this.user = user;
    }, error => {
      this.alertify.error(error);
    });
  }

}
