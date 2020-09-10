import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarroSelecionadoPageRoutingModule } from './carro-selecionado-routing.module';

import { CarroSelecionadoPage } from './carro-selecionado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarroSelecionadoPageRoutingModule
  ],
  declarations: [CarroSelecionadoPage]
})
export class CarroSelecionadoPageModule {}
