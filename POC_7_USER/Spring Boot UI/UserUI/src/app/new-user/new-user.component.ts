import { Component, OnInit } from '@angular/core';
import { User} from '../user';
import { UserService } from '../user.service';
import {Router} from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
import { AuthenticationService } from '../login/auth.service';
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  user: User = new User();
  constructor(private userService:UserService,private router:Router,public authService:AuthenticationService) { }
  usernull:boolean;
  lnamenull:boolean;
  contnull:boolean;
  userMessage="User First Name Field Cannot be Empty";
  lnameMessage="User Last Name Field Cannot be Empty";
  loginMessage="You Need to Login First for Adding a New User";
  conMessage="Contact Number Field Cannot be Empty";
  consize:boolean;
  csm="Contact Number Should be of Length 10";
  emnull:boolean;
  co:boolean;
  com="Contact Number Should Only Contain Digits and Should be of Length 10";
  emMessage="Email Field Cannot be Empty";
  emvm="Email Should Contain Atleast One @ and .";
  emv:boolean;
  c1:number;
  c2:number;
  h:boolean;
  dep:boolean;
  login:boolean;
  depm="Department Field Cannot be Empty";
  dv:boolean;
  dvm="Department Name Should Only Contain Characters , Not Digits";
  d:number;
  pin:boolean;
  pinm="Pin Code Field Cannot be Empty";
  pvm="Pin Code Should Only Contain Digits , Not Characters with Length 6";
  pv:boolean;
  p:number;
  city:boolean;
  citym="City Name Cannot be Empty";
  cv:boolean;
  cvm="City Name Should Only Contain Characters , No Digits";
  c:number;
  conm="Country Name Cannot be Empty";
  con:boolean;
  cov:boolean;
  covm="Country Name Should Only Contain Characters , No Digits"
  cs:number;
  loginSucess:boolean;
  ngOnInit(): void {
  }
  saveUser(){
    this.userService.createUser(this.user).subscribe(data =>{
      console.log(data);
      this.getAllUser();
    },
    error =>
      console.log(error)
      );
  }
  fname(){
    this.usernull=false;
    if(this.user.userFname.length==0){
      this.usernull=true;
    }
  }
  lname(){
    this.lnamenull=false;
    if(this.user.userLname.length==0){
      this.lnamenull=true;
    }
  }
  cony(){
  this.con=false;
  if(this.user.userCountry.length==0){
    this.con=true;
    this.cov=false;
  }
  else{
    this.cs=0;
    for(let i=0;i<this.user.userCountry.length;i++){
      if(this.user.userCountry.charAt(i)>='0' && this.user.userCountry.charAt(i)<='9'){
        this.cs++;
      }
    }
    if(this.cs!=0){
      this.cov=true;
    }
    else{
      this.cov=false;
    }
  }
  }
  ci(){
    this.city=false;
    if(this.user.userCity.length==0){
      this.city=true;
      this.cv=false;
    }
    else{
      this.c=0;
      for(let i=0;i<this.user.userCity.length;i++){
        if(this.user.userCity>='0' && this.user.userCity<='9'){
          this.c++;
        }
      }
      if(this.c!=0){
        this.cv=true;
      }
      else{
        this.cv=false;
      }
    }
  }
  pi(){
    this.pin=false;
    if(this.user.userPinCode.length==0){
      this.pin=true;
      this.pv=false;
    }
    if(this.user.userPinCode.length==6){
      this.pv=false;
      this.pin=false;
    }
    if(this.user.userPinCode.length>=1 && this.user.userPinCode.length!=6){
      this.p=0;
      for(let i=0;i<this.user.userPinCode.length;i++){
        if(this.user.userPinCode.charAt(i)>='a' && this.user.userPinCode.charAt(i)<='z' || this.user.userPinCode.charAt(i)>='A' && this.user.userPinCode.charAt(i)<='Z'){
           this.p++;
        }
      }
      if(this.p==0 && this.user.userPinCode.length==6){
        this.pv=false;
      }
      if(this.user.userPinCode.length>=1 && this.user.userPinCode.length<=5){
        this.pv=true;
      }
      if(this.p!=0){
        this.pv=true;
      }
    }
  }
  cont(){
    this.contnull=false;
    if(this.user.userContact.length==10){
      this.consize=false;
      this.co=false;
    }
    if(this.user.userContact.length==0){
      this.consize=false;
      this.contnull=true;
      this.co=false;
    }
    if(this.user.userContact.length>=1 && this.user.userContact.length!=10){
        for(let i=0;i<this.user.userContact.length;i++){
          
          if(this.user.userContact.charAt(i)>='a' && this.user.userContact.charAt(i)<='z' || this.user.userContact.charAt(i)>='A' && this.user.userContact.charAt(i)<='Z'){
            this.h=false;
            break;
          }
          else{
            this.h=true;
          }
        }
        console.log(this.h);
        if(this.h==false)
        {
          this.consize=false;
          this.co=true;
        }
        else{
          this.consize=true;
          this.co=false;
        }
    }

  }
  eml(){
    this.emnull=false;
    if(this.user.userEmail.length==0){
      this.emnull=true;
      this.emv=false;
    }
    else{
      this.c1=0;
      this.c2=0;
      for(let i=0;i<this.user.userEmail.length;i++){
        if(this.user.userEmail.charAt(i)=='@'){
          this.c1++;
        }
        if(this.user.userEmail.charAt(i)=='.'){
          this.c2++;
        }
      }
      if(this.c1==0 && this.c2==0){
        this.emnull=false;
        this.emv=true;
      }
      if(this.c1!=0 && this.c2!=0){
        this.emv=false;
        this.emnull=false;
      }
  }
}
dept(){
  this.dep=false;
  if(this.user.userDepartment.length==0){
    this.dep=true;
    this.dv=false;
  }
  else{
    this.d=0;
    this.dep=false;
    for(let i=0;i<this.user.userDepartment.length;i++){
      if(this.user.userDepartment.charAt(i)>='0' && this.user.userDepartment.charAt(i)<='9'){
         this.d++;
      }
    }
    if(this.d==0){
      this.dv=false;
    }
    else{
      this.dv=true;
    }
  }
}
  getAllUser(){
    this.router.navigate(['/users']);
  }
  onSubmit(){
    this.login=this.authService.isUserLoggedIn();
    if(this.login==false){
      this.loginSucess=true;
    }
    if(this.login==true){
      this.loginSucess=false;
    }
    if(this.user.userFname==null && this.user.userLname!=null){
         this.usernull=true;
         this.lnamenull=false;
    }
    if(this.user.userFname!=null && this.user.userLname==null && this.user.userContact!=null && this.user.userEmail!=null && this.user.userDepartment!=null && this.user.userPinCode!=null && this.user.userCity!=null) {
      this.usernull=false;
      this.lnamenull=true;
      this.emnull=false;
      this.dep=false;
      this.pin=false;
      this.contnull=false;
      this.pin=false;
      this.city=false;
      this.con=false;
    }
    if(this.user.userFname!=null && this.user.userLname!=null && this.user.userContact==null && this.user.userEmail!=null  && this.user.userDepartment!=null && this.user.userPinCode!=null && this.user.userCity!=null && this.user.userCountry!=null){
      this.contnull=true;
      this.usernull=false;
      this.lnamenull=false;
      this.emnull=false;
      this.dep=false;
      this.pin=false;
      this.pin=false;
      this.city=false;
      this.con=false;
    }
    if(this.user.userFname!=null && this.user.userLname!=null && this.user.userContact!=null && this.user.userEmail==null && this.user.userDepartment!=null && this.user.userPinCode!=null && this.user.userCity!=null && this.user.userCountry!=null){
      this.contnull=false;
      this.usernull=false;
      this.lnamenull=false;
      this.emnull=true;
      this.dep=false;
      this.pin=false;
      this.city=false;
      this.con=false;
    }
    if(this.user.userFname!=null && this.user.userLname!=null && this.user.userContact!=null && this.user.userEmail!=null && this.user.userDepartment==null && this.user.userPinCode!=null && this.user.userCity!=null && this.user.userCountry!=null) {
      this.contnull=false;
      this.usernull=false;
      this.lnamenull=false;
      this.emnull=false;
      this.dep=true;
      this.pin=false;
      this.city=false;
      this.con=false;
    }
    if(this.user.userFname!=null && this.user.userLname!=null && this.user.userContact!=null && this.user.userEmail!=null && this.user.userDepartment!=null && this.user.userPinCode==null && this.user.userCity!=null && this.user.userCountry!=null){
      this.contnull=false;
      this.usernull=false;
      this.lnamenull=false;
      this.emnull=false;
      this.dep=false;
      this.pin=true;
      this.city=false;
      this.con=false;
    }
    if(this.user.userFname!=null && this.user.userLname!=null && this.user.userContact!=null && this.user.userEmail!=null && this.user.userDepartment!=null && this.user.userPinCode!=null && this.user.userCity==null && this.user.userCountry!=null){
      this.contnull=false;
      this.usernull=false;
      this.lnamenull=false;
      this.emnull=false;
      this.dep=false;
      this.pin=false;
      this.city=true;
      this.con=false;
    }
 if(this.user.userFname==null && this.user.userLname==null && this.user.userContact==null && this.user.userEmail==null && this.user.userDepartment==null  && this.user.userPinCode==null && this.user.userCity==null && this.user.userCountry==null){
  this.usernull=true;
  this.lnamenull=true;
  this.contnull=true;
  this.emnull=true;
  this.dep=true;
  this.pin=true;
  this.city=true;
  this.con=true;
}
    else{
    this.saveUser();
    this.usernull=false;
    }
  }
}
