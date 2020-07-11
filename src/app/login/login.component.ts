import { Component } from "@angular/core";
import { UsersService } from "../users/users.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  username: string;
  password: string;

  constructor(public userService: UsersService, public router: Router) {}

  login() {
    const user = {username: this.username, password: this.password};
    this.userService.login(user).subscribe( data => {
      this.userService.setToken(data.headers.get("Authorization"));
      this.router.navigateByUrl('/');
    },
    error => {
      console.log(error);
    });
  }
}