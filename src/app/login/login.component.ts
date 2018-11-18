import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../user-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../app.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: UserLoginService) { }

  ngOnInit() {
    const users = this.loginService.getData();
    // console.log(users);
  }

  loginUser(event) {
    event.preventDefault();
    const target = event.target;
    const email = target.querySelector('#email').value;
    const password = target.querySelector('#password').value;
    // console.log(this.users);
    // this.loginService.getUserLogin(email, password, this.users);
    console.log(email, password);
  }
}
