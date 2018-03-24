import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { Bet } from '../models/bet.model';

@Injectable()
export class BetsService {
  constructor(private db: AngularFireDatabase) { }

  getMyBets(userId: string): Observable<Bet[]> {
    return this.db.object<Bet>(`bets/${userId}`).valueChanges()
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
