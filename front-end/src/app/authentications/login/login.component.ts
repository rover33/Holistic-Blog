import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages/module/module';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) {}

  ngOnInit() {
    this.authService.getAuth().subscribe(auth =>{
      if(auth){
        console.log('auth')
        console.log(auth)
        this.router.navigate(['/']);
      }
    });
      
  }

  onSubmit(){
    this.authService.login(this.email, this.password)
      .then(res => {
        this.flashMessage.show('You are now logged in', {
          timeout: 4000
        })
        this.router.navigate(['/'])
      })
      .catch(err => {
        this.flashMessage.show(err.message, {
          timeout: 4000
      })
    })
  }

  

}