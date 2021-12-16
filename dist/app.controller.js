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
const auth_exceptions_filter_1 = require("./auth/filters/auth-exceptions.filter");
const authenticated_guard_1 = require("./auth/guards/authenticated.guard");
const login_guard_1 = require("./auth/guards/login.guard");
const demandes_service_1 = require("./demandes/demandes.service");
const date_1 = require("./utils/date");
let AppController = class AppController {
    constructor(appService, agentService, demandeService) {
        this.appService = appService;
        this.agentService = agentService;
        this.demandeService = demandeService;
    }
    async root(req) {
        const demandes = await this.demandeService.findAll();
        const _demandes = demandes.map((demande) => (Object.assign(Object.assign({}, demande), { Date_Dmde: (0, date_1.formatDate)(demande.Date_Dmde) })));
        return { demandes: Object.assign(Object.assign({}, _demandes), { user: req.user }) };
    }
    connexion(req) {
        return { message: req.flash('loginError') };
    }
    async login(req, res) {
        const userId = req.user._doc._id.toString();
        const nb_connexon = req.user._doc.nb_connexon += 1;
        const agent = await this.agentService.updateAgentConexion(userId, nb_connexon);
        res.redirect('/');
    }
    async inscription() {
    }
    async resultats() {
        return;
    }
    async faireUneDemande(payload) {
        return await this.agentService.registerAgent(payload);
    }
    async voirDemande(id, req) {
        var _a;
        const { _doc: agent } = req.user;
        const demande = await this.demandeService.findOne(id);
        const hasApplied = ((_a = demande.agents_interesse) === null || _a === void 0 ? void 0 : _a.filter(agn => agn.toString() == agent._id.toString()).length) >= 0 ? true : false;
        let currentAgent = Object.assign(Object.assign({}, agent), { isNotMyPost: agent.demande != id && !hasApplied });
        return { demande: Object.assign(Object.assign({}, demande), { currentAgent, hasApplied }) };
    }
    async postResponse(id, req, res) {
        const demande = await this.demandeService.findOne(id);
        const { _doc: agent } = req.user;
        demande.agents_interesse.push(agent._id);
        const updatedDemande = await this.demandeService.update(id, demande);
        if (updatedDemande) {
            return res.redirect("/");
        }
    }
    async responseDemande(id, req) {
        const { _doc: agent } = req.user;
        const demande = await this.demandeService.findOne(id);
        return { data: Object.assign(Object.assign({}, agent), demande) };
    }
    contact() {
        return;
    }
    async dashDmndeur(req) {
        const { _doc: agent } = req.user;
        const demandes = await this.demandeService.allAgentDemande(agent._id.toString());
        const demandeEffectuer = await this.demandeService.demandeEffectue(agent._id.toString());
        const answerTime = await this.demandeService.getAnwserTimes(agent._id.toString());
        return {
            data: {
                nb_permutation: demandes.length, nb_effectuer: demandeEffectuer.length, agent, answerTime
            }
        };
    }
    async listeDemande(req) {
        const demandes = await this.demandeService.findAll();
        return { demandes };
    }
    statusDemande(req) {
        return;
    }
    demandeApprouve(req) {
        return;
    }
    consultationDemande(req) {
        return;
    }
};
__decorate([
    (0, common_1.Get)('/'),
    (0, common_1.Render)('index'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "root", null);
__decorate([
    (0, common_1.Get)("/connexion"),
    (0, common_1.Render)('connexion'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], AppController.prototype, "connexion", null);
__decorate([
    (0, common_1.UseGuards)(login_guard_1.LoginGuard),
    (0, common_1.Post)("/connexion"),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "login", null);
__decorate([
    (0, common_1.Get)("/inscription"),
    (0, common_1.Render)('inscription'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "inscription", null);
__decorate([
    (0, common_1.UseGuards)(authenticated_guard_1.AuthenticatedGuard),
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
    (0, common_1.UseGuards)(authenticated_guard_1.AuthenticatedGuard),
    (0, common_1.Get)("/apercu-dmde/:id"),
    (0, common_1.Render)("apercu-dmde"),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "voirDemande", null);
__decorate([
    (0, common_1.UseGuards)(authenticated_guard_1.AuthenticatedGuard),
    (0, common_1.Post)("/reponse/:id"),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "postResponse", null);
__decorate([
    (0, common_1.UseGuards)(authenticated_guard_1.AuthenticatedGuard),
    (0, common_1.Get)("/reponse/:id"),
    (0, common_1.Render)("reponse-demande"),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "responseDemande", null);
__decorate([
    (0, common_1.Get)("/contact"),
    (0, common_1.Render)("contact"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "contact", null);
__decorate([
    (0, common_1.UseGuards)(authenticated_guard_1.AuthenticatedGuard),
    (0, common_1.Get)("/dashboard"),
    (0, common_1.Render)("agent/dash-dmdeur"),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "dashDmndeur", null);
__decorate([
    (0, common_1.Get)("/dashboard/liste-dmd"),
    (0, common_1.Render)("agent/liste-dmd"),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "listeDemande", null);
__decorate([
    (0, common_1.Get)("/dashboard/statut-dmd"),
    (0, common_1.Render)("agent/statut-dmd"),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "statusDemande", null);
__decorate([
    (0, common_1.Get)("/dashboard/dmd-approuvee"),
    (0, common_1.Render)("agent/dmd-approuvee"),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "demandeApprouve", null);
__decorate([
    (0, common_1.Get)("/dashboard/consultation_demande"),
    (0, common_1.Render)("agent/consultation_demande"),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "consultationDemande", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    (0, common_1.UseFilters)(auth_exceptions_filter_1.AuthExceptionFilter),
    __metadata("design:paramtypes", [app_service_1.AppService,
        agents_service_1.AgentsService,
        demandes_service_1.DemandesService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map