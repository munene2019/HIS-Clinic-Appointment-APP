// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
//import { HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:80/LoanApp/register.php';
  body:any;

  constructor(private http: HttpClient) {}

  register(body:any): Observable<any> {

    return this.http.post(this.apiUrl, body).pipe(map((resonse:any)=>{
      console.log("response....."+resonse.success)
      if(resonse.success){
        return resonse.data;

      }
      else{
        throw new Error(resonse.error);
      }
    }));
  }
  login(credentials: { username: string; password: string }): Observable<any> {

    return this.http.post(this.apiUrl, credentials).pipe(map((resonse:any)=>{
      console.log("response....."+resonse.success)
      if(resonse.success){
        return resonse.data;

      }
      else{
        throw new Error(resonse.error);
      }
    }));
  }
}
