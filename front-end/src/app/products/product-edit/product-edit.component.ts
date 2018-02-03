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
        console.log(response);
        console.log("retrieved all products")
          this.products = response.json();

      })

  }

  makeProductEditable(product){
    this.productToEdit = product;
  }

  doneEditing(){
    this.productToEdit = {};
  }
}
