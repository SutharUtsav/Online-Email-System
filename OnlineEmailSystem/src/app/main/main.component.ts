import { Component, OnInit,ElementRef } from '@angular/core';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
 
  constructor() {
   }

  ngOnInit(): void {
    // this.mySelectedTag = this.el.nativeElement.querySelector("div.selected");
  }
  // public checkbox:boolean=false;
  // public mySelectedTag:any; 
  // public selectedIndex:Number=1;
  // public onSelect(id:Number){
  //   this.selectedIndex=id;
  //   if(this.mySelectedTag.classList.contains("selected"))
  //   {
  //     this.mySelectedTag.classList.remove("selected");
  //   }
    
  // } 
 
   
}
