
import { ProductService } from './../services/product.service';
import { BlogService } from './../services/blog.service';
import { Component, OnInit } from '@angular/core';

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
        // console.log(response);
        // console.log("Successfully retreived BLOGS : ", response.json());
        this.threeProducts = response.json().splice(0, 3);
      })
  }


  getOneBlog(blogId){
    console.log(blogId);
    this.blogService.getSingleBlog(blogId)
      .subscribe( response => {
        console.log(response);
        
      })
  }
}
