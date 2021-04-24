import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {



  categories: Array<any>= new Array<any>()  ;
   
  constructor(private myservice : PostServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.myservice.getCategories().subscribe((data)=>{
      this.categories = data;
      console.log("category is : " +  this.categories);
    });

  }

}
