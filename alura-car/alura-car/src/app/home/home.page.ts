import { CarrosService } from './../services/carros.service';
import { LoadingController, AlertController, IonButtons, NavController } from '@ionic/angular';
import { Carro } from './../models/carro';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { title } from 'process';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss', '../errors/home-errors.css'],
})
export class HomePage implements OnInit {

  private carros: Carro[];

  constructor(private _httpCliente: HttpClient, private _loadingCtrl: LoadingController, private _alertCtrl: AlertController, private _carroService: CarrosService) {

  }

  ngOnInit() {

    this._carroService.listarCarros().subscribe((carros) => {

      this.carros = carros;

      this.carregarListaCarros();

    }, (err: HttpErrorResponse) => {

      this.exibirErro(err);

    });

  }


  async carregarListaCarros() {

    let loading = await this._loadingCtrl.create({

      message: "Olá! Estamos carregando a lista de carros pra você ;)",

      cssClass: "alerta-erro"

    });

    await loading.present();

    await loading.dismiss();

  }

  async exibirErro(erro: HttpErrorResponse) {

    console.log(erro);

    this.presentAlert();

    throw new Error("Erro inesperado");

  }

  async presentAlert() {

    let alert = await this._alertCtrl.create({

      message: "Estamos com problemas ;( Estamos corrigindo.",

      buttons: [{

        text: "OK"

      }]

    });

    alert.present();

  }

  selecionarCarro(carro: Carro) {

  console.log(carro);
    
  }


}

