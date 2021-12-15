import { Module } from '@nestjs/common';
import { AgentsModule } from 'src/agents/agents.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { SessionSerializer } from './serializer/session.serializer';
import { LocalStrategy } from './strategy/local.strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService,LocalStrategy,SessionSerializer],
  imports:[AgentsModule],
  exports:[AuthService]
})
export class AuthModule {}
