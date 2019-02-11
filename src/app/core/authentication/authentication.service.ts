import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { User } from '../../models/user.model';

@Injectable()
export class AuthenticationService {
    // store the URL so we can redirect after logging in
    redirectUrl: string;
    rootUrl = 'http://localhost:3000/api/auth';
    constructor(private http: HttpClient) {

    }

    login(email: string, password: string ) {
       const data = 'email=' + email + '&password=' + password + '&grant_type=password';
       const reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
       return this.http.post<any>(this.rootUrl + '/login', data, { headers: reqHeader }).pipe(
       map(user => {
                // login successful if there's a jwt token in the response
                if (user) {
                // store jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('TOKEN_NAME', JSON.stringify(user));
                 console.log(user.token)
                  // this.isLoggedIn(user.token);
                }
                return user;
            }));
    }

    register(username: string, email: string, password: string) {
        const data = 'username=' + username + '&email=' + email + '&password=' + password + '&grant_type=password';
        const reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
       return this.http.post<any>(this.rootUrl + '/register', data, { headers: reqHeader }).pipe(
       map(token => {
                // Register successful if there's a jwt token in the response
                if (token) {
                // store user details and jwt token in local storage 
                  localStorage.setItem('TOKEN_NAME', JSON.stringify(token));
                }
                return token;
            }));
    }

    logout() {
        return this.http.get(this.rootUrl + '/logout').pipe(
       map(user => {
           if (user) {
            localStorage.removeItem('TOKEN_NAME');
           }
       }
       ));
    }

    getToken(): string {
        return localStorage.getItem('TOKEN_NAME');
    }

    public isLoggedIn(token?: string): boolean {
        const jwtHelper: JwtHelperService = new JwtHelperService();
        if (!token) {
            token = this.getToken();
        }
        if (token === 'undefined' ||token === null) {
                    return false;
        }
        return !jwtHelper.isTokenExpired(token);
    }
}
