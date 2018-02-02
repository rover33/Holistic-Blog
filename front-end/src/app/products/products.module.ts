import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductIndexComponent } from './product-index/product-index.component';
// import { ProductPreviewComponent } from './product-preview/product-preview.component';
import { ProductAllComponent } from './product-all/product-all.component';
import { RouterModule } from '@angular/router';
import { ProductRoutingModule } from './product-routing.module';
import { MaterialModule } from '../material.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ProductRoutingModule,
    MaterialModule
  ],
  declarations: [
    ProductAllComponent,
    ProductIndexComponent
    // ProductPreviewComponent
  ],
  exports: [
    ProductAllComponent,
    ProductIndexComponent
    // ProductPreviewComponent
  ]
})
export class ProductsModule { }