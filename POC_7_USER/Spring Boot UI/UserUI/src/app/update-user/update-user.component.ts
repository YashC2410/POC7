import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {ActivatedRoute, Router} from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  user : User =new User();
  id:number;
  constructor(private userService:UserService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.userService.getUserById(this.id).subscribe(data=>{
      this.user=data;
    },
    error => console.log(error)
    );
  }
  updateUser(){
    this.userService.updateUser(this.id,this.user).subscribe( data=>{
      this.getAllUser();
    },
    error => console.log(error)
    );
  }
  getAllUser(){
    this.router.navigate(['/users']);
  }
onSubmit(){
this.updateUser();
}
}
