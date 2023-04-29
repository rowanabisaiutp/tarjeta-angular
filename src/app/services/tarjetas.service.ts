import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { TarjetasBD } from "../models/tarjeta";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TarjetasService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getTarjetas() {
    return this.http.get(`${this.API_URI}/tarjeta`);
  }

  getTarjeta(id: string) {
    return this.http.get(`${this.API_URI}/tarjeta/${id}`);
  }

  deleteTarjeta(id: string) {
    return this.http.delete(`${this.API_URI}/tarjeta/${id}`);
  }

  createTarjetas(tarjetasdb: TarjetasBD) {
    return this.http.post(`${this.API_URI}/tarjeta`, tarjetasdb);
  }

  updateTarjeta(id: string|number, updateTarjeta: TarjetasBD): Observable<TarjetasBD> {
    return this.http.put(`${this.API_URI}/tarjeta/${id}`, updateTarjeta);
  }

}
