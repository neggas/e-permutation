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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const agents_service_1 = require("./agents/agents.service");
const app_service_1 = require("./app.service");
const demandes_service_1 = require("./demandes/demandes.service");
const date_1 = require("./utils/date");
let AppController = class AppController {
    constructor(appService, agentService, demandeService) {
        this.appService = appService;
        this.agentService = agentService;
        this.demandeService = demandeService;
    }
    async root() {
        const demandes = await this.demandeService.findAll();
        const _demandes = demandes.map((demande) => (Object.assign(Object.assign({}, demande), { Date_Dmde: (0, date_1.formatDate)(demande.Date_Dmde) })));
        return { demandes: _demandes };
    }
    async voirDemande(id) {
        const demande = await this.demandeService.findOne(id);
        return { demande };
    }
    async inscription() {
    }
    async resultats() {
        return;
    }
    async faireUneDemande(payload) {
        return await this.agentService.registerAgent(payload);
    }
    async connexion() {
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)('index'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "root", null);
__decorate([
    (0, common_1.Get)("/apercu-dmde/:id"),
    (0, common_1.Render)("apercu-dmde"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "voirDemande", null);
__decorate([
    (0, common_1.Get)("/inscription"),
    (0, common_1.Render)('inscription'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "inscription", null);
__decorate([
    (0, common_1.Get)("/resultats"),
    (0, common_1.Render)('resultats'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "resultats", null);
__decorate([
    (0, common_1.Post)("/inscription"),
    (0, common_1.Render)('inscription'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "faireUneDemande", null);
__decorate([
    (0, common_1.Get)("/connexion"),
    (0, common_1.Render)('connexion'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "connexion", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService,
        agents_service_1.AgentsService,
        demandes_service_1.DemandesService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map