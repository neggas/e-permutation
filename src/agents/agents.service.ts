import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Agent,AgentDocument } from './Models/agents.model';
import { DemandesService } from 'src/demandes/demandes.service';

@Injectable()
export class AgentsService {
    constructor(
        @InjectModel(Agent.name) private readonly AgentModel : Model<AgentDocument>,
        private readonly demandeService : DemandesService
    ){}

    async registerAgent(payload){
        
        const {Dren_Destination_Dmde,Design_Cat_Dmde,Insp_Destination_Dmde,terms,...agent} = payload;
        let _agent = new this.AgentModel(agent);
        _agent  = await _agent.save();

        if(_agent){
            const annee = new Date()
            const demande = {
                Date_Dmde:annee,
                Dren_Origine_Dmde:_agent.Dir_Reg_Agt,
                Dren_Destination_Dmde,
                Insp_Destination_Dmde,
                Insp_Origin_Dmde:_agent.Dir_Reg_Agt,
                Annee_Scolaire_Dmnde:`${annee.getFullYear()}-${annee.getFullYear()+1}`,
                agent_demandeur:_agent._id
            }

            const createdDemande = await this.demandeService.create(demande)
            _agent = await this.updateAgent({_id:_agent._id,demande:createdDemande._id})


        }
        return  _agent;
    }

    async  updateAgent(agentDocument){
       return await this.AgentModel.findByIdAndUpdate(agentDocument._id,{...agentDocument},{new:true}).exec()
    }
    async updateAgentConexion(agentId,nb_connexon){
        return await this.AgentModel.findByIdAndUpdate(agentId,{nb_connexon:nb_connexon},{new:true}).exec()
    }


    async findAgent(payload:string){
        const agent = await this.AgentModel.findOne({Email_Agt:payload}).exec()
        return agent;
    }
}
