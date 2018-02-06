import { Component, keyframes } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { GuardService } from './services/guard.service';
import { UserService } from './services/user.service';

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
  
  admin: boolean = true; 

  constructor(
    private authService : AuthService,
    private userService: UserService,
    private router: Router,
    private flashMessage: FlashMessagesService,
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
   let uid = JSON.parse(localStorage.getItem('firebase:authUser:AIzaSyAAaja_uGzzXyrPGku3VBTLVGnNWbxlqbY:angular-auth-firebase')) 
    console.log(uid.uid)

   this.userService.checkAdmin(uid.uid).subscribe(response => {
     if (response.json().admin == true) {
       this.admin = true
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


