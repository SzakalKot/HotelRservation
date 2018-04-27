import { Component, OnInit } from '@angular/core';
import { Room } from '../_models/Room';
import { Route } from '@angular/compiler/src/core';
import { RoomService } from '../_services/room.service';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'protractor';
import { AlertifyService } from '../_services/alertify.service';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../_models/User';
import { ReservationService } from '../_services/reservation.service';
import { Reservation } from '../_models/reservation';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-Rservation',
  templateUrl: './Rservation.component.html',
  styleUrls: ['./Rservation.component.css']
})
export class RservationComponent implements OnInit {
  room: Room;
  user: User ;
  bsConfig: Partial<BsDatepickerConfig>;
  registerForm: FormGroup;
  reservation: Reservation;
  values: any;



  constructor(private roomService: RoomService ,
    private route1: ActivatedRoute  ,
    private alertify: AlertifyService ,
    private fb: FormBuilder ,
    private reservationService: ReservationService,
  private route: Router) { }

  ngOnInit( ) {
    this.loadRoom();
    this.bsConfig = {containerClass: 'theme-red' };
    this.createRegisterForm();
    // tslint:disable-next-line:no-unused-expression
  }
  createRegisterForm() {
    this.registerForm = this.fb.group({
      StartTime: [null, Validators.required],
      EndTime: [null, Validators.required],
    });
  }
send() {
  // tslint:disable-next-line:prefer-const
  const values = JSON.parse(localStorage.getItem('idUser'));
  console.log(this.registerForm.get('StartTime').value);
  const dataStartvalue = this.registerForm.get('StartTime').value;
  const  dataEndtvalue = this.registerForm.get('EndTime').value;
 const charge = (dataStartvalue.valueOf() - dataEndtvalue.valueOf()) / -(24 * 60 * 60 * 1000) * this.room.price;
  this.reservation = Object.assign({ 'userId' : values, 'roomId': this.room.roomId, 'charge': charge} , this.registerForm.value );
  console.log(charge);
  this.reservationService.addReservation(this.reservation).subscribe(() => {
    this.alertify.success('rezerwacja zlozona');
  // tslint:disable-next-line:no-shadowed-variable
  }, error => {
    this.alertify.warning('rezerwacja złożona');
  });
}
  loadRoom() {

    this.roomService.getRoom(+this.route1.snapshot.params['id']).subscribe((room: Room ) => {
      this.room = room ;
    // tslint:disable-next-line:no-shadowed-variable
    }, error =>
   this.alertify.error(error));
    }
    confirm() {
      this.route.navigate(['/roomlist']);
    }


}
