
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from './app.component';

import { MaterialModule } from './material.module';
import { environment } from '../environments/environment';

import { BlogService } from './services/blog.service';
import { ProductService } from './services/product.service';

import { AppRoutingModule } from './app-routing.module';
import { BlogsModule } from './blogs/blogs.module';
import { ProductsModule } from './products/products.module';


import { LoginComponent } from './login/login.component';

// import { ProductPreviewComponent } from './products/product-preview/product-preview.component';
// import { ProductAllComponent } from './products/product-all/product-all.component';
// import { ProductIndexComponent } from './products/product-index/product-index.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // ProductPreviewComponent,
    // ProductAllComponent,
    // ProductIndexComponent,
    HomeComponent
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
    
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [BlogService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
