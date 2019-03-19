import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../app/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor (private router: Router, private globalService: GlobalService) {}

  ngOnInit() {
    const dateNow = new Date();
    const expiry = new Date(localStorage.getItem('expires_at') ? localStorage.getItem('expires_at') : sessionStorage.getItem('expires_at'));

    if (!localStorage.getItem('token') || !sessionStorage.getItem('token') && ( expiry <= dateNow ) ) {
      this.router.navigate(['/']);
    }
  }
}
