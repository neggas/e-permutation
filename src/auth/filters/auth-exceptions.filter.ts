import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    UnauthorizedException,
    ForbiddenException,
  } from '@nestjs/common';
  import { Request, Response } from 'express';
  
  @Catch(HttpException)
  export class AuthExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<Response>();
      const request = ctx.getRequest<Request>();
      
      if (
        exception instanceof UnauthorizedException ||
        exception instanceof ForbiddenException
      ) {
        request.flash('loginError', 'Email ou mot de pass incorrect');
        response.redirect('/connexion');
      } else {
        response.redirect('/error');
      }
    }
  }