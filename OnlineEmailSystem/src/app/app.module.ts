
import { SearchDataService } from './search-data.service';
import { InboxMailFilterPipe } from './main/inbox/inboxmail-filter.pipe';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { MainComponent } from './main/main.component';
import { HeadComponent } from './head/head.component';
import { ComposeComponent } from './compose/compose.component';
import { AppRoutingModule } from './app-routing.module';
import {InboxComponent } from './main/inbox/inbox.component';
import { SentComponent } from './main/sent/sent.component';
import { DraftComponent } from './main/draft/draft.component';
import { ContentComponent } from './content/content.component';

import { MailServiceService } from './main/mail-service.service';
import { DraftFilterPipe } from './main/draft/draft-filter.pipe';
import { SentFilterPipe } from './main/sent/sent-filter.pipe';
import { HighlightInboxPipe } from './main/inbox/highlight-inbox.pipe';
import { HighlightDraftPipe } from './main/draft/highlight-draft.pipe';
import { HighlightSentPipe } from './main/sent/highlight-sent.pipe';


import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginTemplateComponent } from './login-template/login-template.component';


@NgModule({
  declarations: [
    AppComponent,

    MainComponent,
    HeadComponent,
    InboxComponent,
    ContentComponent,
    SentComponent,
    DraftComponent,
    InboxMailFilterPipe,
    DraftFilterPipe,
    SentFilterPipe,
    HighlightInboxPipe,
    HighlightDraftPipe,
    HighlightSentPipe,
    ComposeComponent,
    HomeComponent,
    LoginComponent,
    LoginTemplateComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,

  ],
  providers: [SearchDataService],
  bootstrap: [AppComponent,MailServiceService],


})
export class AppModule { }
