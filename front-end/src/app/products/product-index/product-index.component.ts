import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service'

@Component({
  selector: 'app-product-index',
  templateUrl: './product-index.component.html',
  styleUrls: ['./product-index.component.scss']
})
export class ProductIndexComponent implements OnInit {

  constructor(
    private productsService : ProductService
  ) { }

  ngOnInit() {}

}
