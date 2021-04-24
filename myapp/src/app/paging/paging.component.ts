import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit {
  newP : number=1;
  @Input() page:number=0;
  @Output() newPage = new EventEmitter();
  
  getNewPageLeft(){
    if(this.page>1){
      this.newPage.emit(this.page-1);
      this.newP=this.page-1;
    }
   }

   getNewPageRight(){
    this.newPage.emit(this.page+1);
    this.newP=this.page+1;
   }
 


  constructor() { }

  ngOnInit(): void {
 
  }

}
