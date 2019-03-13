import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginService } from '../user-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../app.component.scss']
})
export class LoginComponent implements OnInit {
  users: any;
  loginSession: any;

  constructor (
    private loginService: UserLoginService,
    private router: Router ) { }

  ngOnInit() {
  }

  loginUser(event) {
    event.preventDefault();

    const target = event.target;
    const email = target.querySelector('#email').value;
    const password = target.querySelector('#password').value;

    this.loginService.getUserLogin(email, password).subscribe((data) => {
      this.loginSession = data;

      if (this.loginSession.status === 'success') {
        this.router.navigate(['/dashboard']);
      }
    });
  }
}
