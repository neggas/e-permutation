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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DemandesController = void 0;
const common_1 = require("@nestjs/common");
const demandes_service_1 = require("./demandes.service");
const create_demande_dto_1 = require("./dto/create-demande.dto");
const update_demande_dto_1 = require("./dto/update-demande.dto");
let DemandesController = class DemandesController {
    constructor(demandesService) {
        this.demandesService = demandesService;
    }
    create(createDemandeDto) {
        return this.demandesService.create(createDemandeDto);
    }
    findAll() {
        return this.demandesService.findAll();
    }
    findOne(id) {
        return this.demandesService.findOne(+id);
    }
    update(id, updateDemandeDto) {
        return this.demandesService.update(+id, updateDemandeDto);
    }
    remove(id) {
        return this.demandesService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof create_demande_dto_1.CreateDemandeDto !== "undefined" && create_demande_dto_1.CreateDemandeDto) === "function" ? _a : Object]),
    __metadata("design:returntype", void 0)
], DemandesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DemandesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DemandesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_b = typeof update_demande_dto_1.UpdateDemandeDto !== "undefined" && update_demande_dto_1.UpdateDemandeDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], DemandesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DemandesController.prototype, "remove", null);
DemandesController = __decorate([
    (0, common_1.Controller)('demandes'),
    __metadata("design:paramtypes", [demandes_service_1.DemandesService])
], DemandesController);
exports.DemandesController = DemandesController;
//# sourceMappingURL=demandes.controller.js.map