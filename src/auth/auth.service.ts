import { Injectable } from '@nestjs/common';
import { AgentsService } from 'src/agents/agents.service';


@Injectable()
export class AuthService {
    constructor(private readonly agentService : AgentsService){}

    async validateUser(email,pass) : Promise<any>{
        const agent = await this.agentService.findAgent(email);
        if (agent && agent.Pass_Agt === pass) {
            const { Pass_Agt, ...result } = agent;
            return result;
        }
        
        return null;
    }
}
