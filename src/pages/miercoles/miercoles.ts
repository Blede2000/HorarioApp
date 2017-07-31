import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

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
  materias = [{index: 1, materia: 'Conversacion'},
  {index: 2, materia: "Español"}, 
  {index: 3, materia: 'Español'}, 
  {index: 4, materia: 'Fisica'},
  {index: 5, materia: 'Constitucion'},
  {index: 6, materia: 'Religion'},
  {index: 7, materia: 'Emprendimiento'}];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MiercolesPage');
  }

}
