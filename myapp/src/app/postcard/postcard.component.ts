import { Component, OnInit,Input  } from '@angular/core';
import { BlogPost } from "../BlogPost";
@Component({
  selector: 'app-post-card',
  templateUrl: './postcard.component.html',
  styleUrls: ['./postcard.component.css']
})
export class PostcardComponent implements OnInit {


  @Input() post: BlogPost = new BlogPost(); 

 


  constructor() { }

  ngOnInit(): void {
 console.log(this.post);
  }

}
