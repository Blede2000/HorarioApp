import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

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
   materias = [{index: 1, materia: 'Etica'},
  {index: 2, materia: "Ed. Fisica"}, 
  {index: 3, materia: 'Fisica'}, 
  {index: 4, materia: 'Quimica'},
  {index: 5, materia: 'Quimica'},
  {index: 6, materia: 'Español'},
  {index: 7, materia: 'Filosofia'}];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MartesPage');
  }

}
