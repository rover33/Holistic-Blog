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
    private productsService : ProductService
  ) { }

  ngOnInit() {

    this.productsService.getAllProducts()
      .subscribe (response => {
        console.log(response);
        console.log("retrieved all products")
        this.allProducts = response.json();

      })

  }

}
