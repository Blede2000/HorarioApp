import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PoliticaPage } from "../materias/politica/politica";
import { ReligionPage } from "../materias/religion/religion";
import { SistemasPage } from "../materias/sistemas/sistemas";
import { ArtePage } from "../materias/arte/arte";
import { ConstitucionPage } from "../materias/constitucion/constitucion";
import { EdFisicaPage } from "../materias/ed-fisica/ed-fisica";
import { EmprendimientoPage } from "../materias/emprendimiento/emprendimiento";
import { EspanholPage } from "../materias/espanhol/espanhol";
import { EticaPage } from "../materias/etica/etica";
import { FilosofiaPage } from "../materias/filosofia/filosofia";
import { FisicaPage } from "../materias/fisica/fisica";
import { ICFESPage } from "../materias/icfes/icfes";
import { InglesPage } from "../materias/ingles/ingles";
import { MatematicasPage } from "../materias/matematicas/matematicas";
import { QuimicaPage } from "../materias/quimica/quimica";
import { BiologiaPage } from "../materias/biologia/biologia";
import { GuiaturaPage } from "../materias/guiatura/guiatura";
import { EconomiaPage } from "../materias/economia/economia";


/**
 * Generated class for the AddTareaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-add-tarea',
  templateUrl: 'add-tarea.html',
})
export class AddTareaPage {
  titulo:string;
  desc:string;
  entrega = new Date();
  materias = [
    {value: PoliticaPage, text: 'Politica'},
    {value: ReligionPage, text: 'Religion'},
    {value: SistemasPage, text: 'Sistemas'},
    {value: ArtePage, text: 'Arte'},
    {value: ConstitucionPage, text: 'Constitucion'},
    {value: EdFisicaPage, text: 'Ed Fisica'},
    {value: EmprendimientoPage, text: 'Emprendimiento'},
    {value: EspanholPage, text: 'Español'},
    {value: EticaPage, text: 'Etica'},
    {value: FilosofiaPage, text: 'Filosofia'},
    {value: FisicaPage, text: 'Fisica'},
    {value: ICFESPage, text: 'ICFES'},
    {value: InglesPage, text: 'Ingles'},
    {value: MatematicasPage, text: 'Matematicas'},
    {value: QuimicaPage, text: 'Quimica'},
    {value: BiologiaPage, text: 'Biologia'},
    {value: GuiaturaPage, text: 'Guiatura'},
    {value: EconomiaPage, text: 'Economia'},
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  addUnaTarea(title:string, desc:string){
    console.log(title + desc + this.entrega + this.materias);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTareaPage');
  }

}
