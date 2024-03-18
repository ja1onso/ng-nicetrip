import { Injectable } from '@angular/core';
// Interfaces
import { Stage } from '../models/stage';
// Http
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// observables
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StagesService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:3000/stages";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getStages(): Observable<Stage[]>{
    return this.http.get<Stage[]>(this.url);
  }

  createStage(stage: Stage): Observable<Stage> {
    console.log('createStage', stage);
    return this.http.post<Stage>(this.url, stage, this.httpOptions);
  }

  // deleteMovie(id): Observable<Movies>{
  //   return this.http.delete<Movies>(`${this.url}/${id}`);
  // }

  // getForId(id): Observable<Movies>{
  //   return this.http.get<Movies>(`${this.url}/${id}`);
  // }

  // updateMovie(movie: Movies): Observable<Movies>{
  //   return this.http.put<Movies>(`${this.url}/${movie.id}`,movie);
  // }
  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}
