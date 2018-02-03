import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductIndexComponent } from './product-index/product-index.component';
import { ProductAllComponent } from './product-all/product-all.component';
import { RouterModule } from '@angular/router';
import { ProductRoutingModule } from './product-routing.module';
import { MaterialModule } from '../material.module';
import { ProductNewComponent } from './product-new/product-new.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ProductRoutingModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [
    ProductAllComponent,
    ProductIndexComponent,
    ProductNewComponent
    // ProductPreviewComponent
  ],
  exports: [
    ProductAllComponent,
    ProductIndexComponent
    // ProductPreviewComponent
  ]
})
export class ProductsModule { }