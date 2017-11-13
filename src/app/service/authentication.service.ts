import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {MyhttpService} from './myhttp.service';

@Injectable()
export class AuthenticationService {
  constructor(private http: MyhttpService) { }

  login(username: string, password: string) {
    const url = 'http://localhost:8080/ctsweb/cts/SecurityService/login';
    const headerslist =  new Headers({
      'Content-Type': 'application/json',
      'userEmail': username,
      'userPassword': password
    });

   const options = new RequestOptions({ 'headers': headerslist });
      return this.http.post(url, '', options)
    // const user = {
    //   'userId': 2,
    //   'userName': 'John2',
    //   'userStatus': 'A',
    //   'userPassword': '',
    //   'userMobile': '12345678',
    //   'userEmail': 'john2@at.com',
    //   'createdBy': 0,
    //   'createdOn': 1509014404000,
    //   'lastupdatedBy': 0,
    //   'lastupdatedOn': null,
    //   'userToken': 'c28584794f2e6634de9dfdf6485f8a6e20634a6bef4c1567ae9ced73139a1d9c'
    // };
    // if (username === 'vamshi') {
    //   localStorage.setItem('currentUser', JSON.stringify(user));
    // }

    .map((response: Response) => {
        // login successful if there's a jwt token in the response
        const user = response.json();
        if (user && user.userToken) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
        }
    });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
