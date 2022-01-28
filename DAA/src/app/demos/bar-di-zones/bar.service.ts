import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BarServices {

  constructor(
    private http: HttpClient,
  ) { }


  obterBebidas(): string {
    return 'Bebidasss';
  }

  obterPorcoes(): string {
    return 'Porções';
  }

  obterRefeicoes(): string {
    return 'Refeições';
  }
}
