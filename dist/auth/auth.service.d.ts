import { AgentsService } from 'src/agents/agents.service';
export declare class AuthService {
    private readonly agentService;
    constructor(agentService: AgentsService);
    validateUser(email: any, pass: any): Promise<any>;
}
