import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, RequestOptions, Headers } from '@angular/http';
import { User } from '../_models/User';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService {
        baseUrl = environment.apiUrl;

constructor(private http: Http) {}

    getUsers(): Observable<User[]> {
        return this.http.get(this.baseUrl + 'users' , this.jwt())
        .map(response => <User[]>response.json())
        .catch(this.handleError);
    }
    getUser(id): Observable<User> {
        return this.http.get(this.baseUrl + 'users/' + id , this.jwt())
        .map(response => <User>response.json())
        .catch(this.handleError);
    }
    deleteUser(id) {
        return this.http.post(this.baseUrl + 'users/' + id + '/delete' , this.jwt())
        .map(response => response.json())
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
        const serverError = error.json();
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
