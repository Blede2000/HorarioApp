import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HorarioElementComponent  } from "../components/horario-element/horario-element";

import { LunesPage } from '../pages/lunes/lunes';
import { MartesPage } from "../pages/martes/martes";
import { MiercolesPage} from '../pages/miercoles/miercoles'
import { JuevesPage } from "../pages/jueves/jueves";
import { ViernesPage } from "../pages/viernes/viernes";

import { PoliticaPage } from "../pages/materias/politica/politica";
import { ReligionPage } from "../pages/materias/religion/religion";
import { SistemasPage } from "../pages/materias/sistemas/sistemas";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    LunesPage,
    MartesPage,
    MiercolesPage,
    JuevesPage,
    ViernesPage,
    HorarioElementComponent,
    PoliticaPage,
    ReligionPage,
    SistemasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LunesPage,
    MartesPage,
    MiercolesPage,
    JuevesPage,
    ViernesPage,
    HorarioElementComponent,
    PoliticaPage,
    ReligionPage,
    SistemasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
