import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

aim ="your perfect banking partner"
account="Enter acno here"

acno =""
pswd =""

  userdetails:any={

    1000 :{acno:1000, username:'Abhijith',password:1000, balance:50000},
    1001 :{acno:1001, username:'vismaya',password:1001, balance:50000},
    1002 :{acno:1002, username:'Harikrishnan',password:1002, balance:50000},
    1003 :{acno:1003, username:'sangeetha',password:1003, balance:50000}


  }

  constructor() { }

  ngOnInit(): void {
  }

  acnoChange(event:any){
    this.acno =(event.target.value);
    console.log(this.acno);
    
  }

  pswdChange(event:any){
    this.pswd=(event.target.value);
    console.log(this.pswd);
    
  }
 
  login(){
    // alert('Login clicked');

    var acno = this.acno;
    var pswd =this.pswd;
    var userdetails =this.userdetails;

    if(acno in userdetails){
      if(pswd == userdetails[acno]['password']){
        alert('Login Successfull')
      }
      else{
        alert('Password invalid')
      }
    }
    else{
      alert('User not found')
    }

  }
}

