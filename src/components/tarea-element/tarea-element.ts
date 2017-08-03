import { Component, Input } from '@angular/core';

/**
 * Generated class for the TareaElementComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'tarea-element',
  templateUrl: 'tarea-element.html'
})
export class TareaElementComponent {
  text: string;
  @Input() tareaElement: {titulo:string, descripcion:string, creado:Date, para:Date};

  constructor() {
    console.log('Hello TareaElementComponent Component');
    this.text = 'Hello World';
  }

}
