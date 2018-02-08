import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages/module/module';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  email: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    //checking if the person is logged in and authorized
    this.authService.getAuth().subscribe(auth =>{
      if(auth){
        this.router.navigate(['/']);
      }
    });
  }

  onSubmit(){
     //Checks email and password to register successfully
    this.authService.register(this.email, this.password)
      .then(res => {
        console.log(this.flashMessage.show)
        this.flashMessage.show(`Hello, ${this.email}. You are now registered and logged in.`, {
          timeout: 4000
        })

        this.router.navigate(['/'])
      })
      .catch(err => {
        //flashes error if user already exists or does not meet critera.
        console.log(this.flashMessage.show)
        this.flashMessage.show(err.message,{
          timeout: 4000
        })
      })
    }

}

