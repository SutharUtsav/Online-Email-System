import { Injectable } from '@angular/core';
import { Mail} from '../main/mails/mails.entity' 


@Injectable({
  providedIn: 'root'
})

export class MailServiceService {
  id:number=0;
  public Mail_list:Mail[]=[]; 
  constructor(){
    for(let i = 0;i<20;i++){
      this.id++;
      this.Mail_list.push({
        id:this.id,
        username:"hello i am",
        from:"yashshah@mail.com",
        sub : "Hello There",
        msg : `Successfull print message .. !!@ Hello, i just wanted to let you know that i'll be home at lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
        
        My Name Is Yash SHah`,
        time : "10 pm",
        read: true,
        type:"main"
      });
    }for(let i = 0;i<20;i++){
      this.id++;
      this.Mail_list.push({
        id:this.id,
        username:"yash",
        from:"shah@jshd",
        sub : "Hello There",
        msg : `Successfull print message .. !!@ Hello, i just wanted to let you know that i'll be home at lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
        
        My Name Is Yash SHah`,
        time : "10 pm",
        read: true,
        type:"main"
      });
    }
    for(let i = 0;i<10;i++){
      this.id++;
      this.Mail_list.push({
        id:this.id,
        username:"Sent",
        from:"yashshah@mail.com",
        sub : "Hello There ",
        msg :  `Successfull print message .. !!@ Hello, i just wanted to let you know that i'll be home at lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        time : "10 pm",
        read: true,
        type:"sent"
      });
    }for(let i = 0;i<10;i++){
      this.id++;
      this.Mail_list.push({
        id:this.id,
        username:"Draft",
        from:"yashshsh@mail.com",
        sub : "Hello There ",
        msg : `Successfull print message .. !!@ Hello, i just wanted to let you know that i'll be home at lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        time : "10 pm",
        read: true,
        type:"draft"
      });
    }
  }
  
  getmail(id_mail:number):Mail{
    var obj = this.Mail_list[id_mail-1];
    return obj;
    
    
  }
  setvalue(value:boolean){
    this.checkbox = value;
  }
  public checkbox:boolean=false;
  public getMails():Mail[]{
    return this.Mail_list;
  }
}

