import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromStore from '../../store';
import { User } from '../../models';

@Component({
  selector: 'app-login',
  template: `
    <button (click)="login()" [disabled]="(user | async) !== null">login</button>
    <button (click)="logout()" [disabled]="(user | async) === null">Logout</button>
  `,
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  user: Observable<User>;

  constructor(private store: Store<fromStore.CoreState>) { }

  ngOnInit() {
    this.user = this.store.select(fromStore.getUser);
    this.store.dispatch(new fromStore.ObserveAuthState());
  }

  login() {
    this.store.dispatch(new fromStore.SignIn());
  }

  logout() {
    this.store.dispatch(new fromStore.SignOut());
  }
}
