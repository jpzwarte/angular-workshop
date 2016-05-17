import { Component, OnInit } from '@angular/core';

import { MovieService } from '../movie.service';

@Component({
  moduleId: module.id,
  selector: 'movie-list',
  templateUrl: 'movie-list.component.html',
  styleUrls: ['movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies = []

  constructor(private service: MovieService) {}

  ngOnInit() {
    this.service
      .getMovies()
      .subscribe(movies => this.movies = movies);
  }
}
