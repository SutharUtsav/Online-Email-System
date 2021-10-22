import { HeadComponent } from 'src/app/_Layout/head/head.component';
import { SearchDataService } from './../../search-data.service';
import { Component, OnInit,ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { MailServiceService } from '../mail-service.service';
import { Mail } from '../mails/mails.entity';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['../main.component.css']
})
export class InboxComponent implements OnInit {
  public checkbox:boolean=false;
  public mail_list:Mail[]=[];

  public searchTerm:string = '';
  public searchService:SearchDataService;
  public email:string=""; 
  constructor(private mail:MailServiceService,private router:Router,private SearchDataService:SearchDataService,private el:ElementRef,private user:UserService) {
    //this.searchTerm = this.SearchDataService.getsearchedData()
    //console.log(this.searchTerm);
    this.searchService = this.SearchDataService;
  }

  ngOnInit(): void {
      this.mail_list = this.mail.getMails();
      this.SearchDataService.share.subscribe( (x: string) => this.searchTerm = x);
      // console.log(this.searchTerm);
      // this.user.getData().subscribe(data=>{
      //   if(data.status){
      //     this.email=data.email
      //   }
      //   else{
      //     this.router.navigate(['logout'])
      //   }
        
      // })

  }

  navigate(id:Number){
    this.router.navigate(['/main/page_content',id]);
  }

  
}
