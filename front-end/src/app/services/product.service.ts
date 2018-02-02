import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductService {

  baseUrl = "http://localhost:3000";

  getAllProducts(){
    console.log("getting all products");
    return this.http.get(`${this.baseUrl}/api/products`)
  }

  getOneProduct(productId){
    console.log(productId);
    return this.http.get(`${this.baseUrl}`)
  }


  constructor( private http: Http ) { }

}
