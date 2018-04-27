import { Component, OnInit } from '@angular/core';
import { User } from '../_models/User';
import { UserService } from '../_services/User.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-Member-list',
  templateUrl: './Member-list.component.html',
  styleUrls: ['./Member-list.component.css']
})
export class MemberListComponent implements OnInit {
  users: User[];

  constructor(private userServise: UserService , private alertify: AlertifyService) { }

  ngOnInit() {
    this.loadUsers();
  }

    loadUsers() {
      this.userServise.getUsers().subscribe((users: User[]) => {
        this.users = users;
      }, error => {
        this.alertify.error(error);
      });
    }
    deleteUser() {
      console.log('sd');
    }
}
