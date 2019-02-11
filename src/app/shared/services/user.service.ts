import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import {RequestOptions, Request, RequestMethod} from '@angular/http';

import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { User } from '../../models/user.model';

@Injectable()
export class UserService {
    rootUrl = 'http://localhost:3000/api/auth';
    chkUrl = 'http://localhost:3000/users/';

    constructor(private http: HttpClient) {

    }

    public welcome() {
        const token1 = JSON.parse(localStorage.getItem('TOKEN_NAME'));
        const headers = new HttpHeaders({'x-access-token': token1.token});
         return this.http.get(this.rootUrl + '/me', { headers: headers });
    }

    // userInfo(username:string){
    //     let headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'})
    //      return this.http.get(this.chkUrl + username, { headers: headers }).pipe(map((user)=>{
    //         console.log(user);
    //      }
    // ))
    // }
}