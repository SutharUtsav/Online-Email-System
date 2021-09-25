import { Component, OnInit } from '@angular/core';
import { User } from '../login/login.component';

@Component({
  selector: 'app-login-template',
  templateUrl: './login-template.component.html',
  styleUrls: ['../login/login.component.css']
})
export class LoginTemplateComponent implements OnInit {
  constructor() { }
  user = new User();
  ngOnInit(): void {
  }

}
