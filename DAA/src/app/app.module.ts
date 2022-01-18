import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';

import { SobreComponent } from './institucional/sobre/sobre.component';
import { AppRoutingModule, rootRouterConfig } from './app.routes';
import { CadastroComponent } from './demos/reactiveforms/cadastro/cadastro.component';

import { NgBrazil } from 'ng-brazil' ;
import { TextMask } from 'ng-brazil';
import { CustomFormsModule } from 'ng2-validation'
import { NavegacaoModule } from './navegacao/navegacao.module';
import { ProdutoDashboardComponent } from './demos/arquitetura-componentes/produto-dashboard/produto-dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    CadastroComponent,
    ProdutoDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgBrazil,
    CustomFormsModule,
    TextMask.TextMaskModule,
    NavegacaoModule,
    AppRoutingModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
