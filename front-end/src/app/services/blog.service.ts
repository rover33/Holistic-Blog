import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class BlogService {

  baseUrl = 'http://localhost:3000';

  getAllBlogs() {
		return this.http.get(`${this.baseUrl}/`);
	}


  constructor( private http: Http ) { }

}
