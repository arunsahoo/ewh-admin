import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  apiUrl: any;

  constructor() {
    this.apiUrl = 'http://localhost:8000/api/';
  }
}
