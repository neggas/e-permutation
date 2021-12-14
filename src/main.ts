import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { engine } from 'express-handlebars';
import flash = require('connect-flash');
import  {dateNaissance,formatDemandeId} from "./utils"



async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );

  app.useStaticAssets(join(__dirname, '..', 'public'));
  const viewsPath = join(__dirname, '..','views');

    const helpers = {
      dateNaissance: (date) => dateNaissance(date),
      DemandeId:(demandeId) => formatDemandeId(demandeId)
    }

  app.engine('.hbs',engine({
    extname:".hbs",defaultLayout:'main',helpers
  }));

  app.set('views', viewsPath);
  app.set('view engine', '.hbs');
  app.use(flash());



  await app.listen(3000);
}
bootstrap();
