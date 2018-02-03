import { Response } from '@angular/http';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  products = []

  productToEdit : object

  constructor(
    private productService : ProductService
  ) { }

  ngOnInit() {
    this.productService.getAllProducts()
      .subscribe (response => {
        
        this.products = response.json();
        console.log("RETREIVED all products", this.products);
      })

  }

  makeProductEditable(product){
    this.productToEdit = product;
  }

  doneEditing(productToEdit){

    this.productService.saveEditedProduct(productToEdit.product_id, productToEdit)
      .subscribe(response => {
        console.log('Successfully updated product: ', response);
      })
    this.productToEdit = {};
  }
}
