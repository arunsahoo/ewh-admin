import { Injectable } from '@angular/core';
import Axios from 'axios';
import { UserLoginService } from './user-login.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private userService: UserLoginService) {
    // axios.defaults.baseURL = 'http://localhost/ewhapi/public/';
    Axios.defaults.baseURL = 'http://127.0.0.1:1215/';
    Axios.defaults.headers.common['X-Authorization'] = 'kT3ywIw376myEolJwPBzNs3fIC7ONjfxeEosXchYXO6L1JQYglEBJrk8L0u25fgn';
  }
}
