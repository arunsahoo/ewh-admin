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

    Axios.defaults.headers.common['X-Authorization'] = 'KTFaM268GiacEF0Ocl0KfsZDtbHDPpE5rFAGuFKIB9GgiJrb8px7j09oLtFUedPc';
  }
}
