import { Team } from './team.model';

export interface MatchExtended {
    id: number;
    homeTeamId: string;
    homeTeam: Team;
    awayTeamId: string;
    awayTeam: Team;
    stageId: string;
}
