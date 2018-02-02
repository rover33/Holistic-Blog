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
        this.allBlogs = response.json();
      })
  }

}
