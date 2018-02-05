
import { ProductService } from './../services/product.service';
import { BlogService } from './../services/blog.service';
import { Component, OnInit } from '@angular/core';
import { QueryValueType } from '@angular/compiler/src/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  threeBlogs = [];
  threeProducts = [];


  constructor(
    private blogService : BlogService,
    private productService : ProductService
  ) { }

  ngOnInit() {
    console.log('initiliazing blog/products ...');
    this.blogService.getAllBlogs()
      .subscribe( response => {
        // console.log(response);
        console.log("Successfully retreived BLOGS : ", response.json());

        let blogs = response.json().splice(0, 3);
        for(let i = 0; i < blogs.length; i++){
          // console.log(blogs[i].blogBody);
          blogs[i].blogBody = blogs[i].blogBody.slice(0,20).concat('...');
        }
        this.threeBlogs = blogs;
      });

      this.productService.getAllProducts()
      .subscribe( response => {
        console.log(response);
        // console.log("Successfully retreived BLOGS : ", response.json());
        this.threeProducts = response.json().splice(0, 3);
      })
  }


  // getOneBlog(blogId){
  //   console.log(blogId);
  //   this.blogService.getSingleBlog(blogId)
  //     .subscribe( response => {
  //       console.log(response);
        
  //     })
  // }


  // This function will check availability of the Product before adding to the cart
  addToCart(productID, i, productName){

    let qty = Number((<HTMLInputElement>document.getElementById(`card-${i}`)).value);
    
    // console.log(`You are trying to buy ${qty} items`)
    // console.log('product ID: ', productID);

    if(!qty){
      qty = 1;
    }

    let newCartItem = {,
      'productName' : productName,
      'productID': productID,
      'quantity': qty  
    }

    

    let currentItems = JSON.parse(localStorage.getItem('shoppingCart'));

    console.log(currentItems);

    if(currentItems == null){
      currentItems = [];
    } 

    currentItems.push(newCartItem);

    localStorage.setItem('shoppingCart', JSON.stringify(currentItems));


    // this.productService.addToCart(productID, qty)
    //   .subscribe( response => {
    //     localStorage.setItem('productID', productID);
    //     localStorage.setItem('quantity', qty);
    //     console.log('Successfully added to cart');
    //   })
  }


}
