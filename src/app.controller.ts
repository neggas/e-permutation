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
  async root(@Request() req) {
    const demandes = await this.demandeService.findAll();
    const _demandes = demandes.map((demande)=>(
      {...demande,Date_Dmde:formatDate(demande.Date_Dmde)}
    ))

    console.log({..._demandes,user:req.user})
    return { demandes:{..._demandes,user:req.user}};
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
  async voirDemande(@Param('id') id : string,@Request() req){
    const {_doc:agent} = req.user
    const demande = await this.demandeService.findOne(id);
    const hasApplied = demande.agents_interesse?.filter(agn => agn.toString() == agent._id.toString()).length >= 0 ? true : false
  
    let currentAgent = {...agent,isNotMyPost:agent.demande != id && !hasApplied}
    return {demande : {...demande,currentAgent,hasApplied}}
  }

  @UseGuards(AuthenticatedGuard)
  @Post("/reponse/:id")
  async postResponse(@Param('id') id : string,@Request() req,@Res() res:Response){
    const demande = await this.demandeService.findOne(id);
    const {_doc:agent} = req.user
    demande.agents_interesse.push(agent._id);
    const updatedDemande = await this.demandeService.update(id,demande)

    if(updatedDemande){
      return res.redirect("/")
    }
  }

  @UseGuards(AuthenticatedGuard)
  @Get("/reponse/:id")
  @Render("reponse-demande")
  async responseDemande(@Param('id') id : string,@Request() req){
    const {_doc:agent} = req.user
    const demande = await this.demandeService.findOne(id);

    return {data : {...agent,...demande}}
  }




}
