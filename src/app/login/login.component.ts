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
    if (localStorage.getItem('token') || sessionStorage.getItem('token')) {
      this.router.navigate(['/dashboard']);
    }
  }

  loginUser(event) {
    event.preventDefault();

    const target = event.target;
    const email = target.querySelector('#email').value;
    const password = target.querySelector('#password').value;
    const rememberCheck = target.querySelector('#remember').checked;

    this.loginService.getUserLogin(email, password).subscribe((data) => {
      this.loginSession = data;
      const token = this.loginSession.api_key;
      const userId = this.loginSession.userId;

      if (this.loginSession.status === 'success') {
        if (rememberCheck) {
          localStorage.setItem('token', token);
          localStorage.setItem('userId', userId);
        } else {
          sessionStorage.setItem('token', token);
          sessionStorage.setItem('userId', userId);
        }
        this.router.navigate(['/dashboard']);
      }
    });
  }
}
