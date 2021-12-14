import { Module } from '@nestjs/common';
import { DemandesService } from './demandes.service';
import {Demande,DemandeSchema} from "./Models/demandes.model"
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [],
  imports:[
    MongooseModule.forFeature([{name:Demande.name,schema : DemandeSchema}]),
  ],
  providers: [DemandesService],
  exports:[DemandesService]
})
export class DemandesModule {}
