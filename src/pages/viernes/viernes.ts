import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

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
    materias = [{index: 1, materia: 'Ingles'},
  {index: 2, materia: "Guiatura"}, 
  {index: 3, materia: 'ICFES'}, 
  {index: 4, materia: 'Español'},
  {index: 5, materia: 'Matematicas'},
  {index: 6, materia: 'Matematicas'},
  {index: 7, materia: 'Economia'}];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViernesPage');
  }

}
