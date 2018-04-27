import { Injectable } from '@angular/core';
import { RequestOptions , Http, Headers , Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { tokenNotExpired , JwtHelper } from 'angular2-jwt';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Reservation } from '../_models/reservation';
import { User } from '../_models/User';

@Injectable()
export class ReservationService {
    reservation: Reservation;

    baseUrl = environment.apiUrl;
constructor(private http: Http) { }

addReservation(reservation: Reservation) {
  return  this.http.post(this.baseUrl + 'reservation' , reservation , this.jwt());
}
getReservation(): Observable<Reservation[]> {
    return this.http.get(this.baseUrl + 'status' , this.jwt())
    .map(response => <Reservation>response.json())
    .catch(this.handleError);

}
getReservationSpecyfic(id): Observable<Reservation[]> {
    return this.http.get(this.baseUrl + 'reservation/' + id , this.jwt())
    .map(response => <Reservation>response.json())
    .catch(this.handleError);
}

requestOption() {
    const headers = new Headers({'Content-type': 'application/json'});
    return new RequestOptions({headers : headers}) ;
}
private jwt() {
    const token = localStorage.getItem('token');
    if (token) {
        const headers = new Headers({'Authorization' : 'Bearer ' + token});
        headers.append('Content-type' , 'application/json');
        return new RequestOptions({headers : headers});

    }
}
private handleError(error: any) {
    const applicationError = error.headers.get('application-Error');
    if ( applicationError ) {
        return Observable.throw(applicationError);
    }
    const serverError = error.jason();
    let modelStateErrors = '';
    if (serverError) {
        for (const key in serverError) {
            if (serverError[key]) {
                modelStateErrors += serverError[key] + '\n';
            }
         }
    }
    return Observable.throw(
        modelStateErrors || 'Server error'
    );
}
}

