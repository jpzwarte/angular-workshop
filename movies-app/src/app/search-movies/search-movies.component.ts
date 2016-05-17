import { Component, OnInit } from '@angular/core';
import { Control } from '@angular/common';

import { MovieService } from '../movie.service';
import { TheMovieDbService } from '../the-movie-db.service';

@Component({
  moduleId: module.id,
  selector: 'search-movies',
  templateUrl: 'search-movies.component.html',
  styleUrls: ['search-movies.component.css']
})
export class SearchMoviesComponent implements OnInit {
  query = new Control();
  messages: string[] = [];
  movies;

  constructor(
    private service: MovieService,
    private theMovieDb: TheMovieDbService) {}

  ngOnInit() {
    this.movies = this.query.valueChanges
                            .debounceTime(500)
                            .distinctUntilChanged()
                            .switchMap(query => this.theMovieDb.search(query));
  }

  add(movie) {
    this.theMovieDb
      .getMovie(movie.id)
      .switchMap(movie => this.service.addMovie(movie))
      .subscribe(movie => this.messages.push(`'${movie.title}' was added to your collection`));
  }
}
