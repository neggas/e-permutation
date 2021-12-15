import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AgentsModule } from './agents/agents.module';
import { MongooseModule } from '@nestjs/mongoose';

import {MONGO_HOST,MONGO_PASS,MONGO_USER,MONGO_DB} from "./env"
import { AgentsService } from './agents/agents.service';
import { DemandesModule } from './demandes/demandes.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [AgentsModule, 
    MongooseModule.forRoot(`mongodb+srv://${MONGO_USER}:${MONGO_PASS}${MONGO_HOST}/${MONGO_DB}?retryWrites=true&w=majority`),
     DemandesModule,
     AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
