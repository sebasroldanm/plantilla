import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Specialty } from '../model/specialties';

@Injectable({
  providedIn: 'root'
})
export class SpecialtyService {

  url = `${environment.HOST}/specialty`;

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Specialty[]>(`${this.url}/get`);
  }

}
