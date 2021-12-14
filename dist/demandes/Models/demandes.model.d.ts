/// <reference types="node" />
import { Agent } from "http";
import { Document, Schema as MongooseSchema } from "mongoose";
export declare class Demande {
    Date_Dmde: Date;
    Annee_Scolaire_Dmnde: string;
    Dren_Origine_Dmde: string;
    Dren_Destination_Dmde: string;
    Insp_Destination_Dmde: string;
    Insp_Origin_Dmde: string;
    Libelle_Statut_Dmde: string;
    agent_demandeur: Agent;
    agents_interesse: Agent[];
}
export declare type DemandeDocument = Demande & Document;
export declare const DemandeSchema: MongooseSchema<Document<Demande, any, any>, import("mongoose").Model<Document<Demande, any, any>, any, any, any>, any>;
