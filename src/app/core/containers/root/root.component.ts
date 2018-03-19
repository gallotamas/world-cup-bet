import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import * as fromStore from '../../store';

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
export class RootComponent implements OnInit {
  constructor(private store: Store<fromStore.CoreState>) { }

  ngOnInit() {
    // start observing authentication state
    this.store.dispatch(new fromStore.ObserveAuthState());
  }
}
