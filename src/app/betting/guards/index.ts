import { MatchesGuard } from './matches.guard';
import { TeamsGuard } from './teams.guard';
import { GuardHelpers } from './guardHelpers';

export const guards: any[] = [MatchesGuard, TeamsGuard, GuardHelpers];

export * from './matches.guard';
export * from './teams.guard';
