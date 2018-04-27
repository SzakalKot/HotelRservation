import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../_services/reservation.service';
import { AlertifyService } from '../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { Reservation } from '../_models/reservation';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-EditReservation',
  templateUrl: './EditReservation.component.html',
  styleUrls: ['./EditReservation.component.css']
})
export class EditReservationComponent implements OnInit {
  reservations: Reservation[];

  constructor(private reservationService: ReservationService , private alertify: AlertifyService,
    private route: ActivatedRoute ) { }

  ngOnInit() {
    this.loadReservation();
  }
  loadReservation () {
    const userid = localStorage.getItem('idUser');
    this.reservationService.getReservationSpecyfic([userid]).subscribe((reservations: Reservation[]) => {
      this.reservations = reservations;
    }, error => {
      this.alertify.error('Nie udało sie załadować rezerwacji');
    });
  }

}
