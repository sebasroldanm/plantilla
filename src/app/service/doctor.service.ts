import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Doctor } from '../model/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  url = `${environment.HOST}/doctor`;

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Doctor[]>(`${this.url}/get`);
  }
}
