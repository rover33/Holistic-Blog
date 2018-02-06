import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ShoppingCartService {

  baseUrl = 'http://localhost:3000';

  constructor( private http: Http ) { }

  purchase(){
    console.log('hit cart service');
    let shoppingList = [];
    let cart = JSON.parse(localStorage.getItem('shoppingCart'));
    let userID;


    let localStorageKeys = Object.keys(localStorage);

    for(let i = 0; i < localStorageKeys.length; i++){
      if(localStorageKeys[i].includes('firebase')){
        console.log('user is logged in!');
        let key = localStorageKeys[i];
        userID = JSON.parse(localStorage.getItem(key));
        console.log(userID.uid);
      } 
    }


    if(!cart){
      console.log('cart is empty!'); 
    } else if(cart && userID){
      console.log('sending both list and user ID!');
      shoppingList.push(cart);
      shoppingList.push( [ { 'userID': userID.uid } ] );
      
      console.log(shoppingList);

    } else if(cart){
      console.log('sending list, no user ID');
      shoppingList.push(cart);
      userID = [];
      shoppingList.push(userID);
      
      console.log(shoppingList);

    } 

    // console.log(typeof(shoppingList));
    // console.log(shoppingList);
    
  }
}
