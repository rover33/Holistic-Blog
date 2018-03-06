import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  // Variables to save products retrieved from back end.
  products = []
  productToEdit : object

  constructor(
    private productService : ProductService,
    private router : Router
  ) { }

  ngOnInit() {

    // CAlling service to get all products from back end
    this.productService.getAllProducts()
      .subscribe (response => {
        
        this.products = response.json();
        // console.log("RETREIVED all products", this.products);
      })

  }

  ////////////////////////////////////
  // set flag to make product editable
  makeProductEditable(product){
    this.productToEdit = product;
  }

  ////////////////////////////////////
  // After editing , save product to database
  doneEditing(productToEdit){

    this.productService.saveEditedProduct(productToEdit.product_id, productToEdit)
      .subscribe(response => {
        // console.log('Successfully updated product: ', response);
    })

    this.productToEdit = {};
  }

  ////////////////////////////////////
  // Delete product by ID
  deleteproduct(productId){
    // console.log(productId);

    this.productService.deleteProduct(productId)
      .subscribe(response => {
        // console.log('Successfully deleted product', response.json());
        if(!response.json()){
          alert('Oops! did not delete');
        } else if(response.json()){
          // console.log(response.json(), 'hit!');

          this.productService.getAllProducts()
            .subscribe (response => {
        
            this.products = response.json();
            // console.log("RETREIVED all products", this.products);
          })

        }
    })
  }


}
