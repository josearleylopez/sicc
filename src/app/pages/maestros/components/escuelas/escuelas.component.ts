import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';

import { EscuelasService } from './escuelas.service';
import { LocalDataSource } from 'ng2-smart-table';

import 'style-loader!./escuelas.scss';

@Component({
  selector: 'escuelas',
  templateUrl: './escuelas.html',
})
export class Escuelas {

  @ViewChild('childModal') childModal: ModalDirective;

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
    mode:'external',
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
        editor: {
          type: 'list',
          config: {
            list: [
              { value: 'Risaralda', title: 'Risaralda' },
              { value: 'Tolima', title: 'Tolima' },
              { value: 'Caqueta', title: 'Caqueta' },
            ],
          },
        },
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

  showChildModal(): void {
    this.childModal.show();
  }

  hideChildModal(): void {
    this.childModal.hide();
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Desea eliminar la fila?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onCreate(event): void {
    this.childModal.show();
  }

  onEdit(event): void {
    if (window.confirm('Editar?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onDelete(event): void {
    if (window.confirm('Borrar?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
