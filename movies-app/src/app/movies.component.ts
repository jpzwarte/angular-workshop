import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { Routes, ROUTER_PROVIDERS } from '@angular/router';

import { MovieDetailComponent } from './movie-detail/';
import { MovieListComponent } from './movie-list/';
import { MovieService } from './movie.service';
import { SearchMoviesComponent } from './search-movies/';
import { TheMovieDbService } from './the-movie-db.service';

@Component({
  moduleId: module.id,
  selector: 'movies-app',
  templateUrl: 'movies.component.html',
  styleUrls: ['movies.component.css'],
  directives: [MovieDetailComponent, MovieListComponent],
  providers: [HTTP_PROVIDERS, ROUTER_PROVIDERS, MovieService, TheMovieDbService]
})
@Routes([
  { path: '/movies', component: MovieListComponent },
  { path: '/movie/:id', component: MovieDetailComponent },
  { path: '/search', component: SearchMoviesComponent }
])
export class MoviesAppComponent {
  title = 'Movies App'
}
