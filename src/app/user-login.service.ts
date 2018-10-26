import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  constructor(private http: HttpClient) { }

  getData() {
    const getUsers = this.http.get('api/users')
    .subscribe(data => {
      return data;
    });

    console.log(getUsers);
  }

  getUserLogin() {

  }
}
