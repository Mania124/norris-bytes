import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Joke {
  value: string;
}

@Injectable({
  providedIn: 'root',
})
export class ChuckNorrisService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${environment.apiUrl}/jokes/categories`);
  }

  getRandomJoke(category?: string): Observable<Joke> {
    const url = category
      ? `${environment.apiUrl}/jokes/random?category=${category}`
      : `${environment.apiUrl}/jokes/random`;
    return this.http.get<Joke>(url);
  }
}
