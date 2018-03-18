import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { tap, map, switchMap, catchError } from 'rxjs/operators';

import * as authActions from '../actions/auth.action';
import * as fromServices from '../../services';
import { User } from '../../models/user.model';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: fromServices.AuthService
  ) { }

  @Effect()
  observeAuthState$ = this.actions$.ofType(authActions.OBSERVE_AUTH_STATE).pipe(
    switchMap(() => {
      return this.authService
        .getAuthStateUpdates()
        .pipe(
          map(firebaseUser => new authActions.AuthStateUpdate(firebaseUser ? new User(firebaseUser) : null))
        );
    })
  );

  @Effect()
  signIn$ = this.actions$.ofType(authActions.SIGN_IN).pipe(
    switchMap(() => {
      return this.authService
        .signIn()
        .pipe(
          map(() => new authActions.Noop()),
          // only catch the errors and don't handle state change here because if the sign in was successful
          // then the auth state will be updated in the observeAuthState$ effect.
          catchError(error => of(new authActions.SignInFail(error)))
        );
    })
  );

  @Effect()
  signOut$ = this.actions$.ofType(authActions.SIGN_OUT).pipe(
    switchMap(() => {
      return this.authService
        .signOut()
        .pipe(
          map(() => new authActions.Noop()),
          // only catch the errors and don't handle state change here because if the sign out was successful
          // then the auth state will be updated in the observeAuthState$ effect.
          catchError(error => of(new authActions.SignInFail(error)))
        );
    })
  );
}
