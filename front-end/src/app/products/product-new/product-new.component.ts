import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../services/product.service';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.scss']
})
export class ProductNewComponent implements OnInit {

  
  newProduct = <any>{}

  saveSuccess: boolean = false

  requireFields: boolean = false

  constructor(
    private productService : ProductService,
    private router : Router
  ) { }

  ngOnInit() {

  }

  // Function to save a new product to the product table in the back end
  saveNewProduct(newProduct) {
    if(!newProduct.name || !newProduct.description || !newProduct.price || !newProduct.quantity ){
      // alert('Please fill out form');
      this.requireFields = true;
    } else {
      this.requireFields = false;

      
      // Calling service to save a new product to product database
      this.productService.saveNewProduct(newProduct)
        .subscribe( response => {
          // console.log('Successfully saved new Product: ', response);
          this.saveSuccess = true;

          this.newProduct.name = "";
          this.newProduct.description = "";
          this.newProduct.price = "";
          this.newProduct.image_url = "";
          this.newProduct.quantity = "";

          alert(`SUCCESS: Saved new product.`);

          this.router.navigateByUrl('/product/edit'); 
      })
    }
    
  }

}
