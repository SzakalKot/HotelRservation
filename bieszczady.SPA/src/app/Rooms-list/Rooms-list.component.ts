import { Component, OnInit } from '@angular/core';
import { Room } from '../_models/Room';
import { RoomService } from '../_services/room.service';
import { AlertifyService } from '../_services/alertify.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-Rooms-list',
  templateUrl: './Rooms-list.component.html',
  styleUrls: ['./Rooms-list.component.css']
})
export class RoomsListComponent implements OnInit {
  rooms: Room[];

  constructor(private roomservice: RoomService , private aletrify: AlertifyService) { }

  ngOnInit() {
    this.loadRooms();
  }
    loadRooms() {
      this.roomservice.getRooms().subscribe((rooms: Room[]) => {
        this.rooms = rooms;
      }, error => {
        this.aletrify.error(error);
      });
    }

}
