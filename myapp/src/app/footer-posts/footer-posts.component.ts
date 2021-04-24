import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from '../BlogPost';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-footer-posts',
  templateUrl: './footer-posts.component.html',
  styleUrls: ['./footer-posts.component.css']
})
export class FooterPostsComponent implements OnInit {



   //lastpost: BlogPost = new BlogPost(); 
   posts: Array<BlogPost> = new Array<BlogPost>();
 
  constructor(private myservice : PostServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.myservice.getPosts(1 , "null" , "null").subscribe((data)=>{
      if( data.length >0){
        this.posts=data.slice(0,3);
      }
    });

  }

}
