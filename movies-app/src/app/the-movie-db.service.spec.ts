import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { TheMovieDbService } from './the-movie-db.service';

describe('TheMovieDb Service', () => {
  beforeEachProviders(() => [TheMovieDbService]);

  it('should ...',
      inject([TheMovieDbService], (service: TheMovieDbService) => {
    expect(service).toBeTruthy();
  }));
});
