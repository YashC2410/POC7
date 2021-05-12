import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import { from } from 'rxjs';
import { UserService } from '../user.service';
import {User} from '../user';
import { AuthenticationService } from '../login/auth.service';
@Component({
  selector: 'app-pin-code',
  templateUrl: './pin-code.component.html',
  styleUrls: ['./pin-code.component.css']
})
export class PinCodeComponent implements OnInit {
  pincode:string;
  users:User[];
  b:boolean=true;
  a:boolean=false;
  n:number;
  loginMessage:string;
  message:string;
  d:boolean;
  constructor(private userService:UserService,private router:Router,private route:ActivatedRoute,public authService:AuthenticationService) {
    this.pincode=this.route.snapshot.paramMap.get("pin");
   }
   
  ngOnInit(): void {
    this.getUserByPinCode();
  }
  getValue(n:string){
    this.router.navigate(['/pin-code',n]);
  }
getUserByPinCode(){
  this.userService.getUserByPinCode(this.pincode).subscribe(data=>{
     this.users=data;
     if(this.users.length!=0 && this.authService.isUserLoggedIn()){
      this.b=false;
      this.message="Number of Users Found with Pin-Code: "+this.pincode+" is "+this.users.length;
    }
    if(this.users.length==0 && this.authService.isUserLoggedIn()){
      this.a=true;
      this.message="No User with Pin-Code: "+this.pincode+" was Found!!";
    }
  },
  (error)=>{
    if(this.pincode!=null && !this.authService.isUserLoggedIn()){
      this.d=true;
      this.loginMessage="You Need to Login First to Perform Get By Pin-Code";
    }
    if(this.pincode==null && !this.authService.isUserLoggedIn()){
      this.d=true;
      this.loginMessage="You Need to Login First to Perform Get By Pin-Code";
    }
  }
  );
}
}
