import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document,Schema as MongooseSchema} from "mongoose"
import { Demande } from "src/demandes/Models/demandes.model";

@Schema()
export class Agent{

    @Prop({required:true})
    nom_Agt:string;

    @Prop({required:true})
    prenoms_Agt:string;

    @Prop({required:false,default:""})  
    Nom_Jeune_Fille_Agt:string

    @Prop({required:true})
    sex_Agt:string;

    @Prop({required:true})
    Matricule_agt:string;

    @Prop({required:true})
    Fonction_Agt:string;

    @Prop({required:true})
    sit_Matrimonial_Agt:string;

    @Prop({required:true})
    Date_Premier_Prise_Serv_Agt:Date;

    @Prop({required:true})
    Contact_Agt:string;

    @Prop({required:true})
    Date_Naiss_agt:Date;

    @Prop()
    Emploi_Agt:string;

    @Prop()
    Dir_Reg_Agt:string;

    @Prop()
    IEP_Agt:string;

    @Prop()
    Etabl_Serv_Agt:string;

    @Prop({required:true})
    Login_Agt:string;

    @Prop({required:true})
    Pass_Agt:string;

    @Prop({required:true})
    Discipline_Agt:string;

    @Prop({required:true})
    Email_Agt:string;

    @Prop({ 
        type: MongooseSchema.Types.ObjectId, 
        ref: Demande.name,
        default:null 
    })
    demande:Demande
}

export type AgentDocument = Agent & Document;
export const AgentSchema = SchemaFactory.createForClass(Agent);