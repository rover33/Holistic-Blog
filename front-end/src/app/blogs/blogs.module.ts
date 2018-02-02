import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogAllComponent } from './blog-all/blog-all.component';
import { BlogPreviewComponent } from './blog-preview/blog-preview.component';
import { BlogIndexComponent } from './blog-index/blog-index.component';
import { RouterModule } from '@angular/router';
import { BlogRoutingModule } from './blog-routing.module';
import { MaterialModule } from '../material.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BlogRoutingModule,
    MaterialModule
  ],
  declarations: [
    BlogAllComponent,
    BlogIndexComponent,
    BlogPreviewComponent
  ],
  exports: [
    BlogAllComponent,
    BlogIndexComponent,
    BlogPreviewComponent
  ]
})
export class BlogsModule { }