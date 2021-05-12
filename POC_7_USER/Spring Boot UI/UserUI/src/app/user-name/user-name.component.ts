import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';
import {ActivatedRoute,Router} from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
import { AuthenticationService } from '../login/auth.service';
@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.css']
})
export class UserNameComponent implements OnInit {
  name:string;
  message:string;
  b:boolean=true;
  a:boolean =false;
  d:boolean=false;
  loginMessage:string;
  constructor(private userService:UserService,private route:ActivatedRoute,private router:Router,public autService:AuthenticationService) { 
    this.name=this.route.snapshot.paramMap.get("name");
  }
  users : User[]
  subuser:User[]
  ngOnInit(): void {
    this.getUserByName();
    
  }
getUserByName()
{
  this.userService.getUserList().subscribe(data=>{
    this.users=data.filter(user=>{
     return user.userFname.toLowerCase().match(this.name.toLowerCase());
    });
    console.log(this.users);
   if(this.users.length!=0 && this.autService.isUserLoggedIn()){
     this.b=false;
     this.message="Number of Users Found with Name: "+this.name+" is "+this.users.length;
   }
   if(this.users.length==0 && this.autService.isUserLoggedIn()){
     this.a=true;
     this.message="No User with Name: "+this.name+" was Found!!";
   }
  },
  (error)=>{
    if(this.name!=null && !this.autService.isUserLoggedIn()){
      this.d=true;
      this.loginMessage="You Need to Login First to Perform Get By Name";
    }
    if(this.name==null && !this.autService.isUserLoggedIn()){
      this.d=true;
      this.loginMessage="You Need to Login First to Perform Get By Name";
    }
  }
);
}
getValue(n:string){
  this.router.navigate(['/user-name',n]);
}
}
