import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getWeather(location) {
    return this.http.get('https://api.apixu.com/v1/forecast.json?key=28dabf9726434179a0f115926192706&q=' + location);
  }
}
