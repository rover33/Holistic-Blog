import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';


@Component({
  selector: 'app-blog-index',
  templateUrl: './blog-index.component.html',
  styleUrls: ['./blog-index.component.scss']
})
export class BlogIndexComponent implements OnInit {

  singleBlog = {}

  constructor(
    private blogService : BlogService,
    private route : ActivatedRoute,
    private _location : Location
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe( params => {
        // This function will retrieve a single blog using the blogService. 
        this.blogService.getSingleBlog(params.get('id'))
          .subscribe(response => {
            // console.log(response.json());
            this.singleBlog = response.json();
          })
      });
  }

  // This function allows the user to go back to the page they were previously on without refreshing the page
  backClicked() {
    this._location.back();
  }

}
