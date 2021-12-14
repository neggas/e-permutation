import { Document, Schema as MongooseSchema } from "mongoose";
import { Demande } from "src/demandes/Models/demandes.model";
export declare class Agent {
    nom_Agt: string;
    prenoms_Agt: string;
    Nom_Jeune_Fille_Agt: string;
    sex_Agt: string;
    Matricule_agt: string;
    Fonction_Agt: string;
    sit_Matrimonial_Agt: string;
    Date_Premier_Prise_Serv_Agt: Date;
    Contact_Agt: string;
    Date_Naiss_agt: Date;
    Emploi_Agt: string;
    Dir_Reg_Agt: string;
    IEP_Agt: string;
    Etabl_Serv_Agt: string;
    Login_Agt: string;
    Pass_Agt: string;
    Discipline_Agt: string;
    Email_Agt: string;
    demande: Demande;
}
export declare type AgentDocument = Agent & Document;
export declare const AgentSchema: MongooseSchema<Document<Agent, any, any>, import("mongoose").Model<Document<Agent, any, any>, any, any, any>, any>;
