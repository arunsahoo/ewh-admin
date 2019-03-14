import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getCurrentUrl() {
    return window.location.pathname;
  }

  logoutUser() {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
  }
}
