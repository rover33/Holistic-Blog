import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.scss']
})
export class ProductPreviewComponent implements OnInit {

  productsArray = [
    {
      title: "PROD ONE",
      body: "This is the first PRODUCTS!",
      author: "MILAD"
    },
    {
      title: "PROD TWO",
      body: "This is the second PRODUCTS!",
      author: "REMY"
    },
    {
      title: "PROD THREE",
      body: "This is the threeeee PRODUCTS!",
      author: "STEVANO"
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
