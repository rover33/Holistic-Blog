import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service'

@Component({
  selector: 'app-product-all',
  templateUrl: './product-all.component.html',
  styleUrls: ['./product-all.component.scss']
})
export class ProductAllComponent implements OnInit {

  // Variable to hold all products from back end call
  allProducts = []

  constructor(
    private productService : ProductService
  ) { }

  ngOnInit() {

    // Function to get all products from backend 
    this.productService.getAllProducts()
      .subscribe (response => {
        console.log("Successfully retreived Products WOO! : ", response.json());

        // Setting all products to products variable
        let products = response.json();
        for(let i = 0; i < products.length; i++){
          // console.log(products[i].blogBody);
          products[i].description = products[i].description.slice(0,100).concat('...');
        }
        this.allProducts = products;

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

    // Function that calls the addtocart function from productService
    this.productService.addToCart(productID, qty)
      .subscribe( response => {
        // console.log(response.json());
        let availableQty = response.json().quantity;
        // console.log(availableQty);


        // Checking quantity from backend.
        if(qty > availableQty){
          alert(`Sorry, there are only ${availableQty} items left in our inventory.`);
        } else {
          let newCartItem = {
            'productName': productName,
            'productID': productID,
            'quantity': qty ,
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
            // console.log('CurrentITEMS LENGTH: ', currentItems.length);
            // console.log('NEW ITEM ID: ',newCartItem.productID);

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

         
          // setting cart in local storage
          localStorage.setItem('shoppingCart', JSON.stringify(currentItems));

          alert(`Successfully added Product: ${newCartItem.productName} Qty: ${newCartItem.quantity} to cart`);
        }

        
      })
  }

}
