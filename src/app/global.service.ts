import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() {
    axios.defaults.baseURL = 'http://localhost/ewhapi/public/';
    axios.defaults.headers.common['X-Authorization'] = 'kT3ywIw376myEolJwPBzNs3fIC7ONjfxeEosXchYXO6L1JQYglEBJrk8L0u25fgn';
  }
}
