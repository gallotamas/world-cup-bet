import { MatchesGuard } from './matches.guard';
import { TeamsGuard } from './teams.guard';
import { StagesGuard } from './stages.guard';
import { GuardHelpers } from './guardHelpers';

export const guards: any[] = [MatchesGuard, TeamsGuard, StagesGuard, GuardHelpers];

export * from './matches.guard';
export * from './teams.guard';
export * from './stages.guard';
