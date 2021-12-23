import { 
  Body, 
  Controller, 
  Get,
  Post,Render,
  Param,UseGuards,Request, 
  UseFilters,
  Res, 
  ConsoleLogger
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


  // Index
  @Get('/')
  @Render('index')
  async root(@Request() req) {
    const demandes = await this.demandeService.findAll();
    const _demandes = demandes.map((demande)=>(
      {...demande,Date_Dmde:formatDate(demande.Date_Dmde)}
    ))

    return { 
        demandes:{
          _demandes,
          user:req.user
        }
    };
  }
  
  // GET Connexion
  @Get("/connexion")
  @Render('connexion')
  connexion(@Request() req):{message:string}{
    return {message:req.flash('loginError')}
  }

  // Connexion
  @UseGuards(LoginGuard)
  @Post("/connexion")
  async login(@Request() req,@Res() res:Response){ 
  
    const userId = req.user._doc._id.toString()
    const nb_connexon =  req.user._doc.nb_connexon += 1;
    const agent = await this.agentService.updateAgentConexion(userId,nb_connexon);

    res.redirect('/')
  } 


  @Get("/inscription")
  @Render('inscription')
  async inscription(@Request() req){

    return {agent:req.user}
  }

  // VOIR RESULTAT
  @UseGuards(AuthenticatedGuard)
  @Get("/resultats")
  @Render('resultats')
  async resultats(@Request() req){
    const demandes = await this.demandeService.findAll();
    const _demandes = demandes.map((demande)=>(
      {...demande,Date_Dmde:formatDate(demande.Date_Dmde)}
    ))

    return { demandes:{..._demandes,agent:req.user}};
  }
  

  // INSCRIPTION
  @Post("/inscription")
  @Render('inscription')
  async faireUneDemande(@Body() payload){
    return await  this.agentService.registerAgent(payload)
  }


  // Voir demande
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

  @Get("/dashboard/nlle_demande")
  nouvelleDemande(@Res() res:Response){
    res.redirect("/inscription")
  }


  // Post response
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

  // Response de mande
  @UseGuards(AuthenticatedGuard)
  @Get("/reponse/:id")
  @Render("reponse-demande")
  async responseDemande(@Param('id') id : string,@Request() req){
    const {_doc:agent} = req.user
    const demande = await this.demandeService.findOne(id);

    return {data : {...agent,...demande}}
  }

  // Contact
  @Get("/contact")
  @Render("contact")
  contact(@Request() req){
    return {agent:req.user};
  }
  

  // dashboard
  @UseGuards(AuthenticatedGuard)
  @Get("/dashboard")
  @Render("agent/dash-dmdeur")
  async dashDmndeur(@Request() req){
    const {_doc:agent} = req.user
    const demandes = await this.demandeService.allAgentDemande(agent._id.toString())
    const demandeEffectuer = await this.demandeService.demandeEffectue(agent._id.toString());

    const answerTime = await this.demandeService.getAnwserTimes(agent._id.toString())


    return {
      data:{
        nb_permutation:demandes.length,nb_effectuer:demandeEffectuer.length,agent,answerTime
      }
    }
  }


  // LISTE DES DEMANDES
  @UseGuards(AuthenticatedGuard)
  @Get("/dashboard/liste-dmd")
  @Render("agent/liste-dmd")
  async listeDemande(@Request() req){

    const demandes = await this.demandeService.findAll();
    return {demandes}
  }

  
  // VOIR STATUS DEMANDE
  @UseGuards(AuthenticatedGuard)
  @Get("/dashboard/statut-dmd")
  @Render("agent/statut-dmd")
  statusDemande(@Request() req){

    return
  }


  // VOIR DEMANDE APPROUVEE
  @UseGuards(AuthenticatedGuard)
  @Get("/dashboard/dmd-approuvee")
  @Render("agent/dmd-approuvee")
  demandeApprouve(@Request() req){

    return
  }


  // CONSULTATION DEMANDE DASHBOARD
  @UseGuards(AuthenticatedGuard)
  @Get("/dashboard/consultation_demande/:id")
  @Render("agent/consultation_demande")
  async consultationDemande(@Param('id') id:string,  @Request() req){
    const demande = await this.demandeService.findOne(id);
    return {demande}
  }








}
