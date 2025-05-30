import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'http://localhost:5178/weatherforecast';

  constructor(private http: HttpClient) {}

  getForecast(): Observable<any> {
    console.log('Fetching weather forecast from backend...');
    return this.http.get(this.apiUrl);
  }
}