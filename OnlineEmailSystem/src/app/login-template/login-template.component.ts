import { FormsModule, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from '../login/login.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-template',
  templateUrl: './login-template.component.html',
  styleUrls: ['../login/login.component.css']
})
export class LoginTemplateComponent implements OnInit {
  constructor(private router:Router) { }
  user = new User();
  ngOnInit(): void {
  }
  onSubmit(regForm : NgForm){
    this.router.navigate(['main/inbox']);
  }

}
