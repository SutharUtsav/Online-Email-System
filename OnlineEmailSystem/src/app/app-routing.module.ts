import { LoginTemplateComponent } from './login-template/login-template.component';
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { HeadComponent } from './head/head.component';
import { InboxComponent } from './main/inbox/inbox.component';
import { SentComponent } from './main/sent/sent.component';
import { DraftComponent } from './main/draft/draft.component';
import { ContentComponent } from './content/content.component';
import { ComposeComponent } from './compose/compose.component';
import { LoginComponent } from './login/login.component';

const routes:Routes=[

  {
    path:'register',
    component:LoginComponent,
  },
  {
    path:'main/inbox',
    component:InboxComponent,
  },
  {
    path:'head',
    component:HeadComponent
  },{
    path:'main/inbox',
    component:InboxComponent
  },{
    path:'main/sent',
    component:SentComponent
  },{
    path:'main/draft',
    component:DraftComponent
  },
  {
    path:'main/page_content/:id',
    component:ContentComponent
  },{
    path:'main/compose',
    component:ComposeComponent
  },{
    path:'',
    component: LoginTemplateComponent,
    pathMatch:'full'
  },
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
