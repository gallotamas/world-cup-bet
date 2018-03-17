import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromStore from '../../store';
import { Match } from '../../models/match.model';

@Component({
  selector: 'app-betting',
  template: `
    <div
      *ngFor="let match of (matches$ | async)">
      {{ match.home }} - {{ match.away }}
    </div>
  `,
  styleUrls: ['./betting.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BettingComponent implements OnInit {
  matches$: Observable<Match[]>;

  constructor(private store: Store<fromStore.BettingState>) { }

  ngOnInit() {
    this.matches$ = this.store.select(fromStore.getAllMatches);
  }
}
