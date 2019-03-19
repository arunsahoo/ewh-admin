import { Injectable } from '@angular/core';
import Axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  users: any;
  url: any;
  status: any;
  userId: any;

  getAllUsers() {
    return Axios.get('users');
  }

  getUser() {
    this.userId =  localStorage.getItem('userId') ? localStorage.getItem('userId') : sessionStorage.getItem('userId');
    return Axios.get('user/' + this.userId);
  }
}
