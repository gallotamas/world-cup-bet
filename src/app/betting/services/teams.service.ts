import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { Team } from '../models/team.model';

@Injectable()
export class TeamsService {
  constructor(private db: AngularFireDatabase) {}

  getTeams(): Observable<Team[]> {
    return this.db.list<Team>('teams').valueChanges()
        .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
