import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, provide, PLATFORM_DIRECTIVES } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

// Add all operators to Observable
import 'rxjs/Rx';

import { MoviesAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(MoviesAppComponent, [
  provide(PLATFORM_DIRECTIVES, { useValue: [ROUTER_DIRECTIVES], multi: true })
]);
