import { Injectable } from '@nestjs/common';
import { AgentsService } from 'src/agents/agents.service';

@Injectable()
export class AuthService {
    constructor(private readonly agentService : AgentsService){}

    async validateUser(Email_Agt,Pass_Agt):Promise<any>{
        const user = await this.agentService.findAgent({Email_Agt});
        if (user && user.Pass_Agt === Pass_Agt) {
          const { Pass_Agt, ...result } = user;
          return result;
        }
        return null;
    }
}
