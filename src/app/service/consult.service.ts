import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultService {

  url = `${environment.HOST}/doctor`;

  constructor(private http: HttpClient) { }

  // listar() {
    // return this.http.get<Doctor[]>(`${this.url}/get`);
  // }
}
