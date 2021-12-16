import { Model } from 'mongoose';
import { Agent, AgentDocument } from './Models/agents.model';
import { DemandesService } from 'src/demandes/demandes.service';
export declare class AgentsService {
    private readonly AgentModel;
    private readonly demandeService;
    constructor(AgentModel: Model<AgentDocument>, demandeService: DemandesService);
    registerAgent(payload: any): Promise<Agent & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    updateAgent(agentDocument: any): Promise<Agent & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    updateAgentConexion(agentId: any, nb_connexon: any): Promise<Agent & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    findAgent(payload: string): Promise<Agent & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
