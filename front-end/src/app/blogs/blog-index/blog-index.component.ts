import { BlogService } from '../../services/blog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-index',
  templateUrl: './blog-index.component.html',
  styleUrls: ['./blog-index.component.scss']
})
export class BlogIndexComponent implements OnInit {

  constructor(
    private blogsService : BlogService
  ) { }

  ngOnInit() {
    
  }

}
