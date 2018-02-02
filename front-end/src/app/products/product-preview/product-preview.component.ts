import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service'

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.scss']
})
export class ProductPreviewComponent implements OnInit {

  allProducts = []

  // productsArray = [
  //   {
  //     title: "blahh",
  //     body: "This is the first PRODUCTS!",
  //     author: "MILAD",
  //     image: "https://d3r2zleywq7959.cloudfront.net/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/6/0/604926_xlarge.jpg"
  //   },
  //   {
  //     title: "PROD TWO",
  //     body: "This is the second PRODUCTS!",
  //     author: "REMY",
  //     image: "http://media1.s-nbcnews.com/j/MSNBC/Components/Photo/_new/110406-viagra-5p.grid-6x2.jpg"
  //   },
  //   {
  //     title: "PROD THREE",
  //     body: "This is the threeeee PRODUCTS!",
  //     author: "STEVANO",
  //     image: "http://cdn.shopify.com/s/files/1/1525/0640/products/1500_grande.png?v=1507046871"
  //   }
  // ];


  constructor(
    private productsService : ProductService
  ) { }

  ngOnInit() {
    
    this.productsService.getAllProducts()
      .subscribe ( response => {
        console.log(response);
        console.log("Successfully retrived Products: ", response.json());
        this.allProducts = response.json();
      })

  }

}
