import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { combineLatest } from 'rxjs/observable/combineLatest';

import * as fromStore from '../../store';
import { Match, Team, MatchExtended, Stage, Bet } from '../../models';

@Component({
  selector: 'app-betting',
  template: `
    <div
      *ngFor="let match of (matchesExtended$ | async)">
      <span>{{ match.stage.name }}</span>
      <span>| {{ match.startTime | date:'medium' }}</span>
      <span>| {{ match.homeTeam.name }} - {{ match.awayTeam.name }}</span>
      <span *ngIf="match.bet">| my bet: {{ match.bet.homeScore }} : {{ match.bet.awayScore }}</span>
      <button (click)="updateBet(match.id)">Update bet</button>
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
      this.store.select(fromStore.getMyBetsEntities),
    ])
      .map(([matches, teams, stages, myBets]: [Match[], { [id: string]: Team }, { [id: string]: Stage }, { [matchId: string]: Bet }]) => {
        return matches.map(match => {
          return {
            ...match,
            ...{ homeTeam: teams[match.homeTeamId], awayTeam: teams[match.awayTeamId], stage: stages[match.stageId], bet: myBets[match.id] }
          };
        });
      });
  }

  updateBet(matchId: number) {
    this.store.dispatch(new fromStore.UpdateBet(matchId, { homeScore: 2, awayScore: 1 }));
  }
}
