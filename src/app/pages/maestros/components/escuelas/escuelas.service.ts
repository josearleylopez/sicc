import { Injectable } from '@angular/core';
import { Escuela } from './escuela';


@Injectable()
export class EscuelasService {

  escuelasDatos: Array<Escuela> = [
    new Escuela(1, 'Escuela Uno', 'Centro', 'Dosquebradas', 'Risaralda'),
    new Escuela(2, 'Escuela Dos', 'Centro', 'Dosquebradas', 'Risaralda'),
    new Escuela(3, 'Escuela Tres', 'Centro', 'Dosquebradas', 'Risaralda'),
    new Escuela(4, 'Escuela Cuatro', 'Centro', 'Dosquebradas', 'Risaralda'),
    new Escuela(5, 'Escuela Cinco', 'Centro', 'Dosquebradas', 'Risaralda'),
    new Escuela(6, 'Escuela Seis', 'Centro', 'Dosquebradas', 'Risaralda')
  ];

  /*escuelasDatos = [
    {
      id: 1,
      nombre: 'Escuela Uno',
      centro: 'Centro Uno',
      municipio: 'Municipio Uno',
      departamento: 'Departamento Uno',
      categoria: '1'
    },
    {
      id: 2,
      nombre: 'Escuela Dos',
      centro: 'Centro Dos',
      municipio: 'Municipio Dos',
      departamento: 'Departamento Dos',
      categoria: '2'
    },
    {
      id: 3,
      nombre: 'Escuela Tres',
      centro: 'Centro Tres',
      municipio: 'Municipio Tres',
      departamento: 'Departamento Tres',
      categoria: '3'
    },
    {
      id: 2,
      nombre: 'Escuela Cuatro',
      centro: 'Centro Cuatro',
      municipio: 'Municipio Cuatro',
      departamento: 'Departamento Cuatro',
      categoria: '4'
    }
  ];*/

  getData(): Promise<Escuela[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.escuelasDatos);
      }, 2000);
    });
  }
}
