import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-index',
  templateUrl: './product-index.component.html',
  styleUrls: ['./product-index.component.scss']
})
export class ProductIndexComponent implements OnInit {

  product: {}

  constructor(
    private productsService : ProductService,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.forEach( param => {
      this.productsService.getOneProduct(param.id)
      .subscribe(response => {
        // console.log(response.json());
          this.product = response.json();
      })

    })
  }

  //This function will check availability of the Product before adding to the cart
  addToCart(productID, productName, productPrice, productImage){
    let qty = Number((<HTMLInputElement>document.getElementById(`productQty`)).value);
    
    // console.log(`You are trying to buy ${qty} items`)
    // console.log('product ID: ', productID);

    if(!qty){
      qty = 1;
    }


    this.productsService.addToCart(productID, qty)
      .subscribe( response => {
        // console.log(response.json());
        let availableQty = response.json().quantity;
        // console.log(availableQty);

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

         

          localStorage.setItem('shoppingCart', JSON.stringify(currentItems));

          alert(`Successfully added Product: ${newCartItem.productName} Qty: ${newCartItem.quantity} to cart`);
        }

        
      })
  }

}