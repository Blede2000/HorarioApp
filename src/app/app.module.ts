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
    HorarioElementComponent
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
    HorarioElementComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
