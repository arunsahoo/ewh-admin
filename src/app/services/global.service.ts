import { Injectable, enableProdMode } from '@angular/core';
import Axios from 'axios';
import { environment } from '../../environments/environment';
import { UserLoginService } from './user-login.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private userService: UserLoginService) {
    if (environment.production) {
      enableProdMode();
      Axios.defaults.baseURL = 'https://api.evokewebhosting.com/';
    } else {
      Axios.defaults.baseURL = 'http://127.0.0.1:8000/';
    }

    Axios.defaults.headers.common['X-Authorization'] = 'kT3ywIw376myEolJwPBzNs3fIC7ONjfxeEosXchYXO6L1JQYglEBJrk8L0u25fgn';
  }
}
