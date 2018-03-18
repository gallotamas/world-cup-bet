import * as fromAuth from '../actions/auth.action';
import { User } from '../../models/user.model';

export interface AuthState {
  user: User;
  completed: boolean;
  inProgress: boolean;
}

export const initialState: AuthState = {
  user: null,
  completed: false,
  inProgress: false,
};

export function reducer(state = initialState, action: fromAuth.AuthAction): AuthState {
  switch (action.type) {
    case fromAuth.OBSERVE_AUTH_STATE: {
      return { ...state, inProgress: true };
    }

    case fromAuth.AUTH_STATE_UPDATE: {
      const user = action.payload;
      return { ...state, inProgress: false, completed: true, user };
    }

    case fromAuth.SIGN_IN:
    case fromAuth.SIGN_OUT: {
      return { ...state, inProgress: true, completed: false };
    }

    case fromAuth.SIGN_IN_FAIL:
    case fromAuth.SIGN_OUT_FAIL: {
      return { ...state, inProgress: false, completed: false };
    }
  }

  return state;
}

export const getUser = (state: AuthState) => state.user;
export const getAuthInProgress = (state: AuthState) => state.inProgress;
export const getAuthCompleted = (state: AuthState) => state.completed;
