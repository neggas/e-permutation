import { 
  Body, 
  Controller, 
  Get,
  Post,Render,
  Param,UseGuards,Request, 
  UseFilters,
  Res 
} from '@nestjs/common';
import { AgentsService } from './agents/agents.service';
import { AppService } from './app.service';
import { AuthExceptionFilter } from './auth/filters/auth-exceptions.filter';
import { AuthenticatedGuard } from './auth/guards/authenticated.guard';
import { LoginGuard } from './auth/guards/login.guard';
import { DemandesService } from './demandes/demandes.service';
import {formatDate} from "./utils/date";

import { Response } from 'express';


@Controller()
@UseFilters(AuthExceptionFilter)
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly agentService : AgentsService,
    private readonly demandeService : DemandesService,
  ) {}

  @Get('/')
  @Render('index')
  async root() {
    const demandes = await this.demandeService.findAll();
    const _demandes = demandes.map((demande)=>(
      {...demande,Date_Dmde:formatDate(demande.Date_Dmde)}
    ))

    return { demandes:_demandes};
  }

  @Get("/connexion")
  @Render('connexion')
  connexion(@Request() req):{message:string}{
    return {message:req.flash('loginError')}
  }

  @UseGuards(LoginGuard)
  @Post("/connexion")

  login(@Request() req,@Res() res:Response){ 
   res.redirect('/')
  } 


  @Get("/inscription")
  @Render('inscription')
  async inscription(){

  }

  @UseGuards(AuthenticatedGuard)
  @Get("/resultats")
  @Render('resultats')
  async resultats(){
    return;
  }

  @Post("/inscription")
  @Render('inscription')
  async faireUneDemande(@Body() payload){
    return await  this.agentService.registerAgent(payload)
  }


  @UseGuards(AuthenticatedGuard)
  @Get("/apercu-dmde/:id")
  @Render("apercu-dmde")
  async voirDemande(@Param('id') id : string){
    const demande = await this.demandeService.findOne(id);
    return {demande}
  }




}
