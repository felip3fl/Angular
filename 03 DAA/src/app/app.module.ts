import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';
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
import { AuthGuard } from './services/app.guard';
import { CadastroGuard } from './services/cadastro.guard';
import { FilmesComponent } from './demos/pipes/filmes/filmes.component';
import { HttpClientModule } from '@angular/common/http';
import { FileSizePipe } from './demos/pipes/filmes/filesize.pipe';
import { ImageFormaterPipe } from './demos/pipes/filmes/image.pipe';
import { BarModule } from './demos/bar-di-zones/bar.module';
import { BarServices } from './demos/bar-di-zones/bar.service';
import { TodoModule } from './demos/todo-list/todo.module';
import { ContadorComponent } from './demos/contador/contator.component';

//Esse modo de colocar a depedencia é mais organizada
export const BAR_PROVIDERS: Provider[] = [
  BarServices
];

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    CadastroComponent,
    FilmesComponent,
    FileSizePipe,
    ImageFormaterPipe,
    ContadorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgBrazil,
    CustomFormsModule,
    TextMask.TextMaskModule,
    NavegacaoModule,
    HttpClientModule,
    AppRoutingModule,
    BarModule.forRoot({
      unidadeId: 1000,
      unidadeToken: 'eca938c99a0e9ff91029dc'
    }),
    TodoModule
  ],
  providers: [
    // BAR_PROVIDERS,
    AuthGuard,
    CadastroGuard,
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
