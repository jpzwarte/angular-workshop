import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<h1>{{msg}}</h1>'
})
class AppComponent {
  msg: string = 'Hello Angular 2!';
}

bootstrap(AppComponent);

<body>
  <my-app></my-app>
<body>
