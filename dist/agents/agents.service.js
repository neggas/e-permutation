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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const agents_model_1 = require("./Models/agents.model");
const demandes_service_1 = require("../demandes/demandes.service");
let AgentsService = class AgentsService {
    constructor(AgentModel, demandeService) {
        this.AgentModel = AgentModel;
        this.demandeService = demandeService;
    }
    async registerAgent(payload) {
        const { Dren_Destination_Dmde, Design_Cat_Dmde, Insp_Destination_Dmde, terms } = payload, agent = __rest(payload, ["Dren_Destination_Dmde", "Design_Cat_Dmde", "Insp_Destination_Dmde", "terms"]);
        let _agent = new this.AgentModel(agent);
        _agent = await _agent.save();
        if (_agent) {
            const annee = new Date();
            const demande = {
                Date_Dmde: annee,
                Dren_Origine_Dmde: _agent.Dir_Reg_Agt,
                Dren_Destination_Dmde,
                Insp_Destination_Dmde,
                Insp_Origin_Dmde: _agent.Dir_Reg_Agt,
                Annee_Scolaire_Dmnde: `${annee.getFullYear()}-${annee.getFullYear() + 1}`,
                agent_demandeur: _agent._id
            };
            const createdDemande = await this.demandeService.create(demande);
            _agent = await this.updateAgent({ _id: _agent._id, demande: createdDemande._id });
        }
        return _agent;
    }
    async updateAgent(agentDocument) {
        return await this.AgentModel.findByIdAndUpdate(agentDocument._id, Object.assign({}, agentDocument), { new: true }).exec();
    }
    async findAgent(payload) {
        const agent = await this.AgentModel.findOne({ Email_Agt: payload }).exec();
        return agent;
    }
};
AgentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(agents_model_1.Agent.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        demandes_service_1.DemandesService])
], AgentsService);
exports.AgentsService = AgentsService;
//# sourceMappingURL=agents.service.js.map