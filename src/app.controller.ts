import { Body, Controller, Get,Post,Render,Param } from '@nestjs/common';
import { AgentsService } from './agents/agents.service';
import { AppService } from './app.service';
import { DemandesService } from './demandes/demandes.service';
import {formatDate} from "./utils/date"

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly agentService : AgentsService,
    private readonly demandeService : DemandesService
  ) {}

  @Get()
  @Render('index')
  async root() {
    const demandes = await this.demandeService.findAll();
    const _demandes = demandes.map((demande)=>(
      {...demande,Date_Dmde:formatDate(demande.Date_Dmde)}
    ))

    return { demandes:_demandes};
  }


  @Get("/apercu-dmde/:id")
  @Render("apercu-dmde")
  async voirDemande(@Param('id') id : string){
    const demande = await this.demandeService.findOne(id);
    return {demande}
  }

  @Get("/inscription")
  @Render('inscription')
  async inscription(){

  }

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



  @Get("/connexion")
  @Render('connexion')
  async connexion(){

  }
}
