import { Demande, DemandeDocument } from './Models/demandes.model';
import { Model } from 'mongoose';
export declare class DemandesService {
    private readonly DemandeModel;
    constructor(DemandeModel: Model<DemandeDocument>);
    create(demande: any): Promise<Demande & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    findAll(): Promise<import("mongoose").LeanDocument<Demande & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>[]>;
    findOne(id: string): Promise<import("mongoose").LeanDocument<Demande & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>>;
    update(id: string, payload: any): Promise<Demande & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    allAgentDemande(idAgent: string): Promise<{
        agent_demandeur: string;
        Date_Dmde: Date;
        Annee_Scolaire_Dmnde: string;
        Dren_Origine_Dmde: string;
        Dren_Destination_Dmde: string;
        Insp_Destination_Dmde: string;
        Insp_Origin_Dmde: string;
        Libelle_Statut_Dmde: string;
        agents_interesse: import("http").Agent[];
        _id: any;
        __v?: any;
        $locals: Record<string, unknown>;
        $op: string;
        $where: Record<string, unknown>;
        baseModelName?: string;
        collection: import("mongoose").Collection;
        db: import("mongoose").Connection;
        errors?: import("mongoose").Error.ValidationError;
        id?: any;
        isNew: boolean;
        modelName: string;
        schema: import("mongoose").Schema<any, Model<any, any, any, any>, any>;
    }[]>;
    demandeEffectue(idAgent: string): Promise<{
        agent_demandeur: string;
        Date_Dmde: Date;
        Annee_Scolaire_Dmnde: string;
        Dren_Origine_Dmde: string;
        Dren_Destination_Dmde: string;
        Insp_Destination_Dmde: string;
        Insp_Origin_Dmde: string;
        Libelle_Statut_Dmde: string;
        agents_interesse: import("http").Agent[];
        _id: any;
        __v?: any;
        $locals: Record<string, unknown>;
        $op: string;
        $where: Record<string, unknown>;
        baseModelName?: string;
        collection: import("mongoose").Collection;
        db: import("mongoose").Connection;
        errors?: import("mongoose").Error.ValidationError;
        id?: any;
        isNew: boolean;
        modelName: string;
        schema: import("mongoose").Schema<any, Model<any, any, any, any>, any>;
    }[]>;
    remove(id: number): string;
}
