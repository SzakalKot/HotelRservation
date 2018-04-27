import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, RequestOptions , Headers } from '@angular/http';
import { Room } from '../_models/Room';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RoomService {
    baseUrl = environment.apiUrl;


constructor(private http: Http) { }

    getRooms(): Observable<Room[]> {
        return this.http.get(this.baseUrl + 'room', this.jwt())
        .map(response => <Room[]>response.json())
        .catch(this.handleError);
    }
    getRoom(id): Observable<Room> {
        return this.http.get(this.baseUrl + 'room/' + id , this.jwt())
        .map(response => <Room>response.json())
        .catch(this.handleError);
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
