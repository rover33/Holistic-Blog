import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  currentCart : object
  grandTotal : number = 0

  constructor(
    private shoppingCartService : ShoppingCartService
  ) { }

  ngOnInit() {
    
    let cart = JSON.parse(localStorage.getItem('shoppingCart'));
    // Adding total amount per item to cart
    if(cart){
      for(let p = 0; p < cart.length; p++){
        cart[p].total = Number((cart[p].quantity * cart[p].price).toFixed(2));
        this.grandTotal += cart[p].total;
        this.grandTotal = Number(this.grandTotal.toFixed(2));
        
      }
    }

    this.currentCart = cart;

    

    console.log('Checkout Cart', this.currentCart);

  }

  emptyCart(){
    localStorage.clear();
    this.currentCart = JSON.parse(localStorage.getItem('shoppingCart'))
  }

  purchase(){

    this.shoppingCartService.purchase()
      .subscribe( response => {
        console.log(response);
        alert('Order was placed!');
      })
   
    
    localStorage.clear();
    
    this.currentCart = null;

    // console.log(this.currentCart);
  }
}
