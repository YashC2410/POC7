import { ThrowStmt } from '@angular/compiler';
import { Component, TestabilityRegistry ,OnInit} from '@angular/core';
import { User } from './user';
import {AuthenticationService} from './login/auth.service';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'UserUI';
  isLoggedIn = false;
  n:string="";
  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.isLoggedIn=this.authenticationService.isUserLoggedIn();
  }

  handleLogout() {
    this.authenticationService.logout();
    this.isLoggedIn=false;
  }
}

