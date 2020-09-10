import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarroSelecionadoPage } from './carro-selecionado.page';

const routes: Routes = [
  {
    path: '',
    component: CarroSelecionadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarroSelecionadoPageRoutingModule {}
