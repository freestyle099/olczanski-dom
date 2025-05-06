import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { WeatherData } from 'models';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LiveService {
  private http = inject(HttpClient);

  getWeather(): Observable<WeatherData> {
    return this.http.get<WeatherData>('/api/weather');
  }
}
