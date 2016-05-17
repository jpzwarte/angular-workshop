import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { MoviesAppComponent } from '../app/movies.component';

beforeEachProviders(() => [MoviesAppComponent]);

describe('App: Movies', () => {
  it('should create the app',
      inject([MoviesAppComponent], (app: MoviesAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'movies works!\'',
      inject([MoviesAppComponent], (app: MoviesAppComponent) => {
    expect(app.title).toEqual('movies works!');
  }));
});
