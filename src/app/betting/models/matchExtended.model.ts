import { Team } from './team.model';
import { Stage } from './stage.model';

export interface MatchExtended {
    id: number;
    homeTeamId: string;
    homeTeam: Team;
    awayTeamId: string;
    awayTeam: Team;
    stageId: string;
    stage: Stage;
    startTime: number;
}
