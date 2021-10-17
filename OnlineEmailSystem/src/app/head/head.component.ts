import { SearchDataService } from './../search-data.service';
import { Component, OnInit,ElementRef } from '@angular/core';
import { data } from 'jquery';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  public checkbox:boolean=false;
  public mySelectedTag:any;
  public selectedIndex:Number=1;
  public searchdata='';
  public searchService: SearchDataService;
  public navbar_clicked:boolean = false;
  navbar_toggle(){
    this.navbar_clicked=!this.navbar_clicked;
  }
  constructor(private el:ElementRef,private SearchDataService:SearchDataService) {
    this.searchService = this.SearchDataService;
  }

  ngOnInit(): void {
    this.mySelectedTag = this.el.nativeElement.querySelector("button.selected");
    this.searchService.setsearchedData(this.searchdata);
  }

  public onSelect(id:Number){
    this.selectedIndex=id;
    if(this.mySelectedTag.classList.contains("selected"))
    {
      this.mySelectedTag.classList.remove("selected");
    }
  }

  updatesearchText(search:string){
    this.searchService.setsearchedData(search);
  }

}
