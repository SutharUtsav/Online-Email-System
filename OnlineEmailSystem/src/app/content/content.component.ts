import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { Location } from '@angular/common'
import { MailServiceService } from '../main/mail-service.service';
import { Mail } from '../main/mails/mails.entity';
// import { Mail } from '../main/mails/mails.entity';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  public id : number = 1;
  public person:Mail = new Mail();
  constructor(private location :Location,private ar:ActivatedRoute,private mail:MailServiceService) {
   }

  ngOnInit(): void {   
    this.id = Number(this.ar.snapshot.paramMap.get("id"));

    this.person  = this.mail.getmail(this.id) 
  }
  
  public back(){
    this.location.back();
  }

}
