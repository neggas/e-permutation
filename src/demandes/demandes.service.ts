import { Injectable } from '@nestjs/common';
import { Demande,DemandeDocument } from './Models/demandes.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


@Injectable()
export class DemandesService {

  constructor(@InjectModel(Demande.name) private readonly DemandeModel : Model<DemandeDocument>){}
  create(demande) {
    const _demande = new this.DemandeModel(demande);
    return _demande.save()
  }

  async findAll() {
    return await this.DemandeModel.find().lean().populate("agent_demandeur").exec();
  }

  async findOne(id: string) {
    return await this.DemandeModel.findById(id).lean().populate("agent_demandeur").exec();
  }

  async update(id: string,payload) {
    return await this.DemandeModel.findByIdAndUpdate({_id:id},{...payload},{new:true}).exec();
  }

  remove(id: number) {
    return `This action removes a #${id} demande`;
  }
}
