"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DemandesService = void 0;
const common_1 = require("@nestjs/common");
const demandes_model_1 = require("./Models/demandes.model");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let DemandesService = class DemandesService {
    constructor(DemandeModel) {
        this.DemandeModel = DemandeModel;
    }
    create(demande) {
        const _demande = new this.DemandeModel(demande);
        return _demande.save();
    }
    async findAll() {
        return await this.DemandeModel.find().lean().populate("agent_demandeur").exec();
    }
    async findOne(id) {
        return await this.DemandeModel.findById(id).lean().populate("agent_demandeur").exec();
    }
    async update(id, payload) {
        return await this.DemandeModel.findByIdAndUpdate({ _id: id }, Object.assign({}, payload), { new: true }).exec();
    }
    async allAgentDemande(idAgent) {
        let demandes = await this.DemandeModel.find().exec();
        let modemandes = demandes.map(dmd => { var _a; return (Object.assign(Object.assign({}, dmd), { agent_demandeur: (_a = dmd.agent_demandeur) === null || _a === void 0 ? void 0 : _a.toString() })); });
        let filtered = await modemandes.filter(dmd => dmd.agent_demandeur == idAgent);
        return filtered;
    }
    async demandeEffectue(idAgent) {
        const filtered = await this.allAgentDemande(idAgent);
        return await filtered.filter(dmd => { var _a; return ((_a = dmd.Libelle_Statut_Dmde) === null || _a === void 0 ? void 0 : _a.toLowerCase()) == 'effectue'; });
    }
    remove(id) {
        return `This action removes a #${id} demande`;
    }
};
DemandesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(demandes_model_1.Demande.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], DemandesService);
exports.DemandesService = DemandesService;
//# sourceMappingURL=demandes.service.js.map