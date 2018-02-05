import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-index',
  templateUrl: './product-index.component.html',
  styleUrls: ['./product-index.component.scss']
})
export class ProductIndexComponent implements OnInit {

  product;

  constructor(
    private productsService : ProductService,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.forEach( param => {
      this.productsService.getOneProduct(param.id)
      .subscribe(response => {
        console.log(response.json());
          this.product = response.json();
      })

    })
  }
}