import { Component } from "@angular/core";
import { UsersService } from "../users/users.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  username: string;
  password: string;

  constructor(public userService: UsersService) {}

  login() {
    const user = {username: this.username, password: this.password};
    debugger;
    this.userService.login(user).subscribe( data => {
      console.log(data);
    });
  }
}