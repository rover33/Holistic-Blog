import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth'
import { Observable } from 'rxjs/observable'
import * as firebase from 'firebase/app'
import { auth } from 'firebase/app';
import { Router } from '@angular/router';




@Injectable()
export class AuthService {

  private user: Observable<firebase.User>
  private userDetails: firebase.User = null;


  constructor(
    private afAuth: AngularFireAuth,
    private router: Router

  ) {
    this.user = afAuth.authState;

    //checks to see see if there is user and their details.
    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
        } else {
          this.userDetails = null;
        }
      }
    )
  } 


  login(email: string, password: string) {
    return new Promise((resolve, reject) =>{
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(userData => resolve(userData),
      err => reject(err))
    });
  }

  register(email: string, password: string) {
    return new Promise((resolve, reject) =>{
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(userData => resolve(userData),
      err => reject(err))
    });
  }



  getAuth() {
    return this.afAuth.authState.map(auth => auth);
  }

  logout() {
    this.afAuth.auth.signOut();
  }



  



}


