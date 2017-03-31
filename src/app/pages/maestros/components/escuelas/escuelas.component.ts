import { Component } from '@angular/core';

import { EscuelasService } from './escuelas.service';
import { LocalDataSource } from 'ng2-smart-table';

import 'style-loader!./escuelas.scss';

@Component({
  selector: 'escuelas',
  templateUrl: './escuelas.html',
})
export class Escuelas {

  query: string = '';

  settings = {
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number'
      },
      firstName: {
        title: 'Nombre',
        type: 'string'
      },
      lastName: {
        title: 'Centro',
        type: 'string'
      },
      username: {
        title: 'Municipio',
        type: 'string'
      },
      email: {
        title: 'Departamento',
        type: 'string'
      },
      age: {
        title: 'Categoria',
        type: 'number'
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(protected service: EscuelasService) {
    this.service.getData().then((data) => {
      this.source.load(data);
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Desea eliminar la fila?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
