import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

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
  materias = [{index: 1, materia: 'Politica'},
  {index: 2, materia: "Religion"}, 
  {index: 3, materia: 'Sistemas'}, 
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
