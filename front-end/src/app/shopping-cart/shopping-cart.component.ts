import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  currentCart : object

  constructor(
    private shoppingCartService : ShoppingCartService
  ) { }

  ngOnInit() {
    this.currentCart = JSON.parse(localStorage.getItem('shoppingCart'));

    // console.log('Checkout Cart', this.currentCart);

  }

  emptyCart(){
    localStorage.clear();
    this.currentCart = JSON.parse(localStorage.getItem('shoppingCart'))
  }

  purchase(){

    this.shoppingCartService.purchase();
      // .subscribe( response => {
      //   console.log(response);
      // })
    
  }
}
