import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-index',
  templateUrl: './blog-index.component.html',
  styleUrls: ['./blog-index.component.scss']
})
export class BlogIndexComponent implements OnInit {

  singleBlog = []

  constructor(
    private blogService : BlogService,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe( params => {
        this.blogService.getSingleBlog(params.get('id'))
          .subscribe(response => {
            console.log('yo');
            console.log(response);
          })
      });
  }

}
