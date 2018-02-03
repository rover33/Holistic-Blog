import { ProductNewComponent } from './product-new/product-new.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductIndexComponent } from './product-index/product-index.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { ProductAllComponent } from './product-all/product-all.component';



const productRoutes: Routes = [

    {
        path: 'product/new',
        component: ProductNewComponent
    },
    {
        path: 'product/delete',
        component: ProductDeleteComponent
    },
    {
        path: 'product/:id',
        component: ProductIndexComponent
    },
    {
        path: 'products',
        component: ProductAllComponent
    }

];

@NgModule({
    imports: [ RouterModule.forRoot(productRoutes) ],
    exports: [ RouterModule ]
})
export class ProductRoutingModule {}