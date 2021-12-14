import { Module } from '@nestjs/common';
import { AgentsModule } from 'src/agents/agents.module';
import { AuthService } from './auth.service';
import { SessionSerializer } from './serializer/session.serializer';
import {LocalStrategy} from "./strategy/local.trategy";
import { PassportModule } from '@nestjs/passport';

@Module({
  providers: [AuthService,LocalStrategy,SessionSerializer],
  imports:[AgentsModule,PassportModule]
})
export class AuthModule {}
