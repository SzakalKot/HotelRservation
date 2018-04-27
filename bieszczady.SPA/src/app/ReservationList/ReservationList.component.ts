import { Component, OnInit } from '@angular/core';
import { Reservation } from '../_models/reservation';
import { AlertifyService } from '../_services/alertify.service';
import { ReservationService } from '../_services/reservation.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-ReservationList',
  templateUrl: './ReservationList.component.html',
  styleUrls: ['./ReservationList.component.css']
})
export class ReservationListComponent implements OnInit {
 reservations: Reservation[];
  constructor(private alertify: AlertifyService , private reservationService: ReservationService) { }

  ngOnInit() {
    this.loadreservation();
  }

  loadreservation() {
    this.reservationService.getReservation().subscribe((reservations: Reservation[]) => {
      this.reservations = reservations;
    } , error => {
      this.alertify.error('Nie udało sie załadować rezerwacji');
    });
  }
}
