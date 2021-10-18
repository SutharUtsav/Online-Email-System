import { HeadComponent } from './../../head/head.component';
import { Component, OnInit,ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { MailServiceService } from '../mail-service.service';
import { Mail } from '../mails/mails.entity';
import { SearchDataService } from '../../search-data.service';
@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['../main.component.css']
})
export class DraftComponent implements OnInit {
  public mail_list:Mail[]=[];
  public searchTerm:string = '';
  public searchService:SearchDataService;
  constructor(private mail:MailServiceService,private router:Router,private SearchDataService:SearchDataService,private el:ElementRef) {
    this.searchService = this.SearchDataService;
  }

  ngOnInit(): void {

      this.mail_list = this.mail.getMails();
      this.SearchDataService.share.subscribe( (x: string) => this.searchTerm = x);

  }
  navigate(id:Number){
    this.router.navigate(['/main/compose']);
  }

}