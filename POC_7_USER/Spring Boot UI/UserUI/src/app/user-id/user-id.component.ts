import { HttpErrorResponse } from '@angular/common/http';
import { ThisReceiver, ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { AuthenticationService } from '../login/auth.service';
import {User} from '../user'
import { UserService } from '../user.service';
@Component({
  selector: 'app-user-id',
  templateUrl: './user-id.component.html',
  styleUrls: ['./user-id.component.css']
})
export class UserIdComponent implements OnInit {
  id:any=0;
  n:number;
  c:number;
  b:boolean=true;
  a:boolean=false;
  d:boolean;
  n1:number=-1;
  n2:number=1;
  loginMessage:string;
  message:string;
  constructor(private userService:UserService,private route:ActivatedRoute,private router:Router,public authService:AuthenticationService) {
    this.id=route.snapshot.paramMap.get("id");
    console.log(this.id);
  }
   users: User=new User();
  ngOnInit(): void {
    this.getUserById();
    this.n=this.id;
  }
  getValue(n:number){
    this.router.navigate(['/user-id',n]);
  }
 getUserById(){
   this.userService.getUserById(this.id).subscribe(data=>{
     this.users=data;
     this.b=false;
     this.message="User "+this.users.userFname+" found with ID: "+this.id;
    },
   (error)=>{
     if(this.id==null && this.authService.isUserLoggedIn()){
       this.a=false;
     }
     if(this.id==null && !this.authService.isUserLoggedIn())
     {
         this.d=true;
         this.loginMessage="You Need to Login First to Perform Get User By ID";
     }
     if(this.id!=null && !this.authService.isUserLoggedIn()){
         this.d=true;
         this.loginMessage="You Need to Login First to Perform Get User By ID";
     }
     if(this.id!=null && this.authService.isUserLoggedIn()){
       this.a=true;
       this.message="No User with ID: "+this.id+" was Found!!";
     }
   }
);
}
}
