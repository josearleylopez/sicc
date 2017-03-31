import { Routes, RouterModule }  from '@angular/router';

import { Maestros } from './maestros.component';

import { Escuelas } from './components/escuelas/escuelas.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Maestros,
    children: [
      { path: 'escuelas', component: Escuelas }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
