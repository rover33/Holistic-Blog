import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages/module/module';

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
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth =>{
      if(auth){
        this.router.navigate(['/']);
      }
    });
  }

  onSubmit(){
    this.authService.login(this.email, this.password)
      .then(res => {
        onShowSuccess(){
          this.flashMessage.success('Success')
        }
      })
        this.router.navigate(['/'])
      })
      .catch(err => {
        onShowSuccess(){
          this.flashMessage.danger('Danger message')
        }
        
    })
  }

}