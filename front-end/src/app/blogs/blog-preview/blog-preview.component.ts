import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-preview',
  templateUrl: './blog-preview.component.html',
  styleUrls: ['./blog-preview.component.scss']
})
export class BlogPreviewComponent implements OnInit {

  allBlogs = [];

  // blogsArray = [
  //   {
  //     blogTitle: "Vitamine C is for COOL KIDS",
  //     blogBody: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque maxime molestiae sit facilis ab perspiciatis omnis, deserunt fugit debitis ratione, officiis quisquam. Debitis, commodi. Architecto distinctio possimus in maiores velit?" ,
  //     author: "MILAD",
  //     image: "https://d3r2zleywq7959.cloudfront.net/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/6/0/604926_xlarge.jpg"
  //   },
  //   {
  //     blogTitle: "HOLY SHIT THIS SHIT IS THE SHIT!",
  //     blogBody: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque maxime molestiae sit facilis ab perspiciatis omnis, deserunt fugit debitis ratione, officiis quisquam. Debitis, commodi. Architecto distinctio possimus in maiores velit?" ,
  //     author: "JIN",
  //     image: "http://media1.s-nbcnews.com/j/MSNBC/Components/Photo/_new/110406-viagra-5p.grid-6x2.jpg"
  //   },
  //   {
  //     blogTitle: "YA BOI!!!!!",
  //     blogBody: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque maxime molestiae sit facilis ab perspiciatis omnis, deserunt fugit debitis ratione, officiis quisquam. Debitis, commodi. Architecto distinctio possimus in maiores velit?" ,
  //     author: "STEVANO",
  //     image: "http://cdn.shopify.com/s/files/1/1525/0640/products/1500_grande.png?v=1507046871"
  //   }
  // ];

  constructor(
    private blogsService : BlogService
  ) { }

  ngOnInit() {
    console.log('initiliazing blog component...');
    this.blogsService.getAllBlogs()
      .subscribe( response => {
        // console.log(response);
        // console.log("Successfully retreived BLOGS : ", response.json());
        this.allBlogs = response.json();
      })
  }

  // Get More info on single blog
  getOneBlog(blogId){
    console.log('Getting ONE Blog. Blog Id: ', blogId);

    
  }

}
