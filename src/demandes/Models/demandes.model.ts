import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Agent } from "http";
import {Document,Schema as MongooseSchema} from "mongoose"

@Schema()
export class Demande{

    @Prop({required:true})
    Date_Dmde:Date;

    @Prop({required:true})
    Annee_Scolaire_Dmnde:string;

    @Prop({required:true})
    Dren_Origine_Dmde:string;

    @Prop({required:true})
    Dren_Destination_Dmde:string;

    @Prop({required:true})
    Insp_Destination_Dmde:string;

    @Prop({required:true})
    Insp_Origin_Dmde:string;

    @Prop({required:true,default:"EN COUR"})
    Libelle_Statut_Dmde:string;


    @Prop({ 
        type: MongooseSchema.Types.ObjectId, 
        ref: Agent.name,
        default:null 
    })
    agent_demandeur : Agent;

    @Prop({ type: [{type:MongooseSchema.Types.ObjectId,ref:Agent.name}], default:[]})
    agents_interesse : Agent[]
}

export type DemandeDocument = Demande & Document;
export const DemandeSchema = SchemaFactory.createForClass(Demande);