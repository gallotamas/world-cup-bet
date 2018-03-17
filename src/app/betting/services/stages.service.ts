import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { Stage } from '../models/stage.model';

@Injectable()
export class StagesService {
  constructor(private db: AngularFireDatabase) {}

  getStages(): Observable<Stage[]> {
    return this.db.list<Stage>('stages').valueChanges()
        .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
