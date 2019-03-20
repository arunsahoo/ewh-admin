import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Axios from 'axios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../app.component.scss']
})
export class LoginComponent implements OnInit {
  users: any;
  loginSession: any;

  constructor ( private router: Router ) { }

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

    const data = {
      'email': email,
      'password': password,
      'remember_me': rememberCheck
    };

    Axios.post('login', data)
    .then((Response) => {
      const resData = Response.data;
      const token = resData.access_token;
      const userId = resData.user_id;
      const expiry = resData.expires_at;

      if (rememberCheck) {
        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId);
        localStorage.setItem('expires_at', expiry);
      } else {
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('userId', userId);
        sessionStorage.setItem('expires_at', expiry);
      }
      this.router.navigate(['/dashboard']);
    })
    .catch((error) => {
      console.log(error);
    });
  }
}
