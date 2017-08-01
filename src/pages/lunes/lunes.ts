import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

import { PoliticaPage } from "../materias/politica/politica";
import { ReligionPage } from "../materias/religion/religion";
import { SistemasPage } from "../materias/sistemas/sistemas";

/**
 * Generated class for the LunesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-lunes',
  templateUrl: 'lunes.html',
})
export class LunesPage {
  materias = [{index: 1, materia: 'Politica', cmateria: PoliticaPage},
  {index: 2, materia: "Religion", cmateria: ReligionPage}, 
  {index: 3, materia: 'Sistemas', cmateria: SistemasPage}, 
  {index: 4, materia: 'Ingles'},
  {index: 5, materia: 'Ingles'},
  {index: 6, materia: 'Español'},
  {index: 7, materia: 'Matematicas'}];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LunesPage');
  }

}
