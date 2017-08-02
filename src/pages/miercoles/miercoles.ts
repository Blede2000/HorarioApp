import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

import { InglesPage } from "../materias/ingles/ingles";
import { EspanholPage } from "../materias/espanhol/espanhol";
import { FisicaPage } from "../materias/fisica/fisica";
import { ConstitucionPage } from "../materias/constitucion/constitucion";
import { ReligionPage } from "../materias/religion/religion";
import { EmprendimientoPage } from "../materias/emprendimiento/emprendimiento";

/**
 * Generated class for the MiercolesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-miercoles',
  templateUrl: 'miercoles.html',
})
export class MiercolesPage {
  materias = [{index: 1, materia: 'Ingles/Conversacion', cmateria: InglesPage},
  {index: 2, materia: "Español", cmateria: EspanholPage}, 
  {index: 3, materia: 'Español', cmateria: EspanholPage}, 
  {index: 4, materia: 'Fisica', cmateria: FisicaPage},
  {index: 5, materia: 'Constitucion', cmateria: ConstitucionPage},
  {index: 6, materia: 'Religion', cmateria: ReligionPage},
  {index: 7, materia: 'Emprendimiento', cmateria: EmprendimientoPage}];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MiercolesPage');
  }

}
