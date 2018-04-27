import { Injectable } from '@angular/core';
import { RequestOptions , Http, Headers , Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { tokenNotExpired , JwtHelper } from 'angular2-jwt';
import { User } from '../_models/User';

@Injectable()
export class AuthService {
    baseUrl = 'http://localhost:5000/api/auth/';
    userToken: any;
    decoded: any;
    user: User;
    decodedRoles: any ;
    jwtHelper: JwtHelper = new JwtHelper();


constructor(private http: Http) { }

    login(model: any) {
    const headers = new Headers({'Content-type' : 'application/json'});
    const options = new RequestOptions({headers : headers});
        return this.http.post(this.baseUrl + 'login' , model, options ).map((response: Response) => {
            const user = response.json();
            if (user) {
            localStorage.setItem('token' , user.tokenString);
            this.decoded = this.jwtHelper.decodeToken(user.tokenString);
            const decodecJsnon = JSON.stringify(this.decoded);
            const isAdmin = JSON.parse(decodecJsnon);
            localStorage.setItem('idUser', this.decoded.nameid);
            const isssAdmin  = isAdmin.role;
            const nameid = isAdmin.nameid;
            console.log(nameid);
            this.userToken = user.tokenString;
            }
        }).catch(this.handleError);
    }
    register(model: any) {
        return this.http.post(this.baseUrl + 'register' , model , this.requestOption()).catch(this.handleError);
    }

    loggedin() {
        return tokenNotExpired('token');
    }
    requestOption() {
        const headers = new Headers({'Content-type': 'application/json'});
        return new RequestOptions({headers : headers}) ;
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
