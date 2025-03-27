import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private readonly http: HttpClient) {}

  sendForm(body: unknown): Observable<unknown> {
    return this.http.post('/api/contact', body);
  }
}
