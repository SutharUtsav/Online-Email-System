import { Component ,OnInit} from '@angular/core';

import * as $ from 'jquery'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'OnlineEmailSystem';
  value:any = "Hello";
  public emplist:any = []
 
  ngOnInit(){
  }
  colors = ["red","blue","red","yellow","violet"]
  public onSave(event:any):void{
    if(event.keyCode == 13){
    this.title = "Enter Pressed";

    }

  }
}

