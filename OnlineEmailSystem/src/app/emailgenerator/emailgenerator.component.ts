import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_Service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-emailgenerator',
  templateUrl: './emailgenerator.component.html',
  styleUrls: ['../login/login.component.css']
})
export class EmailgeneratorComponent implements OnInit {

  public email:string="";
  constructor(private auth:AuthService,private router: Router) { }
  ngOnInit(): void {

  }

  emailValidate(){
    console.log(this.email)
    this.auth.emailValidate(this.email).subscribe(data=>
      {
        if(data.success){
          localStorage.setItem("token",data.token)
          this.router.navigate(['main/inbox'])
          this.auth.setLoggedIn(true)
        }
        else{
          window.alert(data.message)
        }
      }

    )
  }


}
