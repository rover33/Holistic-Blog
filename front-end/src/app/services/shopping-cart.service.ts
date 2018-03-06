import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { isDevMode } from '@angular/core'

@Injectable()
export class ShoppingCartService {

  baseUrl: string; 

  constructor(private http: Http) { 
  	if(isDevMode()) {
  		this.baseUrl = 'http://localhost:3000';
  	} else {
  		this.baseUrl = '';
  	}
  }

// Function add items to cart /localstorage
  purchase(){
    console.log('hit purchase service');
    let shoppingList = [];
    let cart = JSON.parse(localStorage.getItem('shoppingCart'));
    let userID;


    let localStorageKeys = Object.keys(localStorage);

    for(let i = 0; i < localStorageKeys.length; i++){
      if(localStorageKeys[i].includes('firebase')){
        console.log('user is logged in!');
        let key = localStorageKeys[i];
        userID = JSON.parse(localStorage.getItem(key));
        // console.log(userID.uid);
      } 
    }


    // Adding total amount per item to cart
    if(cart){
      for(let p = 0; p < cart.length; p++){
        cart[p].total = (cart[p].quantity * cart[p].price).toFixed(2);
        delete cart[p].productName;
        delete cart[p].price;
        delete cart[p].image;
      }
    }


    // Formatting data to send to back end
    if(!cart){

      alert('Cart is empty!'); 

    } else if(cart && userID){

      console.log('sending both list and user ID!');

      shoppingList.push(cart);
      shoppingList.push( [ { 'userID': userID.uid } ] );
      
      // console.log(shoppingList);

    } else if(cart && !userID){
      console.log('sending list, no user ID');
      shoppingList.push(cart);
      userID = [];
      shoppingList.push(userID);
      
      // console.log(shoppingList);

    } 

    console.log('Final Shopping List data to send to Back End, ', shoppingList);


    return this.http.post(`${this.baseUrl}/api/placeOrder`, shoppingList)

  }
}
