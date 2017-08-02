import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { BiologiaPage } from "../materias/biologia/biologia";
import { EdFisicaPage } from "../materias/ed-fisica/ed-fisica";
import { MatematicasPage } from "../materias/matematicas/matematicas";
import { ArtePage } from "../materias/arte/arte";
import { FilosofiaPage } from "../materias/filosofia/filosofia";
import { FisicaPage } from "../materias/fisica/fisica";
import { InglesPage } from "../materias/ingles/ingles";

/**
 * Generated class for the JuevesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-jueves',
  templateUrl: 'jueves.html',
})
export class JuevesPage {
  materias = [{index: 1, materia: 'Biologia', cmateria: BiologiaPage},
  {index: 2, materia: "Ed. Fisica", cmateria: EdFisicaPage}, 
  {index: 3, materia: 'Matematicas', cmateria: MatematicasPage}, 
  {index: 4, materia: 'Arte', cmateria: ArtePage},
  {index: 5, materia: 'Filosofia', cmateria: FilosofiaPage},
  {index: 6, materia: 'Fisica', cmateria: FisicaPage},
  {index: 7, materia: 'Ingles', cmateria: InglesPage}];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JuevesPage');
  }

}
