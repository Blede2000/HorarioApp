import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

import { InglesPage } from "../materias/ingles/ingles";
import { GuiaturaPage } from "../materias/guiatura/guiatura";
import { ICFESPage } from "../materias/icfes/icfes";
import { EspanholPage } from "../materias/espanhol/espanhol";
import { MatematicasPage } from "../materias/matematicas/matematicas";
import { EconomiaPage } from "../materias/economia/economia";

/**
 * Generated class for the ViernesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-viernes',
  templateUrl: 'viernes.html',
})
export class ViernesPage {
    materias = [{index: 1, materia: 'Ingles', cmateria: InglesPage},
  {index: 2, materia: "Guiatura", cmateria: GuiaturaPage}, 
  {index: 3, materia: 'ICFES', cmateria: ICFESPage}, 
  {index: 4, materia: 'Español', cmateria: EspanholPage},
  {index: 5, materia: 'Matematicas', cmateria: MatematicasPage},
  {index: 6, materia: 'Matematicas', cmateria: MatematicasPage},
  {index: 7, materia: 'Economia', cmateria: EconomiaPage}];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViernesPage');
  }

}
