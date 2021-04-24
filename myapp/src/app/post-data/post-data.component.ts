import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from '../BlogPost';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css']
})
export class PostDataComponent implements OnInit {


 post: BlogPost = new BlogPost(); 
  querySub : any;
  



  constructor(private myservice : PostServiceService, private route: ActivatedRoute) { }

  ngOnDestroy(){

    if(this.querySub) this.querySub.unsubscribe();
  }


  ngOnInit(): void {
     this.route.params.subscribe(params =>{
      //TODO: Get post by Id params['id'] and store the result in this.post
      this.myservice.getPostbyId(params['id']).subscribe((data)=>{
        if( data != null&& typeof(data)!=undefined){
          this.post=data;
        }
      });
     })
     
  }

}
