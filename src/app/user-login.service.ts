import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../app/global.service';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  users: any;
  status: string;
  api_key: any;

  constructor(private http: HttpClient, private globalService: GlobalService) { }

  getAllUsers() {
    return this.http.get(this.globalService.apiUrl + 'users');
  }

  getUserLogin(email, password) {
    return this.http.get(this.globalService.apiUrl + 'login/?email=' + email + '&password=' + password);
  }
}
