import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ComposeComponent } from './compose/compose.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginTemplateComponent } from './login-template/login-template.component';

@NgModule({
  declarations: [
    AppComponent,
    ComposeComponent,
    HomeComponent,
    LoginComponent,
    LoginTemplateComponent,
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
