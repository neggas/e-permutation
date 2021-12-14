import { Module } from '@nestjs/common';
import { AgentsModule } from 'src/agents/agents.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports:[AgentsModule]
})
export class AuthModule {}
