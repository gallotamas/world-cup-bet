import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';

export const OBSERVE_AUTH_STATE = '[Auth] Start Observing Auth State';
export const AUTH_STATE_UPDATE = '[Auth] Auth State Update';
export const SIGN_IN = '[Auth] Sign In';
export const SIGN_IN_SUCCESS = '[Auth] Sign In Success';
export const SIGN_IN_FAIL = '[Auth] Sign In Fail';
export const SIGN_OUT = '[Auth] Sign Out';
export const SIGN_OUT_SUCCESS = '[Auth] Sign Out Success';
export const SIGN_OUT_FAIL = '[Auth] Sign Out Fail';
export const NOOP = '[Auth] No operation';

export class ObserveAuthState implements Action {
  readonly type = OBSERVE_AUTH_STATE;
}

export class AuthStateUpdate implements Action {
  readonly type = AUTH_STATE_UPDATE;
  constructor(public payload: User) { }
}

export class SignIn implements Action {
  readonly type = SIGN_IN;
}

export class SignInSuccess implements Action {
  readonly type = SIGN_IN_SUCCESS;
  constructor(public payload: User) { }
}

export class SignInFail implements Action {
  readonly type = SIGN_IN_FAIL;
  constructor(public payload: any) { }
}

export class SignOut implements Action {
  readonly type = SIGN_OUT;
}

export class SignOutSuccess implements Action {
  readonly type = SIGN_OUT_SUCCESS;
}

export class SignOutFail implements Action {
  readonly type = SIGN_OUT_FAIL;
  constructor(public payload: any) { }
}

// action types
export type AuthAction =
  | ObserveAuthState
  | AuthStateUpdate
  | SignIn
  | SignInSuccess
  | SignInFail
  | SignOut
  | SignOutSuccess
  | SignOutFail;
