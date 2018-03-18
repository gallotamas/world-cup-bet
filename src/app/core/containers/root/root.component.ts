import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./root.component.scss'],
  template: `
  <div class="app">
    <header class="app__header">
      Header
    </header>
    <section class="app__content">
      <div class="app__container">
        <router-outlet></router-outlet>
      </div>
    </section>
    <footer class="app__footer">
      <p>Footer</p>
    </footer>
  </div>
  `
})
export class RootComponent {
  constructor() { }
}
