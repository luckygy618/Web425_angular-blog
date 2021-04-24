import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from "../BlogPost";
import { PostServiceService } from '../post-service.service';
@Component({
  selector: 'app-last-post',
  templateUrl: './last-post.component.html',
  styleUrls: ['./last-post.component.css']
})
export class LastPostComponent implements OnInit {


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
