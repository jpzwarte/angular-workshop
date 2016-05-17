import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class MovieService {
  constructor(private http: Http) {}

  addMovie(movie) {
    let body = JSON.stringify(movie),
        headers = new Headers({ 'Content-Type': 'application/json' }),
        options = new RequestOptions({ headers: headers });

    return this.http.post('/movies', body, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getMovie(id: number) : Observable<any> {
    return this.http.get(`/movies/${id}`)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getMovies() : Observable<any[]> {
    return this.http.get('/movies')
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }

    return res.json();
  }

  private handleError(error: any) {
    let errMsg = error.message || 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
