import { AgentsService } from './agents/agents.service';
import { AppService } from './app.service';
import { DemandesService } from './demandes/demandes.service';
import { Response } from 'express';
export declare class AppController {
    private readonly appService;
    private readonly agentService;
    private readonly demandeService;
    constructor(appService: AppService, agentService: AgentsService, demandeService: DemandesService);
    root(): Promise<{
        demandes: {
            Date_Dmde: string;
            Annee_Scolaire_Dmnde: string;
            Dren_Origine_Dmde: string;
            Dren_Destination_Dmde: string;
            Insp_Destination_Dmde: string;
            Insp_Origin_Dmde: string;
            Libelle_Statut_Dmde: string;
            agent_demandeur: import("http").Agent;
            agents_interesse: import("mongoose").LeanDocument<import("http").Agent>[];
            _id: any;
            __v?: any;
            id?: any;
        }[];
    }>;
    connexion(req: any): {
        message: string;
    };
    login(req: any, res: Response): void;
    inscription(): Promise<void>;
    resultats(): Promise<void>;
    faireUneDemande(payload: any): Promise<import("./agents/Models/agents.model").Agent & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    voirDemande(id: string, req: any): Promise<{
        demande: {
            currentAgent: any;
            Date_Dmde: Date;
            Annee_Scolaire_Dmnde: string;
            Dren_Origine_Dmde: string;
            Dren_Destination_Dmde: string;
            Insp_Destination_Dmde: string;
            Insp_Origin_Dmde: string;
            Libelle_Statut_Dmde: string;
            agent_demandeur: import("http").Agent;
            agents_interesse: import("mongoose").LeanDocument<import("http").Agent>[];
            _id: any;
            __v?: any;
            id?: any;
        };
    }>;
    postResponse(id: string, req: any, res: Response): Promise<void>;
    responseDemande(id: string, req: any): Promise<{
        data: any;
    }>;
}
