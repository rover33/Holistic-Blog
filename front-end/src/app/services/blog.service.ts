import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { isDevMode } from '@angular/core'


@Injectable()
export class BlogService {

  baseUrl: string; 

  constructor(private http: Http) { 
  	if(isDevMode()) {
  		this.baseUrl = 'https://localhost:3000';
  	} else {
  		this.baseUrl = '';
  	}
  }

  getAllBlogs() {
    // console.log('hit getallblog function');
		return this.http.get(`${this.baseUrl}/api/blogs`);
	}

  getSingleBlog(blogId){
    return this.http.get(`${this.baseUrl}/api/blog/${blogId}`);
  }
  

}


