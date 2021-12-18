import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { engine } from 'express-handlebars';
import flash = require('connect-flash');
import  {dateNaissance,formatDemandeId} from "./utils"
import * as session from 'express-session';
import * as passport from 'passport';


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );

  app.useStaticAssets(join(__dirname, '..', 'public'));
  const viewsPath = join(__dirname, '..','views');

    const helpers = {
      dateNaissance: (date) => dateNaissance(date),
      DemandeId:(demandeId) => formatDemandeId(demandeId),
      pad:(number) => `${number}`.padStart(2, '0'),
      ispending:(value) => value === "EN COUR" ?  true : false,
      isreject:(value) => value === "REJETE" ?  true : false,
      issuccess:(value) => value === "success" ?  true : false
    }

  app.engine('.hbs',engine({
    extname:".hbs",
    defaultLayout:'main',
    helpers,
    partialsDir:join(__dirname, '..','views','partials')
  }));

  app.set('views', viewsPath);
  app.set('view engine', '.hbs');

  app.use(
    session({
      secret: 'nest cats',
      resave: false,
      saveUninitialized: false,
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());
  app.use(flash());

 

  const Port = process.env.PORT || 3000;
  app.enableCors();
  await app.listen(Port);
}
bootstrap();
