import { MatchesService } from './matches.service';
import { TeamsService } from './teams.service';
import { StagesService } from './stages.service';
import { BetsService } from './bets.service';

export const services: any[] = [MatchesService, TeamsService, StagesService, BetsService];

export * from './matches.service';
export * from './teams.service';
export * from './stages.service';
export * from './bets.service';
