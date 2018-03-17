import { MatchesService } from './matches.service';
import { TeamsService } from './teams.service';
import { StagesService } from './stages.service';

export const services: any[] = [MatchesService, TeamsService, StagesService];

export * from './matches.service';
export * from './teams.service';
export * from './stages.service';
