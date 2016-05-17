import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

const API_KEY: string = '0df69965233a6bb76bc49a06e7db5ea1';

@Injectable()
export class TheMovieDbService {
  baseUrl: string = 'https://api.themoviedb.org/3';

  constructor(private http: Http) {}

  getMovie(id) {
    let search = new URLSearchParams();
    search.set('api_key', API_KEY);

    return this.http
      .get(`${this.baseUrl}/movie/${id}`, { search })
      .map(response => response.json());
  }

  search(query) {
    let search = new URLSearchParams();
    search.set('api_key', API_KEY);
    search.set('query', query);

    return this.http
      .get(`${this.baseUrl}/search/movie`, { search })
      .map(response => response.json().results);
  }
}
