import { Carro } from './../models/carro';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private carros: Carro[];

  constructor(private _httpCliente: HttpClient) {

    this._httpCliente.get<Carro[]>("http://localhost:8080/api/carro/listaTodos").subscribe((carros) => {

      this.carros = carros;

    });
  }

}