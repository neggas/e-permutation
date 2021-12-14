
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(Email_Agt: string, Pass_Agt: string) {

    console.log(Email_Agt)
    const agent = await this.authService.validateUser(Email_Agt, Pass_Agt);
    if (!agent) {
      throw new UnauthorizedException();
    }
    return agent;
  }
}