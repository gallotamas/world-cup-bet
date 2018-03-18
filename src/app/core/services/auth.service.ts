import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import { Observable } from 'rxjs/Observable';
import { fromPromise } from 'rxjs/observable/fromPromise';

import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  constructor(private afAuth: AngularFireAuth) { }

  getAuthStateUpdates(): Observable<firebase.User> {
    return this.afAuth.authState;
  }

  signIn(): Observable<any> {
    return fromPromise(
      this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    );
  }

  signOut(): Observable<any> {
    return fromPromise(
      this.afAuth.auth.signOut()
    );
  }
}
