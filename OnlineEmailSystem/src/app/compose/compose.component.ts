import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import * as $ from 'jquery';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {
  tog_fname: boolean = true;
  mini: boolean = true;

  constructor(private location :Location) { }

  selectfile(){
    const elem = document.getElementById("file-input");
    if(elem)
      elem.click();
  }
  minimize(){
    const elem = document.getElementById("message-input");
    const elem1 = document.getElementById("message-footer");
    const elem2 = document.getElementById("compose");
    if(elem&&elem1&&elem2){
      elem.style.display = "none";
      elem1.style.display = "none";
      elem2.className = "col-md-3 p-3";
      elem2.style.bottom="10px";
      elem2.style.position="fixed";
      var text1 = document.getElementById("text1");
      if(text1)
        text1.style.fontSize = "16px";
    }

    this.mini = true;
    this.tog_fname=true;
  }
  selectpic(){
    const elem = document.getElementById("pic-input");
    if(elem)
      elem.click();
  }
  closemail(){
    const elem = document.getElementById("compose");
    if(elem)
      elem.style.display = "none";
      this.location.back()

  }
  maxscreen(){
    const elem = document.getElementById("compose");
    const elem3 = document.getElementById("mail_text");
    if(elem&&elem3){
      elem.className = "col-md-12 p-3";
      elem3.style.height="300px";
    }
    this.tog_fname = !this.tog_fname;
    if(this.mini && elem){
      const elem2 = document.getElementById("message-input");
      const elem1 = document.getElementById("message-footer");
      var text1 = document.getElementById("text1");
      elem.style.bottom="0px";
      elem.style.position="sticky";
      if(text1)
        text1.style.fontSize = "25px";
      if(elem2&&elem1){
        elem2.style.display = "block";
        elem1.style.display = "block";
      }
      this.mini = false;
    }
  }
  minscreen(){
    const elem = document.getElementById("compose");
    const elem3 = document.getElementById("mail_text");
    if(elem&&elem3){
      elem.className = "col-md-4 p-3";
      elem3.style.height="156px"
      var text1 = document.getElementById("text1");
      if(text1)
        text1.style.fontSize = "18px";
    }
    this.tog_fname = !this.tog_fname;
  }


  ngOnInit(): void {

    $(document).ready(function() {
      $('#jBold').click(function() {
        document.execCommand('bold');
      });
      $('#jItalic').click(function() {
        document.execCommand('italic');
      });
      $('#junder').click(function() {
        document.execCommand('underline');
      });
    });
  }

}
