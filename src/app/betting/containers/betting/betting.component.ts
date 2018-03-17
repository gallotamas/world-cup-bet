import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { combineLatest } from 'rxjs/observable/combineLatest';

import * as fromStore from '../../store';
import { Match, Team, MatchExtended, Stage } from '../../models';

@Component({
  selector: 'app-betting',
  template: `
    <div
      *ngFor="let match of (matchesExtended$ | async)">
      <span>{{ match.stage.name }}: </span>
      {{ match.homeTeam.name }} - {{ match.awayTeam.name }}
    </div>
  `,
  styleUrls: ['./betting.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BettingComponent implements OnInit {
  matchesExtended$: Observable<MatchExtended[]>;

  constructor(private store: Store<fromStore.BettingState>) { }

  ngOnInit() {
    this.matchesExtended$ = combineLatest([
      this.store.select(fromStore.getAllMatches),
      this.store.select(fromStore.getTeamsEntities),
      this.store.select(fromStore.getStagesEntities),
    ])
      .map((data) => {
        const matches: Match[] = data[0];
        const teams: { [id: string]: Team } = data[1];
        const stages: { [id: string]: Stage } = data[2];

        return matches.map(match => {
          return {
            ...match,
            ...{ homeTeam: teams[match.homeTeamId], awayTeam: teams[match.awayTeamId], stage: stages[match.stageId] }
          };
        });
      });
  }
}
