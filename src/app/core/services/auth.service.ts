import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';
import { fromPromise } from 'rxjs/observable/fromPromise';

import * as firebase from 'firebase/app';
import { User, PublicUserData } from '../models';

@Injectable()
export class AuthService {
  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
  ) { }

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

  updateUserData(user: User): Observable<void> {
    const publisUserData: PublicUserData = new PublicUserData(user);
    return fromPromise(
      this.db.object<PublicUserData>(`users/${user.uid}`).update(publisUserData)
    );
  }
}
