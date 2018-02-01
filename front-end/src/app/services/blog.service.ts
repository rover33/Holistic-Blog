import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class BlogService {

  baseUrl = 'http://localhost:3000';

  getAllBlogs() {
    console.log('hit getallblog function');
		return this.http.get(`${this.baseUrl}/blogs`);
	}


  constructor( private http: Http ) { }

}
