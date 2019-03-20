import { Injectable } from '@angular/core';
import axios from 'axios';
import { UserLoginService } from './user-login.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  userData: any = {};

  constructor(private userService: UserLoginService) {
    this.userService.getUser()
    .then((response) => {
      this.userData = response.data.data;
    })
    .catch((error) => {
      console.log(error);
    });

    // axios.defaults.baseURL = 'http://localhost/ewhapi/public/';
    axios.defaults.baseURL = 'http://127.0.0.1:1215/';
    axios.defaults.headers.common['X-Authorization'] = 'kT3ywIw376myEolJwPBzNs3fIC7ONjfxeEosXchYXO6L1JQYglEBJrk8L0u25fgn';
  }
}
