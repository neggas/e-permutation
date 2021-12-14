import { DemandesService } from './demandes.service';
import { CreateDemandeDto } from './dto/create-demande.dto';
import { UpdateDemandeDto } from './dto/update-demande.dto';
export declare class DemandesController {
    private readonly demandesService;
    constructor(demandesService: DemandesService);
    create(createDemandeDto: CreateDemandeDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateDemandeDto: UpdateDemandeDto): string;
    remove(id: string): string;
}
