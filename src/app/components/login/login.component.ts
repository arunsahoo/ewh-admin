import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Axios from 'axios';

import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../app.component.scss']
})
export class LoginComponent implements OnInit {
  users: any;
  loginSession: any;
  error: any;

  constructor ( private router: Router, private SpinnerService: NgxSpinnerService ) { }

  ngOnInit() {
    if (localStorage.getItem('token') || sessionStorage.getItem('token')) {
      this.router.navigate(['/dashboard']);
    }
  }

  loginUser(event) {
    event.preventDefault();
    this.SpinnerService.show();

    const target = event.target;
    const email = target.querySelector('#email').value;
    const password = target.querySelector('#password').value;
    const rememberStatus = target.querySelector('#remember').checked;

    const data = {
      'email': email,
      'password': password,
      'remember_me': rememberStatus
    };

    Axios.post('login', data)
    .then((Response) => {
      const responseData = Response.data;
      const accessToken = responseData.access_token;
      const userId = responseData.user_id;
      const loginExpiryDuration = responseData.expires_at;

      if (rememberStatus) {
        localStorage.setItem('token', accessToken);
        localStorage.setItem('userId', userId);
        localStorage.setItem('expires_at', loginExpiryDuration);
      } else {
        sessionStorage.setItem('token', accessToken);
        sessionStorage.setItem('userId', userId);
        sessionStorage.setItem('expires_at', loginExpiryDuration);
      }
      this.SpinnerService.hide();
      this.router.navigate(['/dashboard']);
    })
    .catch((error) => {
      this.error = error;
      this.SpinnerService.hide();
    });
  }
}
