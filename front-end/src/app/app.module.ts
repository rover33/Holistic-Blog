
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { FlashMessagesModule } from 'angular2-flash-messages'
import { FlashMessagesService } from 'angular2-flash-messages';
import { AsyncLocalStorageModule } from 'angular-async-local-storage';

import { AppComponent } from './app.component';

import { MaterialModule } from './material.module';
import { environment } from '../environments/environment';

import { BlogService } from './services/blog.service';
import { ProductService } from './services/product.service';
import { AuthService } from './services/auth.service';
import { ShoppingCartService } from './services/shopping-cart.service';


import { AppRoutingModule } from './app-routing.module';
import { BlogsModule } from './blogs/blogs.module';
import { ProductsModule } from './products/products.module';


import { LoginComponent } from './authentications/login/login.component';


// import { ProductPreviewComponent } from './products/product-preview/product-preview.component';
// import { ProductAllComponent } from './products/product-all/product-all.component';
// import { ProductIndexComponent } from './products/product-index/product-index.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './authentications/register/register.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { UserService } from './services/user.service';
import { AboutComponent } from './about/about.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // ProductPreviewComponent,
    // ProductAllComponent,
    // ProductIndexComponent,
    HomeComponent,
    RegisterComponent,
    ShoppingCartComponent,
    AboutComponent

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpModule,
    RouterModule,
    BlogsModule,
    ProductsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FlashMessagesModule.forRoot(),
    AsyncLocalStorageModule,
    
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [BlogService, ProductService, AuthService, FlashMessagesService, ShoppingCartService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
