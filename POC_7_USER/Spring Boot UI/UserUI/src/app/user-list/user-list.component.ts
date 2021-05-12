import { Component, OnInit } from '@angular/core';
import {User} from '../user'
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import { AuthenticationService } from '../login/auth.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService,private route:Router,public authService:AuthenticationService) { }
  users : User[]
  id:string;
  login:boolean;
  loginMessage="You Need To Login First, To Display User List";
  ngOnInit(): void {
   this.getUsers();
   if(this.authService.isUserLoggedIn()){
     this.login=false;
   }
   else{
     this.login=true;
   }
  }
private getUsers(){
  this.userService.getUserList().subscribe(data =>{
    this.users=data;
  });
}
update(id:number){
this.route.navigate(['/update-user',id]);
}
delete(id:number){
  this.userService.deleteUser(id).subscribe(data =>{
    console.log(data);
    this.getUsers();
  },
  error => console.log(error)
  );
 
}
}
