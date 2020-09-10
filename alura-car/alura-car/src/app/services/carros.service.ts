import { Carro } from './../models/carro';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrosService {

  private carros: Carro[];

  constructor(private _httpCliente: HttpClient, private _loadingCtrl: LoadingController, private _alertCtrl: AlertController) {

  }

  listarCarros(): Observable<Carro[]> {

    return this._httpCliente.get<Carro[]>("http://localhost:8080/api/carro/listaTodos");

  }

}