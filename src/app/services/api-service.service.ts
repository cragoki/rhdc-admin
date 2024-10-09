import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlertModel } from '../models/alert-model.model';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  // Define your method outside the constructor
  getAlerts(): Observable<AlertModel[]> {
    return this.httpClient.get<AlertModel[]>('https://localhost:7035/Alerts');
  }
}