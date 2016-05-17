import { Component, OnInit } from '@angular/core';
import { OnActivate, Router, RouteSegment } from '@angular/router';

import { MovieService } from '../movie.service';

@Component({
  moduleId: module.id,
  selector: 'movie-detail',
  templateUrl: 'movie-detail.component.html',
  styleUrls: ['movie-detail.component.css']
})
export class MovieDetailComponent implements OnActivate {
  movie = null

  constructor(
    private router: Router,
    private service: MovieService) {}

  routerOnActivate(curr: RouteSegment): void {
    this.service
      .getMovie(+curr.getParam('id'))
      .subscribe(movie => this.movie = movie);
  }
}
