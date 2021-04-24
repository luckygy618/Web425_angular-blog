import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  tags: Array<string> = new Array<string>();
   
  constructor(private myservice : PostServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.myservice.getTags().subscribe((data)=>{
      this.tags = data;
    });

  }

}
