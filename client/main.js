import 'reflect-metadata';
import 'rxjs';
import 'zone.js/dist/zone.js';
import 'zone.js/dist/long-stack-trace-zone';

import {
  Component
} from '@angular/core';

import {
  bootstrap
} from '@angular/platform-browser-dynamic';

import {
  METEOR_PROVIDERS,
  MeteorComponent
} from 'angular2-meteor';

@Component({
  selector: 'app',
  template: `
    <button (click)="run()">Run</button> {{ text }}
  `
})
class App extends MeteorComponent {
  constructor() {
    super();

    this.text = "";
  }

  run() {
    this.autorun(() => {
      this.text = ', Forrest';

      this.autorun(() => {
        this.text += ', Run!';
      }, true);
    }, true);
  }
}

bootstrap(App, [
  METEOR_PROVIDERS
]);
