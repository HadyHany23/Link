import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  public getJsonvalue: any;
  public postJsonvalue: any;

  getproduct() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1');
  }

  postproduct(body: any) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', body);
  }
}
