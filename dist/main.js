"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path_1 = require("path");
const express_handlebars_1 = require("express-handlebars");
const flash = require("connect-flash");
const utils_1 = require("./utils");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'public'));
    const viewsPath = (0, path_1.join)(__dirname, '..', 'views');
    const helpers = {
        dateNaissance: (date) => (0, utils_1.dateNaissance)(date),
        DemandeId: (demandeId) => (0, utils_1.formatDemandeId)(demandeId)
    };
    app.engine('.hbs', (0, express_handlebars_1.engine)({
        extname: ".hbs", defaultLayout: 'main', helpers
    }));
    app.set('views', viewsPath);
    app.set('view engine', '.hbs');
    app.use(flash());
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map