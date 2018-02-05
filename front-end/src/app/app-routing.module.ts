import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './authentications/login/login.component';
import { RegisterComponent } from './authentications/register/register.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';


import { GuardService } from './services/guard.service'
import { ProductEditComponent } from './products/product-edit/product-edit.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login', 
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {

        path: 'checkout',
        component: ShoppingCartComponent
    },
    {
        path: 'product/edit',
        component: ProductEditComponent, canActivate:[GuardService]

    }
    
   
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
    providers: [GuardService]
})
export class AppRoutingModule {}