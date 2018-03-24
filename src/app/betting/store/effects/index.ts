import { MatchesEffects } from './matches.effect';
import { TeamsEffects } from './teams.effect';
import { StagesEffects } from './stages.effect';
import { BetsEffects } from './bets.effect';

export const effects: any[] = [MatchesEffects, TeamsEffects, StagesEffects, BetsEffects];

export * from './matches.effect';
export * from './teams.effect';
export * from './stages.effect';
export * from './bets.effect';
