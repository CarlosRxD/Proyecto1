import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PlatziService {
  constructor(private http: HttpClient) {}
  private url: string = 'https://api.escuelajs.co/api/v1/products';
  getData(): Observable<any> {
    return this.http.get(this.url);
  }
}
