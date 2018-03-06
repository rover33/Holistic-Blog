import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { isDevMode } from '@angular/core'

@Injectable()
export class ProductService {

  baseUrl: string; 

  constructor(private http: Http) { 
  	if(isDevMode()) {
  		this.baseUrl = 'http://localhost:3000';
  	} else {
  		this.baseUrl = '';
  	}
  }


  // USER FUNCTIONS
  getAllProducts(){
    console.log("getting all products");
    return this.http.get(`${this.baseUrl}/api/products`)
  }

  // Get one product from backend using ID
  getOneProduct(productId){
    console.log(productId);
    return this.http.get(`${this.baseUrl}/api/product/${productId}`)
  }


  // ADMIN FUNCTIONS
  saveNewProduct(newProduct){
    console.log('Saving new product:', newProduct);
    return this.http.post(`${this.baseUrl}/api/product/addNew`, newProduct);
    
  }

  // Function to delete product by Id
  deleteProduct(productId){
    console.log("DELETING product...", productId);
    return this.http.delete(`${this.baseUrl}/api/product/${productId}`)
  }
   //Funciton to edit product 
  saveEditedProduct(productId, editedProduct){
    console.log('Saving newly edited product', editedProduct);
    return this.http.put(`${this.baseUrl}/api/product/${productId}`, editedProduct)
  }


  // Function to addTOCArt
  addToCart(id, qty){
    console.log('Hit the product addToCart Service...');

    return this.http.get(`${this.baseUrl}/api/checkQty?id=${id}&qty=${qty}`)
  }

}
