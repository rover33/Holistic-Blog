import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth'
import { Observable } from 'rxjs/observable'
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { Http } from '@angular/http'
import { UrlHandlingStrategy } from '@angular/router/src/url_handling_strategy';

@Injectable()
export class UserService {

  baseUrl = "http://localhost:3000";

  uAdmin: {
    email: string,
    uid: string
  }

  constructor(
    private http: Http
  ) { }

//Save new user
saveUser(uAdmin){
  return this.http.post(`${this.baseUrl}/api/user/saveUser/`, uAdmin);
}


//Check admin user.
checkAdmin?(){ }
}

