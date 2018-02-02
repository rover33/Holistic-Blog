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
        this.blogService.getSingleBlog(params.get('id'))
          .subscribe(response => {
            console.log(response.json());
            this.singleBlog = response.json();
          })
      });
  }

  backClicked() {
    this._location.back();
  }

}
