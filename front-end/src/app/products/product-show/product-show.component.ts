import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.scss']
})
export class ProductShowComponent implements OnInit {

  oneProduct;

  constructor(
    private productsService : ProductService,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.forEach( param => {
      this.productsService.getOneProduct(param.id)
      .subscribe(response => {
        console.log(response.json());
        this.oneProduct = response.json();
      })

    }
  }

}
