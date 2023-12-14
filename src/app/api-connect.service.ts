import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectService {

  private apiUrl: string = 'https://api.example.com';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    // Set your API headers here if needed
    // For example, if you have an API key:
    // return new HttpHeaders().set('Authorization', 'Bearer ' + apiKey);

    return new HttpHeaders();
  }

  private handleError(error: any): Observable<never> {
    console.error('API Error', error);
    return throwError(error);
  }

  public get<T>(endpoint: string, params?: HttpParams): Observable<T> {
    const options = {
      headers: this.getHeaders(),
      params: params
    };

    return this.http.get<T>(`${this.apiUrl}/${endpoint}`, options)
      .pipe(
        catchError(this.handleError)
      );
  }

  public post<T>(endpoint: string, data: any): Observable<T> {
    const options = {
      headers: this.getHeaders()
    };

    return this.http.post<T>(`${this.apiUrl}/${endpoint}`, data, options)
      .pipe(
        catchError(this.handleError)
      );
  }
}
