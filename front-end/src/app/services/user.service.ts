import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth'
import { Observable } from 'rxjs/observable'
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { Http } from '@angular/http'
import { UrlHandlingStrategy } from '@angular/router/src/url_handling_strategy';
import { isDevMode } from '@angular/core'

@Injectable()
export class UserService {

  baseUrl: string; 

  constructor(private http: Http) { 
  	if(isDevMode()) {
  		this.baseUrl = 'https://localhost:3000';
  	} else {
  		this.baseUrl = '';
  	}
  }




//Check admin user.
checkAdmin(uid){
  // console.log('sup brah', uid);
  return this.http.get(`${this.baseUrl}/api/checkAdmin/${uid}`)
 }
}

