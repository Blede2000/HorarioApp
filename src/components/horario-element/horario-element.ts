import { Component, Input} from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the HorarioElementComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'horario-element',
  templateUrl: 'horario-element.html'
})
export class HorarioElementComponent {
  

  @Input() element: {index:number, materia: string, cmateria};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('Hello HorarioElementComponent Component');
    
  }

  accessButton(cmateria){
    this.navCtrl.push(cmateria);
  }

}
