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
    update(id: number, updateDemandeDto: any): string;
    remove(id: number): string;
}
