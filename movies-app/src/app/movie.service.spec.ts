import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { MovieService } from './movie.service';

describe('Movie Service', () => {
  beforeEachProviders(() => [MovieService]);

  it('should ...',
      inject([MovieService], (service: MovieService) => {
    expect(service).toBeTruthy();
  }));
});
