import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  currentCart : object

  constructor() { }

  ngOnInit() {
    this.currentCart = JSON.parse(localStorage.getItem('shoppingCart'));

    console.log('BEFORE Consolidation: ', this.currentCart);

    this.consolidateCart(this.currentCart);

    console.log('AFTER Consolidation: ', this.currentCart);

  }

  consolidateCart(currentCart) {
    console.log('consolidating...');
    let finalCheckoutCart = [];

    // for (let i = 0; i < currentCart.length; i ++){

    //   if(finalCheckoutCart == []){
    //     finalCheckoutCart.push(currentCart[i]);
    //   } else {
    //     if()
    //   }

      
    // }

    console.log('Final Checkout Cart', finalCheckoutCart);

  }


  emptyCart(){
    localStorage.clear();
    this.currentCart = JSON.parse(localStorage.getItem('shoppingCart'))
  }
}
