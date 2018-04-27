import { Component, OnInit } from '@angular/core';
import { Room } from '../_models/Room';
import { RoomService } from '../_services/room.service';
import { AlertifyService } from '../_services/alertify.service';



@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-Room',
  templateUrl: './Room.component.html',
  styleUrls: ['./Room.component.css']
})
export class RoomComponent implements OnInit {
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
