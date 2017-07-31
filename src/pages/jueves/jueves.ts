import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
  materias = [{index: 1, materia: 'Biologia'},
  {index: 2, materia: "Ed. Fisica"}, 
  {index: 3, materia: 'Matematicas'}, 
  {index: 4, materia: 'Arte'},
  {index: 5, materia: 'Filosofia'},
  {index: 6, materia: 'Fisica'},
  {index: 7, materia: 'Ingles'}];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JuevesPage');
  }

}
