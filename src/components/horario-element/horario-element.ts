import { Component, Input} from '@angular/core';


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
  

  @Input() element: {index:number, materia: string};

  constructor() {
    console.log('Hello HorarioElementComponent Component');
    
  }

}
