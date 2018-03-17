import { MatchesGuard } from './matches.guard';
import { TeamsGuard } from './teams.guard';

export const guards: any[] = [MatchesGuard, TeamsGuard];

export * from './matches.guard';
export * from './teams.guard';
