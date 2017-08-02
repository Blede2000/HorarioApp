import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';


import { EticaPage } from "../materias/etica/etica";
import { EdFisicaPage } from "../materias/ed-fisica/ed-fisica";
import { FisicaPage } from "../materias/fisica/fisica";
import { QuimicaPage } from "../materias/quimica/quimica";
import { EspanholPage } from "../materias/espanhol/espanhol";
import { FilosofiaPage } from "../materias/filosofia/filosofia";

/**
 * Generated class for the MartesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-martes',
  templateUrl: 'martes.html',
})
export class MartesPage {
   materias = [{index: 1, materia: 'Etica', cmateria: EticaPage},
  {index: 2, materia: "Ed. Fisica", cmateria:EdFisicaPage}, 
  {index: 3, materia: 'Fisica',cmateria:FisicaPage}, 
  {index: 4, materia: 'Quimica', cmateria: QuimicaPage},
  {index: 5, materia: 'Quimica', cmateria: QuimicaPage},
  {index: 6, materia: 'Español',cmateria: EspanholPage},
  {index: 7, materia: 'Filosofia', cmateria:FilosofiaPage}];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MartesPage');
  }

}
