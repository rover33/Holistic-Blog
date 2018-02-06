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

    console.log('Checkout Cart', this.currentCart);

  }

  emptyCart(){
    localStorage.clear();
    this.currentCart = JSON.parse(localStorage.getItem('shoppingCart'))
  }
}
