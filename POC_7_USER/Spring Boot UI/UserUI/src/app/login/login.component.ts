import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { AuthenticationService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password : string;
  errorMessage = 'Username and Password , are Entered Incorrect!!!';
  userMessage='Username Not Entered , Please Try Again';
  passMessage="Password Not Entered , Please Try Again";
  welcome="Welcome to User Login"
  wel=true;
  user:User =new User();
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;
  usernull:boolean;
  passnull:boolean;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) {   }

  ngOnInit() {
    console.log(this.username);
    console.log(this.password);
  }
  en(){
    this.wel=false;
    this.passnull=false;
    this.invalidLogin=false;
  }
  en1(){
    this.wel=false;
    this.usernull=false;
    this.invalidLogin=false;
  }
  Login() {
    this.authenticationService.authenticationService(this.username, this.password).subscribe((result)=> {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.wel=false;
      this.user.userFunction(this.username);
      this.successMessage = 'Login Successful.';
      this.router.navigate(['/users']);
    }, () => {
      if(this.username==null && this.password!=null){
        this.invalidLogin=false;
        this.usernull=true;
        this.loginSuccess = false;
        this.passnull=false;
        this.wel=false;
      }
      if(this.username!=null && this.password==null){
        this.invalidLogin=false;
        this.usernull=false;
        this.loginSuccess = false;
        this.passnull=true;
        this.wel=false;
      }
      if(this.username==null && this.password==null){
        this.invalidLogin=true;
        this.usernull=false;
        this.loginSuccess = false;
        this.passnull=false;
        this.wel=false;
        this.errorMessage="Username and Password is Not Entered";
      }
      if(this.username!=null && this.password!=null){
        this.invalidLogin = true;
        this.loginSuccess = false;
        this.usernull=false;
        this.passnull=false;
        this.wel=false;
        this.errorMessage="Username and Password , are Entered Incorrect!!!";
      }
      else{
     // this.invalidLogin = true;
      this.loginSuccess = false;
      }
    });      
  }
}