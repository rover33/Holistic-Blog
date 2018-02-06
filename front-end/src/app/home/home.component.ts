
import { ProductService } from './../services/product.service';
import { BlogService } from './../services/blog.service';
import { Component, OnInit } from '@angular/core';
import { QueryValueType } from '@angular/compiler/src/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  threeBlogs = [];
  threeProducts = [];


  constructor(
    private blogService : BlogService,
    private productService : ProductService
  ) { }

  ngOnInit() {
    console.log('initiliazing blog/products ...');
    this.blogService.getAllBlogs()
      .subscribe( response => {
        // console.log(response);
        console.log("Successfully retreived BLOGS : ", response.json());

        let blogs = response.json().splice(0, 3);
        for(let i = 0; i < blogs.length; i++){
          // console.log(blogs[i].blogBody);
          blogs[i].blogBody = blogs[i].blogBody.slice(0,100).concat('...');
        }
        this.threeBlogs = blogs;
      });

      this.productService.getAllProducts()
      .subscribe( response => {
        console.log("Successfully retreived Products : ", response.json());
        let products = response.json().splice(0, 3);
        for(let i = 0; i < products.length; i++){
          // console.log(products[i].blogBody);
          products[i].description = products[i].description.slice(0,100).concat('...');
        }
        this.threeProducts = products;
      })
  }


  // This function will check availability of the Product before adding to the cart
  addToCart(productID, i, productName, productPrice, productImage){
    let qty = Number((<HTMLInputElement>document.getElementById(`card-${i}`)).value);
    
    // console.log(`You are trying to buy ${qty} items`)
    // console.log('product ID: ', productID);

    if(!qty){
      qty = 1;
    }
    
    this.productService.addToCart(productID, qty)
    .subscribe( response => {
      console.log(response.json());
      let availableQty = response.json().quantity;
      console.log(availableQty);

      if(qty > availableQty){
        alert(`Sorry, there are only ${availableQty} items left in our inventory.`);
      } else {
        let newCartItem = {
          'productName': productName,
          'productID': productID,
          'quantity': qty  ,
          'price': productPrice,
          'image': productImage
        }
    
        let currentItems = JSON.parse(localStorage.getItem('shoppingCart'));
      
        // console.log(currentItems);
    
        if(currentItems == null){
          currentItems = [];
        } 

        if(currentItems.length == 0){
          currentItems.push(newCartItem);
        } else {
          console.log('CurrentITEMS LENGTH: ', currentItems.length);
          console.log('NEW ITEM ID: ',newCartItem.productID);

          var exists = false;
          
          for(let i = 0; i < currentItems.length; i++){
            

            if(newCartItem.productID == currentItems[i].productID){
              currentItems[i].quantity += newCartItem.quantity;
              exists = true;
            }
            
          } 

          if(!exists){
            currentItems.push(newCartItem);
          }

        }
        localStorage.setItem('shoppingCart', JSON.stringify(currentItems));

        alert(`Successfully added Product: ${newCartItem.productName} Qty: ${newCartItem.quantity} to cart`);
      }

      
    })
  }


}
