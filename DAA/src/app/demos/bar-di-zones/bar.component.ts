import { HttpClient } from '@angular/common/http';
import { Component, Inject, Injector, OnInit } from '@angular/core';
import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from './bar.config';
import { BarFactory, BarServices, BarServicesMock, BebidaService } from './bar.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  providers: [
    // {provide: BarServices, useClass: BarServices},
    {
      provide: BarServices, useFactory: BarFactory,
      deps: [
        HttpClient, Injector
      ]
    },
    { provide: BebidaService, useExisting: BarServices }
  ]
})

export class BarComponent implements OnInit {

  barBebida1: string;
  barBebida2: string;  
  ConfigManual: BarUnidadeConfig;
  Config: BarUnidadeConfig;
  dadosUnidade: string;


  constructor(
      private barServices: BarServices,
      @Inject('ConfigManualUnidade') private ApiConfigManual: BarUnidadeConfig,
      @Inject(BAR_UNIDADE_CONFIG) private ApiConfig: BarUnidadeConfig,

      private bebidaService : BebidaService,
  ){}

  ngOnInit():void {
    this.barBebida1 = this.barServices.obterBebidas();
    this.barBebida2 = this.bebidaService.obterBebidas();
    this.ConfigManual = this.ApiConfigManual;
    this.Config = this.ApiConfig;

    this.dadosUnidade = this.barServices.obterUnidade();
  }

}
