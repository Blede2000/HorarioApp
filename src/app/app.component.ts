import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LunesPage } from '../pages/lunes/lunes';
import { MartesPage } from "../pages/martes/martes";
import { MiercolesPage} from '../pages/miercoles/miercoles'
import { JuevesPage } from "../pages/jueves/jueves";
import { ViernesPage } from "../pages/viernes/viernes";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LunesPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Lunes', component: LunesPage },
      { title: 'Martes', component: MartesPage },
      { title: 'Miercoles', component: MiercolesPage },
      { title: 'Jueves', component: JuevesPage },
      { title: 'Viernes', component: ViernesPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
