import { Module } from '@nestjs/common';
import { AgentsController } from './agents.controller';
import { AgentsService } from './agents.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Agent } from 'http';
import { AgentSchema } from './Models/agents.model';
import { DemandesModule } from 'src/demandes/demandes.module';

@Module({
  controllers: [AgentsController],
  providers: [AgentsService],
  imports:[
    MongooseModule.forFeature([{name:Agent.name,schema : AgentSchema}]),
    DemandesModule
  ],
  exports:[AgentsService]
})
export class AgentsModule {}
