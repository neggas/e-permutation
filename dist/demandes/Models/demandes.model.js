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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DemandeSchema = exports.Demande = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const http_1 = require("http");
const mongoose_2 = require("mongoose");
let Demande = class Demande {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Date)
], Demande.prototype, "Date_Dmde", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Demande.prototype, "Annee_Scolaire_Dmnde", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Demande.prototype, "Dren_Origine_Dmde", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Demande.prototype, "Dren_Destination_Dmde", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Demande.prototype, "Insp_Destination_Dmde", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Demande.prototype, "Insp_Origin_Dmde", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: "EN COUR" }),
    __metadata("design:type", String)
], Demande.prototype, "Libelle_Statut_Dmde", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Schema.Types.ObjectId,
        ref: http_1.Agent.name,
        default: null
    }),
    __metadata("design:type", http_1.Agent)
], Demande.prototype, "agent_demandeur", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [{ type: mongoose_2.Schema.Types.ObjectId, ref: http_1.Agent.name }], default: [] }),
    __metadata("design:type", Array)
], Demande.prototype, "agents_interesse", void 0);
Demande = __decorate([
    (0, mongoose_1.Schema)()
], Demande);
exports.Demande = Demande;
exports.DemandeSchema = mongoose_1.SchemaFactory.createForClass(Demande);
//# sourceMappingURL=demandes.model.js.map