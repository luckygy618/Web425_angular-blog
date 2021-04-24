import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BlogPost } from './BlogPost';



@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  perPage: number = 6;
 
  constructor(private route: ActivatedRoute,private http: HttpClient ) { }


  getPosts(page: number , tag: string , category: string ): Observable<BlogPost[]>
  {
    let url = `https://cryptic-reaches-24213.herokuapp.com/api/posts?page=${page}&perPage=${this.perPage}`;
    if (tag != ""&&tag !="null"&&typeof (tag) != undefined){
      if(tag.substr(0, 1) == "#"){
        tag = tag.substr(1, tag.length)
      }
      url += "&tag=" + tag;
    }
    if (category != ""&&category !="null"&&typeof (category) != undefined){
      url += " &category=" + category;
    }
    console.log(url);
    return this.http.get<BlogPost[]>(url);
  }

  getPostbyId(id:string): Observable<BlogPost>
  {
    let url = `https://cryptic-reaches-24213.herokuapp.com/api/posts/${id}`;
    return this.http.get<BlogPost>(url);
  }

  getCategories(): Observable<any>
  {

  let url = "https://cryptic-reaches-24213.herokuapp.com/api/categories";
    return this.http.get(url);
  }

  getTags(): Observable<string[]>
  {
    let url = "https://cryptic-reaches-24213.herokuapp.com/api/tags";
    return this.http.get<string[]>(url);
  }




}


