import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  isLoggedIn: boolean;
  loggedInUser: string;
  showRegister: boolean;

  constructor(
    private authService : AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ){}

  ngOnInit(){
    this.authService.getAuth().subscribe(auth =>{
      if(auth) {
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
      } else {
        this.isLoggedIn = false;
      }
    })
  }

    onLogoutClick(){
      this.authService.logout();
      this.flashMessage.show("You are now logged out", {
        timeout: 4000
      })
      this.router.navigate(['/'])
    }

    showBanner(){
      let showBanner : boolean = true;

      if(this.router.url == '/login'){
        showBanner = false;
      }
      if(this.router.url == '/register'){
        showBanner = false;
      }
      if(this.router.url == '/product/new'){
        showBanner = false;
      }
      if(this.router.url == '/product/delete'){
        showBanner = false;
      }
      if(this.router.url == '/product/edit'){
        showBanner = false;
      }

      return showBanner;

    }
}


