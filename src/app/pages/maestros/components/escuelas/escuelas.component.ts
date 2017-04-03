import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { FormsModule } from '@angular/forms';

import { EscuelasService } from './escuelas.service';
import { LocalDataSource } from 'ng2-smart-table';
import { Escuela } from './escuela';

import 'style-loader!./escuelas.scss';

@Component({
  moduleId: 'module.id',
  selector: 'escuelas',
  templateUrl: './escuelas.html',
})
export class EscuelasComponent implements OnInit {

  @Input() escuelas: Array<Escuela> = [];

  escuela:Escuela = new Escuela(0,'','','','','');

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
    mode: 'external',
    columns: {
      id: {
        title: 'ID',
        type: 'number'
      },
      nombre: {
        title: 'Nombre',
        type: 'string'
      },
      centro: {
        title: 'Centro',
        type: 'string'
      },
      municipio: {
        title: 'Municipio',
        type: 'string'
      },
      departamento: {
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
      categoria: {
        title: 'Categoria',
        type: 'number'
      }
    }
  };

  //para trabajar con el framework ng2
  source: LocalDataSource = new LocalDataSource();

  constructor(protected service: EscuelasService) { //Se instancia el servicio en este caso lista de escuelas    
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
    this.escuela = event.data;
    this.childModal.show();
  }

  onDelete(event): void {
    this.source.remove(event.data);
  }

  onGuardar(model: Escuela) {
    if (model.id === 0){
      model.id = this.source.count()+1;  
      this.source.prepend(model);
    }
    else{
      console.log(model);
      this.source.update(model,model);
      //this.source.find(model);
    }
    //let v = Math.max.apply(Math, this.escuelas.map(function (o) { return o.id; }));
    //model.id = this.source.count()+1;
    //model.id = ++v;
    //this.escuelas.push(model);
    //this.source.append(model);
    //this.source.prepend(model);
    this.childModal.hide();

  }

  ngOnInit() {
    this.service.getData().then((data) => {
      this.source.load(data);
      //this.escuelas = data;
    });

  }

}
