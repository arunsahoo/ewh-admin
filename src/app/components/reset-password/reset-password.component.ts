import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss', '../app.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  resetPassword(event) {
    event.preventDefault();

    const email = event.target.querySelector('#email').value;
  }
}
