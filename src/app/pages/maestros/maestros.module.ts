import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { routing }       from './maestros.routing';
import { DropdownModule, ModalModule } from 'ng2-bootstrap';
import { Maestros } from './maestros.component';
import { Escuelas } from './components/escuelas/escuelas.component';
import { EscuelasService } from './components/escuelas/escuelas.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    ModalModule.forRoot(),
    routing,
    Ng2SmartTableModule,
  ],
  declarations: [
    Maestros,
    Escuelas,
  ],
  providers: [
    EscuelasService,
  ]
})
export class MaestrosModule {
}
