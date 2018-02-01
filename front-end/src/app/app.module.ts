import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

import { LoginComponent } from './login/login.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { ProductPreviewComponent } from './product-preview/product-preview.component';
import { BlogPreviewComponent } from './blog-preview/blog-preview.component';
import { BlogService } from './services/blog.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductPreviewComponent,
    BlogPreviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
