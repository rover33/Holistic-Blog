import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-preview',
  templateUrl: './blog-preview.component.html',
  styleUrls: ['./blog-preview.component.scss']
})
export class BlogPreviewComponent implements OnInit {

  blogsArray = [
    {
      title: "Blog ONE",
      body: "This is the first blog!",
      author: "Patrycja"
    },
    {
      title: "Blog TWO",
      body: "This is the second blog!",
      author: "Patricia"
    },
    {
      title: "Blog THREE",
      body: "This is the threeeee blog!",
      author: "Patricia"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
