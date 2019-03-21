import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {
  pageName: string;

  constructor() { }

  ngOnInit() {
    const pathname = window.location.pathname;
    this.pageName = pathname.replace('/', '');
  }
}
