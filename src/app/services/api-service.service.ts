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

  baseUrl = 'https://localhost:7035/';
  // Define your method outside the constructor
  getItems<T>(url: string): Observable<T[]> {
    return this.httpClient.get<T[]>(this.baseUrl + url);
  }

  getItem<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(this.baseUrl + url);
  }

  updateItem<T>(url: string, item: any): Observable<T> {
    console.log(this.baseUrl + url);
    return this.httpClient.post<T>(this.baseUrl + url, item, {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
    });
  }
}