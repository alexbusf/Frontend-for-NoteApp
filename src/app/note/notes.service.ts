import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  apiUrl: string='http://localhost:3000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  list(): Observable<any>{
    return this.httpClient.get(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  getItem(id: any): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  create(data: any): Observable<any> {
    return this.httpClient.post(this.apiUrl, data).pipe(
      catchError(this.handleError)
    );
  }

  update(id: any, data: any): Observable<any> {
    return this.httpClient.patch(`${this.apiUrl}/${id}`, data).pipe(
      catchError(this.handleError)
    )
  }

  delete(id: any): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  filterByTitile(title: any): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}?title_like=${title}`).pipe(
      catchError(this.handleError)
    );
  }


  handleError(err: HttpErrorResponse){
    let errorMessage='';
    if (err.error instanceof ErrorEvent){
      errorMessage = err.error.message;
    } else {
        errorMessage = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    return throwError(() => { errorMessage });
  }
}
