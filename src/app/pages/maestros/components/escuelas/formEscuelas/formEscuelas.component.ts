import {Component, Input, Output, EventEmitter} from '@angular/core';
//Output permite definir eventos de salida
//Lanzar eventos para ser capturados en otros componentes

import { Escuela } from '../escuela'; 


@Component({
  moduleId:'module.id',
  selector: 'form-escuelas',
  templateUrl: './formEscuelas.html',
})
export class FormEscuelas {
  //model :Escuela = new Escuela(1,'Prueba','Prueba','Prueba','Prueba','Prueba');
  @Input() model:Escuela;

  @Output() onsubmit=new EventEmitter<any>();

  public submit(){
    this.onsubmit.emit(this.model);
  }
  constructor() {
    
  }
}
