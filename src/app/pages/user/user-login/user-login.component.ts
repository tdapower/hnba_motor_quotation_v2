import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthenticationService } from '../../../shared/services/user/authentication.service';
import { IUser } from '../../../shared/models/user/user.model';

import { USER } from '../../../shared/config/user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {


  isLoading: boolean;
  User: IUser;

  UserName: string;
  Password: string;
  message: string;

  constructor(private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {

    localStorage.removeItem('currentUser');

    
    this.authenticationService.logout();

    // this.UserName="tda";
    // this.Password="tda";
  }


  public validateUser() {



    this.isLoading = true;
    this.authenticationService.CheckAndLoadUser(this.UserName, this.Password)
      .subscribe((data) => {


        this.isLoading = false;
       // console.log(data);
        this.User = data
        if (this.User.UserName != null) {
          USER.USER_AUTH_TOKEN = 'Basic ' + btoa(this.User.UserName + ':' + this.User.Password);
          // console.log(USER.USER_AUTH_TOKEN);

          localStorage.setItem("currentUser", JSON.stringify(this.User));
          localStorage.setItem("currentUserToken", USER.USER_AUTH_TOKEN);

          this.User = JSON.parse(localStorage.getItem('currentUser'));
          if (this.User.Company == 'General') {
            this.router.navigate(['/', 'search']);
          } else {
            this.router.navigate(['/', 'quote']);
          }


      

        } else {
          this.message = "Invalid User name or Password...";
        }




        // console.log(localStorage.getItem('currentUser'));
      }),
      ((err) => {
        console.log(err);
        this.message = "Error while user login...";
      });




  }
}
