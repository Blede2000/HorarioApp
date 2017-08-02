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
import { ArtePage } from "../pages/materias/arte/arte";
import { ConstitucionPage } from "../pages/materias/constitucion/constitucion";
import { EdFisicaPage } from "../pages/materias/ed-fisica/ed-fisica";
import { EmprendimientoPage } from "../pages/materias/emprendimiento/emprendimiento";
import { EspanholPage } from "../pages/materias/espanhol/espanhol";
import { EticaPage } from "../pages/materias/etica/etica";
import { FilosofiaPage } from "../pages/materias/filosofia/filosofia";
import { FisicaPage } from "../pages/materias/fisica/fisica";
import { ICFESPage } from "../pages/materias/icfes/icfes";
import { InglesPage } from "../pages/materias/ingles/ingles";
import { MatematicasPage } from "../pages/materias/matematicas/matematicas";
import { QuimicaPage } from "../pages/materias/quimica/quimica";
import { BiologiaPage } from "../pages/materias/biologia/biologia";
import { GuiaturaPage } from "../pages/materias/guiatura/guiatura";
import { EconomiaPage } from "../pages/materias/economia/economia";


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
    SistemasPage,
    ArtePage,
    ConstitucionPage,
    EdFisicaPage,
    EmprendimientoPage,
    EspanholPage,
    EticaPage,
    FilosofiaPage,
    FisicaPage,
    ICFESPage,
    InglesPage,
    MatematicasPage,
    QuimicaPage,
    BiologiaPage,
    EconomiaPage,
    GuiaturaPage
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
    SistemasPage,
    ArtePage,
    ConstitucionPage,
    EdFisicaPage,
    EmprendimientoPage,
    EspanholPage,
    EticaPage,
    FilosofiaPage,
    FisicaPage,
    ICFESPage,
    InglesPage,
    MatematicasPage,
    QuimicaPage,
    BiologiaPage,
    EconomiaPage,
    GuiaturaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
