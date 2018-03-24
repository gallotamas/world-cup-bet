import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { switchMap, catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { Bet } from '../models/bet.model';
import { CoreState, getAuthState } from '../../core/store';

@Injectable()
export class BetsService {
  constructor(
    private db: AngularFireDatabase,
    private store: Store<CoreState>
  ) { }

  getMyBets(): Observable<Bet[]> {
    return this.store.select(getAuthState)
      .pipe(
        switchMap(authState => {
          return this.db.object<Bet>(`bets/${authState.user.uid}`).valueChanges()
            .pipe(catchError((error: any) => Observable.throw(error.json())));
        })
      );
  }

  updateMyBet(matchId: number, bet: Bet): Observable<void> {
    return this.store.select(getAuthState)
      .pipe(
        switchMap(authState => {
          return this.db.object<Bet>(`bets/${authState.user.uid}/${matchId}`).update(bet);
        })
      );
  }
}
