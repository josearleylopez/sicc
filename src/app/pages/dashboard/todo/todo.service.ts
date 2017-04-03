import {Injectable} from '@angular/core';

@Injectable()
export class TodoService {

  private _todoList = [
    { text: 'Programacion Caqueta' },
    { text: 'Actualizar escuelas' },
    { text: 'Migrar base de datos' },
    { text: 'Otras tareas.' },
  ];

  getTodoList() {
    return this._todoList;
  }
}
