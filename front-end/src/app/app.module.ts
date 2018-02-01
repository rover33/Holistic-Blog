import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

import { LoginComponent } from './login/login.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { ProductPreviewComponent } from './products/product-preview/product-preview.component';
import { ProductService } from './services/product.service';
import { BlogPreviewComponent } from './blogs/blog-preview/blog-preview.component';
import { BlogService } from './services/blog.service';
import { BlogIndexComponent } from './blogs/blog-index/blog-index.component';
import { BlogAllComponent } from './blogs/blog-all/blog-all.component';
import { ProductAllComponent } from './products/product-all/product-all.component';
import { ProductIndexComponent } from './products/product-index/product-index.component';
import { ProductShowComponent } from './products/product-show/product-show.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductPreviewComponent,
    BlogPreviewComponent,
    BlogIndexComponent,
    BlogAllComponent,
    ProductAllComponent,
    ProductIndexComponent,
    ProductShowComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpModule,
    RouterModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [BlogService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
