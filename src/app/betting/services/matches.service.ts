import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { Match } from '../models/match.model';

@Injectable()
export class MatchesService {
  constructor(private db: AngularFireDatabase) {}

  getMatches(): Observable<Match[]> {
    return this.db.object<Match>('matches').valueChanges()
        .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
