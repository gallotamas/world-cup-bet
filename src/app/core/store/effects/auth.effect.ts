import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { tap, map, take, switchMap, catchError } from 'rxjs/operators';

import * as authActions from '../actions/auth.action';
import * as routerActions from '../actions/router.action';
import * as fromServices from '../../services';
import { CoreState } from '../reducers';
import { getRouterState } from '../selectors';
import { User } from '../../models/user.model';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: fromServices.AuthService,
    private store: Store<CoreState>
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
          map((userCredential) => new authActions.SignInSuccess(new User(userCredential.user))),
          catchError(error => of(new authActions.SignInFail(error)))
        );
    })
  );

  @Effect()
  signInSuccess$ = this.actions$.ofType(authActions.SIGN_IN_SUCCESS).pipe(
    tap((action: authActions.SignInSuccess) => {
      this.authService.updateUserData(action.payload)
        .pipe(take(1)).subscribe(() => { });
    }),
    switchMap(() => {
      return this.store.select(getRouterState)
        .pipe(
          // only take one state from the router because we are about to navigate away
          // that would cause an infinite loop if we subscribe for more.
          take(1),
          map(router => {
            const redirectUri = router.queryParams.redirectUri || 'betting';
            return new routerActions.Go({ path: [redirectUri] });
          })
        );
    })
  );

  @Effect()
  signOut$ = this.actions$.ofType(authActions.SIGN_OUT).pipe(
    switchMap(() => {
      return this.authService
        .signOut()
        .pipe(
          map(() => new authActions.SignOutSuccess()),
          catchError(error => of(new authActions.SignInFail(error)))
        );
    })
  );
}
