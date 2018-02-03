import { BlogService } from './../../services/blog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-all',
  templateUrl: './blog-all.component.html',
  styleUrls: ['./blog-all.component.scss']
})
export class BlogAllComponent implements OnInit {

  allBlogs = []

  constructor(
    private blogService: BlogService
  ) { }

  ngOnInit() {
    console.log('initiliazing blog component...');
    this.blogService.getAllBlogs()
      .subscribe( response => {
        // console.log(response);
        console.log("Successfully retreived BLOGS : ", response.json());
        let blogs = response.json();
        for(let i = 0; i < blogs.length; i++){
          // console.log(blogs[i].blogBody);
          blogs[i].blogBody = blogs[i].blogBody.slice(0,20).concat('...');
        }
        this.allBlogs = blogs;

        console.log('ALL BLOGS:::', this.allBlogs);
      })
  }

}
