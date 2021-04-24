import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable  } from 'rxjs';
//import blogData from '../blogData.json';
import { BlogPost } from '../BlogPost';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogPosts: Array<BlogPost> = new Array<BlogPost>();
  page : number= 1;
  tag : string= "";
  category : string= "";
  querySub : any;


  

  constructor(private myservice : PostServiceService, private route: ActivatedRoute) { }

  getPage(num:number) {
    this.myservice.getPosts(num , this.tag , this.category).subscribe((data)=>{
      if( data.length >0){
        this.page = num;
        this.blogPosts=data;
      }
    });
    
  }

  ngOnDestroy() {

    if(this.querySub) this.querySub.unsubscribe();
  }

  ngOnInit(): void {
    this.querySub = this.route.queryParams.subscribe(params => {
      if(params['tag']){
      this.tag = params['tag'];
      this.category = "";
      }else{
      this.tag = "";
      }
      if(params['category']){
      this.category = params['category'];
      this.tag = "";
      }else{
      this.category = "";
      }
      this.getPage(+params['page'] || 1);
     });
    console.log(this.blogPosts);
  }

}
