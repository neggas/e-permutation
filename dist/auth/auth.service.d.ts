import { AgentsService } from 'src/agents/agents.service';
export declare class AuthService {
    private readonly agentService;
    constructor(agentService: AgentsService);
    validateUser(Email_Agt: any, Pass_Agt: any): Promise<any>;
}
