import { Component, Inject, OnInit } from '@angular/core';
import { BarUnidadeConfig } from './bar.config';
import { BarServices, BarServicesMock } from './bar.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  providers: [
    {provide: BarServices, useClass: BarServicesMock}  
  ]
})

export class BarComponent implements OnInit {

  barBebida1: string;
  ConfigManual: BarUnidadeConfig;

  constructor(
      private barServices: BarServices,
      @Inject('ConfigManualUnidade') private ApiConfigManual: BarUnidadeConfig
  ){}

  ngOnInit():void {
    this.barBebida1 = this.barServices.obterBebidas();
    this.ConfigManual = this.ApiConfigManual;
  }

}
