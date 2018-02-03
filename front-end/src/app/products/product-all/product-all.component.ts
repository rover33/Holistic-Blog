import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service'

@Component({
  selector: 'app-product-all',
  templateUrl: './product-all.component.html',
  styleUrls: ['./product-all.component.scss']
})
export class ProductAllComponent implements OnInit {

  allProducts = []

  constructor(
    private productService : ProductService
  ) { }

  ngOnInit() {

    this.productService.getAllProducts()
      .subscribe (response => {
        console.log(response);
        console.log("retrieved all products")
          this.allProducts = response.json();

      })

  }

}
